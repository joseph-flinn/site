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
is wrong without alientaing the everyone that has chosen a specific way of doing it? I am not concerned with the
versioning scheme, process, or implmentation that is used in versioning. Each has their strengths and weaknesses in
different scenarios. A misalignment of the implementation to the purpose of versioning is how versioning is implemented
incorrectly.

What does software versioning do? One might suggest _"to help track when changes are made to the software"_. Some
software uses date based versioning to show how up-to-date software is and help build policies around long term support
(I'm thinking of Ubuntu). Or maybe _"to help track when specific features were changed in the software"_.
Hypothetically, if we are updating and releasing the software with every change to the trunk, our software has the
opportunity to be changing very rapidly and with partial features being deployed to Production behind feature flags.
What about _"showing compatibility between other software and hardeware"_? It's important to know what is required to
run the software as it changes.

Each one of these answers is accurate. However, I would argue that they _all_ stem from purpose: to communicate. When it
is all boiled down, versioning is a communication tool. To have effective versioning, one must consider who the audience
is, what they care about, if they have any expectations, and what information needs to be conveyed.
