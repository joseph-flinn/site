!! title: Scalable Development Practices - Continuous Deployment (CD)
!! slug: scalable-dev-deployment
!! published: 2023-08-21
!! description: The sixth article in the series of how to implement a simple but scalable solution to delivering more value faster to the end user

---

This is the final article in the CI/CD portion of the series on Scalable Development processes. Everything so far has been
building up to enable Continuous Deployment. This article is going to look at a few things to keep in mind while going
from Continuous Delivery to Continuous Deployment. However, because deployments are very specific and nuanced to the
project and the target environment, we are not going to walk through a detailed project or platform specific example.
Rather, we will take a look at some general ideas that will be shared across any scenario and how they impact the
automation processes we have built so far.


## Different project types

There are essentially two different types of software projects, differentiated by their distribution model: web
applications and installable software. When web applications are updated, the user has no say on when or how that is
going to happen. The application platform takes on the responsibility for creating updates and making sure those updates
don't lead to degraded user experience. The installable software is a bit different since the device has to trigger an
action to pull in the software from where the developer published it. This publishing could be to a third party store or
as simple as a binary on a GitHub Release. Examples include mobile applications, desktop applications, firmware, and
anything else. Continuous Deployment may or may not be available for such software.


### Distribution _with_ user action

Installable software is either distributed directly from an artifact repository from the developer or through a third
party such as a storefront. When storefronts are involved, there are normally approvals required in the publishing
process. These approvals are normally on the scale of days, so this will prevent Continuous Deployment straight to users.

In a lot of production scenarios involving installable software, Continuous Deployment is not desired. Users of mobile
applications do not want to get notified and approve a new version of an app multiple times a day. However, Continuous
Deployment might be desired for different testing approaches. Some more advanced storefronts like Apple iOS and Android
support continuously publishing to a beta channel or track for testing. But smaller ones, such as the Opera
browser add-on store, don't provide for this granularity.

There are some cases where installable software keep themselves up-to-date outside of the OS provided update paths or
package managers. In these cases, installable software has the potential for Continuous Deployment. However, the user
experience of Continuous Deployment with an installed application might not be desired. Electron applications can enable
auto updating. From experience, deploying six updates to an Electron app in a single day, requiring user approval and
restart every time, makes users upset.


### Distribution _without_ user action

The distribution platforms that host the different parts of web applications are owned and maintained by the developer
which gives a lot of flexibility on how to update them. The last decade has seen many tools and techniques to do just
this. These range from custom build scripts to build out projects hosted by web servers to Kubernetes to serverless
platforms. 

All of these platforms allow for push deployments of build artifacts. Once a build artifact has been Delivered--built,
tested, verified ready for production--Continuous Deployment steps in to take that artifact and push it to Production.
In our ongoing example, we can enable Continuous Deployment by adding a deploy step after we Deliver our artifact to the
registry. The steps to follow in the deployment will vary greatly depending on what is being deployed, where it is being
deployed, and how it is being deployed. 


```yaml
# .github/workflows/CI-main.yml

...

  release:
    needs:
      - version
      - test-e2e
    permissions:
      contents: write
      packages: write
    uses: ./.github/workflows/_release.yml
    with:
      is-release: true
      version: ${{ needs.version.outputs.version }}


  deploy:
    if: false
    name: Deploy
    runs-on: ubuntu-latest
    needs: [release]
    steps:
      - run: echo "Run deployment here"
```


## A Note on Pull Deployments

While push deployments are really common, Kubernetes in addition to GitOps has helped start a deployment methodology of
pull deployments. The idea of pull deployments is to have an agent running inside the deployment target platform
watching where the build artifacts are pushed, when it detects an update, it pulls it in and switches to the new
artifact. Pull deployments promote declarative configuration as well as increased security. Deployments to a Production
system do not require centralized access from the CI server or hosted platform. If pull deployments are available for a
specific platform, I'd highly suggest seeing if they'd fit the use case over a push deployment. 


---

Continuous Deployment is the final step to faster and more stable delivery of value to the end user. Once enabled, value
can be pushed out to users on demand, bugs can have a very short life span in Production, and overall feedback loops are
decrease substantially leading to more stable software.
