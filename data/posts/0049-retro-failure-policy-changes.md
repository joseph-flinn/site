!! title: [Manager Retro] Failure - Policy Change Management
!! slug: retro-failure-policy-changes
!! published: 2024-07-15
!! description: Discussion on the challenges and pitfalls around change management and failures that came from them.

---

The next failure that we will examine is my failure in change management. I am curious what the
correlation is between a globally distributed asynchronous team and the level of challenge in change
management. From my single experience of working in a globally distributed organization, change
management is extremely difficult. Or rather, collaboration around effective change management is
difficult.

Change requires work to enact and this work regularly requires capacity from all teams that the
change affects. Outside of the most extreme cases, there will be differing levels perspective to how
important the underlying problem is across different parts of the organization. If the senior or
executive leadership team does not fully understand the extent of what needs to change and why,
there is a high possibility that the change is either hard-blocked with a directive or soft-blocked
with an acknowledgement of the problem but no drop in output allowed to fix the problem.

The first area of where I failed in a lot of change management areas was to communicate effectively
what the longer-term sustainability problems were and to work to drive alignment around those
problems. The existence of the DevOps Engineering team at the organization was a anti-pattern to
effective technical organization structure (Skelton 2019). One of the critical issues that an
organization runs into with a DevOps Engineering team is that the organization sees all build and
release work (CI/CD) as being the responsibility of the DevOps team. While an organization is small,
it might make sense to have a process automation expert on the team (not necessarily a "DevOps
Engineer"). However, keeping this centralized over time creates a massive bottleneck in the value
stream and risks recreating the organizational pattern of Development throwing code over the wall to
an Operations team which the DevOps methodologies were created to solve.

As a DevOps Engineer (ironically I took the position knowing that this was an anti-pattern), I spent
my entire tenure working towards streamlined CI/CD for the organization; to enable faster and more
reliable value delivery to end users. Three years in, I found a phrase in Development's
documentation saying something similar to "We need to do _X_ because the DevOps team wants to do
CI/CD". Reading this made me realize that the goal of CI/CD that my team had been working towards
was seen as something that would solve problems specific to the DevOps team rather than a problem or
optimization for the entire technical organization. I had failed to effectively communicate and get
both buy-in and support (in terms of capacity) to migrate to a modern value delivery system.

The second area in which I failed in change management areas was in the execution once a decision
had been made. When team process are changed or communication channels are migrated/updated,
especially in an asynchronous environment, extensive communication is required. Someone "missing the
memo" happens every time. In an asynchronous team, there is an extremely high number of
communication channels. There are synchronous meetings, documentation, comments in task management,
email, and the numerous communication channels in instant messaging (Slack channels, direct
messages, group messages, etc). Unless clearly defined by the organization, each individual may
expect a policy or process change to happen in a specific channel rather than another. 

While navigating all of the communication channels was challenging, I cannot think of a change that
failed to take hold because of using an incorrect channel. Where the failures showed themselves were
in the execution phase after the change had been communicated. I learned that expecting a change to
take hold without having a strategy to support or enforce the change. To exacerbate the problem,
there is a knife's edge risk between holding someone's hand and leading them through the new process
and picking them up and carrying them through it expecting them to pick it up through osmosis.

The failures in enacting intra-team and inter-team changes really came down to not having an
effective change management strategy that took into account where the risks were for where it could
go wrong and have a mitigation strategy prepared. Most importantly, having a strategy to mitigate
the constant risk of someone using the original process instead of the new one.

---

## Gratitude

The first thing that I am grateful for is becoming aware of an entire area of study called Change
Management. I learned too late into this first role as a people manager that this field exists. I
now have a new area to study and learn from the failures of the many before me. 

I am also grateful for the two main lessons that I learned through my failures in change management:
1) communication through human connection is extremely important while working towards organization
alignment for change, and 2) the easiest way to prevent the original process from being used is to
provide a streamlined migration with low impact to the users and aggressively deprecate the original
one. A messy migration in limbo has high risk for being messy.

---

## Resources

1. Skelton, Matthew, and Manuel Pais. Team Topologies: Organizing Business and Technology Teams for Fast Flow. First edition, IT Revolution, 2019.
