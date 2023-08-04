!! title: Scalable Development Processes - Continuous Integration (CI)
!! slug: scalable-dev-integration
!! published: 2023-07-31
!! description: The second article in the series of how to implement a simple but scalable solution to delivering more value faster to the end user

---
CI, or Continuous Integration, is our first deep dive topic. There is only one primary goal of CI: shorten
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
wisdom in the automation world is: "the simpler the process, the less places where the automation of that process can
break". This is the same idea in the world of software testing where every branch in the logic introduces the opportunity
for a bug. The goal of clean and robust automation is to get the simplest process possible. If there are less places
where something can go wrong, the less things will go wrong. 

When it comes to branching strategies, trunk based is the simplest in terms of state and what actions you can operate on
those states. Everyone gets their copy of the code from the same place and everyone puts their updates in the same
place. If a new feature is being developed, branch from the trunk, add some code, and merge it back to the trunk. If
Production is broken or has a bug, branch from the trunk, fix the bug, and merge it back to the trunk. All changes to
the code follow the same process no matter what. 

Trunk based is very different from something like GitFlow where you branch off `dev` to do your work to create a feature
branch, then merge all of your work (possibly through PRs) into the feature branch, merge the feature branch into `dev`,
and then merge `dev` into `main` when you are ready to create a release. All of these states and different targets is a
very hard process to automate. If you do go down the road of automating it (it isn't impossible), what you will most
likely find is that there are a handful of GitFlow-at-your-organization experts who truly understand the overall
process and all of the edge cases while the rest of the engineers stay in their silos: branch from `dev`, merge to feature
branch, merge to `dev`, and then let someone else figure out how and when to create a release.

[Trunk Based Development](https://trunkbaseddevelopment.com/) has all of the resources you might need to get a better
understanding of different ways of implementing a trunk based development branching strategy. 


### Work Integration

Trunk based development enables a new definition of what work can look like when integrated into the trunk. In a
branching strategy like GitFlow, we have branches called "feature branches". This name implies that there is a full
feature within the branch and that the full functionality will exist before integrating with other engineer's work. When
using trunk based, work should be complete, but defined in a smaller scope. Work does not need to be a full feature that
is tested independent of the final integration to the trunk (this will require more testing than might be needed), but
just complete enough to not break the current delivered work. An example of this might be an addition of a method and a
small suite of unit tests that enables other work on the feature.

What if we don't want new work to be available yet? Feature flags become an important part of the development techniques
when using trunk based development. Feature flags are very important to decouple the process of integrating code from
the change running where it is deployed.

What if the work being merged is a refactor that might break a lot of places and needs thorough testing? Great question!
Let's move on to the next section and see.


## Automated Testing

One of the goals of CI in conjunction with trunk based development is to keep the trunk in an always deployable state.
This is why all work going into the trunk stops if the trunk is broken. How do we minimize the number of times this
happens? Automated testing! However there are a few things to keep in mind. We want to run tests with each PR and with
each update to the PR. However, running a full test suite for every update will take too long to run. We need to
effectively segregate the tests in a way that makes sense where the end state of the CI is a trunk that is not broken.

Martin Fowler does a great job at breaking down a good approach to [Automated Testing](https://martinfowler.com/articles/practical-test-pyramid.html). 
While he mentions the name of the layers don't really matter, he also mentions that taking the approach of the testing
pyramid is important. The big idea of his article is to write _a lot_ of small fast running tests that don't depend on
other services being up (mostly known as Unit Tests), write less tests that depend on other services running, and write
even less end-to-end tests. Each one of these takes more effort, time, and money to run. Running all three types (and
possibly others) on every commit prior to merging the trunk will defeat the primary goal of CI: minimize the feedback
loops for development. 

Unit tests should be run locally by the developer, but will also be run on every latest commit to an open PR to
guarantee that they have been run previous to a merge. This job should also block the PR merge from happening. Any other
testing that is relatively quick to run can also be added to the CI previous to the PR merging to the trunk. An
alternative could be setting up the unit tests on a pre-push hook to run locally instead of waiting for the code to be
pushed and run in the cloud. Local machines will probably help decrease the feedback loop a bit. However, if this is
chosen, there should still be a suite of tests that run on in the CI as a quick validation.

End-to-end tests should only be run on the trunk. If the time to run the end-to-end tests is
less than the velocity of merges to trunk, there shouldn't be too many race conditions with different PRs being merged
to trunk. However, if the velocity starts increasing to where there are many versions of the e2e tests running
simultaneously, more advanced techniques will be needed. Such a technique might be an automated merge queue where testing is done on
multiple new commits at the same time before getting merged to trunk (this is the technique that GitHub uses to maintain
their high velocity and even 
[have this capability for repos in GitHub](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue)).
Taking a quick peek to CD, these e2e tests need to pass before a deployment kicks off. If they fail, an alert is sent
out and it needs immediate testing with all new merges blocked.


## Code

I've created an example project to follow along with in this series: [https://github.com/joseph-flinn/scalable-dev-processes-example](https://github.com/joseph-flinn/scalable-dev-processes-example).
The project itself is a very simple REST api built in Python providing three endpoints to give us a bit more interesting
things to test than just a hard coded value. Under the `tests` directory, there are two suites of tests: `unit` and
`e2e`. As described above, they each test different parts of the application. Since this example is only a REST api, the
unit testing and the end-to-end tests look very similar. These would look very different if this was an MVC app where
there is a UI component to test in the end-to-end portion. 

Here, I am using `unit` to test the application code a function that is not directly exposed by the REST api. While the
testing code might look very similar, the end-to end testing takes on the different perspective of
running the tests against the resulting container image that we build. This container image is what we will be either
publishing for others to use or deploying into Production. Even if the unit tests pass, we cannot assume the end-to-end
ones will because the container definition could change.

For the CI portion of the example, there are two files in particular to call attention to:
`.github/workflows/CI-feature-branch.yml` and `.github/workflows/CI-main.yml`


```yaml
# .github/workflows/CI-feature-branch.yml

---
name: on PR
run-name: "CI - ${{ github.event.pull_request.title }}"

on:
  pull_request: 
    types: [opened, edited, synchronize]
  workflow_dispatch: {}


jobs:
  test-unit:
    uses: ./.github/workflows/_test_unit.yml
    with:
      python-version: "3.11"
```

Whenever a PR is opened or updated, the unit tests will run. The PR is blocked from merging until this jobs passes.


```yaml
# .github/workflows/CI-main.yml

---
name: on merge
run-name: "CI - main"


on:
  push:
    branches:
      - main
  workflow_dispatch:
    inputs: {}


jobs:
  test-unit:
    uses: ./.github/workflows/_test_unit.yml
    with:
      python-version: "3.11"


  pr:
    name: Get PR ID
    runs-on: ubuntu-22.04
    outputs:
      id: ${{ steps.pr.outputs.id }}
    steps:
      - name: Get PR ID
        id: pr
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          commit_message=$(
            curl -s -L \
              -H "Accept: application/vnd.github+json" \
              -H "Authorization: Bearer $GH_TOKEN" \
              -H "X-GitHub-Api-Version: 2022-11-28" \
              https://api.github.com/repos/${{ github.repository }}/commits/${{ github.sha }} | \
            jq -r ".commit.message"
          )
          ID=$(echo "$commit_message" | head -1 | grep -o "(#.*)" | grep -o "[0-9]*")
          echo "id=$ID" >> $GITHUB_OUTPUT
            

  version:
    needs:
      - pr
    uses: ./.github/workflows/_version.yml
    with:
      is-release: true
      pull-request-number: ${{ needs.pr.outputs.id }}


  build:
    needs:
      - version
      - test-unit
    permissions:
      packages: write
      contents: read
    uses: ./.github/workflows/_build.yml
    with: 
      is-release: ${{ needs.version.outputs.is-release == 'true' }}
      python-version: "3.11"
      version: ${{ needs.version.outputs.version }}


  test-e2e:
    needs:
      - build
      - version
    uses: ./.github/workflows/_test_e2e.yml
    with:
      python-version: "3.11"
      version: ${{ needs.version.outputs.version }}
```

There's quite a bit to go through here, so let's walk through job by job. 

First, there's a rerun of `test-unit` from the CI on the feature branch. We do this because we don't know what else has
been merged to the trunk since we last run CI on our PR. On a team with processes to support higher velocity, another
branch getting merged before this one might happen so frequently that we need to look into those merge queues. However,
in a team with less velocity--one that's looking to start adopting these techniques--we can't really predict when this
might happen. So I am defaulting to running those fast tests here to be safe.

Next, in `pr`, we collect the PR number that triggered this merge to main as metadata to use to compute the version. We
do this in the next step `version`. We'll do a deep dive into this process and why we'd want to use it in an upcoming 
article. For now, let's keep it an abstract idea where that job computes the next version and has it ready for any
coming jobs that need to know what version of the project we are currently working to build.

The next job is `build`. For this project specifically, we build a versioned container image and push it to the local
package registry. We also make a slight code/configuration change to build in the correct version of the package as
well. We'll dive deeper into why in the automated version bumping post in a couple of weeks.

After we have a build artifact, we need to run our end-to-end tests on it! The next job, `test-e2e` does just that. It
spins up the newly built container and runs a separate end-to-end test suite against it. This simulates what we'd see in
a live Production environment.

---

## Conclusion

The primary goal of CI is to minimize the developer feedback loop to increase velocity of value to the trunk branch. The
techniques of trunk based development and the different automated testing is used to keep the trunk branch stable with
the increased velocity to keep the trunk in a constantly deployable state.
