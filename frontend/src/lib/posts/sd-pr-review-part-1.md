---
title: PR Review Delays - Problem Description
slug: sd-pr-review-part-1
published: 2024-02-19
description: >
  Part two of an exercise of System Dynamics to solve a problem with delays in our PR review
  process.

---

Kanban boards are tools to help vizualize work, limit work-in-progress, and maximize...flow (Rehkopf, ?). Ideally, the
columns of the board line up with the states that work can be in so that it is quick to digest the state of work across
the team at any one time. Kanban boards are one of the main tools that exposes where work gets stuck and decreases the
overall flow of work (DeGrandis, 2022).

I can't remember where I got this impression, but for the last three years I have been working under the impression that
the flow of work should only be left to right with no cycles or rework in the system (possible sources found below in
*Resources*: 2, 3, 4). The many different kanban boards that we have had have been assuming that work only flows left to
right. This might be the correct assumption and some of our other team processes are not set up correctly to support the
strict left-to-right flow. Our current board looks like this:

![Team Kanban Board](/posts/0029/kanban-board-v0_1.png)

The kanban board does its job of visualizing the work pretty well. However, expecting it to solve the problems for the
team has been a mistake. It isn't the board itself that solves the WIP and flow problems, it is the team policies and
processes that are built around the board that has the potential to solve the problems (and sometimes make them
worse...). 

With the above board, we have two issues that we have not yet been able to solve over the last couple of years. The
kanban board has allowed us to see that work stacks up in both the `In Review` column and the `Blocked` column. Most of
the work that stacks up in `Blocked` is work that is deprioritized by the stakeholders after the task has been started.
This is of course a concern, but requires a larger reaching process across the organization and internal to the team to
fix. My more immediate concern is the work that gets delayed in the `In Review` column.

Our team is in the unique position of being globally distributed which inherently increases the risk of delays in review
and response to the reviews. It is not expected that everyone be online at the same time, so the feedback cycles can be
stretched over days. Over the last few years, we have run multiple experiments to try to decrease the delay using
intuitive solutions, but those have done little to solve the issue. The "solution" has been to centralize the PRs to
either the manager or team lead. This might have the potential to increase velocity in the short-term, but comes with
significant velocity risks long-term.

Using a single reviewer is problematic. While it has the potential to utilize the technical experience that led to
the manager or team lead being promoted into their positions, a centralized review process limits the growth potential
of the team by creating a bottleneck, limiting diverse discussion across the team on the problems being solved, and
limits the growth of the critical skill of giving effective feedback. For the people manager (myself), there is the
high risk of technical atrophy as time progresses and the focus is on growing management skills and not technical
skills. In addition, this "solution" is only as successful in the availability of the centralized reviewer. As soon as
they take time off, all velocity drops close to zero. 

From a Systems Dynamics perspective, this is a the "Shifting the Burden" archetype (Kim, 1992). Instead of solving the
underlying problem with work getting delayed in `In Review`, it hides the problem by "fixing" it for the short-term, but
with a solution that does not scale.

With all of the failed experiments and the solution-not-solution that is currently being used, we need to start finding
a real solution to the problem. The question is, what it is the underlying problem? We could poke and prod the system,
use our intuition to continue experimenting with what we think the problem is, and spend an unknown amount of time
trying to land on the collection of processes and policies that solve the problem for now until something in the system
changes and we have to start experimenting again. We've been doing that for the last couple of years with little success
and have landed in the archetype.

Instead, let's use Systems Dynamics to model the problem, collect data to verify the model and run policy experiments on
the model in compressed time instead of in realtime in the actual system.

![PR Review Flow v0.1](/posts/0029/flow-diagram-v0_1.png)

The above diagram models the team PR process. Work is ingested from stakeholders and gets put into the `To Do`
state. When there is capacity, work is picked up and moves to the `In Progress` state. Once the work is ready for
review, a PR is created. When capacity is free or is used to review the PR (the same capacity that would be used to
further other team work), there are two things that could happen. The first case is that the work is understood by the
reviewer and solves the problem with acceptable risk creating another one. If so, the work is approved and accepted to
then be merged at the author's convenience. In the second case, the work is not yet ready to merge. Either there are
questions that are asked for the reviewer to better understand what is happening in the PR or there are changes that are
needed before the work can be accepted. Each of these will require at least one cycle through the review loop.

The next part in the series will be walking through the above diagram with labeled delays in the system to prep for data
collection on where the process is actually slowing down versus our intuition on where we _think_ it is slowing down. We
might also take a look at different models that form a different perspective as well.


---

## Resources

1. [Rehkopf - What is a Kanban Board?](https://www.atlassian.com/agile/kanban/boards)
2. [DeGrandis - Making Work Visible (2nd Edition)](https://itrevolution.com/product/making-work-visible/)
3. [Kim et al. - The DevOps Handbook (2nd Edition)](https://itrevolution.com/product/the-devops-handbook-second-edition/)
4. [Kim et al. - The Phoenix Project](https://itrevolution.com/product/the-phoenix-project/)
5. [Forsgren et al. - Accelerate](https://itrevolution.com/product/accelerate/)
6. [Kim - Systems Archetypes I: Diagnosing Systemic Issues and Designing Interventions](https://thesystemsthinker.com/systems-archetypes-i-diagnosing-systemic-issues-and-designing-interventions/)
