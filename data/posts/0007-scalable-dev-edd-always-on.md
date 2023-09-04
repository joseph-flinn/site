!! title: EDD in Always-On Environments
!! slug: edd-for-ha
!! published: 2023-09-04
!! description: The eighth article in the series of how to implement a simple but scalable solution to delivering more value faster to the end user

---

Martin Fowler et al. have [a great article](https://martinfowler.com/articles/evodb.html) on how to approach database
design in a way that enables the ability to evolve with how the corresponding code started to change with new Agile
methodologies. In my [previous article](https://joseph.flinnlab.com/posts/scalable-dev-edd), we looked at an example of
creating tooling to assist with automating work around implementing EDD. Both articles allude to more advanced scenarios
where additional processes are required to support EDD; one of which are environments where the application must be up
at all times.

The agile practices Fowler et al. describe work really well in environments where the application can be taken offline
while the database is updated. If this is not the case, extra care must be taken in approaching changes, and the
processes that EDD outline are even more necessary.

Before diving in, let's align on some terminology so we can clearly discuss the state of the database and the state of
the application at any one time. There will be a lot of such discussion around different states. The version of the
application code will be designated as *X.1*, *X.2*, and so on; following SemVer. As a quick recap from the previous
article, the types of migrations for any destructive changes are: _Initial_, and _Finalization_. The _Initial_
migrations change the schema and any data access layers internal to the database that are needed to support the new
*X.2* code. However, these changes must also support the current *X.1* code as well since these changes will be run
before deploying out the *X.2* code. _Finalization_ migrations are run to clean up any temporary scaffolding put in
place to support both *X.1* and *X.2* application code to now only support the new *X.2* application code.


## The Always-On Problem

Schema migrations have to be run before the application code is updated. Some applications handle this internally by
running the migrations as a startup job. Others may run the DB migrations with an external tool similar to
[`edda`](https://github.com/joseph-flinn/site/tree/main/data/tools/edda). In either case, the DB migrations are run and
completed before the new version of the application code is rolled out. Evolutionary database design becomes imperative
to support this case. However, the unsolved issue is how to do large (and batched!) data migrations to support the new
change without blocking the code update until all of the data has been migrated (which might be never since the old code
is still dumping new data to the old place).


## The Solution

To solve the problem, we will heavily rely on the scaffolding that is Fowler et al. discusses extensively to support the
new and old versions of the application code--either stored procedures in the DB or in a data access layer that sits
between the database and the application. We will also be adding in a _Transition_ type migration to run while the
database is in the transition phase. A _Transition_ migration should only be used for things that are batched and do not
run quickly enough to to be run with the rest of the _Initial_ migrations. They must be written in a re-runnable way.
With the newly added _Transition_ migration, a single deployment from *X.1* to *X.2* will look like:

1. Run migrations for *X.2* deploy. This will inherently include:
    a. Any _Transition_ migrations that are being _Finalized_ from *X.1* (or before)
    b. Any migrations that _Finalize_ previous migrations from *X.1* (or before)
    c. Any _Initial_ migrations for *X.2*
    d. Any non-destructive migrations for *X.2*
2. Deploy application code version *X.2*
3. Run any _Transition_ migrations that are in *X.2*
4. Repeat 1 through 3 for *X.3*
    a. Until step 1 is run for *X.3*, the application can be rolled back to *X.1*. Once the deploy for *X.3* has
    started with the migrations being run, the application will no longer be able to be rolled back.


## Implementation Example

When it is boiled down, the automation of EDD for applications in always-on environments is an orchestration problem.
While all of the different types of migrations are just migrations, each type is treated a bit differently in the
deploy process. The simplest solution is to keep the different until it is the right time to move them to the
`migrations` directory.

```
database-name/
├── finalization_migrations
├── transition_migrations
└── migrations
    └── 0000_init_migrator.sql
```

We used the above directory setup in the [previous article](https://joseph.flinnlab.com/posts/scalable-dev-edd).
`migrations` contain any of the migrations that will be run in step 1 of the deploy. The order they are added are
incredibly important. When preparing for the *X.2* deploy, _Transition_ migrations that are going to be finalized must be
added into the `migrations` directory _*BEFORE*_ their corresponding _Finalization_ migrations. After them come the
_Finalization_ migrations and then any of the other migrations for the *X.2* deploy. Any _Initial_ or non-destructive
migrations can be added anywhere in the order as long as they do not depend on the schema resulting from _Finalization_
migrations being run. If that is the case, they should be added accordingly.

`transition_migrations` include all *X.2* specific migrations that will be run a non-zero number of times between *X.2*
and the deployment where it is finalized. `finalization_migrations` include all migrations that correspond to an
_Initial_ migration that is ran during the *X.2* deployment. The migrations from `transition_migrations` and
`finalization_migrations` are moved together to `migrations` when it is time for them to be finalized some time after
the *X.2* deployment. A good approach to this is to automate a PR/MR on application deploy to move all of the migrations
in the transition and finalization directories.

The automation for orchestrating this process is outside the scope of `edda`. However, `edda` has been expanded to track
the different states that a _Transition_ migration is in. `edda` will now run any net-new migrations in `migrations` as
well as any migrations in `transition_migrations` whether they have been run before and logged or not. However, when
those migrations are moved (manually or with some external automation), `edda` will run it one last time and set the
migrations table flag to prevent it from being run again.

_Transition_ migrations can be created with `edda create -t "migration name"`. A _Finalization_ migration will also be
created even if the `-f` flag is forgotten.

---

One solution to orchestrating EDD in an always-on environment is to keep the different migrations in separate
directories until they can be moved to the shared `migrations` directory. This allows a tool like `edda` to be
migration-type aware and be orchestrated in a way to support evolutionary database changes
