!! title: Foundations of Project Management - Part 1
!! slug: Foundations-of-project-management-part1
!! published: 2024-12-15
!! description: Part one of the Foundations of Project Management series: a class summary and the lessons learned applied to the software industry

---

When I learned that _Foundations of Project Management_ was a required business elective if the
Project Management undergrad course hadn't been taken, I was a bit disappointed. _Agile Project
Management_ was a different elective, and _knowing_ that waterfall doesn't seem to work well in
industry. I thought there could be a better use of three credits for my personalized program. I
started the course not knowing exactly what I would be learning or how I could apply it, but with an
open mind nonetheless. I am so glad I did. 

As with any building foundation, _Foundations of Project Management_ lays the ground work and theory
for any type of project management. Since humans have been managing projects for thousands of years
(building pyramids, castles, walls, etc), the foundations start with the processes and deliverables
that we have found to be important to deliver a successful project. 


## What is a Project?

Before diving into the processes and deliverables used in managing successful projects, we need to
define what a project is. A project is defined as "a temporary endeavor undertaken to create a
unique product, service, or result" (Project Management Institute p.4). The following are additional
characteristics of a project that aligns with this definition (Schwalbe p.5).

- A project has a unique purpose.
- A project has a definite beginning and end
- A project drives change and delivers value
- A project has a primary customer or stakeholder

In addition to projects, organizations with mature project management processes also have programs
and portfolios. A program is defined as "a group of related projects, subsidiary programs, and
program activities managed in a coordinated manner to obtain benefits not available from managing
them individually" (Project Management Institute p.4). It is often more economical to manage related
projects together since they often share the same resources, subject matter experts, and overarching
goals.

A portfolio is defined as "projects, programs, subsidiary portfolios, and operations managed as a
group to achieve strategic objectives" (Project Management Institute p.16). The strategic objectives
derived from the strategic drivers of the mission, values, and vision are critical in the success of
project portfolios, whether an organization has an officially defined portfolio management process
or not.

In [Part 4](), we'll examine some tools to measure the maturity of an organization's project
management maturity level and some of things that can be put in place to advance.


## The Triple Constraint

Project management covers ten different knowledge areas:

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

All of these areas are important in a successful outcome of a project, and each area affects all the
other areas. However, there are three with strong correlations that are known as the Triple
Constraint: Scope, Schedule, and Cost. Any one of these changing directly affects and constrains the
other two.

For example, if the scope of a project increases, so will cost. If the schedule of a project
increases, the cost will increase as well since additional weeks of salary will be needed for
everyone working on the project longer originally planned. If costs are set and cannot be adjusted,
this constrains how much can be delivered. It doesn't matter how much time we have, there is no way
that a 3 bedroom 2 bathroom house can be built for $25,000 (assuming it is built to local building
codes in the U.S.).

For the rest of this post, we'll be most interested in the triple constraint, but we will review
each these areas in more depth in [Part 3]() of the series.


## Project Success

Project success can be determined by different things. Since projects are defined to deliver a
product, service, or specific result, success could be determined by whether this happened or not.
Adding completion criteria to the project documentation at the start of the project can help
determine this success as well as make sure that the project has a defined end. To refine it
further, we could use the difference in planned costs, schedule, and scope versus what it took to
deliver the project acceptance criteria. 

In addition to these internal measures of success of a project, it is important to also include the
customer or stakeholder's satisfaction with the result. This is why it is important to have a
primary customer or stakeholder for each project. Finally, good project manager know that their
definitions of success could differ from their stakeholder's definition. It is important to listen
closely to what the stakeholder or sponsor is looking for so the project can succeed from their
perspective (Schwalbe p.14). 


## Project Management vs Operations Management

In my experience in the software industry, it seems that work management is often misunderstood as
project management. I have spent my career in the DevOps/SRE/CloudOps space and have often observed
operations work being managed with Agile project management frameworks (Scrum, SAFe, etc). Remember,
the definition of a project explicitly defines it as a temporary endeavor, with a definite beginning
and end. "Keeping servers up" or "keeping the lights on" is not a project as there is not definite
end. 

Support and operations work do not fit nicely into planned _x_ week time blocks where _n_ work can
be committed to being completed. Pipelines break and need to be fixed as soon as possible. Servers
blow up because of cloud provider bugs and those problems need to be mitigated and the services
brought back up before costing the organization too much money. These events do not fit nicely into
a project management framework like Scrum where planning happens in backlog grooming. Agile has some
great project management frameworks, but they are designed for project type work. They are not
optimized for operations type work. 

This being said, it is important to note that Operations teams are not constrained to only
operations type work and Project teams are not constrained to project type work. For instance, if
all of a servers need to be upgraded to the latest security patch, there is a definite start and end
to the tasks involved with the upgrade. The upgrade also delivers a specific result. Operations
teams also do projects and may need a project management framework to manage these tasks. Similarly,
a Project team might be called in to fix a production code issue that has affected all of a system's
users, so they also do operations type work. This is important to keep in mind while designing and
improving a team's processes and approach to work management. Using a process and approach that
doesn't fit the work a team does causes frustration and tension.


---

## Resources

1. Cooper, Robert G. Winning at New Products: Creating Value through Innovation - 5th Edition. Fifth edition, Revised and Updated, Basic Books, 2017.
2. Project Management Institute. A Guide to the Project Management Body of Knowledge (PMBOK® Guide) – Seventh Edition and The Standard for Project Management (ENGLISH). 7th edition, Project Management Institute, 2021.
3. Schwalbe, Kathy. Introduction to Project Management: With a Brief Guide to Microsoft Project Professional 2016. Sixth edition, Schwalbe Publishing, 2017.

