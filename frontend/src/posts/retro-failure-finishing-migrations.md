---
title: "[Manager Retro] Failure - Finishing Migrations"
slug: retro-failure-finishing-migrations
published: 2024-07-01
description: >
  Discussing my failure to prevent stop-start work on migrations

---

The next failure we are going to discuss is the failure to focus on and finish migrations. Will
Larson changed my view on migrations in _An Elegant Puzzle_. Migrations are the only way to manage
tech debt effectively as an organization grows (Larson 2019).

As I write this, the organization is days away from completing a migration that has been off-and-on
again for the last three years. This has been one of our largest and most important migrations to
enable more reliable delivery of value to the end users. However, with a small team and a lot of
different work to do outside of this single initiative, there has been a lot of "single-threaded"
interrupts.

The primary perspective of a failed migration is an attempt and an active failure which resulted in
reverting to the original solution. However, an alternative perspective of failure is the migration
that is constantly on pause to work on other higher priority initiatives.

The large value delivery migration that is just about to finish up spent half of its life on pause.
In 2022, my team made little value impact on any initiative, let alone the infrastructure
migration, because we switched to higher priority initiatives before the previous ones could be
finished and the value delivered. Half of the team was new and onboarding, about a quarter of the
capacity was being used for keeping the lights on, and the other quarter was being used on higher
urgency initiatives (most which are still not done in 2024). 

What felt like a near-constant change in priority through the sense of urgency from whatever was on
fire that week led to whiplash across the engineering department and on my team. When the fire was
put out, the urgency degraded and was lost which revealed itself as a false sense of urgency.

The strength of Agile comes from the flexibility to adapt to changes in the environment. However,
that flexibility is also its weakness. If actions and decisions are made with an over-optimization
on the characteristic of flexibility, there is a high risk that planning and strategy is
deprioritized. Planning and strategy suffers in highly Agile and DevOps focused teams (Duggan 2024). 

While it could be said that the sense of urgency and the whiplash came from multiple upstream issues
around perceived lack of alignment on mission, values, strategy, and planning, that is shifting
blame for a problem and prevents lessons learned. It is easy to manage a team in a perfect
environment, but those perfect environments do not exist.

Where did I go wrong? I failed to understand that all problems are people problems and not technical
problems (Atwood 2008). My core lie of human value being tied to knowledge was a large catalyst in
this. The more technical knowledge and experience I had in a specific area, the more I thought
others would listen. But I have not found that to be the case. Instead it takes a completely
separate skillset of communication; active listening being one of the most important skills (Duhigg
2024). 

I also failed in the implementation of making the work that the team was doing tangible by making it
visible (DeGrandis 2022) and tying it to company initiatives. I also failed to bridge the gap in
communication to keep abreast with the current company initiatives. The software industry comes with
its challenges of building something that is mostly intangible. We are in the business of building
black boxes that pass in inputs and get outputs back. The processes to make these intangible assets
is difficult to visualize because they are also intangible. There is not a factory floor to observe
to see where raw materials or parts are stacking up if there is a bottleneck in the stream.

In addition to the people problem failure and the visibility of work, I exacerbated these issues by
not successfully migrating the technical IC decisions off of my plate so that I could focus on
solving these problems. I kept putting the technical IC hat back on as fires broke out around us
which prevented others from learning how to put out those fires.


## Gratitude

Coming out of the last few years, I now have personal experience on why successful migrations are
important and the importance of planning, execution, and completion is and the exponential increase
of tech debt if they are not finished and the pain that interrupts cause. It is extremely important
to plan, strategize, and execute to completion all of the migrations that have been decided upon.


---

## Resources

1. Larson, Will. An Elegant Puzzle: Systems of Engineering Management. First edition, Stripe Press, 2019.
2. Kim, Gene, et al. The Phoenix Project: A Novel about IT, DevOps, and Helping Your Business Win. Third edition, IT Revolution, 2018.
3. Duggan, Mathew. A Eulogy for DevOps. 28 June 2024, https://matduggan.com/a-eulogy-for-devops/.
4. Atwood, Jeff. “No Matter What They Tell You, It’s a People Problem.” Coding Horror, 9 Jan. 2008, https://blog.codinghorror.com/no-matter-what-they-tell-you-its-a-people-problem/.
5. Duhigg, Charles. Supercommunicators: How to Unlock the Secret Language of Connection. First edition, Random House, 2024.
6. DeGrandis, Dominica, and Tonianne DeMaria. Making Work Visible: Exposing Time Theft to Optimize Work & Flow. Second edition, IT Revolution, 2022.
