---
title: "Scalable Development Practices - CD (Delivery)"
slug: scalable-dev-delivery
published: 2023-08-07
description: >
  The third article in the series of how to implement a simple but scalable solution to delivering
  more value faster to the end user

---
In the last article, we did a deep dive on CI to prep us for the conversation about CD and how it can be implemented. 
As [MinimumCD](https://minimumcd.org/minimumcd/) shows, CI is required to realize all of the benefits of effective CD.
If you haven't already, give 
[_Scalable Development Practices - CI_](/posts/scalable-dev-ci) a read.

CD has come to mean two different things: Continuous Delivery and Continous Deployment. As we discussed in 
[_Scalable Development Practices - Overview_](/posts/scalable-dev-overview), the difference between
continuous delivery and continuous deployment is the number of manual steps in the pipeline from the time where a
software engineer commits a change to the trunk branch and when it appears in Production. Here, Production can be
defined as the end state where value is handed over to the end user. While a hosted application is what is normally
referred to as having a Production, I expand the definition to also include any form of released library or SDK.

Continuous Delivery is a precursor to Continuous Deployment. While Continuous Deployment is sexy, let's focus on
Delivery first and deliver incremental value. Having Delivery in the processes while working on implementing Deployment
will allow for the benefits of this approach to start being used and value to start being obtained in contrast to a full
rollout after the entire process has been automated from front to back. It will also help encapsulate Delivery and
Deployment separately to set us up to be flexible on where we are targeting the deployment. For instance, if Production 
platform technologies change, only the Deployment portions of the process will need to be updated.

## Continuous Integration & Continuous Delivery

Continuous Integration and Continuous Delivery work very closely together. Integration's goal is to provide fast
feedback to engineers on how their code interacts with the current code and verifies that it will not break. Continuous
Delivery takes the new combined code after all of the CI tests pass and packages it up to create an artifact. That 
artifact is signed off and ready to be run through the deploy processes. Continuous Delivery runs immediately after the CI
tests have all passed (including the desired end-to-end tests) to build that artifact and push it to a place where the
deploy process expects it to be.

Since we are running trunk based development where the trunk is assumed to always be in a deployable state, every update
to the trunk should have a corresponding build artifact that is ready to be configured and deployed. During the deploy process,
there should be not be any more artifact building. If this was the case, the artficats would not necessarily be fully tested
signed off. If the deploy process includes rebuilding and retesting, this also increases the length feedback loop to Production 
and slows down value delivery.

## Code

Continuous Integraiton and Continuous Delivery work so close together that I put them in the same pipeline. For the
running example, we are going to add a job to the end of `CI-main.yml` that pushes the already-built package to a
predetermined place where the deployment process can pick it up.

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

  ...

  release:
    needs:
      - version
      - test-e2e
    permissions:
      contents: write
    uses: ./.github/workflows/_release.yml
    with:
      is-release: ${{ needs.version.outputs.is-release == 'true' }}
      version: ${{ needs.version.outputs.version }}
```


Drilling into `_release.yml`:

```yaml
---
name: _release
run-name: Release ${{ inputs.version }}


on:
  workflow_call:
    inputs:
      is-release:
        type: boolean
        required: true
      version:
        type: string
        required: true


jobs:
  release:
    name: Release
    runs-on: ubuntu-22.04
    permissions:
      contents: write
      packages: write
    steps:
      - name: Checkout repo
        uses: actions/checkout@c85c95e3d7251135ab7dc9ce3241c5835cc595a9  # v3.5.3
        with:
          fetch-depth: 0

      - name: Create Tag
        if: ${{ ! inputs.is-release }}
        run: |
          git config --local user.email "<>"
          git config --local user.name "DevOps Bot"

          git tag v${{ inputs.version }}
          git push origin v${{ inputs.version }}

      - name: Create release
        if: ${{ inputs.is-release }}
        uses: ncipollo/release-action@a2e71bdd4e7dab70ca26a852f29600c98b33153e  # v1.12.0
        with:
          commit: ${{ github.sha }}
          tag: "v${{ inputs.version }}"
          name: "Version ${{ inputs.version }}"
          body: "Releasing ${{ inputs.version }}"
          generateReleaseNotes: true
          token: ${{ secrets.GITHUB_TOKEN }}
          draft: true

      - name: Login to GitHub Container Registry
        uses: docker/login-action@465a07811f14bebb1938fbed4728c6a1ff8901fc  # v2.2.0
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Run latest image
        run: |
          VERSION_IMAGE=ghcr.io/${{ github.repository }}/example1:${{ inputs.version }}
          NEW_LATEST_IMAGE=ghcr.io/${{ github.repository }}/example1:latest

          docker pull $VERSION_IMAGE
          docker tag $VERSION_IMAGE $NEW_LATEST_IMAGE
```

In `CI-main.yml`, if all of those tests pass, we feel good about tagging and releasing that version on GitHub. In the
`release` job, we create that GitHub Tag, Release, and publish the newest versioned container to the GitHub container
registry as well as update the `latest` container image to point to the versioned container built in this flow. We now
have a fully tested artifact ready for publishing or deployment.


---

Continuous Integration & Continuous Delivery work very closely together to deliver more value than either of them can
deliver on their own. Continuous Delivery's goal is to build and deliver a fully tested artifact that is ready to be
configured--if needed--and picked up in whatever deploy process the organization has. 
