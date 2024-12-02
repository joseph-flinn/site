!! title: Capacity Planning for a Quarter
!! slug: quarterly-capacity-planning
!! published: 2024-12-02
!! description: Reviewing a template for quarterly capacity planning

---

As startups grow into small enterprises, quarterly planning will eventually get established. Teams
will grow past the size where a single person can no longer know everything that is going on in the
company. Systems and processes are needed to continue transparency across the organization and keep
the leadership team informed. Quarterly planning is one of these essential growth processes.

When we first started establishing quarterly planning on one of my past teams, there was a bit of
friction. Long-term planning is often seen as waterfall project management and has been shown to
have little long-term ROI, especially if there is high risk of priority shifts in the plans. The
past experience of the team going through multiple priority shifts creating whiplash was the root
cause of the friction.

From a management perspective, quarterly planning brings visibility to the direction that
self-directed teams are taking to achieve organization objectives. It creates an opportunity to
integrate management's feedback into the plan in a way that minimizes the risk of multiple
reprioritizations throughout the quarter. While management has the power to adjust objectives and
set new courses whenever is needed, if objectives are adjusted too often, it creates a feeling of
instability for their teams and will eventually lead to a lack of confidence in leadership.

From an engineering perspective, quarterly planning helps align expectations vertically in the
organization. Vertical alignment directly connects an engineer's daily work with the strategic
objectives of the organization, which helps build the individual's purpose. Quarterly planning also
creates a regular opportunity for engineers to provide their input on how to achieve the
organization's strategic goals, building autonomy in the team. Research has also shown that
self-organized and directed teams create resilient solutions (Meadows, p.81).

As is often the case, quarterly planning is established to solve a problem that has been discovered,
rather than to preemptively solve the resource investment problem (discussed in 
[_Engineering Portfolio Management_](/posts/engineering-portfolio-management-part1)). As such, there
is most likely going to be some pressure to make sure that teams are effectively using time and
money to deliver the correctly balanced 70-20-10 business value (Flinn, p.97). While backlog count
is the best metric to measure whether a team needs to hire (Larson, p.35), estimated capacity in
hours can help support such a case where additional headcount is needed.


## Quarterly Capacity Planning 

One of the largest challenges that I faced as an engineering manager was the balance of project work
and operations work. The project economy has arrived (Nieto-Rodriguez), but KTLO work is still
necessary, especially in organizations that have dedicated SRE and DevOps teams. Engineering teams
like the stability that committing to work in a sprint brings, but high priority support work that
disrupts the work flow comes with the territory.

What's the best way to plan for unplanned work? The first step is to start measuring it. We started 
tracking the amount of KTLO work per sprint (and quarter) to get a solid baseline. Once a baseline
has been established, further analysis can be done on the KTLO work to set goals in order to
decrease it.

In my last engineering manager role, I created a 
[quarterly planning template](https://docs.google.com/spreadsheets/d/1Ie41oQadFQsLK_ZdDl01uzvF9Ehy_yOen-jSy16jpq0/edit?usp=sharing) 
to help accurately estimate the amount of work that the team could get done in a quarter. We could
use analysis of past quarters to set the baseline for the KTLO work to get accurate estimates for
the amount of work we could complete using the rest of the capacity. The template uses two
approaches to get relatively accurate estimates.

The first approach is what I call "Napkin Math Capacity". The data required for input are the number
of sprints in the quarter, the number of engineers on the team, and the target number of points per
engineer per sprint. Multiplying all of these together will give a rough estimate for how many
points can be finished in a quarter. The benefits of this approach is that it is pretty quick to
calculate and adapts over time to any fluctuations that might happen in team estimations. For
example, if the relative effort used to estimate a card changes over time as the team grows, an
average over the last three sprints helps capture those changes. The drawbacks are that it doesn't
account well for preplanned vacations, extensive time in meetings, and other factors that might
affect the overall number of points a team can complete in a quarter.

The second approach is for a team that needs a more complex estimation. The benefits of a more
complicated equation is that it can account for more things like planned vacation, KTLO baseline
budgets, and meetings. The extensive detail can also bring the benefits of increased trust from
management, especially if pressures around resource investment is accompanying quarterly planning.
It also provides the flexibility to account for other baseline budgets as needed. As an example, if
an organization has a 20% time innovation program 
[like Google](https://ebsedu.org/blog/google-tapping-workplace-actualization-20-time-rule), that
time can be removed from the quarterly plan in the more complicated calculations.

I used both approaches to calculate the range of sprint points that the teams could complete. For
the specific example in the template, I was relatively certain that the team would complete between
124 and 140 points for that planned quarter. The first quarter that I used this sheet, we actually
completed 147 points. The variance between the actual and the estimated can be explained by the team
policy that any high priority KTLO support work that came in mid-sprint and takes over 15 minutes,
would automatically be a 1-point card. Theoretically, three 1 point cards could be completed in a
single day which throws off the point-to-day conversion. However, point-to-day conversions defeat
the purpose of using sprint points over time-based estimates. Atlassian has 
[a great write-up](https://www.atlassian.com/agile/project-management/estimation) on the different
between time-based and story point estimates.

If the dangers of using time-based estimation outweigh the benefits of quarterly planning, the
"Napkin Capacity Planning" can be expanded to include the baseline budgets and planned vacations.
Better sprint-based point tracking at the team level can be used to improve the estimations without
using time-based estimations.


---

## Resources

**Google Doc Template:** https://docs.google.com/spreadsheets/d/1Ie41oQadFQsLK_ZdDl01uzvF9Ehy_yOen-jSy16jpq0/edit?usp=sharing

1. Meadows, Donella H., and Diana Wright. Thinking in Systems: A Primer. Earthscan, 2009.
2. Flinn, Peter. Managing Technology and Product Development Programmes: A Framework for Success. Wiley, 2019.
3. Larson, Will. An Elegant Puzzle: Systems of Engineering Management. First edition, Stripe Press, 2019.
4. Nieto-Rodriguez, Antonio. “The Project Economy Has Arrived.” Harvard Business Review, Dec. 2021, https://hbr.org/2021/11/the-project-economy-has-arrived

