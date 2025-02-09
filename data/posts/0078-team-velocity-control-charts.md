!! title: Control Charts for Team Velocity
!! slug: team-velocity-control-charts
!! published: 2025-02-10
!! description: Presenting an improved team velocity monitoring system (and a review of the supporting systems)

---

One of the main responsibilities of an engineering manager is to build out team roadmaps and do
capacity planning. This ensures that the team is adequately supported with the resources and
personnel they need in order to make progress towards the team, department, and organizational
goals. 

_"Average" team velocity_ is the key metric required to conduct effective capacity planning. We need
to know about how much work can be done in some standard time box (a cycle in Kanban or sprint in
Scrum). Once we know the average amount of work that the team can complete in a cycle, we can
extrapolate how much work the team can get done in the quarter. With projects estimated, we can get
a handle on what deliverables we can commit to in a quarter. If the list of deliverables is not
sufficient for senior leadership, the only viable solution is to increase team size, but that is a
topic for a different day. 

Agile frameworks that include work estimations often choose either t-shirt sizes or the Fibonacci
sequence to estimate the effort of a task. Some software organizations choose to use time-based
estimations, but that can quickly get into some sticky situations when time estimates are added
together with misaligned assumptions. To see why, we need a quick review of the four types of
measurements (Terpening p.36):

| Measurement | Description |
| ----------- | ----------- |
| Nominal | Exclusive and exhaustive categories. All things must fit into one and only one category.
  There is no logical order to these categories. Examples of nominal characteristics are gender, and
  religious affiliation. |
| Ordinal | Adds logical order to the exclusive and exhaustive categories. However, while there is a
  logical order, the distance between ranks is not equal. Examples of ordinal characteristics include
  agreeableness survey questions. The difference between a 4/5 and a 5/5 is not equal to the
  difference between a 1/5 and a 2/5. These differences cannot be measured. |
| Interval | Adds equality to the ranks of ordinal. The "distance" between one rank and another
  equals the "distance" from one to another. However, there is no meaningful zero starting point.
  Temperature (in F or C, but not K) is an example. The difference between 100F and 50F can be
  measured and is the same as the difference between 0F and 50F. However, 100F is not twice as hot as
  50F even though 100 is twice as much as 50. |
| Ratio | Adds a meaningful zero starting point to an Interval. A good example would be temperature
  in Kelvin. The intervals of Celsius and Kelvin are the same, but 0 K means there is no thermal
  energy in the object of study. Since there is a meaningful 0, Kelvin is a ratio. |

T-shirt sizes and the Fibonacci sequence are examples of an ordinal measurements. Adding two
medium-sized shirts together does not result in a size large. While adding `2 + 1 == 3`, `3 + 1 !=
5`.

Time-based estimates on the other hand, are a ratio measurement. While a task has to take more than
zero time, zero time does have a meaning. Plan-driven project management focuses on getting really
accurate time estimates so that the critical path can be found through the project to make sure
deadlines for deliverables stay achievable. 

In Agile, we still need to know about how much work we can get done in a time period, but not too
accurate of estimates that we would require all of the plan-driven techniques that impedes the
desired flexibility in the Agile project management framework.

To calculate _"average" team velocity_, we need to somehow relate work to time. We have two choices,
each with their own benefits and challenges. 

We could use T-shirt sizes and measure how long every task takes. The average times per T-shirt size
can be used in a weighted average along with the probabilities of a certain number of the T-shirt
sizes per cycle/quarter. This approach requires a lot of measuring and a lot of probability
mathematics, all based on past data. It would take at least a few time-periods to calibrate the
system. In theory, this approach gets a really accurate static estimate, but it comes at the cost of
time invested in getting the system set up and the inflexibility when the underlying assumptions
change (changes in team size would essentially require starting over).

Our second option is to use the Fibonacci sequence and break the rules of measurement by adding the
ordinal categories together to compute velocity. Three 1-point stories are not the same as a single
3-point story, but by adding them together we are assuming they are. This doesn't seem very
accurate, but on the other hand as humans are not oracles, we have to settle for estimations instead
of being able to accurately predict the future. This approach can be calibrated relatively quickly.
It also allows for the flexibility required with changes in team size as well as changes in how the
team estimates. However, this approach has to be done with caution as the assumption required to
break the rules of measurement is only appropriate because these are estimates. Any other use of
this assumption is mathematically inappropriate.


