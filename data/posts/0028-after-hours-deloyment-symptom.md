!! title: After-hours Deployment is a Symptom of a Systemic Issue
!! slug: after-hours-deployment-symptom
!! published: 2024-02-12
!! description: Discussing how after-hours deployments is a symptom of a larger systemic problem.

---

I had an early morning epiphany a few days ago: as I have been the intervenor in my team (see [the post on this "trap"
or System Dynamics Archetype](./posts/e2m-st-addiction)), my team has the intervenor for the company when it comes to
the issues we are having with the resiliency of the system during a deployment.

A lot has changed in our underlying approach to hosting over the three years that I've been on the team. When I first
joined, the backend was being built locally and the built project files were uploaded into the compute layer in the
cloud via SFTP. It was an all day process to build and get ready. Once the files had been uploaded, we were constrained
to only make the final update during low traffic hours (after business hours). Some of the improvements since have
allowed us to shift some types of deployments during the day.

About two years ago, my team noticed that the resiliency issues were highly correlated to changes to the underlying
database schema. During a deployment that contained both schema changes that were not backwards compatible with the
older version of the code, we would experience service degradation. Since almost all releases/deployments at that time
included a database change, most deployments would cause service degradation or a full outage. The default solution?
Post a maintenance window and make the changes after hours (ie. use the DevOps team to deploy after hours as the
solution to the resiliency issue instead of fixing the underlying problem). But for any deployment that did not require
a database change, those could be done during business hours.

About a year later, one of the Staff Engineers proposed and pushed for the use of Evolutionary Database Design (Fowler,
2016) to solve this particular underlying issue of backwards compatible database changes. Implementing EDD was a really
large push and took months of effort to get everyone onboard and figure out all of the nuances of implementing the
theoretical into the practical orchestration process (Bitwarden, 2023). I have [previously written about the technical
implementation](./posts/edd-for-ha) for a tool to help the orchestration. It has been amazing to see the decrease in
backwards compatibility issues over the last 18 months.

Unfortunately, in the time that it took to get there, more resiliency issues have been experienced that were not
correlated with the database schema changing. I can suppose about the root causes to the issues for eternity (and I
have started), but at the end of the day, the solution is still the same: deploy after hours so that we don't run into
the effects of the resiliency issues for the majority of our end users.

Since this after-hours deployment strategy has seemed effective to decreasing the amount of service degradation
experienced, it has started to drift into other stateless applications. To decrease cloud egress costs, we've started
using a cache on the edge to serve our web app client. The client code is not generationally aware (aware of previous or
future versions) so does not know how to handle updating itself with the new version when available or alerting the user
to reload. Instead, the experience has been missing files resulting in 404s and the unavailability of the web app for up
to 15 minutes every deploy. The current solution? Deploy after hours to minimize user impact.

In addition to the culture issues of defending corners, skills, and tools that Skelton and Pais present for separate and
siloed DevOps Team (Skelton & Pais, 2016), siloed DevOps teams present the "Shift the Burden" Systems Dynamics
archetype (Kim, 1992). There is a high risk of them becoming the solution to the underlying problem and becoming a silo themselves,
as Skelton and Pais discuss. After hours deploys are indications that the DevOps/Release team is the solution that is
hiding a larger systemic issue on the overall technology organization processes, how software is being designed,
implemented, and delivered.

Now how to stop being the intervenor? How do we make strides towards improving the overall technological organization
processes? I am hoping that the tools in Systems Dynamics and Systems Thinking can provide some insight on how to
identify the high leverage points in the system to achieve systemic and lasting change.

---

# Resources

1. [Fowler - Evolutionary Database Design](https://martinfowler.com/articles/evodb.html)
2. [Bitwarden - Evolutionary Database Design](https://contributing.bitwarden.com/contributing/database-migrations/edd)
3. [Skelton & Pais - What Team Structure is right for DevOps to flourish?](https://web.devopstopologies.com)
4. [Kim - Systems Archetypes I: Diagnosing Systemic Issues and Designing Interventions](https://thesystemsthinker.com/systems-archetypes-i-diagnosing-systemic-issues-and-designing-interventions/)
