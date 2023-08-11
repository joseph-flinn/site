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

This seems like a simple question with a very obvious answer. However, most of the projects that I have worked on have
not approached versioning from the most effective direction. There are a lot of different versioning schemes out there: 
SemVer vs CalVer vs iterating build numbers. The most effective approach to versioning is aligning the implementation to
the primary message that needs to be communicated to all of the project stakeholders.

Let's take a small step back and look at a few perspectives around project versioning. What does software versioning do?
One might suggest _"to help track when changes are made to the software"_. Some software uses date based versioning to
show how up-to-date software is and help build support policies (I'm thinking of Ubuntu). Or maybe _"to help track when
specific features were changed in the software"_. Hypothetically, if we are updating and releasing the software with
every change to trunk, our software has the opportunity to be changing very rapidly and with partial features being
deployed to Production behind feature flags. What about _"showing compatibility between other software and hardeware"_?
It's important to know what is required to run the software as it changes.

Each one of these answers can be accurate in a certain scenario. However, I would like to suggest that they _all_ stem
from a single purpose: to communicate something to someone. When it is all boiled down, versioning is a tool to
communicate with all project stakeholders about changes to the software. To have effective versioning, one must consider
who all of the audiences are, what they care about, if they have any expectations, and what information to convey.

Who are the stakeholders for the versioning of the project? There are internal stakeholders in the QA and Engineering
teams that might care about which version their testing and what is different between this version and that version. The
end user might care about which version of the software they are running to see if their hardware is compatible. And if
the project is an SDK or library for other engineers to use, they will definitely care about any changes to the
compatibilty of the project within their own. But in other cases, there are no version stakeholders. This site, while
under version control, does not have a specific released version.

Once the _who_ has been identified, the _what_ comes next. What is primary message that needs to be communicated to the
stakeholders? Keep the primary goal the focus of the approach to versioning. If by happenstance there is a secondary
communication benefit, that's great. But don't try to over engineer the message of the version itself. Do not be afraid
to have a secondary communication device used alongside the version to help the interested stakeholders understand any
additional communication goals that you might have. For example, a compatibility matrix could be useful to communicate
the compatibility between a version of the software and the type of hardware that it supports.


## How to approach in-software versioning in CI/CD

A lot of frameworks approach in-software versioning as a build-time configuration. This means that for the version to be
shown via the software interface (a `--version` on the cli or a footer with the version in it for a web app), it has to
be set before the artifact is built. Most approaches that I have seen sets and tracks the current version in SCM
alongside the code. This is a quick and easy way to track it with small teams. However, it does not scale to multiple
engineers pushing changes to trunk simultaneously. If two engineers push a minor version bump and a patch at the same
time, which one goes into the trunk first and which engineer has to fix the merge conflict in the file tracking the
version?

Automation seems to be the solution. The engineers can mark their change on how the version should change when their
change is merged in and automation can calculate what the end version should be without the engineer needing to figure
it out. This can even be implemented in a [merge queue](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue) 
implementation. But one question remains unsolved: for the frameworks that require a version in the codebase, how do we
update it without risking a conflict? The version automation could be built to commit and merge a version bump straight
to trunk, but in a high velocity repo that might conflict with other PRs coming in and updating the version.

It wasn't until I read the article on the [GLEW](https://sam.gleske.net/blog/engineering/2019/11/12/git-low-effort-workflow.html) 
approach to implementing trunk based development that I realized that the software version should not be tracked in the
trunk. Instead, git tags are used for the version source of truth. The third and fifth factors in the 
[12 Factor App](https://12factor.net/build-release-run) helps conceptualize the difference between a build artifact and
a release asset: application configuration should not be stored in the codebase alongside the app, but should be stored
elsewhere and packaged later with the build artifact to create the final release asset. In the SaaS world, this is a
trivial problem to solve since backend applications can rely on the environment variables for configuration and the web
app can rely on their backend application to provide the correct configuration (a future article will show how to
implement such a strategy). 

There is a drawback to this approach. The version will never be tracked in trunk, so it will never be in the git
history. For most applications, the git tags should be sufficient to track history, but there may be use cases where it
is required. Those use cases would require some custom work to get to a scalable development process or to deprecate
that use case. 


## Implementing Auto Versioning

There is a great tool called [GitVersion](https://gitversion.net/docs/) that takes an approach to adding to calculating
the version from nothing but git history and special commit messages. They provide some robust configuration and tooling
around implementing their approach. However, I think there is a process improvement that could be done. There are a few
things that I do not trust myself to do as an engineer: remember to add the special commit message, mistakenly adding
multiple on the same branch, and spelling the keywords correctly. There are also the questions about how to bubble this
up to the PR description and how to handle if the version bump calculation is set incorrectly by the change. These are
not impossible things to solve and all of them can be solved with automation. However, remembering the golden rule of
automation, the process seems to be getting more complex. While something like GitVersion definitely works, I would 
suggest using PR labels. They provide solutions to the friction points listed and also provide a bit more of a intuitive
developer experience.

Here's an example of such an implementation for GitHub specifically that is being used in the example project:

```yaml
# .github/workflows/_version.yml

---
name: _version
run-name: Calculate Version

on:
  workflow_call:
    inputs:
      is-release:
        type: boolean
        required: true
      pull-request-number:
        type: string
        required: true
    outputs:
      version:
        description: "version to be built"
        value: ${{ jobs.version.outputs.version }}

jobs:
  version:
    name: Calculate Version
    runs-on: ubuntu-22.04
    outputs:
      version: ${{ steps.calculate.outputs.version }}
    steps:
      - name: Checkout Repo
        uses: actions/checkout@8e5e7e5ab8b370d6c329ec480221332ada57f0ab  # v3.5.2
        with:
          fetch-depth: 0

      - name: Get version bump type
        if: ${{ inputs.is-release }}
        id: bump-type
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          version_tag=$(
            curl -s -L \
              -H "Accept: application/vnd.github+json" \
              -H "Authorization: Bearer $GH_TOKEN" \
              -H "X-GitHub-Api-Version: 2022-11-28" \
              https://api.github.com/repos/${{ github.repository }}/issues/${{ inputs.pull-request-number }}/labels | \
            jq -r ".[].name" | grep "version"
          )

          # Single Version label Enforcement (should go in CI...) 
          if [[ $(echo $version_tag | wc -w) -gt 1 ]]; then
              echo "[!] multiple version labels found!"
              exit 1
          fi

          version_type=$(echo $version_tag | cut -d ":" -f 2)
          echo "Version Bump Type: $version_type"
          echo "type=$version_type" >> $GITHUB_OUTPUT

      - name: Calculate next version
        id: calculate
        env:
          VERSION_TYPE: ${{ steps.bump-type.outputs.type }}
        run: |
          echo -e "\nCalculating next version..."

          latest_tag_version=$(git tag --sort=committerdate --list | tail -1)
          latest_version=${latest_tag_version:1}  # remove 'v' from tag version

          if [[ "${{ inputs.is-release }}" == "true" ]]; then
            latest_major_version=$(echo $latest_version | cut -d "." -f 1)
            latest_minor_version=$(echo $latest_version | cut -d "." -f 2)
            latest_patch_version=$(echo $latest_version | cut -d "." -f 3)

            echo "  latest_version:  $latest_version"
            echo "  latest_major_version: $latest_major_version"
            echo "  latest_minor_version: $latest_minor_version"
            echo "  latest_patch_version: $latest_patch_version"

            if [[ "$VERSION_TYPE" == "major" ]]; then
              next_version="$(($latest_major_version + 1)).${latest_minor_version}.${latest_patch_version}"
            elif [[ "$VERSION_TYPE" == "minor" ]]; then
              next_version="${latest_major_version}.$(($latest_minor_version + 1)).${latest_patch_version}"
            elif [[ "$VERSION_TYPE" == "patch" ]]; then
              next_version="${latest_major_version}.${latest_minor_version}.$(($latest_patch_version + 1))"
            else
              next_version="${latest_major_version}.${latest_minor_version}.${latest_patch_version}"
            fi

            echo "Next Version: $next_version"
            echo "version=$next_version" >> $GITHUB_OUTPUT
          else
            echo "version=$latest_version+${{ inputs.pull-request-number }}" >> $GITHUB_OUTPUT
          fi
```

In the GitHub repo, I have set up four Isssue labels: `version:major`, `version:minor`, `version:patch`, and
`version:skip`. The first step of the job is grabbing the label from the PR that triggered this workflow run and setting
is as an output to use later.

The next step of the job is getting the latest git tag and then calculating the next tag to create from the output of
the first job. For example, if the latest git tag is `v1.24.3` and the PR label is `version:minor`, the resulting
calculated version will be `v1.25.0`. 

Once the version is calculated, it is past back to the `_build.yml` (via the `CI-feature-branch.yml` or `CI-main.yml`
orchestrating workflows) and is saved and built into the artifact. The version change is not committed or pushed back to
the codebase in either a detached state or in the trunk.

```yaml
...

      - name: Save version
        run: |
          cat version.json | jq '. + {"version": "${{ inputs.version }}"}' > tmpVersion.json
          mv tmpVersion.json version.json

          cat version.json

...
```

