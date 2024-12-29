!! title: Foundations of Project Management - Part 1
!! slug: foundations-of-project-management-part1
!! published: 2024-12-15
!! description: Part one of the Foundations of Project Management series: a class summary and the lessons learned applied to the software industry

---

When I learned that _Foundations of Project Management_ was a required business elective of the
Engineering Management program, I was a bit disappointed. _Agile Project Management_ is a different
elective; _"knowing"_ that waterfall doesn't seem to work well in industry, I thought there could be
a better use of three credits. I started the course not knowing how I could apply what I was going
to learn to the software industry, but with an open mind nonetheless. I am so glad I did.

As with any building construction foundation, _Foundations of Project Management_ lays the ground
work and theory for all project management, no matter what framework is used. Since humans have been
managing projects for thousands of years (building pyramids, castles, walls, etc), the foundation
starts with the processes and deliverables that have been found to be important to deliver a
successful project. They are codified in the Project Management Body of Knowledge, or the PMBOK
(pronounced _pee-em-bock_).


## What is a Project?

Before diving into the processes and deliverables, we need to define what a project is. The PMBOK
defines a project "a temporary endeavor undertaken to create a unique product, service, or result"
(Project Management Institute p.4). The following are additional characteristics of a project that
expand on this definition (Schwalbe p.5).

- A project has a definite beginning and end
- A project drives change and delivers value
- A project has a unique purpose
- A project has a primary customer or stakeholder

In addition to projects, organizations with mature project management processes also have programs
and portfolios as well as processes to manage them. A program is defined as "a group of related
projects, subsidiary programs, and program activities managed in a coordinated manner to obtain
benefits not available from managing them individually" (Project Management Institute p.4). It is
often more economical to manage related projects together since they often share the same resources,
subject matter experts, and overarching goals.

A portfolio is defined as "projects, programs, subsidiary portfolios, and operations managed as a
group to achieve strategic objectives" (Project Management Institute p.16). The strategic objectives
derived from the strategic drivers of the mission, values, and vision, are critical in the success
of project portfolios, whether an organization has an officially defined portfolio management
process or not.

In [Part 4](), we'll examine some tools to measure an organization's project management maturity
level and some of actions that can be taken to grow into the next levels.


## The Triple Constraint

The PMBOK defines ten different knowledge areas that are important in project management:

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

All of these areas are important in a successful outcome of a project and each area affects all the
other areas. However, there are three with strong interdependent correlations that are known as the
Triple Constraint: Scope, Schedule, and Cost. Any changes to one of these directly affects and
constrains the other two.

For example, if the scope of a project increases, so will cost. If the schedule of a project
increases, the cost will increase as well with additional weeks of salary that will be needed for
the extended schedule. If costs are set and cannot be adjusted, this constrains how much can be
delivered. It doesn't matter how much time we have, there is no way that a 3 bedroom 2 bathroom
house can be built for $25,000 (assuming it is built to local building codes in the U.S.).

We will review each these ten areas in more depth in [Part 3]() of the series.


## Project Success

Project success can be determined in different ways. A good project manager knows that their
definitions of success could differ from their stakeholder's definition. It is important to listen
closely to what the stakeholder or sponsor is looking for so the project can be considered a success
from their perspective (Schwalbe p.14). 

Most often, project success is determined by how well it did meeting the triple the constraint.
Comparing the actuals of scope, schedule, and cost to there respective baselines provides a
quantitative way of determining the level of success.

In addition to these internal measures of success, it is important to also include the customer or
stakeholder's satisfaction with the result. Since projects are defined to deliver a product,
service, or specific result, part of the success of a project is determined by the results compared
to the customer needs. Adding completion criteria to the project documentation at the start of the
project can help communicate the desired result. It also helps define the end of the project. Once
those criteria have been met, the project should be closed. Any additional scope should be added to
a new project.

However, there may also be cases where a project meets all documented criteria, but does not lead to
the business results desired. In this case, each of the process groups in project management may
have been successfully executed, but key information was missing in the business case that came
before or at the beginning of the project. Failing to do the right project at the right time is a
sign that a more robust Portfolio Management system is needed.


## Project Management vs Operations Management

My experience in the software industry has shown that work management is often misunderstood as
project work management. The result is misaligned team success expectations between front-line
managers and senior management. Different metrics for success are used in project type work versus
operations type work.

I have spent my career in the DevOps/SRE/CloudOps space and have often observed operations work
being managed with Agile project management frameworks (Scrum, SAFe, etc). Remember, the definition
of a project explicitly defines it as a temporary endeavor, with a definite beginning and end.
"Keeping servers up" or "keeping the lights on" is not a project as there is not definite end.

Support and operations work do not fit nicely into planned _x_ week time blocks where _n_ work can
be committed to being completed. Pipelines break and need to be fixed as soon as possible. Servers
blow up because of cloud provider. These events do not fit nicely into a project management
framework like Scrum where planning happens in backlog grooming. Agile has some great project
management frameworks, but they are designed to work well for project type work. They are not
optimized for operations type work. 

However, it is important to note that Operations teams are not constrained to only operations type
work and Project teams are not constrained to project type work. For instance, if all of a servers
need to be upgraded to the latest security patch, there is a definite start and end to the tasks
involved with the upgrade. The upgrade also delivers a specific result. Operations teams also do
projects and may need a project management framework to manage these tasks. Similarly, a Project
team might be called in to fix a production code issue that has affected all of a system's users, so
they also do operations type work. 

The distinction between project work and operations work is important to keep in mind while
designing and improving a team's processes, approach to work management, and team success metrics.
If the majority of the work that a team does is operations work, then it might make sense to start
with an operations management framework and adapt it for the project work minority. The opposite is
true as well: project teams adapting a project management framework for their operations work. Using
a process or approach that does not fit the majority of the work a team does causes frustration and
unhealthy tension. Team success--for both project and operations teams--is dependent on the
collaboration and shared understand of how success is defined between the team, the manager, and
senior management. A team's approach to work management needs to support this shared understanding.


---

## Resources

1. Cooper, Robert G. Winning at New Products: Creating Value through Innovation - 5th Edition. Fifth edition, Revised and Updated, Basic Books, 2017.
2. Project Management Institute. A Guide to the Project Management Body of Knowledge (PMBOK® Guide) – Seventh Edition and The Standard for Project Management (ENGLISH). 7th edition, Project Management Institute, 2021.
3. Schwalbe, Kathy. Introduction to Project Management: With a Brief Guide to Microsoft Project Professional 2016. Sixth edition, Schwalbe Publishing, 2017.

