---
title: "[Startup 2025] Async Discussion - RFDs"
slug: startup-2025-rfds
published: 2025-03-24
description: >
  Reviewing the implementation of the RFD process in the startup

---

One of the highlights of my career was being elected to lead a cross-functional process improvement
guild[[1](https://www.atlassian.com/agile/agile-at-scale/spotify)] in the early days of Bitwarden.
An engineer in QA shared the idea for a guild that would come together with all engineering and
product perspectives to work on improving product development operations throughout the entire
lifecycle: from design all the way through to value delivery to the user.

The VP of Engineering loved the idea and wrote a guild charter to grant the guild authority to
implement or change any process within the product and engineering business functions. One of the
most admirable examples of leadership that I have observed was the VP's decision to champion and
support the guild without being an active voice, trusting us to make the best decisions for the
department.

One of the first things that we did as a guild was to design our operational processes. We each had
our "day jobs" and only 10% of our time was budgeted for guild membership activities. We needed a
scalable and asynchronous way to generate and discuss ideas, refining them before they were brought
to the team to vote on adoption.

As we are building our startup today, we have decided to heavily lean into asynchronous
communication as our default communication model with only a single weekly meeting. As our
documentation quickly grows, we are starting to need a process to tracking ideas and their state.
This need reminded me of the RFD process that the process improvement guild designed and implemented
at Bitwarden which was originally based on the Oxide Computer Company's RFD process 
[[2](https://oxide.computer/blog/rfd-1-requests-for-discussion)].

Below is the startup's RFD 0001, adopting the RFD process:

---

Asynchronous communication is hard. To help ease the challenges, a Request For Discussion (RFD)
process can be used. Aligning on such a process helps communicate and set expectations for the state
and ownership of ideas and it results in all ideas being captured so that we can overcome our
overly-biased memory performance (we think we’ll remember this important thing 3 months from now,
but we find that we don’t).

As a side benefit of establishing an asynchronous communication process around ideas, we can free up
synchronous time to be focused on high-impact topics.


### What is an RFD?

Instead of rewriting a response, we’ll directly quote Jessie Frazzelle from [Oxide
Computer Company RFD 1](https://oxide.computer/blog/rfd-1-requests-for-discussion):

> Writing down ideas is important: it allows them to be rigorously formulated (even while nascent),
> candidly discussed and transparently shared. We capture the written expression of an idea in a
> Request for Discussion (RFD)...
> <br/>
> <br/>
> The content of a note may be any thought, suggestion, etc. related to the software or other aspect
> of the process. Notes are encouraged to be timely rather than polished. Philosophical positions
> without examples or other specifics, specific suggestions or implementation techniques without
> introductory or background explication, and explicit questions without any attempted answers are
> ALL acceptable. The minimum length for a note is one sentence.
> <br/>
> <br/>
> These standards (or lack of them) are stated explicitly for two reasons. First, there is a
> tendency to view a written statement as ipso facto authoritative, and we hope to promote the
> exchange and discussion of considerably less than authoritative ideas. Second, there is a natural
> hesitancy to publish something unpolished, and we hope to ease this inhibition.
> <br/>
> <br/>
> Similar to RFCs, our philosophy of RFDs is to allow both timely discussion of rough ideas, while
> still becoming a permanent repository for more established ones. Depending on their state, RFDs
> may be quickly iterated on in a branch, discussed actively as part of a pull request to be merged,
> or commented upon after having been published. The workflow for the RFD process is based upon
> those of the Golang proposal process, Joyent RFD process, Rust RFC process, and Kubernetes
> proposal process.


### RFD Metadata

There are four metadata points we want to track in every RFD: Authors, Champions, Owners, and State.

| Metadata | Description |
| -------- | ----------- | 
| Author(s) | The person(s) who created or took note of the RFD |
| Champion | The person(s) who is the point of contact and/or lead for that RFD. This does not need to be the original author | 
| Owner | The person(s) who has taken responsibility for completing a task that is Committed or In Progress. This can be anyone in the company |
| State | One of the following: _Ideation_, _Discussion_, _Committed_, _In Progress_, _Accepted_, _Abandoned_. State can be tracked with a Kanban board. |


### RFD State
#### Ideation

A document in the _Ideation_ state contains only a description of the topic that the RFD will cover,
providing an indication of the scope of the eventual RFD. There is no expectation that the RFD is
undergoing active revision nor active discussion. Such a document can be viewed as a scratchpad for
related ideas. It is critical that RFDs in the _Ideation_ state are clear and narrowly defined.

#### Discussion

Any member of the team is encouraged to champion or take ownership of and start active work on any
RFD (moving it to this _Discussion_ state) with or without the participation of the original author.
This should start a conversation around the idea which ideally would be in a single communication
channel (card comments, document comments, etc). Any points of discussion that end up revising the
RFD should be captured in the RFD itself. This state enables our work to remain asynchronous.

#### Deep Dive

If an RFD champion would like to have the team’s input on a specific idea or otherwise thinks that a
larger conversation is needed on a particular RFD, that idea is flagged for a _Deep Dive_ and is
added to the _Deep Dive_ section of the next synchronous meeting, after any other items flagged for
deep dive in that meeting. This state is completely optional and up to the discretion of the
champion.

From _Deep Dive_, the RFD can end up in four states:

_Deep Dive_: When more discussion is needed and the item is added to the next meeting and stays in the _Deep Dive_ state.
_Committed_: Where it is decided that the work needs to be done, but does not have an owner
_In Progress_: Where someone takes immediate ownership of the RFD to start work
_Abandoned_: Where it is closed and archived

#### Committed

RFDs that are _Committed_ wait for an Owner to be assigned. This state should mostly be reserved for
RFDs that require external work with the rare exception for internal work where there is no capacity
on the team to implement. Assigning an external owner is done asynchronously outside of meetings. 

As soon as an owner is assigned, the RFD state is changed to _In Progress_. 

#### In Progress

Any RFDs that are _In Progress_ have an Owner assigned to them, require work to be implemented, and
they are actively being worked on. 

Each member should only be assigned as an owner on one _In Progress_ RFD at a time. This is not a
hard and fast rule, but should be kept to as much as possible to limit work in progress (WIP). As
the team grows, this guideline will become increasingly important to improve throughput of ideas.

#### Accepted

Once an RFD has been entirely implemented or document is an explanation of the current state of the
system, it should be set to the _Accepted_ state. Once in this state, any major comments or calls
for significant changes should be done in a new RFD.

#### Abandoned

> Finally, if an idea is found to be non-viable (that is, deliberately never implemented) or if an
> RFD should be otherwise indicated that it should be ignored, it can be moved into the abandoned
> state

When an RFD is _Abandoned_, a specific reason should be noted as to why. At any point in the future,
if someone thinks that it should be reconsidered, a new RFD should be created with a link to the old
one along with supporting reasons on why the reason for abandonment is no longer valid (ex. “X is no
longer the case”, “There is more evidence to suggest that Y might still be a continued problem. We
need a solution”)

### Notes on Priority

There is no explicit prioritization of work in the RFD process. RFDs are created and discussed as
needed, with prioritization of the topics managed externally to the process. Since RFDs are indexed,
there is an implicit time relationship, but this has no bearing on prioritization. There are
multiple correct ways to manage prioritization and it is up to the team to decide on which best fits
their culture and structure.

### Changes to this RFD Process

As with the rest of the processes that we are going to be examining and discussing, changes/updates
to this process can be done via a new RFD!

---

## Resources

1. https://www.atlassian.com/agile/agile-at-scale/spotify
2. https://oxide.computer/blog/rfd-1-requests-for-discussion
