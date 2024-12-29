!! title: Foundations of Project Management - Part 2
!! slug: foundations-of-project-management-part2
!! published: 2024-12-30
!! description: Part two of the Foundations of Project Management series: a class summary and the lessons learned applied to the software industry

---

Project management can be a very sensitive topic in the software industry. From my personal
experience, frameworks and approaches can quickly turn into hills to die on in a SaaS company. Often
there is a split between the engineering function and the business function. Sales and Marketing
need specific dates and deadlines in order to prepare go-to-market launches and collaborate with
external press release partners. Engineers are hesitant to commit to specific deadlines because the
work is often filled with ambiguity and timelines for completion may not be known. This is even more
the case when what is being built is on the cutting edge and has never been done before.

Expanding past just the SaaS perspective,there are some software teams that have found that
plan-driven project management is more successful than an agile-based framework. I had a recent
conversation with a software engineer that works in the aerospace industry and they mentioned that
Agile project management was taboo in that industry: one where software cannot be iterated as
frequently and failures can be catastrophic and must be avoided at all costs.


## Foundations of Project Management and Agile

There is a large amount of literature on both the success of plan-driven project management and for
Agile project management. I can hear the question being asked: "If there are examples of both the
success of Agile project management and plan-driven project management, which is correct?"

I think this is wrong question to be asking. It was certainly the wrong question to be asking going
into a course on the _Foundations of Project Management_. The PMBOK provides the _standard_ of
project management: what needs to be done regardless of the _framework_ that is chosen for the
project (Schwable p.79). As an example, it is important to come up with a communication management
plan for every project. How will the team communicate on a daily basis? What communication channels
should be used in the event of an urgent task? How should stakeholders be kept up-to-date? Who
owns the project status reports? These questions are important to answer for any project, no matter
if it is being managed by a plan-driven framework or an Agile framework. 

As we discussed in [Part 5](/post/engineering-portfolio-management-part5) of the _Engineering
Portfolio Management_ series, some project characteristics lend themselves better to one framework
over another (Cooper p.188). Every project is unique and will require a unique approach to deliver
successfully. Some projects will require a lot of upfront planning, while others will require more
flexibility in requirements. As a quick review: 

| Characteristics of<br/>Project or Setting | Agile Strengths | Plan-driven Strengths |
| ----------------------------------------- | --------------- | --------------------- |
| Criticality of project | Low | High |
| Developers' Experience | Senior (experienced) | More junior |
| Product Requirements | Change often during Development | Stable with specifications |
| Project Team Size | Small | Large |
| Company Culture | Culture that responds to change | Culture that demands order |

Agile has shown to be extremely resilient in project settings where there is a lot of ambiguity
where requirements are not fully known and plans have a high risk of changing. New product or
feature development is an excellent example of where Agile shines. The implementation direction of a
feature may not be fully known before the team starts work on it.

On the other hand, managing a infrastructure migration project will require a lot more planning to
minimize downtime. A more plan-driven approach may be beneficial. But then again, it may also
benefit from an iterative approach where independent portions of the infrastructure are migrated one
at a time. Depending on the migration project, maybe a hybrid approach would work best.


## Frameworks and the Triple Constraint

To understand the fundamental differences between a plan-based project management framework and an
Agile framework in the context of the PMBOK, the Triple Constraint is a good place to start.
Remember from [Part 1](/posts/Foundations-of-project-management-part1), the Triple Constraint is
often defined as the constrained relationship between scope, schedule, and cost. 

![Frameworks and the Triple Constraint (Cooper p.190)](/posts/0072/triple-constraint-agile.png)

Each framework approaches the triple constraint with different fixed constraints. Traditional
plan-driven project management makes sure that the scope is well defined before moving into the
development stage of the project, committing to the major resource investment. The definition of
completion is tied to the scope. The project is finished when the defined scope has been delivered.
As an example, a utility company may need to build a dam to increase their ability to produce
electricity. The scope of the dam is pre-defined ahead of construction and the project is not
finished until a functioning dam is delivered. In this case, the cost and schedule are relatively
flexible. The dam may be delivered over budget and ahead of schedule. The success of the project may
be tied the flexible cost and schedule constraints, the completion of the project is defined by the
scope being delivered.

In Agile project management, a project is often broken up into iterative fixed-time cycles (the
Scrum flavor of Agile calls these sprints). The budget of each of these cycles is often fixed with
the salaries and material costs of the end-of-the-cycle deliverable. However, the scope of the
deliverable is flexible as it is more important to iteratively deliver something rather than to
deliver a fixed scope by the end of the cycle.


## Conclusion

While there is a difference between a plan-driven project management framework and an Agile project
management framework, they are both based on the foundations of project management described in the
PMBOK. No matter what framework a project dictates or is chosen for the project, there are a set of
deliverables that correlate to the success of projects. The 5 process groups and 10 knowledge areas
can be organized in a traditionally serial timeline or an iterative Agile approach. Both have the
benefits and their drawbacks. The framework that fits the needs of the given project should be
chosen rather than have an organizational default that is forced upon every project.

---

## Resources

1. Schwalbe, Kathy. Introduction to Project Management: With a Brief Guide to Microsoft Project Professional 2016. Sixth edition, Schwalbe Publishing, 2017.
2. Cooper, Robert G. Winning at New Products: Creating Value through Innovation - 5th Edition. Fifth edition, Revised and Updated, Basic Books, 2017.
