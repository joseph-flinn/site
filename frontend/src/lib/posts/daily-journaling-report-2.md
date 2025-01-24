---
title: Daily Journaling - Report 2
slug: daily-journaling-report-2
published: 2025-01-20
description: >
  Second report with changes that I have made since first post.

---

It has been about three months since the first report of my 
[new daily journaling practice](/posts/daily-journaling-report-1). I thought I'd share some of the
updates I have made since then. 


## Updates - Minor Adjustments

The first few updates are relatively small. While doing my morning reflection of the previous day, I
often found myself focusing on the challenges and negatives rather than the positives. Over a really
challenging week in November, I found myself in a reinforcment loop which was amplifying the
negatives. I decided to update my daily note template with a few reminders on how to think about the
previous day.

```markdown
# 2024-10-21

<!-->Use the lens of Gratitude!<-->
As I mentioned in the first report, I was looking for ways to use more gratitude
in this section. The daily reminder in form of a comment is helpful to set 
up my perspective through a lens of gratitude first thing in the morning.

<!-->Set intention!<-->
I have also added a specific "subsection" for intention which is less task 
oriented (since I have the Today's Plan section) and more how I want to approach
the day. As an example, the following was yesterday's intension.

> Today's focus is perseverance. There is a lot of writing to be done today.
```

I have found both of these updates helpful in orienting myself to feeling more fulfilled. Some days
are intentionally unproductive to rest and prepare for a week of productivity. Setting that as an
intension in the morning allows me to avoid the fear of not being productive (one of my big triggers
to [workaholism](/posts/workaholism)).


## Updates - Task Management 

The largest change to my daily journaling habit has been task management beyond the daily
priorities. As the repository of my daily notes grew with the **Backlog** section, I started losing
tasks in the backlog. The fuzzy search that I use to search my thought notes doesn't do well with
building a list of things to do. My idea had been to create a tool to query all of the notes and
build a unified backlog on the fly. It would be an interesting problem to work on with tracking 
global ranking of priority.

