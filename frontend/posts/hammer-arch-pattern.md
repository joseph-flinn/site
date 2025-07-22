---
title: "My Go-to Application Architecture Pattern"
slug: hammer-arch-pattern
published: 2025-06-16
description: >
  A review of my "hammer" architecture pattern.

---

I was recently chatting with a friend about software architecture and I realized that I have a
default "hammer" pattern that I start with for every project. My friend asked me to create an
in-depth write up to help guide their journey, so I thought I'd share the design with a wider
audience and chat through my personal experiences on why this is my go-to architecture. I'll also
call out some conscious biases and explain where they come from.


## The _Three Principal Layers_

Martin Fowler is one of the most influential voices in software architecture and software
engineering. His book on enterprise application architecture is a must read for anyone serious about
growing in their software architecture design skills.

Fowler introduces the _Three Principal Layers_ (p. 20) which is comprised of the Presentation layer,
Domain layer, and Data Source layer.

| Layer | Responsibilities |
| - | - |
| Presentation | Provisions services, displays information, handles user requests/actions |
| Domain | Logic that is the real point of the system |
| Data Source | Communication with databases, messaging queues, etc. |

Fowler's book is all about how to make the technical decisions on where each of these layers, the
resulting patterns, and when to use them.


## My "Hammer" Pattern

Every project that I start begins with a pattern that is a subjective implementation of Fowler's
_Service Layer_ (p. 133) pattern that looks like this:

![Hammer pattern](/posts/0089/hammer-pattern-overview.png)

The driving factors in this pattern are:

- Decouple data access from data storage
- Simplify data storage and maintenance
- Zero trust in client logic

In this pattern, the API serves as a data access layer with full CRUD operations. We minimize the
business logic in databases themselves (like stored procedures) for more flexibility in data source
choice. In addition to the API containing the data access layer, it also contains the majority of
the domain logic for the application. 

I started writing enterprise applications in the age of single page applications (SPAs), so static
clients dominate my design. My mental model has client code being downloaded and run on machines
that I cannot control. Limiting the amount of domain logic in those applications is one of my
priorities for ease of mental contexts and for security purposes.

## Benefits 

Having the data access layer in source code allows for the use of software engineering tools and
practices (versioning, testing suites, etc) which creates more stability in the system long-term.
Full testing suites can be easily built around an API data access layer compared to the more
difficult testing suites for stored procedure.

Added benefits for decoupling data access and data storage is that future data migrations can be
more seamless for users. Multiple versions of the same service can be deployed side-by-side with
different ways of updating the underlying data model. Care will be needed to make sure that they can
exist side-by-side, but this is going to be a better user experience than creating an outage by
turning off the old service before turning on the new one.

In addition to ease of testing and migration, data access layer source code can be more easily be
deployed and reverted than stored procedures in a database. My experience in SRE database management
and application deployments has reinforced keeping the access layer in source code rather than in
the database. When stored procedures are used for data access, a lot of work is required to
synchronize the old and new versions of the client application code with the old and new versions of
the service application code with the old and new versions of the stored procedures with the old and
new versions of the data model. Keeping all four of these in-sync is a nightmare and will most
likely fail at some point with a high risk of a service outage.

Moving on from the data access layer, using a static client minimizes the amount of compute needed
on the backend. For web applications, the server does not need to dynamically render the page when
the client is called. This keeps cloud compute costs low as well as improves scalability of
infrastructure. Static clients decouples the client application from the server application allowing
for each of the underlying infrastructures to be scaled independently. For instance, if it is taking
a while to load the initial webpage in certain geographies, deploying the static client to a global
CDN will most likely resolve the issue (as long as it does not depend on server calls to load data).

Using the static client pattern also has security benefits. I have experience used server-side
templating engines which allows access to secrets to be used while generating the frontend pages.
This is great if those secrets are needed for some reason, but it is also creates a risk of
accidental secret leakage. Static client architecture (specific to web) helps keep mental contexts
separate while building the system. Clients should not contain any secrets since it is running on
someone else's machine.

In addition to the benefits of the design decisions for the different layers, this overall design
allows for future application scalability as well. What if the project wants to add a mobile app in
addition to the web client? Mobile apps are just compiled static code. This pattern can easily be
horizontally expanded to support the mobile app constraint. What if micro services are needed to
scale the human/team part of the engineering organization? This pattern supports the horizontal
expansion of services as needed.

![Scaling the Hammer pattern](/posts/0089/hammer-pattern-scaling.png)


## Drawbacks

There are some drawbacks to this pattern. Minimizing the use of stored procedures in a data source
will often require more network capacity. Loading data from the source to the domain logic layer, to
then change the data and send it back requires two or more network calls rather than keeping it all
on the data source machine. On the other hand, it keeps the data source portion of the architecture
clean and helps the independent scalability of the data access layer as well as the data source
layer.

Using separate client and backend projects requires more administration of the project repository.
The client and backend will be using different frameworks and possibly languages which will each
have their own setup, tooling, testing, and CI/CD. Using a single framework that does both would
limit the need for the administration.


---

## Resources

1. Fowler, Martin. Patterns of Enterprise Application Architecture. Nineteenth printing, Addison-Wesley, 2013.

