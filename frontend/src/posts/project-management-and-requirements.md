---
title: "Project Management - The Right Tool for the Job"
slug: project-management-and-requirements
published: 2024-09-16
description: >
  Discussing Agile and traditional project management in different contexts and the key to choose
  between them: how well requirements are defined.

---

I have been missing the link between traditional project management and Agile project management. I
could not describe why one should be chosen over the other. To complicate this question a bit more,
it seems that the only "right" answer in the software industry is Agile. Agile is the hammer and all
projects look like nails.

It seems like the software industry is full of holy wars: tabs vs spaces, emacs vs vim, Agile vs
waterfall, this language over that language. Like all holy wars, both side are correct. They are
coming from different perspectives trying to solve different problems.

Since being introduced to project management methodologies in my senior year of university, most of
my experience has been to learn to champion and worship Agile and to shame and disgrace waterfall,
the name that the software industry has labeled anything that looks like traditional project
management. Backlogs and sprints are the swords and shields, and Gantt charts are the enemy. When
asked for roadmaps and timelines by senior management, my mental answer was "that's not how software
development or IT operations work". But this is where it would end. I couldn't expand on the "why"
behind software/IT not working this way. 

In a scenario such as this, there are three options: 1) senior management trusts and supports the
front-line manager knows what they are doing and lets them learn through their own failures, 2) the
front-line manager delivers the Gantt charts and roadmaps knowing that they will change tomorrow and
this has all been a waste of time, or 3) a coaching relationship develops between the management
levels where senior management helps connect the importance of program and portfolio management at
the organizational strategic level and helps the front-line manager and teams understand the roles
that Gantt charts and roadmaps play, even in Agile.

A few months ago, I was introduced to a project that brought a paradigm shift in my thinking around
project management. Huntington Ingalls Industries won the contract to build out all ten Nimitz-class
aircraft carriers (Sterman, 2009). Each ship takes thousands of engineers and laborers to build over
multiple years costing billions of dollars each. A project like this is not something that can be
delivered incrementally with iteration on the final solution. Every change that is requested (scope
change) can have a major impact on the other two legs of the Triple Constraint: cost and schedule.

Similarly, the emergency cleanup project at the Hanford nuclear plant was also a project that had no
room for trial-and-error solutions (Shur 2017). Swift and decisive action needed to be taken to
contain the leak from getting into the Columbia River, the largest river in the Pacific Northwest
which is extensively used in agriculture and other industries along its length.

Agile project management does not seem to fit these types of projects. However, this is where
traditional project management seems to excel. But what is the key difference that makes the
majority of modern software projects different than building an aircraft carrier or cleaning up
nuclear waste leaks? 

Aircraft carriers and nuclear-waste cleanup have specific and stringent requirements. These
requirements in a physical world bring high costs for changes once the execution phase of the
project starts. Consider a change request of hull dimensions of an aircraft carrier after the
fabrication of the hull has been completed. If the US Navy came to HII requesting the hull to be 5
meters wider, if it was even possible to accommodate this change, it was have a serious impact on the
cost and the schedule of the remaining work.

Intuitively, anyone looking at a finished hull would know that serious rework would be required to
change the shape in any way. It is a lot harder to visualize the amount of
work it would take to implement a change in the software industry where the resulting work can
rarely be seen. Code changes in a bank's mainframe has no obvious changes to the users of the
software.

Since the system structure can only be observed through representative models, there are often
different mental models of what the aggregate system looks like. A non-technical senior manager may
have a relatively simplistic mental model of the system and not understand that the request for a
new login flow may require touching every part of the sub-system parts. On the other hand,
an extremely technical cryptographer may have a really good idea on how encryption keys are
exchanged through the encryption system, but they may not have a complete mental model of the
underlying cloud infrastructure that all of the systems runs on. This challenge is exacerbated with
what seems to be the ever-changing system.

The Agile Manifesto was penned because the lack of hard requirements throughout a project (Beck et
al, 2001). The clarity of defined requirements is the key difference for why one project management
tool would be more useful than another.

The Agile project management methodology is useful for when requirements are not well-defined, or
have a high chance of being redefined before the project has been closed (Schwalbe 2016); keeping in
mind that the definition of a project includes a specific start and end. A more traditional project
management methodology is useful when the requirements are well-defined and are not expected to have
many change (Schwable 2016). 

Traditional project management has a lot of useful tools at managing programs and portfolios of
projects. Even in the software industry, using Gantt charts to visualize the high-level rough
roadmap across multiple projects is really helpful. However, communication is needed with the
management team to bridge the traditional project management methodologies and the newer Agile ones.
Transparency and coaching is needed when talking with engineers, explaining that both methodologies
are important: Agile project management at the team level and methodologies leaning more towards
traditional program and portfolio management at the organizational level.

It is the responsibility of the senior leaders to provide this connection between the methodologies
and to manage the differences. If teams are running Agile project management, scope is less defined
at the beginning of the project, so cost and schedule are going require more flexibility which means
that the initially presented roadmap is in pencil on paper rather than in stone.

It is unfortunate that there is such an aversion to "waterfall" in the software industry and that it
has become "Agile or death". There are projects where a more traditional project management
methodology would work better than an Agile one. Like all good engineers, we should use the best
tool for the job rather than change the job to work with the tool. But above all, communication is
always the correct tool. Ask questions, listen, hold as many roadmap meetings as needed to drive
alignment between projects and business strategy, and remember to have grace for your fellow humans.
Navigating different mental models seems like it is becoming a lost art as time marches forward.


---

## Resources

1. Sterman, John D. Business Dynamics: Systems Thinking and Modeling for a Complex World. Nachdr., Irwin/McGraw-Hill, 2009.
2. Schur, Matt. “U. S. Project Team Races Against Time To Contain A Radioactive Leak.” Project Management Institute, Nov. 2017, https://www.pmi.org/learning/library/us-project-team-contain-radioactive-leak-10978.
3. Beck, Kent, et al. Manifesto for Agile Software Development. 2001, https://agilemanifesto.org/.
4. Schwalbe, Kathy. Introduction to Project Management: With a Brief Guide to Microsoft Project Professional 2016. Sixth edition, Schwalbe Publishing, 2017.


