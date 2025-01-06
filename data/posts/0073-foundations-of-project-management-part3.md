!! title: Foundations of Project Management - Process Groups & Knowledge Areas
!! slug: foundations-of-project-management-part3
!! published: 2025-01-06
!! description: Part three of the Foundations of Project Management series: an overview of the process groups and knowledge areas of project management

---

The goal of this post is to provide a quick introduction to the process groups and knowledge areas
that are defined in the 6th Edition of the PMBOK Guide. While these are presented in a linear
fasion, they ofent happen in parallel durinng the management of a project. Ricardo Vargas has a
great overview of how the different processes interact with each other which can be found 
[here](https://youtu.be/GC7pN8Mjot8). Vargas drills into the viewers that each knowledge area
affects the other knowledge areas; changes in one affect some or all the others.

Rememeber, the PMBOK defines a project as "a temporary endeavor undertaken to create a unique
product, service, or result" (Project Management Institute p.4). As such, a project has a specific
beginning. Prior to a project starting, it has to be selected by the organization's project selection
process. [Part 4](/posts/foundations-of-project-management-part4) will review what such a process
looks like depending on an organization's project management maturity level.


## Process Groups

The 6th Edition of the PMBOK defines five process groups for project management.

| Process Group | Description |
| ------------- | ----------- |
| Initiating | Activities done to start a project after selection but prior to the beginning of planning |
| Planning | Activities done to build the strategy of project execution and to set baselines to measure against |
| Execution | Activities done to create deliverables for the project |
| Monitoring &<br/>Controlling | Activities done to make sure that the project is staying on planned baselines |
| Closing | Activities done to finalize and end a project |

Once a project has been selected through an organization's selection process, the _Initiating_
process group is where a project manager begins. A project charter is developed to
document the goals of the project, the criteria for why it was selected, and how it aligns to the
overall business strategic drivers. This information is important to document to allow for an easy
way to keep the project team aligned on the goal of the project. It also provides a place to review
the alignment of the project goals against business strategic drivers in 
[portfolio gate reviews](/post/engineering-portfolio-management-part4).

The _Planning_ process group spans all ten of the knowledge areas and contains the most amount of
processes. It includes creating plans on how to manage each of the knowledge areas. It also includes
specific deliverables from most areas. Baselines are created for the triple constraint knowledge
areas (scope, schedule, and cost) to then be used in the _Monitor & Controlling_ process group while
the project work is being done. The baselines are important to measure the progress and health of
the project.

As a note, _Planning_ is obviously crucial in a Plan-driven project management framework, but is
also an important part in Agile as well. Some of the project management deliverables will be done
on-the-fly. For example, creating a work breakdown structure (WBS) will be done in an iterative
fashion. However, other deliverables--like a communication management plan or a plan for how to
manage scope changes--are still needed to increase the likelihood of a successful project. And
remember, all of these knowledge areas and process groups are interconnected. Even in a Plan-driven
framework, unknowns may happen during _Execution_ and plans may need to be updated to reflect the
changes.

The _Execution_ process group contains all of activities that project managers are managing while
the team executes the project work. Most of the project management work in this process group is
related to communication and engagement with the stakeholders. In an Agile environment, the project
management role may also include taking on a specific role in framework ceremonies (like running the
Scrum backlog grooming sessions). 

While a project is being _Executed_, project managers also _Monitor & Control_ the project outcomes.
_Monitoring_ is often done with dashboards and other similar tools to create visibility into how the
project is tracking against the planned baselines. Visibility is important identify risks to the
project and communicate them with both the project team and the stakeholders. While there is a risk
of being too heavy-handed in _Controlling_, great project managers know how to use transparency with
the project team to minimize this risk. Project teams with realistic baselines and the autonomy to
manage their projects and support each other towards their project goals have an excellent chance of
completing the project successfully.

Project _Closure_ is the final process group. When all the project deliverables have been
completed and the stakeholders have signed off, the project has been completed and is _Closed_. Some
additional deliverables in this group may include a retrospective write-up on the project to
document what the team learned through any challenges and successes that they had. A retrospective
like this is important to further a culture of organizational learning.

Alternatively, the _Closing_ project group also manages the termination of a project. There are many
reasons why a project may be terminated. In the most mature project management organizations, this
often happens in the Go/Kill gate reviews during 
[portfolio gate review sessions](/post/engineering-portfolio-management-part4). While terminated
projects may be considered failed projects (project that have surpassed their projected baselines
farther than can be recovered), they may also be a result of a healthy portfolio management process.
It is crucial to maintain transparent Go/Kill criteria to help communicate success with the project
team even if the project is preemptively killed before completion (Cooper p.60). Transparent
criteria helps communicate that the project team did not fail, but are instead needed elsewhere on a
higher priority project.


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
knowledge areas together. It is often the glue that holds the project together. This area includes
developing the project charter, developing the overall project management plan, and managing the
project's knowledge base.

_Scope_ management manages everything to do with the scope of the project. Scope is one of the three
areas of the triple constraint. Any changes to scope directly affects the _Schedule_ and _Cost_.
Processes and deliverables in the scope knowledge area include the WBS and the plan on managing
change requests once a scope baseline has been created. 

_Schedule_ management manages the deliverables that are related to the project schedule. This
includes the list of activities required to deliver the WBS as well as the sequence of the
activities. All projects have a critical path through the WBS where some items cannot be delivered
prior to others. For instance, a roof on a house cannot be built prior to the walls being framed.
_Schedule_ management is the knowledge area that sequences and estimates the time it will take for
activities in order to get an overall estimate for the project. It is also important to call out
that the definition of relative estimates should be defined in the project documentation to align
the expectations of the team and stakeholders.

There are no big surprises in the _Cost_ management knowledge area. This area manages the cost
estimates and the project budget. Cost baselines often include a budget contingency on top of the
cost estimates of the activity list from the _Schedule_ knowledge area as well a contingency on top
of the work package cost estimates from the WBS. The contingencies should be calculated from
organizational policy or provide a documented reason for deviating. The estimates and the
contingencies make up the cost baseline (Schwalbe p.179). The project budget is made up of the cost
baseline and a management reserve that is set aside to manage any unidentified risks.

_Quality_ management is often identified as another constraint that works alongside the triple
constraint. Each of the triple constraints can directly affect the quality of the project
deliverable. Cutting costs for a specific portion of the project creates a risk in a decrease of the
overall quality of the final deliverable. Compressing the schedule can also have the same affect.
Specific risks like this should be documented in the project's risk register as they come up.

_Resource_ management is the PMI's term for human team management. This area includes estimates and
plans on the needed skills for the project team and where those skills are going to be acquired. As
an example, this might include a new hire, or it might include borrowing 20% of someone's time from
somewhere else in the company. PMI's use of the word "Resource" here seems to mask the humanity of
the team (more thoughts in this [piece that I wrote a year ago](/post/e2m-humans-as-resources)).
A cursory look at the 7th Edition of the PMBOK seems to indicate the migration from "Resources" to
"Team" (more to come on the 7th Edition in a future post).

_Communication_ management manages the expectations of how the project team communicates and how
communication with individual outside of the project team happens. The communication management plan
documents the tools to be used, the reports that can be expected, and the schedule of the
communication. It provides transparency and standard cadence to set both project team members and
stakeholders at ease.

_Risk_ management includes the plan and the activities around identifying and documenting possible
risks to the project and the plans to mitigate them. One of the deliverables from this area is the
project risk register to catalog all identified risks and the mitigation strategies that are planned
in the event that an identified risk becomes reality. 

The _Procurement_ management area includes managing all external partners and suppliers. It includes
the activities to identify and select them as well as the purchasing activities. 

The final knowledge area is _Stakeholder_ management. This includes plans on how to manage the
different project stakeholders for the success of the project. One of the key deliverables is a
stakeholder engagement plan that documents the different stakeholders involved with the project,
their power and their interest as well as their desired level of engagement (Schwalbe p.211). This
deliverable is often kept confidential because of the sensitive nature of the subjective judgements
of the different stakeholders. Some of the key stakeholders can be identified as detractors to the
success of the project.


## Conclusion

The 6th Edition of the PMBOK Guide, published in 2017, defines 5 process groups and 10 knowledge
areas for successful project delivery. It is easiest to build a mental model of project management
by sequentially looking at each of the groups and areas, but it is important to recognize that they
often happen simultaneously in the real world. There is a mapping of the process groups and
knowledge areas provided as PDF in the **Resources** section below.

I do want to note that the 7th Edition of the PMBOK Guide has been published with updates that focus
on outcomes rather than deliverables and simplifies the overall process groups and knowledge areas
(_PMBOK 7 vs PMBOK 6_). I'll do a review of project management from the perspective of the PMBOK 7
in a future post.

---

## Resources

**PMBOK 6th Edition Process Groups & Knowledge Area Mappings:** 
[PDF](https://blog-images.flinnlab.com/PMBOK-Process-Group-and-Knowledge-Area-Mapping.pdf)

1. Project Management Institute. A Guide to the Project Management Body of Knowledge (PMBOK® Guide) – Seventh Edition and The Standard for Project Management (ENGLISH). 6th edition, Project Management Institute, 2017.
2. Cooper, Robert G. Winning at New Products: Creating Value through Innovation - 5th Edition. Fifth edition, Revised and Updated, Basic Books, 2017.
3. Schwalbe, Kathy. Introduction to Project Management: With a Brief Guide to Microsoft Project Professional 2016. Sixth edition, Schwalbe Publishing, 2017.
4. PMBOK 7 vs PMBOK 6 Top Differences to See - Vinsys. https://www.vinsys.com/blog/pmbok-7-vs-pmbok-6. Accessed 5 Jan. 2025.


