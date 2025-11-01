---
title: "The Story of the Kubernetes Migration & Systems Thinking"
slug: the-k8s-systems-thinking-story
published: 2025-10-31
description: >
  Systems thinking and my biggest project

---

The last few months have been busy with my graduate program, looking for a job in this interesting
job market (and in my personal life, getting married!). I am currently in a class called Engineering
Leadership that is reviewing soft skill topics that are important for highly technical engineers.
One of the larger topics is my largest area of interest: systems thinking.

Through the class work, I have had a change to reflect back over my engineering career and write
about some of the large challenges that I have overcome. I have written about some of these
challenges separately, but put together they make up the longest, most challenging, and most
rewarding project that I have yet been a part of.


### Infrastructure and Deployment

To give an overview of the rest of the stack, we had three services running in VMs (one in a
cluster), about eight other services running in Azure App Services that were scaled out to 10+
replicas to handle load, a relational database server that was exposed to internet traffic (relying
on its firewall for security), along with a handful of cloud-native technologies for miscellaneous
queueing, log storage, and application notifications.

We would start the deployment process by using `sftp` to upload files from our local laptops into
the App Service staging slots. Once in the maintenance window, we would manually copy and paste the
needed database changes into the database and run the queries. We would hen manually swap the slots
on each App Service one at a time. 

If the VM services had changed, we would `scp` a zip of the compiled projects to each of the 13 VMs,
taking the VM offline, unzipping the new project, and rebooting. Because of the heavy manual
processes, we only did this when the service codebase changed (which we never knew because the no
one was accurately tracking breaking changes to that service). 

Database changes were not backwards compatible, so there was a high chance that the old code running
in the services would start crashing after the new database changes. We would have to rush the
serial deployment of the services as fast as possible, but were constrained with deployment policy
from the CTO. These database changes could not be rolled back. So if something was not correct, we
had to all rush out a new forward fix (through a very long manual testing workflow).

All-in-all, the process was hell. Deployments were extremely painful with high risk of service
degradation. It took a lot of work to get through a single deployment. We created automated tooling
where we could to make our lives easier. But these were low leverage points in the system. We were
fighting an uphill battle trying to create a paradigm shift--Meadows's 2nd class of high leverage
points in a system (1999)--to a new a better world.


### Pre-Inception

A few months after I started at Bitwarden, the CTO requested that I scale a service that had become
very unreliable. The service was behind an aggressive cache with no observability, so no one would
know when it started failing. The service was a stateless service (outside of the cache) and was
deployed on a single VM. The request was to create a cluster of a few VMs to scale the service so
that it would not crash under load. I thought it would be more cost-effective to create scalable and
reliable self-healing infrastructure for the service than to create scale the current infrastructure
with IaC and automated configuration. The previous job I had took a lot of effort to develop and
maintain the IaC and VM configurations. Kubernetes seems like a more manageable approach for a team
of one.

