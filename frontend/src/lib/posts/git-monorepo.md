---
title: Git was not designed to support monorepos
slug: git-monorepo
published: 2023-07-17
description: >
  A discussion around why git was not designed for monorepos: when to use them and when to migrate

---

I work with monorepos in git on a daily basis and have learned through experience that git was not designed to support
monorepos. Can you build monorepos in git? Of course! There are some cases where I prefer a monorepo. However, there are
specific exit criteria that I use to determine when it is time to switch.


### Why use a monorepo

There are a few reasons that I've heard on why some engineers choose to use a monorepo. Let's explore each of these 
reasons a bit before jumping into how `git` was not designed to support them.


#### 1. Easier to add to an independent tool/service to existing repository

It is easier for an engineer to add a new tool or service to an existing repository where all of their tools have been
already been configured. Most repos have had configurations added to them to support linters, code formatters, editor
configurations, and other miscellaneous configuration files for other tools that integrate with `git` repos. There is
less friction creating a new directory in a repo that already has these configurations set up instead of copying and
pasting (**shudder**) them into a new repo, forgetting one, and having to go retrieve that one too.


#### 2. Prevents repo sprawl

At a certain point, there is such a thing as too many repos. When "Wait, which repo is that in again?" or "What was the
name of that repo again?" become a daily question, that is a signal that there are too many repos for the size of the
organization--or maybe a symptom of having a bit too much creative liberty with the naming of repos. Either way, there
is definitely something as having too many repos at the org level. 

The last team that I was on had over a hundred different repos for the different puppet modules that we had. And we had
a primary repo that controlled which version of the puppet modules were being used in which infrastructure environment.
I am not saying that this system was an incorrect setup. I am saying that it was a pain to have to remember which set of
five files was in each repo (Puppet modules have around ten files in them with the average lines of code being less than
a hundred). This seemed like too many active repos for a single team.


#### 3. Makes it easier to share reusable code

Reusable code in the same repo is the easiest way to share code. I've done it myself when working on small personal
arduino projects. Any changes to the `/lib` directory automatically get picked up by the projects using it. However, it
also automatically breaks them when breaking changes are added to the `/lib` directory. It also couples the different
projects together to help communicate which versions of which work together. Barring any bugs, version 1.2.0 of App1 and
App2 will work together because they were developed and tested together.


### Git was not designed for monorepos

Git was and is not designed for monorepos. The Linux Kernel community developed `git` in response to losing the
free-of-charge status of the DVCS called BitKeeper [[1](https://git-scm.com/book/en/v2/Getting-Started-A-Short-History-of-Git)].
The Linux kernel is a single project and as such there were specific design decisions made that work really well with a
single project repo, but does not work as well with a monorepo. The main decision that doesn't work well is git tags.

A git commit is a reference to the state of the git tree at any one time. A git tag is an easier human readable
reference to a commit. These references are helpful, even in some monorepos that have tightly coupled applications that
require being coupled. However, as soon as they are treated as separate entities, tagging the entire repo together no
longer makes sense. If you can release version 1.3.1 of App1 and nothing has changed between version 1.3.1 and 1.3.0 of
App2, git tagging has broken. The main purpose of a version is to alert that there is a difference in the application.
If that communication tool is misused and the version fails to do its primary function, then there is no longer a purpose
for versioning those applications.

To overcome this issue, it has been proposed to use a monorepo naming standard like "app1-1.3.1" and "app2-1.3.0". This
can work to get around git not being designed to support monorepos. While it can work, I would mention that it feels bad
to tag the entire tree of the monorepo to update a single project in the repo.

There are more technical issues in git for supporting monorepos that Atlassian goes into more depth in their article
"[Monorepos in git](https://www.atlassian.com/git/tutorials/monorepos)".


### Resulting Pain Points

There are some workarounds to get to a point where git can be adapted to host monorepos. However, those adaptions cause
later pain points. 

#### 1. Industry Standard CI/CD flows

Monorepos primarily exist in two states, either tightly coupled applications sharing code or fully independent
applications coupled through the repository. Low coupled applications have been found to be correlated with high rates
of value delivery to end users.([Accelerate, Nichole Forsgren et al.](https://www.oreilly.com/library/view/accelerate/9781457191435/)). 
The reverse correlation also stands: highly coupled applications are correlated with lower rates of value delivery to
end users.

The technical solutions to help decouple applications and build in quicker feedback loops along the value stream assume
a single project to repo ratio. Multiple CI/CD flows are required to support a monorepo and more complex logic is needed
to determine when to run those flows and when not to run others. In my experience, it takes a lot of effort to tweak the
configuration to get it right, only to have the needs change for one/all of the projects later with some new dependency
or shared library.

In addition to this, most monorepo structures are very custom to support the specific projects that they hold. Because
of these snowflake designs, industry patterns using the available CI/CD tools may not work for the project. Every
adventure into the CI/CD world of the monorepo becomes a balancing act because there are constraints between the
projects and the pipelines for those projects.


#### 2. Automatic Dependency Management

It has become common practice to use an automated dependency manager to keep project dependencies up-to-date. GitHub's
Dependabot and Renovate are a couple of examples. As of today, neither of these leaders in dependency management support
the `<app>-<version>` standard of tagging of monorepos. If the software that is in the monorepo is used in other
software (library, sdk, GitHub Action, Dockerfile, Helm Chart), project specific tags cannot be used as a source. I
don't believe this will always be the case. Renovate currently has a [feature request open](https://github.com/renovatebot/renovate/issues/14546) 
to add such support. But that support is not yet available.


### Key indicators to migrate

Even with all of the above seeming to point away from monorepo use, I routinely create and use monorepos. I believe in
delivering value as fast as possible and also using the right tool for the job. That being said, I do have key
indicators or exit criteria for when to look to migrate away from the monorepo.


#### 1. Git Tagging and Release

As soon as I need to start tracking the version of a project with a git tag for internal or external release, it is time
to make a dedicated project repository. The tagging becomes streamlined and the CI/CD becomes more manageable. But the
biggest value add is the long term maintainability. A simple structure with simplified CI/CD is a lot easier to manage
long term. It does not require almost-constant tweaking with the risk of breaking CI/CD pipelines for other projects.


#### 2. Lines of Code

When a single project in a monorepo gets large enough, it needs its own streamlined CI/CD. A lot of times this will go
hand-in-hand with tagging and releasing (what project gets that large that isn't tagged and released?), but sometimes it
doesn't. When a project gets to about five thousand lines of code it is time to create a dedicated repository.


### Migration

To migrate away from a monorepo, use the idea of [Evolutionary Architecture](https://evolutionaryarchitecture.com/) to 
find the projects that can easily be removed from monorepo and moved out to its own. Then find the loosely coupled
applications which are coupled, but not highly coupled and move them out to their own. Project by project, eventually
the repo structure will evolve from a monorepo to independent repos.

To help specifically with the use case where a monorepo was used to easily share code, move the shared code to a library 
project and use [Minimum Viable CD](https://minimumcd.org/minimumcd/) to automatically release changes of the shared
code and "publish" it where the independent projects can get it. As soon as all tests pass, the change is merged, and
the project has been built, it will be available for consumption which removes the need for sharing code between apps
via a monorepo.

Stay tuned for the next article where I go in depth of a full streamlined CI/CD flow example of separate projects
depending on a central library, all with their own repos.
