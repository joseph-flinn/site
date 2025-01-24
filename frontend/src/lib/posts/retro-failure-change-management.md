---
title: [Manager Retro] Failure - Change Management
slug: retro-failure-change-management
published: 2024-07-16
description: >
  Discussion on the challenges and pitfalls around change management and failures that came from
  them.

---

The next failure that we will examine is my failure around change management. I am curious what the
correlation is between a globally distributed asynchronous team and the level of challenge there is
in change management. From my single experience of working in a global organization, change
management is extremely difficult; or rather, collaboration around effective change management is
difficult.

Change requires work to enact, and this work regularly requires capacity from all teams that the
change affects. Outside of the most extreme cases, there will be differing levels perspective to how
important the underlying problem is across different parts of the organization. If the senior or
executive leadership team does not fully understand the extent of what needs to change and why,
there is a high possibility that the change is either hard-blocked with a directive or soft-blocked
with an acknowledgement of the problem but no capacity made available to fix the problem.

The first area of where I failed in change management areas was to communicate effectively what the
long-term sustainability problems were and to work to drive alignment around those problems. As an
example, the existence of the DevOps Engineering team at the organization was a anti-pattern to
effective technical organization structure (Skelton 2019). One of the critical issues that an
organization runs into with a DevOps Engineering team is that the organization sees all build and
release work (CI/CD) as being the responsibility of the DevOps team. While an organization is small,
it might make sense to have a process automation expert on the team (not necessarily a "DevOps
Engineer"). However, keeping this centralized over time as the organization grows creates a
bottleneck in the value stream and risks recreating the organizational pattern that DevOps
methodologies were created to solve: Development throwing code over the wall to an Operations team.

I took the role of DevOps Engineer knowing that it was an anti-pattern, but was looking to influence
change to enable a modern approach to software engineering in a small company. I spent my entire
tenure working towards a streamlined CI/CD pattern for the organization; to enable the value stream
temas to deliver value to the end user in a faster and more reliable way. Three years in, I found a
phrase in Development's documentation saying something similar to "We need to do _X_ because the
DevOps team wants to do CI/CD". Reading this made me realize that CI/CD was seen by the broader
organziation that would solve DevOps team problems rather than support the entire organization. I
had failed to effectively communicate and get both buy-in and support (in terms of capacity) to
migrate to a modern value-delivery system.

The second area in which I failed in change management was in the execution of the change. When team
process are changed, especially in an asynchronous environment, extensive communication is required.
Someone "misses the memo" every time. In an asynchronous environment, there is an extremely high
number of communication channels. For example, there are synchronous meetings, documentation,
comments in task management, email, and the numerous communication channels in instant messaging
(Slack channels, direct messages, group messages, etc). Unless clearly defined by the organization,
each individual may expect a policy or process change to be communicated in a specific channel over 
another, and in doing so, may miss the announcement.

While navigating all of the communication channels was challenging, I cannot think of a change that
failed to take hold because of using an incorrect channel. Failures showed themselves in the
execution phase after the change had been communicated. I learned that expecting a change to take
hold without having a strategy to support or enforce the change was foolish. Without this strategy
in place, I often fell into the temptation to take the easy way and carry them through the new
process (often executing it myself) hoping that they would learn the process through osmosis. This
rarely, if ever, happened.

The failures in enacting intra-team and inter-team changes really came down to not having an
effective change management strategy that took into account where the risks were for where it could
go wrong and have a mitigation strategy prepared. Most importantly, the strategy that was missing
was the mitigation of the constant risk that someone would use the original process instead of the
new one.


---


## Gratitude

I am grateful for becoming aware of an entire area of study called Change Management. I learned too
late into this first role as a people manager that this field of study exists. I now have a new area
to study and learn from the failures of the many leaders before me. 

I am also grateful for the three main lessons that I learned through my failures in change
management: 1) change is hard, 2) communication through human connection is extremely important
while working towards organization alignment for change, and 3) the easiest way to prevent the
original process from being used is to provide a streamlined migration with low impact to the users
and aggressively deprecate the original one. A change or migration in limbo has high risk for being
messy.


---

## Resources

1. Skelton, Matthew, and Manuel Pais. Team Topologies: Organizing Business and Technology Teams for Fast Flow. First edition, IT Revolution, 2019.