I got a production kubernetes cluster set up with the service deployed. We were running into OOM
issues that we could not track down. .NET is has a garbage collector and should automatically free
up the memory after usage. Running the service locally with a memory analyzer showed that .NET was
correctly freeing up the memory. But for some reason, in production it would run out of memory and
then crash. Like any infrastructure engineer worth their salt, we decided to automate the problem
away and kill/restart the service once the OOM was detected. Kubernetes made this easy. The pod
would crash with OOM, another copy would be created to take its place, and then we would run
[descheduler](https://github.com/kubernetes-sigs/descheduler) to clean up all the old dead pods.
This system hummed along with no further problems for the next three years through my departure.

When I worked on the first part of the kubernetes migration, I had yet been introduced to the idea
of systems thinking. However, I intuitively knew that it would take more effort that we had to
automate and maintain clusters of VMs to run these services natively when they were already in
containers. I inadvertently stumbled into Donella Meadows's 4th class of high leverage points in the
system: the ability to change the system (1999). In this case, it was the technical system from
infrastructure through to deployment.


### Inception

The service degradations were becoming more painful for the company. We did as much
low-cost/low-leverage optimizations of the current processes as we could. But we were not seeing
significant benefits. We still had these problems:

1. Database changes were manual and prone to human error
2. The production database could be reached from any IP owned by Microsoft
3. Database changes that were not backwards compatible
   - Services could be degraded during active deployment time
   - Services could not be rolled back if there was a problem
4. Application deployment to App Services took an hour and had 20+ manual steps that were prone to
   human error
5. Application deployment to VMs took an additional hour and had 20+ steps that were prone to human
   error
6. Application infrastructure had to manually be scaled
7. Low-fidelity control over service health in App Services
8. Complicated cloud architecture and deployment processes made creating/maintaining duplicate
   infrastructure a linear increase of effort (required for the production deployment for the EU)

We needed a paradigm shift.

It was my second week as a new manager and I had an idea that was that needed paradigm shift. The
"problem"? GitOps was a relatively new idea at the time. The idea was that we could migrate all of
the services into a Helm Chart and use a GitHub Actions workflow to update values in a repo which
ArgoCD was watching to pull in the new version of the Helm Chart. The Helm Chart would also manage
the automation that we needed during each deployment, like running the database migrations previous
to rolling out the new version of the code.

Using Helm, ArgoCD, and GitHub Actions in this way would solve every issue above except for number
3. Backwards compatible database migrations were extremely important, but that problem was being
worked on by the staff software engineers (the solution being 
[EDD](/posts/scalable-dev-edd-always-on)). Assuming we had a database migrator tool to implement EDD
(which was a big assumption) and it was running from the Helm Chart, we would remove the human error
in database changes and the IP addresses where all database changes would be constrained to the
kubernetes cluster, allowing us to move the database into an internal-only subnet (ie, not
accessible from the public internet). Migrating the services from the VMs to the Helm Chart would
remove the 20+ steps for deploying to the VMs. The Github Action workflow that changed the values of
the service version in the Helm Chart reduced the 20+ steps to deploy the App Services to a single
button. Using kubernetes also homogenized the required application infrastructure which helped
simplify the management and deployment of the cloud infrastructure (OS and application patches were
not required across a cluster of VMs; just the updates to kubernetes version in those clusters).
This simplified both the infrastructure deployments and application deployments when we duplicated
everything in production into the EU for data/compute residency policies.

No matter how great this idea was, I could not do it alone. I needed to get my team of engineers
onboard. But it was hard to clearly communicate the idea in a convincing way. We had a lot of
significant hypothetical projects that needed to be successfully completed before we would be able
to realize this vision. We needed to build a custom database migrator which was in direct violation
to a directive from the CTO. We needed support from the software engineering team to fix some of the
services that were not designed to run in parallel (the old and new versions of the services
could not run together) and their time was rarely allowed to be used in such a way. In short, we had
the support of the company, but only if we could do it by ourselves and not use development
capacity. To complicate this situation a bit further, I did not have a lot of 
[leadership capital](/posts/e2m-marbles) at my disposal. My team was made up of two engineers that
had just been my peers and we were very early in our manager/direct report relationship.


### Challenges

- Pushback from engineers on my team
- Navigating direct leadership change
- Negotiating with the CEO
- Securing development capacity

The biggest challenges that we faced were not the technical ones in front of us. They were the
people system challenges. The first was vetting my idea with the team or finding a better solution
so that we were all aligned. Neither happened right away. In fact, it actually took approaching the
more simple problems one at a time (like solving for the automation of database migrations in a way
that took a step in the right direction) to slowly move towards the vision before other could really
see how it would all come together and solve all of those problems with a single solution. It
almost seemed too simple.

As the software architects solved the database migration compatibility issue, we built the database
migrator out of necessity. The EDD database migration deployment process got too complicated to
maintain accuracy while doing it manually, so we created a tool around the process to remove the
possibility of human error. This in turn allowed us to implicitly track the version of the database.

Once the team was aligned, we ran into two leadership challenges. There was a change in role of VP
of Engineering, the person who I reported to. We had to get buy-in from the new VP to approve
continuing on the project. While they were still new, we were also questioned by the CEO in a public
forum on the strategy being employed to build the new environment. Our strategy was to scale our
processes from supporting 2 environments to supporting 10. The CEO questioned why we needed 10
environments instead of just the 2 production environments (US and EU). What was lost in the layers
of leadership and transition was that we actually needed 5 environments. Building out the processes
to support 5-10 would be the same. What is "good enough" for managing 2 processes does not scale
well to supporting 5. We did not have the luxury of scaling our team to support the new environments
under the old process. We needed a paradigm shift.

Once through this challenge, we ran into the challenge of getting development capacity to assist
with redesigning some of the application services that were not able to run in parallel. Development
capacity can be tied directly to new revenue where operations and maintenance (O&M) is difficult to
tie to revenue. I have often explained it as we make sure that the value continues to be be
available to users while development builds new value. In revenue terms, we make sure that revenue
does not decrease from user churn due to service degradation or outages. We paired down the list of
services and the reasons why they did not scale so that the development capacity we were asking for
was as small as possible. With this approach we were able to secure the minimum capacity that we
needed.

It was weeks after this that our first iteration of a full test environment was deployed and
working. It took another 5 iterations to get to the final version that was deployed into production
in the EU and then the US quickly following. This was almost derailed with another engineering
leadership addition, but we were able to talk through it and see the initial plan through.


### Results

Working through these challenges have been the highlight of my career so far. I am extremely proud
of the team for the technical implementations and achievements we made together. And I am proud of
the way that I was able to work through the people system problems behind the scenes to deliver the
paradigm shift. We were able to find a high leverage point in the infrastructure/deployment system
and exploit it to better the overall system of the organization.

**Direct impacts:**
- Significant decrease in deployment time (15 mins per environment)
- Significant decrease in human interaction per deployment
- Significant increase in system security
- Significant increase in system reliability (auto-scaling services to meet load, self-healing
  services)
- Significant increase in system simplicity (could easily scale the number of environments the team
  could support and maintain)
- Increase in fidelity of system control
- Removed the reliance on VMs

**Indirect impacts:**
- Enabled application deployment rollbacks (which significantly lowered my blood pressure per
  deployment)
- Enabled full Continuous Delivery to a developer environment, automatically tracking the trunk
  branch, which significantly lowered the feedback loops for developers.
- Less stress around deployments throughout all of engineering

Three weeks after we delivered the final system, something went really wrong with a new version of
the application. The call was to "just roll it back". This was something that we had not been able
to do for the three and a half years that I had been there. But with a push of a button we reverted
the changes back to a working version within 10 minutes.

It took 3 years from the inception of the idea to work with the team to refine the solution and
deliver the final result. While it was not quite a "small change", it led to a significant impact in
multiple areas. We found a high leverage point and were able to take advantage of it.

---

## Resources

1. Meadows, D. H. (1999). Leverage Points: Places to Intervene in a System. The Academy for Systems Change. https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/

