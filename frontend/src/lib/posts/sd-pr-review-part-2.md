---
title: PR Review Delays - Flow Diagram with Delays
slug: sd-pr-review-part-2
published: 2024-02-26
description: >
  Part two of an exercise of System Dynamics to solve a problem with delays in our PR review
  process.

---

The previous post outlined the issue that we are having with the delays in our PR review process and some of the
ineffective and failing policies that we have adopted to minimize those delays. Over the last few weeks I have been
working on a model representation of the flow of work that might adding delays into the PR review system.

![PR Review Flow with Delays v0.2](/posts/0030/flow-diagram-with-delays-v0_2.png)

This diagram calls out all of the places where delays can happen between the time a PR is open and the time the PR has
been merged. `In Review` is as soon as a PR is create and a review is requested. The first delay in the system is the
delay until the first response by a reviewer. If the first response is an approval with no questions and no changes
requested, `{D1, D2, D3}` are all set to `0` and `D4` is set to the time-to-first-response. If a change is requested or
a question asked, `D1` is set to the time-to-first-response and feedback cycles start happening. One feedback cycle is
calculated from author action (PR creation, question answered, change made, etc.) to author action. In other words, if
multiple people review before the author takes an action, that is only counted as a single feedback cycle. Once the PR
has been approved, `D5` measures the delay from PR approval to the author merging it to complete the task.

From this model, and with the knowledge that our team is a globally distributed one with small windows of working hours
overlap, intuitively the number of feedback cycles drastically increase the overall PR review completion rate.
Decreasing the number of those cycles seems to be a good idea.

How do we decrease the number of feedback cycles? One idea is to limit the number of cycles allowed for a PR before
merging. If the number of feedback cycles are limited, that might lead to an overall cap on the delay for a PR review.
If we set `{D1, D2, D3, D4}` all to zero by auto approving the PR and not allowing review or feedback, we could get rid
of that feedback loop entirely. We could go one step further and set `D5` to zero by auto-merging the PR after
approvals. With both of these solutions, we solve the PR delay problem.

Why do we have reviews in the first place? Oh that's right, reviews are important in lowering the number of defects that
make it to Production, protecting Production from security issues, and limiting the need for tech debt (solutions that
could be improved with little effort for big value delivery with less need for rework later).

So a better question is: how do we limit the number of feedback cycles without negatively impacting something elsewhere
in the system that PR reviews are a subsystem of? As I have been learning more about Systems Dynamics and Casual Loop
Digrams, I have learned that the above model is not sufficient to understand the complexities of the PR review process
to effectively consider policy changes. More work is needed to better understand the factors at play that are leading to
the delays. Analysing the possible policy of removing the feedback cycle entirely has shown that the rate of defect
creation is an important variable to consider. What other variables should be considered to analyze possible policy
changes?

How does PR Quality affect Review Effort? How does Review Effort affect Review Rate? How does Review Quality affect
Defect Creation Rate? How does Pressure affect quality? How does Task Definition Quality affect the PR Quality? These
are all important questions to consider while analyzing possible policy changes to make sure that any changes that are
considered will not have a drastically negative effect in the overall system. So...back to the drawing board!
