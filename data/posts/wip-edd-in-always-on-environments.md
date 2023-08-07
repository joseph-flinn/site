!! title: EDD in Always-On Environments
!! slug: edd-for-ha
!! published: ?
!! description: How to do EDD

---

Martin Fowler has [a great article](https://martinfowler.com/articles/evodb.html) on how to approach database design to
keep the database flexible and evolvable with how the corresponding code started to evolve with new Agile methodologies.
I'm not going to regergitate what's in that article. The article speaks for itself and there are others that have
written summaries.

In the *Automate the refactorings* section, Fowler mentions "If we have to [make database changes] while keeping the
application live, it is possible, but the techniques we use will need another article to explain." Unfortunately, Fowler
didn't go on to write another such article that I could find. I'd like to build upon that article and explore how to
implement EDD in an environment where the application must be on at all times.

Before diving into implementation, let's align on some terminology so we can keep everytning straight. There will be a
lot of disucssion around different states of the database, and the application code. I'll be using *A* and *B* to name
the versions of code that we are using. The EDD phases for any destructive changes are: *Initialization*, *Transition*,
and *Finalization*. The *Initialization* phase changes the schema and database functions that are needed to support the
new *B* code. However, these changes must also support the *A* code as well since these changes will be run before
deploying out the *B* code. The *Transition* phase should only be used for things that are batched and do not run
quickly enough to to be run with the rest of the migrations. *Finalization* 

