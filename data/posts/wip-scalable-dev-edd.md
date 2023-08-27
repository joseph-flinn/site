!! title: Scalable Development Processes - Evolutionary Database Automation
!! slug: scalable-dev-edd
!! published: 2023-08-27
!! description: The seventh article in the series of how to implement a simple but scalable solution to delivering more value faster to the end user

---

So far through this series we have seen how to approach writing application code with techniques that lead to faster
and more stable value delivery to the end user. We've been walking through an example that sets up full CI/CD from front
to back for a simple backend application. This presents a problem. How do these processes scale past a simple stateless 
REST api? How does one approach changing applications that rely on a changing database schema?

The answer is Evolutionary Database Design (EDD). I highly recommend reading through the deep examination of the topic by
Martin Fowler et al. [[1](https://martinfowler.com/articles/evodb.html)]. There are quite a few summaries written, but
the original has a lot more intrecacies and nuance required in the implemention. The big idea is to use mulitple phases of
change to make destructive changes in a database schema.


## EDD Automation

As a team grows, tooling is required to fascilitate EDD; especially if there is more than a single environment. Tracking
the state of a database with migrations with different timing requirements is tricky. The core problem that EDD
Automation needs to solve is orchestrating the timing of when migrations should be run.

For any destructive change, two migrations are required: one to put the schema (or a portion of the schema) into a 
transition phase and one to finalize the destructive change and exit the transition phase. I will refer to these types
as _Initial_ and _Finalization_ migrations to maintain clarity. There are some edge cases where another type of
migration may be needed for really large databases and where the application needs to stay online through an entire
upgrade. For these specific cases, we'll look at orchestrating _Transition State_ migrations in the next article.


## Implementation Example

The approach that I take in implementation is to separate each type of migration into its own directory until it is time
to run the migration. The caveat being that these are pure SQL migrations and not using an ORM. Once it is time, the 
migration is moved into the main migration directory and run with the migrator tool of choice (if the _Transition State_
edge cases do not apply).

I am going to deviate from using the [example project](https://github.com/joseph-flinn/scalable-dev-processes-example) we
have been using so far and use a real life example of the EDD automation I am using for this [site](https://github.com/joseph-flinn/site).
