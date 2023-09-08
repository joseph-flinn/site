!! title: Scalable Development Practices - A note on client configuration
!! slug: scalable-dev-clients
!! published: 2023-09-11
!! description: The ninth article in the series of how to implement a simple but scalable solution to delivering more value faster to the end user

---

There is one last topic that I would like to explore before wrapping up this series that will become a major bottleneck
for an organization's SDLC process and that is client configuration. The [12 Factor App](https://12factor.net/config)
dives having clean configuration per environment ([Factor 3](https://12factor.net/config)) and decoupling the 
environment config from the build artifact ([Factor 5](https://12factor.net/build-release-run)). These two factors
subconsciously focus in on how to configure and deploy backend services really well. Most backend frameworks provide a
native way to pull in configuration from the hosting layer (whether this is a VM with `.env` files or a serverless
application with a secret/configuration managaement interface). However, there are some nuances in client configuration
that are skipped over.


## The Problem

With the rise of the Internet, client-server architecture became popular in software development. And with the advent of
mobile devices and cloud computing, client-server architecture has completely dominated. In short, application code is
delivered to an end user via a browser (in the case of a web app) or a store front or download link. That application is
configured to talk to a backend service that provides it data to facilitate the app's user experience. Some applications
expose some or all of that configuration to the end user, and some expose none at all.

The client application configuration is going to be the same for each end user when eventually deployed to production or
when it is. So there may not be a need to provide configuration for the application after deployment--unless multiple
productions exists and the user needs to choose between which to use. The pain point that will be quickly found in the
SDLC is in testing. There are few organizations that want to test against production. Application developers will need
to test their client changes against a non-production environment, either hosted or on their machines. Client
configuration must be provided for this use case. If a staging environment exists, the QA team and anyone else who is
testing a change will want to use an environment configured to act like production but not be production in case the
code is not bug free (and we always assume that it is not).

At the very beginning, organizations probably do not invest in a robust approach to client configuration. A simple work
around is to provide a build artifact that is pre-configured for each of the environments that exist. But as soon as an
organization grow past two environments, client configuration will quickly become a problem. This growth might come in
the form of ephemeral testing environments, expanding production offerings (new regions in a SaaS company), or providing
a self-hostable product.


## The Solution

The solution is to provide the conrfiguration from the server itself and to provide a single configuration value from
the user in the client app that picks which server it would like to talk to. This extra configuration might not be
desired for some client apps in production, so providing at most two build artifacts would solve this concern. The
production build artifact would have the configurtion built into it to point only to production and the non-production
build artifact would provide a way of the tester to pick which server to point to. From there, the application would
make a request to a configuration endpoint and configure itself to work with that server. This approach easily enables
feature flags, client apps working with more than a single version of the server, and only ever needing to build two
artifacts to support any number of servers. 

One word of warning: do not pass a URL value through this endpoint that is clickable in the client. Doing so has a high
risk of enabling XSS in the client application. Instead, use a config value to choose the URL from a pre-selected list
of URLS that are built into the app or use a very strict pattern to build the URL from multiple values passed through
via the configuration endpoint.


## Example Implementation

Create an api endpoint that provides a configuration block for every type of client that will be connecting to the
server architecture. The configuration block that is returned will define how the client should interact with that
backend. For example, the configuration response might look something like this:

```
# https://example.domain.com/api/v1/config

{
    "web": {
        "config": {
            "webConfigOne": "VALUE",
            "webConfigTwo": "VALUE"
        },
        "featureFlags": {
            "webFeatureFlagOne": "VALUE",
            "webFeatureFlagTwo": "VALUE",
        }
    },
    "mobile": {
        "config": {
            "mobileConfigOne": "VALUE",
            "mobileConfigTwo": "VALUE"
        },
        "featureFlags": {
            "mobileFeatureFlagOne": "VALUE",
            "mobileFeatureFlagTwo": "VALUE",
        }
    },
    "desktop": {
        "config": {
            "desktopConfigOne": "VALUE",
            "desktopConfigTwo": "VALUE"
        },
        "featureFlags": {
            "desktopFeatureFlagOne": "VALUE",
            "desktopFeatureFlagTwo": "VALUE",
        }
    }
}

```

The config endpoint would be loaded on the first call to the server. If the endpoint is not called with every call, a
mechanism for updating the stored config via a TTL is required. Since the endpoint is being hosted by the server, the
same 12 Factor App approaches to configuration and deployment to configure the data that this endpoint returns to enable
runtime configuration for the client applications, even though most client application frameworks do not have a way to
support runtime configuration.

---

Using a configuration endpoint built into the server portion of a clients-server architecture delivers many different
benefits; especially for any software that includes a number of different types of clients. It enables runtime
configuration for clients. It enables extremely flexible but clean feature flagging. It enables easy backwards
compatibility testing which is super important for any non-web client since publishing is not instant and they will need
to maintain some sort of backwards compatibility.

Any instance of a server has complete control over how clients should interact with it or different behaviors that the
client should use in their interactions. This enables the use of independently configured ephemeral environments to
decrease the length of the feedback loops; used in CI on PRs, local development, better collaboration with the design
team on UI/UX feedback, and low friction for any non-technical organization memeber to test new features before going
live.
