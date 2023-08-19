!! title: Scalable Development Processes - Continuous Deployment (CD)
!! slug: scalable-dev-deployment
!! published: 2023-08-21
!! description: The sixth article in the series of how to implement a simple but scalable solution to delivering more value faster to the end user

---

The final article in the CI/CD portion of the series on Scalable Development processes. Everything so far has been
building up to enable Continuous Deployment. This article is going to look at a few things to keep in mind while going
from Continuous Delivery to Continous Deployment. However, because deployments are very specific and nuanced to the
project and the target environment, we are not going to walk through a project or platform specific example.


## Different project types

There are essentially two different types of software projects and they are defined by their model of distribution: web
applications and installable software. The distribution of web application projects are from some platform into a
browser. This provides the capability of constant change with the goal of the user not being aware or affected by
changes. The distribution model of installable software includes things like mobile applications, desktop applications,
firmware, versioned deployments of web applications for internal or self-hosting hosting capabilities, and anything else
that requries a distribution model outside of a browser and URL. Continuous Deployment will look different for either
type of project. 


### Installable Software

Installable software is either distributed directly from an artifact repository from the developer or through a third
party such as a storefront. When storefronts are involved, there are normally approvals required in the publishing
process. These approvals are normally on the scale of days, so this will prevent Continous Deployment straight to users.

In a lot of production scenarios involving installable software, Continuous Deployment is not desired. As a user of
mobile applications that auto-update, it would be pretty terrible user experience to get notified that a new version of
the app is avaiable multiple times a day. However, Continuous Deployment might be desired a beta channel. Some more
advanced storefronts like Apple iOS and Android support continuously publishing to a channel or track for testing.
However, some of the smaller ones, such as a browser extension stores, don't provide for this granularity.

The main differentiator between Delivery and Deployment is if an action is required by the end user to update their
application. For example, if a mobile device is configured with auto-updates and a new version of the application is
published, it will be updated on the end user's device. This would be considered a deployment. However, if an action is
required by the user to trigger the update, then the pipeline would have stopped at Delivery.

There are some cases where installable software keep themselves up-to-date outside of the OS provided update paths or
package managers. In these cases, installable software has the potential for Continous Deployment. However, the user
experience of Continous Deployment with an installed application might not be desired. Electron applications can enable
auto updating. From experience, deploying six updates to an electron app in a single day, requiring restart every time,
makes users upset.


### Web Applications

The distribution platforms that host the different parts of web applications are owned and maintained by the developer
which gives a lot of flexibility on how to update them. The last decade has seen many tools and techniques to do just
this. These range from custom build scripts to build out projects hosted by web servers to kubernetes to serverless
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

While push deployments are really common, kubernetes in addtion to GitOps has helped start a deployment methodology of
pull deployments. The idea of pull deployments is to have an agent running inside the deployment target platform
watching where the build artifacts are pushed, when it detects an update, it pulls it in and switches to the new
artifact. Pull deployments promote declarative configuration as well as increased security. Deployments to a Production
system do not require centralized access from the CI server or hosted platform. If pull deployments are available for a
specific platform, I'd highly suggest seeing if they'd fit the use case over a push deployment. 


---

Continuous Deployment is the final step to faster and more stable delivery of value to the end user. Once enabled, value
can be pushed out to users on demand, bugs can have a very short life span in Production, and overall feedback loops are
decrease substantially leading to more stable software.
