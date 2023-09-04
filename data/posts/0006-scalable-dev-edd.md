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
the original has a lot more intricacies and nuance required in the implementation. The big idea is to use multiple phases of
change to make destructive changes in a database schema which allows backwards compatibility between application code
and database schema changes.


## EDD Automation

As a team grows, tooling is required to facilitate EDD; especially if there is more than a single environment. Tracking
the state of a database with migrations with different timing requirements is tricky. The core problem that EDD
Automation needs to solve is orchestrating the timing of when migrations should be run.

For any destructive change, two migrations are required: one to put the schema (or a portion of the schema) into a 
transition phase and one to finalize the destructive change and exit the transition phase. I will refer to these types
as _Initial_ and _Finalization_ migrations to maintain clarity. There are some edge cases where another type of
migration may be needed for really large databases and where the application needs to stay online through an entire
upgrade. For these specific cases, we'll look at orchestrating _Transition State_ migrations in the next article.


## Implementation Example

For the best development practices, the _Finalization_ migration should be written alongside the _Initial_ one. But this
should initially be kept separate from the rest of the migration scripts. The approach that I take in implementation is
to separate each type of migration into its own directory until it is time to run the migration. There is a caveat of
the migrations being pure SQL migrations and not using an ORM. Once it is time, the migration is moved into the main
migration directory--either manually or with automation if the approach to deployments support it--and it run with the
migrator tool of choice. If the _Transition State_ migrations edge cases apply, a custom migrator may be required.

I am going to deviate from using the [example project](https://github.com/joseph-flinn/scalable-dev-processes-example)
we have been using so far and use a real life example of the EDD automation I am using for this
[site](https://github.com/joseph-flinn/site). I've chosen Cloudflare D1 databases to limit the maintenance overhead, but
the general processes will be the same. The [custom tool](https://github.com/joseph-flinn/site/blob/main/data/databases/edda.py)
`edda` that I created for myself and my dev flow will work for other databases with pure SQL migrations with some
tweaking to the setup and a few of the commands.

`edd` requires a directory layout as below:

```
edda.py
database-name/
├── finalization_migrations
├── transition_migrations
└── migrations
    └── 0000_init_migrator.sql

```


`edda` provides the following commands to assist in automating EDD:

```
Commands:
  apply     Apply new migrations
  create    Create a migration file and optional finalization migration file
  finalize  Finalize a migration that is in a Transition Phase
  init      Create the migration to initalize the migrations tracking table
  list      List all local migrations across the three migration directories
  status    Check the migrations status between local files and DB state
```

`edda init` creates the `XXXX_init_migrator.sql` migration to add the migration tracking table to the database, as seen
in the directory hierarchy above, replacing whatever built-in migration tracking that might be used to execute the SQL
scripts. For instance, `wrangler` comes along with `wrangler d1 migrations` which will track the migrations in a table,
but it doesn't provide some of the other tools that `edda` provides that are helpful with automating EDD. `edda` also
sets me up for implementing the _Transition State_ migrations which will not be compatible with the `wrangler d1
migrations` command. 

`edda apply` queries the migration tracking table and the `migrations` directory and applies all migrations that are in
`migrations`, in order, that are not in the table. After each application, the success is logged in the table.

`edda create` creates a templated migration and has an optional `--include-finalization-migration` or `-f` flag to
create a corresponding _Finalization_ migration for any destructive changes. This migration is placed into the
`finalization_migrations` directory and shares the same migration ID as the _Initial_ migration that it finalizes.

`edda finalize` takes in the ID of the migration to finalize, gets the corresponding _Finalization_ migration, and
creates a new migration with a new ID with the contents of the _Finalization_ migration. After a successful creation of
the new migration with the _Finalization_ contents in `migrations`, the script in the `finalization_migrations` is
removed. The next time `edda apply` is ran, the finalization migration will be picked up and run in order of creation.
If a new migration is needed that relies on a previous migration being finalized, it needs an ID that is greater than
the _Finalization_ migration (ie, created after `edda finalize` has been run. This command can also be added to a CI
pipeline to automate migration finalization if release strategy supports it.

`init`, `create`, `finalize`, and `list` commands only depend on the local file system and having the correct SQL
language for the corresponding relational database. `apply` and `status` interact with the database, so will require
more tweaking to work for a non-D1 database. Tweaking to the default SQL to set up and track will also be needed until I
get to abstracting `edda` to work on the major relational databases and provide a plugin system for the rest.


## Notes on Testing

As with any environment change, database changes need to be tested. Using EDD adds a layer of complexity to application
testing. EDD enables backwards compatible schemas for application code to take advantage of. This backwards
compatibility needs to be verified before rolling out the schema change to production. A regression test suite should be
added alongside the current one in the CI pipeline. In total, there will be two regression test passes on the database
schema: one with the current production version to verify backwards compatibility, and one with the new version of the
application to verify that the new version doesn't break any current functionality.

---

When using pure SQL scripts for database migrations, specialized directories provide a simple way of supporting scalable
development processes while retaining control over when migrations are finalized. Using EDD to make database changes,
tooling similar to `edda`, and increased regression testing, database changes can happen with the speed we are used to
code changes along with more stability in database availability. In the next post, we will be exploring the nuances of
how to take this approach a step further to support the case where the application must always be on.
