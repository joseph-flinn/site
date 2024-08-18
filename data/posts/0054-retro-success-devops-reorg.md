!! title: [Manager Retro] Success - DevOps Reorganization
!! slug: retro-success-devops-reorg
!! published: 2024-08-19
!! description: Last post in the Manager Retro series discussing the last success prior to departure.

---

The last post in the Manager Retro series is going to focus on the last success that I had in the
manager role before departing. This post would have been grouped together with the other posts, but
it had not yet happened when I was writing the other posts on the successes. While I value failures
over successes, we will end this series on a successful note.

I started at the organization as the only DevOps Engineer; the seventh engineer on the team. I had a
few past DevOps Engineering roles and I was excited about the opportunity to shape the DevOps
methodologies and practices and the possible future career advancement possibilities. Before I
accepted and started in the role, I knew that being a DevOps Engineer on a DevOps team has a high
risk of being an anti-pattern for technical organization structure (Skelton, _"DevOps Topologies"_).
However, I had yet to learn about 
[influencing critical decisions](./posts/retro-failure-influence-critical-decisions) or the dangers
of [value oases](./posts/retro-failure-value-oasis). I took the this as a challenge to overcome
(which is not necessarily the wrong decision, but a lot harder to do that I had originally thought). 

Near the beginning of its inception, "DevOps" has been a very misunderstood term (_"DevOps: Why It
Is Misunderstood"_). This topic has been discussed at length (and is still being discussed) by
people more qualified than I. After accepting the job, imposter syndrome set in which led me to buy
and read _Accelerate: The Science behind DevOps_ (Forsgren et al.). After settling into the job for
about 9 months, my campaign to deprecate the DevOps team started mid 2021. 

When DevOps and cloud computing first interacted, the cloud landscape was relatively simple. It
essentially consisted of virtual machines, virtual network, blob storage and identity management.
However, over the next decade, it quickly diversified to become a suite of hosted products to
include hosted databases, functions-as-a-service, hosted AI, hosted Kubernetes, etc. The skills
required to understand, create, and maintain all of these services grew exponentially. 

_Team Topologies_ (Skelton and Pais) was published in 2019 and had been out for a few years. Skelton
and Pais examined the anti-patterns of organizations adopting DevOps methodologies. Two of the most
prevalent anti-patterns are the "DevOps Team Silo" (Anti-Type B) and the "Dev don't need Devops"
(Anti-Type C) (Skelton, _"DevOps Topologies"_). With the ever-expanding complexities of the cloud,
Platform Engineering was proposed as the solution to the arguably failed attempts to adopt DevOps
via tactics rather than culture. 

Platform Engineering is what I was working towards as the future of the DevOps team. I pitched the
idea to my manager and there seemed it seemed like a viable future. But in a weird turn of events,
the name "Platform" was given to a development team after a reorg six months later which had a
completely independent mission from the practices of Platform Engineering. I found myself back in a
situation where a term was used differently than intended.

In 2022, our team started on developing ephemeral environments which I would consider our first
Platform Engineering initiative (even though we did not have that name). The goal was to enable
more effective testing for the QA team and better repeatability for development testing for the Dev
team with the complex orchestration requirements for deploying and running our highly coupled
distributed monolith; what Skelton and Pais refer to as a joined-at-the-database monolith (Skelton
and Pais, 113). However, leadership changes midway through the year paused this initiative until
midway through 2024. 

In early 2023, I designed the growth plan for the DevOps team to keep abreast with the rest of the
growing Engineering department. However, that growth plan did not take affect with reprioritization
of our work and budget constraints. The DevOps and CloudOps teams delivered a huge success in
decreasing deployment complexity and delivering a second production system without linearly scaling
the deployment work required to maintain two production systems 
([this post](retro-success-deployment-complexity-reduction) has more information on that success).

In early 2024, a Director of Cloud Engineering role was created and the candidate that was hired
into the role had extensive experience overseeing teams that built platforms. Under the new
Director, the previously designed growth plan was reviewed, confirmed, and executed on. The DevOps
team was going to be deprecated!

The growth plan consisted of breaking the DevOps team--which had become a kitchen sink
team--immediately into two teams focused on different areas with plans on adding a third team to
cover one of the other major focus areas that had previously defaulted to the DevOps team. This plan
was put in place in April of 2024 and we rolled out the Build & Release Engineering (BRE) and
Developer Tools Engineering (DTE) teams with a Hosted Deployment Engineering (HDE) team in the
works. 

BRE's mission was to support the development teams by providing golden paths on how to build
and maintain pipelines, industry standards and best practices in SDLC automation (automated
versioning, branching strategy, etc), and how to deploy specific types of workloads (static sites,
containerized applications, binaries, etc). 

DTE's initial mission was to reprioritize the ephemeral environments that had been put on hold two
years prior. The focus of this team was to create a self-service platform that served these
ephemeral environments, essentially creating the first service that an Internal Development Platform
would use.

HDE's mission was to be a stream-aligned team (Skelton and Pais, 81) focused on the self-hosted
deployment models that the organization provided to end users. Historically, this area was
maintained by the DevOps team, the same team that also maintained the production systems. Both of
these focuses caused extreme tensions in prioritizing team capacity. The creation of this team was
essentially giving the much deserved attention to the self-hosted deployment models as they
constituted a significant portion of the bottom line and are one of the biggest market
differentiators for the product.

The DevOps team had successfully been deprecated in favor for teams with more focused purposes to
evaluate impact with. However, there was still that nagging issue of naming and the growing concern
of duplicating missions. I had amazing relationships with both the Engineering Manager of the
Platform development team and the Director of Engineering. Before my departure, I wanted to do what
I could to leave my teams, my department, and the organization as a whole in the best place that I
could. This meant having a crucial conversation (Grenny et al) with the Director and Engineering
Manager to make sure there were no issues with colliding missions in the future.

With the blessing of my manager, I used
[the communications skills](./posts/understanding-and-influence) that I had been learning--the hard
way--over the last few years to approach the topic the missions of the BRE/DTE and Platform
development teams and the names. Leaning into curiosity, a simple "Can you _tell me more_ about what
y'all are thinking for the future of the Platform team?" got us directly to the heart of the
problem. We quickly found that we had some past misunderstandings of where each team was headed and
how we were planning to collaborate. We all agreed that the current Platform team was not aptly
named given their purpose. And we collaboratively realized that the majority of the directions that
both teams were headed were extremely complimentary but fully independent.

While I am unsure if there will be a name change in the future, it was decided that the BRE and DTE
teams essentially fill the role of a Platform Engineering team with providing golden paths for the
rest of the engineering teams to use and to provide an internal development platform to consume them
from. The current Platform Development team would focus on building reusable patterns on top of the
internal development platform for other engineering teams to consume; things like logging libraries,
observability libraries, and the like. They would essentially act as an Enabling team and the
incubator for Complicated-Subsystem teams (Skelton and Pais, 86-91) before splitting them out into
their own team. The first dedicated Enabling team had recently been split out to focus on the Design
System for the rest of the engineers to consume.


## Gratitude

I am extremely grateful for the positive experience working through a crucial conversation. Crucial
conversations are around every corner and having a positive experience to look back on as an example
of how they can turn out is an amazing motivator to step into the next.


---

## Resources

1. Skelton. “DevOps Topologies.” DevOps Topologies, 2013, http://web.devopstopologies.com.
2. Elastisys Tech Blog. “DevOps: Why It Is Misunderstood & What It Always Should Have Been.” Elastisys, 9 Feb. 2022, https://elastisys.com/devops-why-it-is-misunderstood-what-it-should-have-been/.
3. Forsgren, Nicole, et al. Accelerate: The Science behind DevOps: Building and Scaling High Performing Technology Organizations. First edition, IT Revolution, 2018.
4. Galante, Luca. “What Is Platform Engineering?” Platform Engineering, https://platformengineering.org/blog/what-is-platform-engineering. Accessed 18 Aug. 2024.
5. Skelton, Matthew, and Manuel Pais. Team Topologies: Organizing Business and Technology Teams for Fast Flow. First edition, IT Revolution, 2019.
6. Grenny, Joseph, et al. Crucial Conversations: Tools for Talking When Stakes Are High. 3rd Edition, McGraw Hill, 2021.