## A Work Estimation System

Let's take a quick look through the estimation system that I used for the last three years pretty
successfully (~75% accuracy in estimation).

| Sprint Points | Definition |
| ------------- | ---------- |
| 1 | Less than a day |
| 2 | More than a day, less than a few |
| 3 | More than a few days, less than a week |
| 5 | More than a week, less than two |
| 8+ | More than two weeks |

The above definitions, along with a few helper policies, quickly dialed the team into pretty accurate
estimations. The most important policy being: stories that are estimated at 8+ are required to be
broken up into smaller tasks.

With these definitions, we can easily see that adding three 1-point stories is not necessarily the
same as one 3-point story. But as we discussed above, let's move forward to computing _team
velocity_ as if they were:

```katex
V = n * P 
```

Where `n` is the number of engineers on the team and `P` is the number of points per cycle an
engineer can complete. Let's assume that we are working with two-week cycles (sprints) and a team of
five engineers. With the above definitions of sprint points above, a 5-point story is about a
sprint's worth of work for a single engineer (`P`). This would give us an initial target velocity of
25 points per sprint. With a defined target, we can start monitoring the number of points completed
per sprint to look for any deviations that are too far away from the target. To provide the needed
flexibility of the in-between work (meetings, PRs reviews, etc), changes in team size and possible
drift in approach to estimation, the target is recalculated to be the running average of the last
three sprints. This is an example of the dashboard that I used to monitor my team's velocity.

![Team Velocity Dashboard Example - Target]()

However, I ran into a few questions that I was not able to resolve until recently. What does the
running average velocity actually tell us? How can we tell if we are significantly off target? Is
two points low enough to signal a deviation? What about five? If we decide we are off target, how do
we tell what specific adjustments need to be made?

All of these questions really stem from the base assumption of monitoring the velocity against the
target velocity. However, in statistical process control, processes may be in-control at a value that
is not the target value. If the process is being controlled against the target value instead of the
natural process limits, the wrong "fixes" might be used to try to bring the process under control
when the process is already under control.

Instead of using a target value, upper control limits (UCLs) and lower control limits (LCLs) should
be used. These are traditionally set to 3 sigma from the average over a process that is assumed to
be in-control. Using the example above, we can compute the UCL and LCL and plot them on the
dashboard. The control limits answer the questions that I was not able to answer. If one of the
control limits is breached, the process is out of control and an assignable cause for that data
point should be found and documented (preferably in a logbook that accompanies the dashboard).

![Team Velocity Dashboard Example - Control Limits]()

As an example of a possible assignable cause for a drop in completed points could be a teammate
taking two weeks of PTO. This of course would result in a lower completion of points that sprint. In
this instance there is no team process adjustment that is needed. As another example, if the UCL is
breached, the team might find that that sprint had an abnormally larger number of 1-point cards and
a lack of larger ones. This might signal a planning issue or an issue with critical bugs coming in
through the side after sprint planning. These are indications that there are improvements that are
needed.


## Risks

There are two risks that come along with monitoring team velocity. Team velocity is _NOT_ a
performance metric. It is a predictive estimation metric. However, under the wrong cultural
conditions, there is a high risk that the _team velocity_ metric is misused as a performance metric.
Using _team velocity_ as a performance metric focuses on output rather than outcome or impact which
are more important performance indicators.

The other risk is the deaggregation of the team velocity into individual velocity. Notice that I
have only used the term _team velocity_ and not _developer velocity_. Individual velocity carries a
high risk of comparison between teammates and the devolution into individual performance metrics.

The utmost care should be used to mitigate both of these risks at all costs. At the risk of sounding
a bit dramatic, I would go as far as to say as dropping these metrics if there is an increasing
chance that they will be misused.


---

## Resources

1. Terpening, Willbann D., et al. Statistical Analysis: For Business and Economics Concepts and Practice. Preliminary Secdon Edition, Hercher Publishing Inc, 2013.

