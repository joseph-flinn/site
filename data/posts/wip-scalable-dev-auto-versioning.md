!! title: Scalable Development Processes - Automatic Versioning
!! slug: scalable-dev-versioning
!! published: 2023-08-14
!! description: The fourth article in the series of how to implement a simple but scalable solution to delivering more value faster to the end user

---
In the last few articles, we have been looking at how to implement scalable dev processes to support growing
organization sizes and deliver more value faster and how to sustain that velocity long term. So far, we have looked at
Continuous Integration and what that needs to look like to support the next processes. We walked through an example of
what CI would look like for a simple application. We then looked at Continuous Delivery and walked through an example
of CD with the same simple application. Before getting to Continuous Deployment, we are going to pause and talk about
software versioning and how to approach it in a Continuous Deployment world.


## What is versioning?

This seems like a simple question with a very obvious answer. However, I have seen versioning implemented incorrectly
more than I have seen it implemented correctly. Now, whoa whoa whoa. Versioning is an opinionated process: SemVer vs
CalVer vs iterating build numbers. How can I be confident in saying that most of the approaches on versioning software
that I have worked with are wrong without alientaing everyone that has chosen those specific ways of doing it? I am not
concerned with the versioning scheme, process, or implmentation that is used in versioning. Each has their strengths and
weaknesses in different scenarios. A misalignment of the implementation to the purpose of versioning is how versioning
is implemented incorrectly.

What does software versioning do? One might suggest _"to help track when changes are made to the software"_. Some
software uses date based versioning to show how up-to-date software is and help build support policies 
(I'm thinking of Ubuntu). Or maybe _"to help track when specific features were changed in the software"_.
Hypothetically, if we are updating and releasing the software with every change to trunk, our software has the
opportunity to be changing very rapidly and with partial features being deployed to Production behind feature flags.
What about _"showing compatibility between other software and hardeware"_? It's important to know what is required to
run the software as it changes.

Each one of these answers can be accurate in a certain scenario. However, I would like to suggest that they _all_ stem
from a single purpose: to communicate something to someone. When it is all boiled down, versioning is a communication
tool. To have effective versioning, one must consider who the audience is, what they care about, if they have any
expectations, and what information to convey.

Who are the stakeholders for the versioning of the project? There are internal stakeholders in the QA and Engineering
teams that might care about which version their testing and what is different between this version and that version. The
end user might care about which version of the software they are running to see if their hardware is compatible. And if
the project is an SDK or library for other engineers to use, they will definitely care about any changes to the
compatibilty of the project within their own. But in other cases, there are no version stakeholders. This site, while
under version control, does not have a specific released version.

Once the who has been identified, the what comes next. What is primary message that needs to be communicated to the
stakeholders? Keep the primary goal the focus of the approach to versioning. If by happenstance there is a secondary
communication benefit, that's great. But don't try to over engineer the message of the version itself. Do not be afraid
to have a secondary communication device used alongside the version to help the interested stakeholders understand
any additional communication goals that you might have. For example, a compatibility matrix could be useful to
communicate the compatibility between a version of the software and the type of hardware that it supports.


## How to approach in-software versioning in CI/CD

A lot of frameworks approach in-software versioning as a build-time configuration. This means that for the version to be
shown via the software interface (a `--version` on the cli or a footer with the version in it for a web app), it has to
be set before the artifact is built. Most approaches that I have seen sets and tracks the current version in SCM
alongside the code. This is a quick and easy way to track it with small teams. However, it does not scale to multiple
engineers pushing changes to trunk simultaneously. If two engineers push a minor version bump and a patch at the same
time, which one goes into the trunk first and which engineer has to fix the merge conflict in the file tracking the
version?

It wasn't until I read the article on the [GLEW](https://sam.gleske.net/blog/engineering/2019/11/12/git-low-effort-workflow.html) 
approach to implementing trunk based development that I realized that the software version should not be tracked in the
codebase in the trunk branch. 

The fifth factor in the [12 Factor App](https://12factor.net/build-release-run)
helps define the difference between build artifact and a release asset. 
