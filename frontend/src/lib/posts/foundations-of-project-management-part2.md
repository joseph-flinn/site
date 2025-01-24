---
title: [Foundations of Project Management] Project Management & Agile
slug: foundations-of-project-management-part2
published: 2024-12-30
description: >
  Part two of the Foundations of Project Management series: a discussion on Agile and where it fits
  in the broader project management field

---

Project management can be a very sensitive topic in the software industry. From my personal
experience, discussions between frameworks and approaches can quickly turn into lines being drawn
and choosing hills to die on. Often there is a split between the engineering function and the
business function where Agile is the champion of the engineers and a traditional plan-driven
approach is the champion for the business functions. 

Sales and marketing teams function need specific dates and deadlines in order to collaborate with
external partners for press release go-to-market launches. Engineers are hesitant to commit to
specific deadlines because product development work is often filled with ambiguity where a timeline
for completion may not be known. Ambiguity may be higher in the case where the product or technology
is a new-to-the-world innovation.

Even inside the software industry there are some software teams that have found that plan-driven
project management is more successful than an agile-based framework. I recently had a conversation
with a software engineer that works on the user interfaces for aircraft flight decks in the
aerospace industry. They mentioned that "Agile" is a taboo idea in the industry: one where software
cannot be iterated as frequently and failures can be catastrophic and must be avoided at all costs.


## Foundations of Project Management and Agile

There is a large amount of literature on the success of both plan-driven project management and
Agile project management. As such, I can hear the question being asked: "If there are examples of
both succeeding, which is correct?"

I think this is wrong question to be asking. It was certainly the wrong question to be asking going
into a course on the _Foundations of Project Management_. The PMBOK provides the _standard_ of
project management: what needs to be done regardless of the _framework_ that is chosen for the
project (Schwable p.79). As an example, the PMBOK states that a communication management plan is
important for the success of any project. Such a plan answers the questions: How will the team
communicate on a daily basis? What communication channels should be used in the event of an urgent
task? How should stakeholders be kept up-to-date? Who owns the project status reports? These
questions are important to the success of any project, no matter if a plan-driven framework or an
Agile framework is chosen for management. 

As we discussed in [Part 5](/posts/engineering-portfolio-management-part5) of the _Engineering
Portfolio Management_ series, some project characteristics lend themselves better to one framework
over another (Cooper p.188). Every project is unique and will require a unique approach to deliver
successfully. No two projects will have the same scope, schedule, budget, stakeholders, project
team, etc. Some projects will require a lot of upfront planning, while others will require more
flexibility in requirements. As a quick review of the characteristics we discussed in 
[Part 5](/posts/engineering-portfolio-management-part5): 

| Characteristics of<br/>Project or Setting | Agile Strengths | Plan-driven Strengths |
| ----------------------------------------- | --------------- | --------------------- |
| Criticality of project | Low | High |
| Developers' Experience | Senior (experienced) | More junior |
| Product Requirements | Change often during Development | Stable with specifications |
| Project Team Size | Small | Large |
| Company Culture | Culture that responds to change | Culture that demands order |

Agile has shown to be extremely resilient in project settings where there is a lot of ambiguity,
where requirements are not fully known and plans have a high risk of changing. New product or
feature development is an excellent example of where Agile shines. The underlying implementation of
a feature may not be fully known before the team starts work on project.

On the other hand, managing a infrastructure migration project will require a lot more planning to
minimize downtime. A plan-driven framework may be more beneficial. However, such a project may also
benefit from an iterative approach where independent portions of the infrastructure are migrated one
at a time. Depending on the migration project, maybe a hybrid approach would work best.


## Frameworks and the Triple Constraint

The triple constraint is a good place to start to understand the fundamental differences between a
plan-based framework and an Agile framework in the context of the PMBOK. Remember from 
[Part 1](/posts/foundations-of-project-management-part1), the triple constraint is often defined as
the constrained relationship between scope, schedule, and cost. 

![Triple Constraint: Agile vs Plan-driven (Cooper p.190)](/posts/0072/triple-constraint-agile.png)

Each framework takes a different approach to managing the triple constraint. Traditional plan-driven
project management makes sure that the scope is well defined before moving into the Development
stage of the project, committing to the major resource investment. The overall cost of the project
is relatively low until the Development stage. Once in the Development stage, the cost of a failed
project is significantly higher.

In a plan-driven framework, the definition of completion is tied to the scope. The project is
finished when the well-defined scope has been delivered. As an example, a utility company needs to
build a dam to increase their ability to produce electricity. The scope of the dam is pre-defined
ahead of construction. The project is not finished until a functioning dam has been completed and
has been delivered to the utility company's operations team. In this case, the cost and schedule are
relatively flexible. The success of the project may be tied the cost and schedule constraints, but
the completion of the project is defined by the scope being delivered. The dam may be delivered over
budget and ahead of schedule, but the project is not considered completed until the dam has been
delivered.

In Agile project management, a project is often broken up into iterative fixed-time cycles (the
Scrum flavor of Agile calls these sprints). The budget of each of these cycles is often fixed: the
salaries and material costs of the end-of-the-cycle deliverable. However, the scope of the
deliverable is flexible as it is more important to iteratively deliver something rather than to try
to maximize all three constraints and deliver a fixed scope by the end of a fixed cycle with a fixed
cost. Constraining a team with all three is setting up the team for failure and will create
increasing tension on the team.


## Conclusion

While there is a difference between a plan-driven project management framework and an Agile project
management framework, they are both built on top the foundations of project management described in
the PMBOK. No matter what framework a project dictates or is chosen for the project, there are a set
of deliverables that correlate to the success of projects. The 5 process groups and 10 knowledge
areas in the PMBOK can be organized in a traditionally serial timeline or an iterative Agile
approach. Both have the benefits and their drawbacks. The framework that fits the needs of the given
project should be chosen rather than have an organizational default that is forced upon every
project. Adaptively choosing the most beneficial framework guarantees the best chance of project
success.

---

## Resources

1. Schwalbe, Kathy. Introduction to Project Management: With a Brief Guide to Microsoft Project Professional 2016. Sixth edition, Schwalbe Publishing, 2017.
2. Cooper, Robert G. Winning at New Products: Creating Value through Innovation - 5th Edition. Fifth edition, Revised and Updated, Basic Books, 2017.