During the same time, I was using [OpenProject](https://www.openproject.org) to stay on top of
managing my class work last semester. I thought that I would use it extensively to track tasks, but
the administrative overhead was too much for just a single person's workload. I was surprised that I
found the calendar view to be the most helpful feature since it was something that I found useful in
engineering work. It was extremely helpful in managing daily capacity and task distribution over
time to make sure that I only had 2-3 tasks a day rather than cramming before a due date. The
calendar view was really the only feature I used and is something that most calendar applications
support with no need for all of the other bells and whistles of a fullon project management
application.

With the issues with a time-distributed backlog and the significant task management overhead in
OpenProject, I decided I needed a simpler centralized approach. Like many of those before me, I set
off on the journey to find the perfect task management system to fit into my note-taking workflow.

With a few hours of research I compiled a few contenders that I thought were promising and did some
more in-depth research and experimentation to see how they would fit into my workflow.

| System | Notes | Conclusion |
| ------ | ----- | ---------- |
| [NocoDB](https://nocodb.com) | I already use NocoDB to track some areas of my life. It has a Calendar view. However, for some reason the EndDate value is behind a paywall... | ❌|
| [TaskMD](https://github.com/BaldissaraMatheus/Tasks.md) | This was essentially just a Kanban board. As much as I love lean management practices, I was not having task flow issues. | ❌ |
| [Taskwarrior](https://taskwarrior.io) | I set this up, but it required me to rebuild my entire workflow around the tool versus the tool fitting into my current workflow | ❌ |
| [Vault-tasks](https://github.com/louis-thevenet/vault-tasks) | Cool idea with the same "Why?" as what I was looking for, but didn't quite fit my needs | ❌ |
| [Custom-built task management app](https://www.roadmap-ui.com) | My first instinct is to build the solution myself rather than find one that is already built. But this would require too much time | ❌ |
| [GitHub Project](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) | This is the closest that I got, but it is not local and would require quite a bit of automation effort to link to my note-taking workflow | ❔|


So...no perfect solution... Back to the drawing board, but this time to generate a user requirements
list to actually know what I was looking for (which I should have done to begin with). My guiding
requirements were:

- The system should fit into my current workflow
- My version-controlled `second-brain` repository is the source of truth for all tasks
- Keep the _Daily Notes_ **Today's Plan** as the source of truth for the list of priorities for the
  day
- The system supports high linkability with _Daily Notes_
- The system supports a Project structure to organize collections of tasks that spreads over
  multiple months
- Portable / Open source
- Nice-to-have: supports a calendar view

Looking at this list of requirements, I knew that the resulting system was going to be too
opinionated and customized to have an task management application already created. Since I was not
interested in overhauling my workflow to fit a tool, I knew my only two options were to create my
own application or run a manual task management process.

Throughout my search, the [_Getting Things Done_](https://gettingthingsdone.com/what-is-gtd/) system
kept coming back and it reminded me of manual actions that I already do in my Zettelkasten. I came
across a [blog post](https://pankajpipada.com/posts/2024-08-13-taskmgmt-2/) by Pankaj Pipada with a
description of their manual approach to managing tasks. I decided to take a day and write out a
possible approach to a system that incorporated my current approach to using Zettelkasten, but
expanded to support a new _Project Note_ type. I have included excerpts from my journal entries in
the **Resources** section below that go into more depth. I settled on the below definitions for the
expanded note types and the how Tasks would fit in. 

| Term | Definition/Use |
| ---- | ---------- | 
| Daily Note | The source of truth for all notes on tasks or mid-form thoughts |
| Zettels | Highly linked "original" thoughts spurred from consuming media (preferably text) |
| Lit Note | Paraphrased ideas from media (most often text). Contains citation metadata |
| Project Note | Central place for managing related tasks and sub-projects |
| Daily Task | A task that is small enough to be finished within a day (See Daily Note) |
| Project Task | A task that is related to a specific project. This will be treated as a Daily Task when I add it to a day's plan and start working it. |
| Backlog Task | A Daily Task that is not high enough priority to plan for that day |

With these definitions, I expanded the current file structure to include `./tasks.md` and
`./projects`.

```
.
├── tasks.md
├── journal
│   ├── 2025-01-16.md
│   ├── 2025-01-17.md
│   ├── 2025-01-18.md
│   └── 2025-01-19.md
├── projects
│   ├── grad-school
│   │   ├── engm-510.md
│   │   ├── engm-520.md
│   │   ├── mbus-613.md
│   │   └── mbus-670.md
│   ├── ebook-scalable-swe-practices.md
│   └── book-engineering-management
│       ├── index.md
│       ├── introduction.md
│       ├── engineering-portfolio-management.md
│       ├── foundations-of-project-management.md
│       ├── quant-stats-analysis.md
│       └── statistical-quality-control.md
└── zettelkasten
    ├── 01cacnbxyf.md
    ├── 038ee6avv3.md
    ├── 0bzbyi3sv3.md
    ├── 0cfcqr34go.md
    ├── the-rise-and-fall-of-getting-things-done-2020.md
    ├── the-tao-of-systems-thinking-2015.md
    ├── thinking-in-systems-2008.md
    └── think-like-a-monk-2020.md
```

As a quick note on the zettelkasten system, one of the driving ideas is to write a single contained
original thought and then link it to other single thoughts that are related. The random alphanumeric
files each have one of these thoughts. Over time and an accumulation of these, strings of connected
thoughts--even between seemingly unrelated subjects--will form and can become the basis of a writing
project. My literature notes are getting migrated from where they currently are in 
[Zotero](https://www.zotero.org) to the `$title-date.md` files for better linkability and searching.

Now, back to the task management system. The main overhaul from the last version was the migration
of the **Backlog** section of the _Daily Notes_ to a centralized `./tasks.md`.

```
# Backlog

## Projects

- [ ] Book - Engineering Management from Masters program
    [[projects/book-engineering-management/outline]]
- [ ] Book - Accountability
    [[journal/2024-10-02###Accountability vs Responsibility]]
    [[journal/2024-12-13###Accountability and its place in hierarchical social structures]]
    [[journal/2024-12-30###Accountability Book timing]]


## Tasks

- [ ] Migrate site to `joseph-flinn.com`
    [[journal/2025-01-03###Migrate Site to `joseph-flinn.com`]]
    #blog
- [ ] Create a Post Series feature for blog
    #blog
- [ ] Experiment with RAG for the second-brain
    #second-brain

...

# Completed

## Projects 

## Tasks

- [x] Add a manually managed _Popular_ list of blog articles
    [[journal/2025-01-02###Today's Plan]]
    #blog
- [x] Add an _Influential Books_ section to `/about`
    [[journal/2025-01-02###Today's Plan]]
    #blog
```

There are two sections: **Backlog** and **Completed** and each of those sections have subsections
for projects and tasks. The project backlog is used for both budding project ideas and for projects
that are under way. If a project has yet to be initiated with a _Project Note_, the project backlog
links to a list of journal entries in _Daily Notes_ that are related to the ideation phase of the
project. Once the project has been initiated, the project backlog links to the newly created
_Project Note_ and the journal entries are moved to it.

Individual backlog tasks link back to the _Daily Note_ where it originated so that the context is
saved as to why the task needs to be done. The task tags are currently not used, but I have included
them as a way of some day filtering with a tool similar to
[vault-tasks](https://github.com/louis-thevenet/vault-tasks). When I decide to work on a task, I'll
add it as a priority for that day's _Daily Note_ and add a link to the backlog task.

Once a task or project is complete, it is moved to the **Completed** section. I do not have a
specific reason for keeping completed tasks around. The best that I have is that I want to keep a
history of the tasks that I have completed in case I want to do some sort of analysis or personal
quarterly/annual report over time.

While the _Project Note_ template is still under development, the current format looks like this:

```
# Project Name

Background information on the project or the problem.

[[journal/day1#thought]]
[[journal/day2#thought]]


## Goal 

The goal of the project to help prioritize against other projects and make sure the right project is
being worked on at the right time. This section answers the "Why are we do we need the project?" and
"What is the scope of the project?"


## Notes - Journal

- [[journal/day3#Project Thought]]


## Notes - Project

### Random Thought

This is a random thought that needs to be captured and stored alongside the project for ease of
retrieval. 


## Tasks

### Backlog

- [ ] Task 1
- [ ] Task 2

### Completed

```

The links to journal entries in the background information section contain thoughts around why the
project should be initiated. They are the ones that are moved from the `tasks.md` file when the
project is initiated. The **Notes - Journal** exists to support **Notes - Thoughts** from _Daily
Notes_ as the for capturing fleeting thoughts throughout the day. They may or may not be valuable
enough to add to the project itself. The **Tasks** section is used the same way that `tasks.md` is
used, but constrained to the project context.

While still in the very early stages of development, I also want to allow for large
projects/programs that included sub-projects. If a project gets too large, the main project document
can be renamed as `index.md` and moved into a new project directory as seen in the directory
`book-engineering-management` in the file structure above. This project example is a multi-year
project to write a book with all of the information I found important from my Master of Engineering
Management program and how the processes in physical engineering relates back to software
engineering. To make the project more manageable, I want to approach it systematically by breaking
it down into a collection of smaller projects that deliver a series of posts that that I write as I
take the classes. 

Overall, this new approach to task and project management has required very little overhead and been
working out quite well with my zettelkasten approach to note taking. There is some pain points which
I will be focusing the next few months on improving.


## Room for improvement

Retrieval of thoughts and ideas from journal entries is still a pain point. I am have not yet
implemented a replacement for the fuzzy keyword search in NeoVim. With all of the text data that I
have created, I would like to experiment with a self-hosted RAG to be able to chat with my
second-brain and possibly even ask for generated task lists and the like. My third _Daily
Journaling_ report will probably come in about another three months once I have set up the RAG and
experimented with it in my workflow for a bit.

---

## Resources

### Journal Entry Excerpt - 2024-12-13

> My second-brain system is working well as it is. Instead of changing my workflow to adapt to a
> tool, I want tooling to expand my workflow. TaskWarrior seems extremely robust but feels
> disconnected from my personal workflow. And it feels like its focus is optimizing local
> productivity rather than long-term sustainability (however, I could be biased by the author of the
> intro video that I watched).<br/><br/>
> I am going to continue with building my own simple task manager system. The current system for
> short-term tasks seems to be working so they will remain in "Today's Plan". The additional user
> requirements are going to be surrounding the management of larger projects and backlog items.
> <br/><br/>
> Projects should be their own type of note with a Tasks section. I currently have a few all
> following different formats. Some are a single markdown file, while others are directories, while
> other are sequential markdown files coupled on a specific class. The Project Note type needs to be
> expanded with a standardized definition and could be codified into a template. <br/><br/>
> Using the ZK system that I am already for daily notes and zettels, I can expand this to also
> include Project notes (and possibly even literature notes to move them out of Zotero<br/><br/>
> **Daily Notes:** the source of truth for all notes on tasks or mid-form thoughts<br/>
> **Zettels:** Highly linked "original" thoughts spurred from consuming media (preferably text)<br/>
> **Literature Notes:** paraphrased ideas from media<br/>
> **Project Notes:** central place for managing related tasks<br/><br/>
> Note that these definitions keep deliverables outside of the second-brain. Project work should
> happen in a different place (perhaps `~/projects`?). Only the notes and thoughts should be
> recorded in the second-brain.<br/><br/>
> Projects should be small enough that manually managing the tasks via markdown is not too much
> work. If a project gets too big, it should be split out into smaller subprojects. Since Daily
> Notes are the source of truth for notes on task activities, those sections should be linked to
> from the project document. Other supporting sections like Requirements or Acceptance Criteria may
> be necessary to determine if/when a project is determined to be complete.<br/><br/>
> It would also be beneficial to describe the different type of tasks that exist in the
> second-brain.<br/><br/>
> **Daily Task:** A task that is small enough to be finished within a day.<br/>
> **Project Task:** A task that is related to a specific project. This will be treated as a Daily
> Task when I add it to a day's plan and start working it.<br/>
> **Backlog Task:** An Daily Task that is not high enough priority to plan for that day.<br/><br/>
> Backlog Tasks should only be day-sized tasks. If a new project needs to be completed, the Backlog
> Task would be `Initiate New Project` rather than `Complete New Project`. Project initiation would
> include creating a new project document, defining the goals and requirements, and setting up the
> initial task list (possibly WBS?).<br/><br/>
> Manual markdown editing can be used for managing both Daily Tasks and Project Tasks. However, we
> are still missing the ability to manage the Backlog tasks that are spread out over many Daily
> Notes. The initial idea for including a Backlog section was because the tasks often originated
> from one of the notes and there might be a loss of context keeping the backlog separate. On
> further thought, markdown links might be a good solution to keeping context rather than building a
> custom tool to generate and query a distributed backlog. Instead the backlog can be it's own
> markdown file that includes links back to the originating Daily note thought.


### Journal Entry Excerpt - 2024-12-14

> Expanding on the thoughts on the Project type note from yesterday, a Project should also have a
> section for smaller sub-projects. For instance, the Masters of Engineering Management book is a
> large project made up of smaller projects. Those should have a first-class place to live in the
> Project note type.

