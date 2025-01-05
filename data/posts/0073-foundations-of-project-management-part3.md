!! title: Foundations of Project Management - Process Groups & Knowledge Areas
!! slug: foundations-of-project-management-part3
!! published: 2025-01-06
!! description: Part three of the Foundations of Project Management series: an overview of the process groups and knowledge areas of project management

---

As I have mentioned in the last few posts, we are going to be doing a quick review of the process
groups and knowledge areas that the Project Management Body of Knowledge (PMBOK) covers. While these
are presented here and in the PMBOK in a linear fasion, they ofent happen in parallel durinng the
management of a project. Ricardo Vargas has a great overview of the 6th Edition of the PMBOK that
can be found [here](https://youtu.be/GC7pN8Mjot8). Vargas drills into the viewers that each
knowledge area affects the other knowledge areas; changes in one affect some or all the others.

Rememeber, the PMBOK defines a project as "a temporary endeavor undertaken to create a unique
product, service, or result" (Project Management Institute p.4). As such a project has a specific
beginning. Prior to a project starting it has to be selected by the organization's project selection
process. [Part 4](/posts/foundations-of-project-management-part4) will review what such a process
looks like depending on an organization's project management maturity level.


## Process Groups

| Process Group | Description |
| ------------- | ----------- |
| Initiating | Activities done to start a project after selection but prior to the beginning of planning |
| Planning | Activities done to build the strategy of project execution and to set baselines to measure against |
| Execution | Activities done to create deliverables for the project |
| Monitoring &<br/>Controlling | Activities done to make sure that the project is staying on planned baselines |
| Closing | Activities done to finalize and end a project |

Once a project has been selected through an organization's selection process, the _Initiating_
process group is where a project manager begins the project. A project charter is developed to
document the goals of the project, the criteria for why it was selected, and how it aligns to the
overall business strategic drivers. Documenting this in the charter allows for an easy way to keep
the project team aligned on the goal of the project and a place to review the alignment of the
project goals against business strategic drivers in 
[portfolio gate reviews](/post/engineering-portfolio-management-part4).

The _Planning_ process group is the largest group and spans all ten of the knowledge areas. It
includes creating plans on how to manage each of the knowledge areas and includes specific
deliverables from most areas like a baseline to be used in _Monitoring_ the project during
_Execution_. As an example, the triple constraint (scope, schedule, and cost) each have their own
management plans and baseline which are then used during execution to measure the progress and
health of the project.

As a note, _Planning_ is obviously crucial in a Plan-driven project management framework, but is
also an important part in Agile as well. Some of the project management deliverables will be done
on-the-fly and iterated on, like creating a work breakdown structure (WBS). But others, like a
communication management plan or a plan for how to manage scope changes are still needed to increase
the likelihood of a successful project. And remember that all of these knowledge areas and process
groups are interconnected. Even in a Plan-driven framework, something unknown may happen during
_Execution_ and the plans may need to be updated to reflect the changes.

The _Execution_ process group contains all of the activities that project managers should be
managing while the team executes on the plan. A lot of this work is managing communication and
managing project team engagement with the stakeholders. In addition to this, an Agile environment
may include running or taking on a specific role in framework ceremonies (like Scrum backlog
grooming sessions). 

While a project is being _Executed_, project managers also _Monitor & Control_ the project
activities. _Monitoring_ is often done with dashboards and other similar tools to create visibility
into how the project is tracking against the planned baselines. This visibility is important to
allow for project managers to identify and call out risks to the project both with the project team
and with the project stakeholders. While there is a risk of being too heavy-handed, great project
managers know how to use transparency with the project team. Project teams with realistic baselines
and the autonomy to manage, run their projects, and support each other have an excellent chance of
successful project completion.

Project _Closure_ is the final process group. When all of the project deliverables have been
completed and the stakeholders have signed off, the project has been completed and is _Closed_. Some
additional deliverables in this group may include a retrospective write-up on the project to
document what the team learned through any challenges and successes that they had. 

Alternatively, the _Closing_ project group also manages the termination of a project. There are many
reasons why a project may be terminated. In the most mature project management organizations, this
often happens in the Go/Kill gate reviews during 
[portfolio gate review sessions](/post/engineering-portfolio-management-part4). While these may be
failed projects (project that have surpassed their projected baselines farther than can be
recovered), it may also be a result of a healthy portfolio management process. It is crucial to
maintain transparent Go/Kill criteria to help communicate project team success even if the project
is preemptively killed before completion (Cooper p.60). Transparent criteria helps communicate that
the project team did not fail, but are instead needed elsewhere on a higher priority project.


## Knowledge Areas

There are 6th Edition of the PMBOK covers ten knowledge areas of project management: 

1. Integration Management
2. Scope Management
3. Schedule Management
4. Cost Management
5. Quality Management
6. Resource Management
7. Communication Management
8. Risk Management
9. Procurement Management
10. Stakeholder Management

_Integration_ management are the activities and deliverables that integrate the rest of the
knowledge areas together. It is often the glue that holds the project together. The area includes
developing the project charter, developing the overall project management plan, and managing the
project knowledge.

_Scope_ management manages everything to do with the scope of the project. Scope is one of the three
areas of the triple constraint. Any changes to scope directly affects the _Schedule_ and _Cost_.
Processes and deliverables in the scope knowledge area includes the WBS and the plan on managing
change requests once a scope baseline has been created. 

_Schedule_ management manages the deliverables that are related to the project schedule. This
includes the list of activities required to deliver the WBS as well as the sequence of such
activities. All projects have a critical path through the WBS where some items cannot be delivered
prior to others. For instance, a roof on a house cannot be built prior to the walls being framed.
_Schedule_ management is the knowledge area that sequences and estimates the time it will take for
activities to get an overall estimate for the project. It is also important to call out that the
definition of relative estimates should be defined in the project documentation to align the team
and stakeholders.

There are no big surprises in the _Cost_ management knowledge area. It manages the cost estimates
and the project budget. Cost baselines often include a budget contingency on top of the
cost estimates of the activity list from the _Schedule_ knowledge area as well a contingency on top
of the work package cost estimates from the WBS. The contingencies should be calculated from
organizational policy or provide a documented reason for deviating. The estimates and the
contingencies make up the cost baseline (Schwalbe p.179). The project budget is made up of the cost baseline and a
management reserve that is set aside to manage any unidentified risks.

_Quality_ management is often identified as another constraint that works alongside the triple
constraint. Each of the triple constraint members can directly affect the quality of the project
deliverable. Cutting costs for a specific portion of the project risks a decrease the overall
quality of the final deliverable. Compressing the schedule can also have the same affect. Specific
risks like this should be documented in the project's risk register as they come up in the project.

_Resource_ management is the PMI's term for human team management. This area includes estimates and
plans on what skills the project team requires and where those skills are going to be acquired. For
example, this might include a new hire, or it might include borrowing 20% of someone's time from
somewhere else in the company. PMI's use of the word "Resource" here has started me questioning the
[piece that I wrote a year ago](/post/e2m-humans-as-resources) on applying the term to people. This
idea seems to be reflected in the update to terminology in the 7th Edition of the PMBOK.

_Communication_ management manages the expectations of how the project team communicates and how
communication with individual outside of the project team happens. The communication management plan
documents the tools to be used, the reports that can be expected, and the timing of the
communication. It provides transparency and standard cadence to set both project team members and
stakeholders at ease.

_Risk_ management includes the plan and the activities around identifying and documenting possible
risks to the project and the plans to mitigate them. One of the deliverables from this area is the
project risk register to catalog all identified risks and the mitigation strategies that are planned
in the event that it happens. 

The _Procurement_ management area includes managing all external partners and suppliers. It includes
the activities to identify and select them as well as the purchasing activities. 

The final knowledge area is _Stakeholder_ management. This includes plans on how to manage the
different project stakeholders for the success of the project. One of the deliverables is a
stakeholder engagement plan that documents the different stakeholders involved with the project,
their power and their interest as well as their desired level of engagement (Schwalbe p.211). It is
often kept confidential because of the sensitive nature of the subjective judgements of the
different stakeholders since some could be identified as detractors to the success of the project.


## Conclusion

The 6th Edition of the PMBOK Guide, published in 2017, defines 5 process groups and 10 knowledge
areas for successful project delivery. It is easiest to build a mental model of project management
by sequentially looking at each of the groups and areas, but it is important to recognize that they
often happen simultaneously in the real world. There is a mapping of the process groups and
knowledge areas provided as PDF in the **Resources** section below.

I do want to note that the 7th Edition of the PMBOK Guide with updates that focus on outcomes rather
than deliverables and simplifies the overall process groups and knowledge areas (_PMBOK 7 vs PMBOK
6_). I'll do a review of project management from the perspective of the PMBOK 7 in a future post.

---

## Resources

**PMBOK 6th Edition Process Groups & Knowledge Area Mappings:** 

1. Project Management Institute. A Guide to the Project Management Body of Knowledge (PMBOK® Guide) – Seventh Edition and The Standard for Project Management (ENGLISH). 6th edition, Project Management Institute, 2017.
2. Cooper, Robert G. Winning at New Products: Creating Value through Innovation - 5th Edition. Fifth edition, Revised and Updated, Basic Books, 2017.
3. Schwalbe, Kathy. Introduction to Project Management: With a Brief Guide to Microsoft Project Professional 2016. Sixth edition, Schwalbe Publishing, 2017.
4. PMBOK 7 vs PMBOK 6 Top Differences to See - Vinsys. https://www.vinsys.com/blog/pmbok-7-vs-pmbok-6. Accessed 5 Jan. 2025.


