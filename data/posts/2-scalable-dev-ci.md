!! title: Scalable Development Processes - CI
!! slug: scalable-dev-ci
!! published: 2023-07-31
!! description: The second article in the series of how to implement a simple but scalable solution to delivering more value faster to the end user

---
CI, or Continuous Integration, is our first topic to do a deep dive on. There is only one primary goal of CI: shorten
the feedback loop for developers. The faster a developer can get feedback on the quality of code, the faster changes can
be made to maintain that quality. Faster feedback loops decreases the likelihood of bugs introduced from context
switching, decreases the likelihood of merge conflicts, increases the velocity of work into the trunk branch, and
increases the stability of the project. All of these things are foundational to the next topic of CD.

[MinimumCD](https://minimumcd.org/minimumcd/) lists a few things that are required for effective CI:

- Trunk based development
- Work is integrated to trunk at least once a day
- Automated testing before code integration 
- Automated testing after code integration 
- All feature work stops when build on trunk is red
- New work does not break delivered work


## Trunk based development 

I've worked in few different branching strategies over the years; GitFlow, GitHub Flow, and even some custom in-house
branching strategies to solve the problem of environment promotion for IaC of SAP systems. The number one piece of
wisdomin the automation world is: "the simpiler the process, the simpler the automation". This is the same idea in the
world of software testing that every branch in the logic introduces the opportunity for a bug. The goal of clean and
robust automation is to get the simplest process possible. If there are less places where something can go wrong, the
less things will go wrong. 

When it comes to branching strategies, trunk based is the simplest in terms of state and what actions you can operate on
those states. Everyone gets their copy of the code from the same place and everyone puts their updates in the same
place. If a new feature is being developed, branch from the trunk, add some code, and merge it back to the trunk. If
Production is broken or has a bug, branch from the trunk, fix the bug, and merge it back to the trunk. All changes to
the code follow the same process no matter what. This is very different from something like GitFlow where you might be
branching off `dev` to do your work to create a feature branch, then merge all of your work (possibly through PRs) into
the feature branch, merge the feature branch into `dev`, and then merge `dev` into `main` when you are ready to create a
release. All of these states and different targets are a very hard process to automate. If you do go down the road of
automating it (it isn't impossible), what you will most likely find is that there are a handful of
GitFlow-at-your-organization experts who truly understands the overall process and all of the edge cases and the rest of 
the engineers stay in their silo: branch from `dev`, merge to feature branch, merge to `dev`, and then let someone else
figure out how and when to create a release.

[Trunk Based Development](https://trunkbaseddevelopment.com/) has all of the resources you might need to get a better
understanding of different ways of implementing a trunk based development branching strategy. 


### Work Integration

Trunk based development enables a new definition of what work can look like when integrated into the trunk. In a
branching strategy like GitFlow, we have branches called "feature branches". This name implies that there is a full
feature within the branch and that the full functionality will exist before integrating with other engineer's work. When
using trunk based, work should be complete, but defined in a smaller scope. Work does not need to be a full feature that
is tested independent of the final integration to the trunk (this will require more testing that is needed), but just
complete enough to not break the current delivered work. An example of this might be an additon of a method and a small
suite of unit tests that enables other work on the feature.

What if we don't want new work to be available yet? Feature flags become an important part of the development
techniques when using trunk based development. Feature flags are very important to decouple integrating code (and
eventually deploying that code automatically) and enabling the change to start running where it is deployed.

What if the work being meregd is a refactor that might break a lot of places and needs thorough testing? Great question!
Let's move on to the next section and see.


## Automated Testing

One of the goals of CI in conjunction with trunk based development is to keep the trunk in an always deployable state.
This is why all work going into the trunk stops if the trunk is broken. How do we minimize the number of times this
happens? Automating testing! However there are a few things to keep in mind with automated testing. We want to run
automated testing with each PR and update to PR. However, running a full test suite will probably take too long to run
on every commit. How do we effectively segregate the tests in a way that makes sense where the end of the CI is a
trunk that is not broken?

Martin Fowler does a great job at breaking down a good approach to [AutomatedTesting](https://martinfowler.com/articles/practical-test-pyramid.html). 
While he mentions the name of the layers don't really matter, taking the approach of the testing pyramid is important.
The big idea of his article is to write _a lot_ of small fast running tests that don't depend on other services being up
(mostly known as Unit Tests), write less tests that depend on other services running, and write even less end-to-end
tests. Each one of these takes more effort, time, and money to run. Running all three types (and possibly others) on
every commit prior to merging the trunk will defeat the primary goal of CI: minimize the feedback loops for development. 

Unit tests should be run locally by the developer, but will also be run on every latest commit to an open PR. Testing
that requires other services from being up should also be run on each latest commit to an open PR. An alternative could
be setting up the unit tests on a pre-push hook to run locally instead of waiting for the code to be pushed and run in
the cloud. Local machines will probably decrease the feedback loop a bit. End-to-end tests only be run on the trunk. If
the time to run the end-to-end tests is less than the velocity of merges to trunk, it would be pretty easy to set them
up to run for each change to trunk. If the velocity starts increasing to where there are many versions of the e2e tests 
are running simultaneous, more advanced techniques will be needed, something like automated merge queue where testing 
is done on multiple new commits at the same time before getting merged to trunk (this is the technique that GitHub uses
to maintain their high velocity and even 
[have this capability for repos in GitHub](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue)).
Taking a quick peek to CD, these e2e tests need to pass before a deployment kicks off. If they fail, an alert is sent
out and it needs immediate testing with all new merges blocked.

## End State

The end state of the CI portion of the automation is a build artifact from the trunk that has passed all of the
automated tests and is ready for direct deployment. When going to deploy, whether it is with CD or with a manual
deployment process, the artifact should NOT need to be rebuilt. The bits that have been tested are the bits that should
be deployed. 

## What might this look like?

---

## Conclusion

The primary goal of CI is to minimize the developer feedback loop to increase velocity of value to the trunk branch. The
techniques of trunk based development and the different automated testing is used to keep the trunk branch stable with
the increased velocity to keep the trunk in a constantly deployable state.
