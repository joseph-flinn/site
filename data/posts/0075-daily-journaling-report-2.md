!! title: Daily Journaling - Report 2
!! slug: daily-journaling-report-2
!! published: 2025-01-20
!! description: Second report with changes that I have made since first post.

---

It has been about three months since the first report of my 
[new daily journaling practice](/posts/daily-journaling-report-1). I thought I'd share some of the
updates that I have made since then. 


## Updates - Minor Adjustments

The first few updates are relatively small. While doing my morning reflection of the previous day, I
often found myself focusing on the challenges and the negatives rather than the positives. Over a
really challenging week in November, I found myself in a reinforcing loop which was amplifying the
challenges. I decided to update my daily note template with a few reminders on how to think about
the previous day.

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

I have found both of these updates helpful in orienting myself to have a more fulfilling day. Some
days are specifically unproductive to rest and prepare for a week of productivity. Setting that as
an intension in the morning allows me to avoid the fear of not being productive.


## Updates - Task Management 

The largest change has been in the form of how I approach task management past the daily priorities.
As the repository of my daily notes grew with the **Backlog** section, I started losing tasks in the
backlog. My idea had been to create a tool to query all of the notes and build a unified backlog on
the fly, but that would require some interesting problem solving when it came to global ranking of
priority.

At the same time, I was using [OpenProject](https://www.openproject.org) to stay on top of managing
my class work last semester. I thought that I would use it extensively to track tasks, but the
administrative overhead was too much for just a single person's workload. I did find the calendar
view for tasks was helpful in managing daily capacity and task distribution over time to make sure
that I only had 2-3 tasks a day rather than cramming before a due date. But this is something that
most calendar applications support with no need for all of the other bells and whistles.

With the issues with a time-distributed backlog and the significant overhead for managing tasks in
OpenProject, I decided I needed a simpler centralized approach. Like many of those before me, I set
off on the journey to find the perfect task management system to fit into my note-taking workflow.

With a few hours of research I compiled the contenders:

| System | Link | Notes | Conclusion |
| ------ | ---- | ----- | ---------- |
| NocoDB | [https://nocodb.com]() | I already use NocoDB to track some areas of my life. It has a Calendar view. However, for some reason the EndDate value is behind a paywall... | ❌|
| TaskMD | [https://github.com/BaldissaraMatheus/Tasks.md]() | This was essentially just a Kanban board. As much as I love lean management practices, I was not having task flow issues. | ❌ |
| Taskwarrior | [https://taskwarrior.io]() | I set this up, but it required me to rebuild my entire workflow around the tool versus the tool fitting into my current workflow | ❌ |
| Vault-tasks | [https://github.com/louis-thevenet/vault-tasks]() | Cool idea with the same "Why?" as what I was looking for, but didn't quite fit my needs | ❌ |
| Custom-built task management app | [https://www.roadmap-ui.com]() | My first instinct is to build the solution myself rather than find one that is already built. But this would require too much time | ❌ |
| GitHub Project | [https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects]() | This is the closest that I got, but it is not local and would require quite a bit of automation effort to link to my note-taking workflow | ❔|

So...no perfect solution... Back to the drawing board, but this time to generate a user requirements
list to actually know what I was looking for (which I should have done to begin with). My guiding
requirements were:

- Keep Daily notes **Today's Plan** as the source of truth for the list of priorities for the day
- My `second-brain` version controlled repository needs to be the source of truth for the tasks
- Tasks need to support linking to specific sections of Daily Notes and visa-versa
- Supports a Project structure to organize collections of tasks that spreads over multiple months
- Open source
- Nice-to-have: supports a calendar view

Throughout my search, the [_Getting Things Done_](https://gettingthingsdone.com/what-is-gtd/) system
was in the back of my mind as well as the manual actions that I already do in my Zettelkasten. I
came across a [blog post](https://pankajpipada.com/posts/2024-08-13-taskmgmt-2/) by Pankaj Pipada
with a manual approach to managing tasks. I decided to take a day and write out a possible system
that incorporated my current approach to using Zettelkasten, but expand it to support a new
_Project_ note type. I settled on the below definitions for the expanded note types and the how
Tasks would fit in. I have included excerpts from the journal entries in the **Resources** section
below.

| Term | Definition/Use |
| ---- | ---------- | 
| Daily Note | The source of truth for all notes on tasks or mid-form thoughts |
| Zettels | Highly linked "original" thoughts spurred from consuming media (preferably text) |
| Literature Note | Paraphrased ideas from media (most often text). Contains citation metadata |
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
│   ├── class-notes
│   │   ├── engm-510.md
│   │   ├── engm-520.md
│   │   ├── mbus-613.md
│   │   └── mbus-670.md
│   ├── ebook-scalable-swe-practices.md
│   └── mem-book
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

The main overhaul from the last version of the note taking system was the migration of the
**Backlog** section of the Daily Notes to a centralized `./tasks.md`. 

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
The Project backlog links to the Project Note for that project. If the project has yet to be
initiated, the Project backlog links to the list of journal entries in Daily Notes that pertain to
the project. Once the Project has been initiated, those journal links are moved into the Project
Note.

Individual backlog Tasks link back to the Daily Note where it originated to keep context of why I
created the note. The task tags are currently not used, but I have included them as a way of some
day filtering with a tool similar to [vault-tasks](https://github.com/louis-thevenet/vault-tasks).
Once the Task is completed, a link to the Daily Note where it was completed is added to the
"metadata" of the task and it is moved to the **Completed** section.

While the Project Note template is still under development, the current format looks like this:

```
# Project Name

Background information on the project or the problem.

[[journal/day1#thought]]
[[journal/day2#thought]]

## Goal 

The goal of the project to help prioritize the projects and make sure the right project is being
worked on at the right time. This answers the "Why are we do we need the project?" and "What is the
scope of the project?"


## Notes - Journal

- [[journal/day3#Project Thought]]


## Notes - Project

This is a random thought that needs to be captured and stored alongside the project for ease of
retrieval. 


## Tasks

### Backlog

- [ ] Task 1
- [ ] Task 2

### Completed

```

The links to journal entries in the background information contain thoughts around why the project
should be initiated. They are the ones that are moved from the `tasks.md` file when the project
is initiated. The **Notes - Journal** exists to support the **Notes - Thoughts** as the source of
truth for capturing fleeting thoughts throughout the day. They may not be valuable enough to add to
the project itself. The **Tasks** section is used the same way that `tasks.md` is used, but
constrained to the project context.

I wanted to allow for large projects/programs that included sub-projects. If a project gets too
large, the main project document can be renamed as `index.md` and moved into a new project directory
as seen in the directory structure above.

In general, this approach to task management and project management has required very little
overhead and been working out quite well with my Zettelkasten approach to note taking.


## Room for improvement

Retrieval of notes from journal entries is still a pain point. I am still using a fuzzy search in
NeoVim to search through the notes for specific keywords. With all of the text data that I have
created, I would like to experiment with a self-hosted RAG to be able to chat with my second-brain
and possibly even ask for generated task lists and the like. My third _Daily Journaling_ report will
probably come in about another three months once I have set up the RAG and experimented with it in
my workflow for a bit.

---

## Resources

### Journal Entry Excerpt - 2024-12-13

> My second-brain system is working well as it is. Instead of changing my workflow to adapt to a
> tool, I want tooling to expand my workflow. TaskWarrior seems extremely robust but feels
> disconnected from my personal workflow. And it feels like its focus is optimizing local
> productivity rather than long-term sustainability (however, I could be biased by the author of the
> intro video that I watched).
> 
> I am going to continue with building my own simple task manager system. The current system for
> short-term tasks seems to be working so they will remain in "Today's Plan". The additional user
> requirements are going to be surrounding the management of larger projects and backlog items.
>
> Projects should be their own type of note with a Tasks section. I currently have a few all
> following different formats. Some are a single markdown file, while others are directories, while
> other are sequential markdown files coupled on a specific class. The Project Note type needs to be
> expanded with a standardized definition and could be codified into a template.
>
> Using the ZK system that I am already for daily notes and zettels, I can expand this to also
> include Project notes (and possibly even literature notes to move them out of Zotero
>
> **Daily Notes:** the source of truth for all notes on tasks or mid-form thoughts
> **Zettels:** Highly linked "original" thoughts spurred from consuming media
>   (preferably text)
> **Literature Notes:** paraphrased ideas from media
> **Project Notes:** central place for managing related tasks
>
> Note that these definitions keep deliverables outside of the second-brain. Project work should
> happen in a different place (perhaps `~/projects`?). Only the notes and thoughts should be
> recorded in the second-brain.
>
> Projects should be small enough that manually managing the tasks via markdown is not too much
> work. If a project gets too big, it should be split out into smaller subprojects. Since Daily
> Notes are the source of truth for notes on task activities, those sections should be linked to
> from the project document. Other supporting sections like Requirements or Acceptance Criteria may
> be necessary to determine if/when a project is determined to be complete.
>
> It would also be beneficial to describe the different type of tasks that exist in the
> second-brain.
>
> **Daily Task:** A task that is small enough to be finished within a day.
> **Project Task:** A task that is related to a specific project. This will be
>   treated as a Daily Task when I add it to a day's plan and start working it.
> **Backlog Task:** An Daily Task that is not high enough priority to plan for
>   that day. 
> 
> Backlog Tasks should only be day-sized tasks. If a new project needs to be completed, the Backlog
> Task would be `Initiate New Project` rather than `Complete New Project`. Project initiation would
> include creating a new project document, defining the goals and requirements, and setting up the
> initial task list (possibly WBS?).
>
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

