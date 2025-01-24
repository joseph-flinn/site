---
title: [Manager Retro] Success - Non-production Launch
slug: retro-success-non-prod-launch
published: 2024-05-25
description: >
  Reflection and gratitude from the lessons learned from the first non-production environment
  project

---

One of the first large projects that my team undertook was to create a staging environment for
testing changes prior to deploying to production. As expected, this environment helped greatly in
the catching of issues prior to them getting deployed to production.

This project was a challenge. There was very little documentation on how the system worked and what
roles the different pieces played. Looking at the infrastructure that was built in the cloud and
replicating it was relatively easy. It took about two weeks to complete. However, it then took
another four months to get a fully working environment that looked like production. The development
team had little-to-no capacity to assist with explaining the different configuration value options.
The rest of the project was four months of reverse engineering how the system worked, how it needed
to be configured, and then immortalizing it in code so that it would not have to be reverse
engineered again.

Finally after many long months of building out infrastructure, building out deploy pipelines for the
environment--something that also had not existed in production--and having the QA team verify that
it was working as expected and something was not missed, we launched the environment. 

It took a few months to build confidence in the accuracy of the environment. Every time the QA team
ran into an error, they sent it to us to see if it was an environment configuration issue or a code
issue. During the extended hand-off phase, there were quite a number of configuration issues, and we
even found undocumented infrastructure in production that was missing from the non-production
environment. All of these issues built a mistrust in the level of replication that this new
environment had. However, after many months, all of the configuration bugs had been found and fixed
and the confidence in the environment grew and it became a lot more useful in the SDLC process.

The expected value of catching issues before getting to Production was not the only added value of
the environment. Up until that point, there had been little documentation on what the actual system
looked like, all of the pieces that were required, or what parts they played. There was a time where
the most senior engineers were arguing what a service actually did and how it worked. The
non-production environment helped definitively explain all of the parts of the environment and their
roles in the overall system.


## Gratitude

There were many lessons to be learned through the challenges. One of the biggest lessons was the
importance of system documentation and data flow diagrams through the system. As an operator, I
do not need to understand the inner workings of all of the pieces of the system, but I do need to
be able to where the boundaries are between systems, what those systems do, and how they do it.
It often seems like the easiest way to do this from the developer's perspective is to read the code.
However, reading tens to hundreds of thousands of lines of code would take years to fully build up a
working mental model if not actively developing in that codebase. 

I am also grateful for learning the importance of experimentation. There were new problems that
arose in the non-production environment that required novel solutions relative to the production
environment. At that time, a single deploy to production took half a day. The non-production
environment needed to be deployed to multiple times a day. If it took half a day to update
non-production, it would useless half of the time. We were able to solve the multi-hour deploy time
in non-production and then apply the same solution to production. This pattern repeated itself with
other processes between the two environments over the next few years.
