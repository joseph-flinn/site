!! title: Scalable Development Practices - Overview
!! slug: scalable-dev-overview
!! published: 2023-07-24
!! description: The first article in the series of how to implement a simple but scalable solution to delivering more value faster to the end user

---
This is the first of a series of articles on a git provider based flow that scales well from a handful of developers to
many developers working in the same repository. It will focus on modern processes to maximize value delivered from the
Value Stream. We'll be walking through an fully implementation of the flow that can be used as a guideline for new
projects or what to use as a goal for a process migration.


## CD - Continuous Delivery vs Continuous Deployment

CD is a very important part in delivering and sustaining value in today's technological organizations. There are many
organization benefits. Some of the benefits are: increased product stability, increased velocity in value delivery which
leads to more value delivered, and improved culture supported by company processes. There is a more in depth analysis of
the benefits in
[Accelerate](https://www.amazon.com/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339). It examines
the correlations of many different variables in a technological organization and comes up with the four core metrics to
optimize for in the value stream. Those metrics are what have become to be known as the DevOps metrics: Lead time to
change, change failure rate, deployment frequency, mean time to recovery. For definitions around these,
[Atlassian](https://www.atlassian.com/devops/frameworks/devops-metrics) has a good overview of these metrics.

This is all great, but which CD are we talking about? The difference between continuous delivery and continuous
deployment is the number of manual steps in the pipeline from the time where a software engineer commits a change to the
trunk branch and when it appears in Production. Here, Production can be defined as the end state where value is handed
over to the end user. When talking about Production in the tech sense, most people will automatically think of a hosted
application. But in the context of CD, Production might also take the form of a released library or SDK.

It seems that engineers are drawn to continuous deployment. It focuses on minimizing the length of the development
feedback loops. Implementing continuous deployment produces the shortest feedback loops that you can have in value
delivery in the software world. However, continuous deployment can be scary to non-technical executives. The journey
towards continuous deployment is almost guaranteed to bring a higher count of failures from changes. For example, if an
organization deploys to Production once a month, three of those deployments might cause system failures giving a change
rate failure of 25%. Let's assume that the organization is able to update processes to release once a week and maintains
the same 25% change rate failure. This means that the number of changes that led to a system failure has increased to 
13. Without digging into the data and what it means, this increase in count can be uncomfortable for executives.
Inserting a manual step right before a deployment/release to Production to keep the decision to release a human one.

In addition to the above, continuous delivery might also be the only option depending on the technology being created.
For example, any client application being uploaded to a storefront probably has to go through some sort of approval
process before going live. This normally takes a few days. Continuous deployment won't be helpful because dismissing the
current review and updating the release asset multiple times a day will result in an application rarely getting through
the review process before needing to be updated again. Or you will be constrained to how often you can merge an update,
which defeats the point of CD because it prevents faster delivery to the end users.

This series will be focused on scoping to continuous delivery with a stub out for where continuous deployment would go.
This is mostly because of the case of most application hosting environments are going to be different and the
technologies used to deploy will differ from one group to another. 


## Minimum CD

We will be walking through an implementation of [MinimumCD](https://minimumcd.org/minimumcd/). The MinimumCD website is
a great resource to what it takes to implement CD and an amazing reference. A key point of understanding that it touches
on that will be needed before we get started is [Trunk Based Development](https://trunkbaseddevelopment.com/) branching
strategy and the usage of a single project in the repo (see [Git was not designed for
monorepos](./posts/git-monorepo) for more information)


## Automatic Versioning

Versioning is an important part of communicating with both end users and internal stakeholders about updates that are
released or even pending. Having a set definition of how to talk about different capabilities or fixes is important. And
I have seen this important communication tool detract and get in the way of implementing MinimumCD. We will be walking
through a automatic versioning scheme that fits very well into the developer workflow and will free up any need to worry 
about versioning release assets or deployments. 


--- 

I'm excited to walk through the simple and scalable solution with y'all in the next few weeks. It can be immediately
executed upon to start increasing value delivered to end users. Stay tuned!
