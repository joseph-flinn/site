!! title: Practicing Impact over Productivity
!! slug: impact-over-productivity
!! published: 2024-08-26
!! description: Practicing the perspective of impact over productivity

---

I have been on sabbatical for just over three weeks and school starts tomorrow. Looking back over
the last three weeks, I have:

- Learned the ins and outs of booting the Le Potato v1 board from Libre Computer
- Set up a new daily journal practice
- Learned how to create packages for Nixpkgs
- Learned how to create modules for NixOS
- Learned how to set up and configure a production OpenBao instance
- Finished the Manager Retro series of posts
- Learned SOPs and `sops-nix`
- Set up and configured a new Framework laptop
- Reconfigured a 3D printer
- Brushed up on FreeCAD to customize an STL from the internet for an ongoing project

Along with this list, there have been many smaller things finished and many started and in progress.
I've gotten back into exercising, started learning how to West Coast Swing, restarted a sweater
knitting project (it was turning out to be the wrong size...), and started the adventure of becoming
a student again.

These are quite the lists. When I look over how many things that I have finished and checked off my
list, there is a large part of me that starts swelling with contentment and pride. To make this a
bit worse, the first list was done in about 90 hours; working about six hours a day, five days a
week.

However, I need to squash this feeling of pride. There are three major risks that come from the idea
of productivity. I have previously discussed the dangers in optimizing for [personal (or team)
productivity over organizational productivity](./posts/personal-vs-org-productivity) as the
summation of personal productivity does not equate to organizational productivity. The other two
risks are that productivity metrics risks long-term collapse of the system by creating friction for
innovation, and risks a world view that human value is correlated to what they produce.


### Risks with Productivity Metrics

Whenever metrics are collected and monitored, there is an elevated risk that those metrics become
the target of optimization rather than continuing to focus on optimizing for the overall gaol.
Productivity metrics are especially vulnerable to this over-optimization over the last few decades. 

The over-optimization of productivity can be attributed to the fallacy that the summation of all
individuals' productivity equates exactly to the overall productivity of the organization; that the
whole is the sum of the parts. This fallacy stems from the mechanistic worldview that has been
popular--and useful--since the 16th century (Capra and Pier 2016). 


Any time metrics are added to a process in which business
optimization is applied, there is a risk that the metrics will be over-fit and/or misused. Lean
Management shows us that flow metrics can be used to identify the main bottleneck in a process
target and remove it (Forsgren et al 2018). However, if the flow metrics are then used to set quota,
the overall system goal changes slightly from continuous improvement--which has the potential for
exponential growth of output via its reinforcing feedback loop (Sterman 2009)--to a goal of a specific
output per time period. 

Under the primary goal of continuous improvement, shutting down the system for a week to double the
output would be easily considered. Under a primary goal of quota it would be a lot harder to
consider. Both of these goals are sub-team goals--the goals of a factory floor--rather than the
primary goal of the organization (the organization's WHY). One may better align to the
organization's primary goal--hopefully longevity in the infinite game (Sinek 2019)--while the other
creates more tension. No matter which is the primary goal of the sub-team, the behavior of the
sub-system will change to match the goals, pressures, and incentives which may no longer be fully
aligned with the overall system goal. This is referred to as suboptimization in systems thinking
(Meadows 2009).

With the awareness of all of these risks, it is still important to have productivity metrics (tasks
per time unit). They are required in finding those bottlenecks in the processes to optimize
the flow of work through an organization. However, it is imperative that these metrics are only used
as system health indicators and not directly optimized, where there is high risk that a local minima
will be found while compromising organization longevity.

Organizations are complex non-linear social systems with many inputs and many outputs. System
Dynamics can be used to run simulations to experiment with policy changes--changes to inputs--to see
if they bring the desired system outputs. Done in simulation, time can be compressed to examine
long-term effects of the policy changes and many experiments can be run over short periods of time
to test different policy changes. Experiments done in real-time are a lot slower.


### Productivity and Human Value

Focusing on productivity runs a high risk of developing a worldview that I have come to believe is
not healthy for humanity as a whole: a human's value is directly correlated to what they produce.

On an individual level, when this worldview is internalized, any time spent not producing is seen as
a waste of time. Rest and sleep are important parts of a healthy life, but they do not result in any
production. Often rest and downtime are traded for hustle and production. The longevity of the
individual is compromised.

While the individual level compromises individual longevity, the more dangerous risk comes from the
societal level. When productivity is the core indicator of human value, society moves to stack rank
individuals in a hierarchy based on their output. Individuals that produce a lot are afforded status
and power where those that do not are often looked down upon with disgust. We draw lines and label
one side "us" and the other side "them". And in this division, we forget to see--or justify not
seeing--the human in "other".

---

Looking back through the lists of things that have been completed over the last three weeks, I can
see the inputs (90 hours of work) and the outputs (the list of completed tasks). But there is
something missing, and it is the value, outcome, impact of those outputs.

As an example of the differences between inputs, outputs, value, outcome, and impact, let's use an
example from my childhood. Starting when I was about 10, I mowed at least one neighbor's lawn most
summers. Every week, I would spend about an hour mowing the neighbor's lawn. This hour of work is
the input. The output of the work was that the lawn was mowed. The value I was providing was low
cost lawn care because I could keep overhead low. My costs were lawn mower rental from my dad and
paying for fuel. Combined, the cost was about 10-15% of what I would gross. As I didn't have any
personal bills as a 10 year old, I would net the rest. The outcome was that an elderly neighbor on
fixed income could pay less than hiring a professional lawn care service. And finally the impact was
that the elderly neighbor had more financial flexibility while on a fixed income. 

Note that the value, outcome, and impact are all focused on the client or stakeholder. These are all
more important than either inputs or outputs. System Dynamics helps wrangle inputs and outputs, but
strategy is necessary on top to define what the system goals are and what values, outcomes, and
impacts are desired from the system.

Reviewing the list of things through a perspective of value, outcomes, and impact show a different
picture that what the first 

**Le Potato v1:** Most single board ARM computers now come with SPI flash that stores a bootloader
which makes them act very similar to a UEFI x86_64 machine. While I can now quickly set up and run
services like OpenBao and Klipper on the SBCs, future value of this knowledge is quickly
depreciating (this won't stop me from writing up a post on this in the coming weeks though).

**Daily journal:** This has been really helpful to think in writing (Karlsson) and log the different
solutions to the small problems I run across. I am curious what this habit would look like in an
academic or managerial role. Daily journaling prior to launching into today's tasks help single out
the single high priority to focus on for the day (Koch 2013).

**nixpkgs & NixOS:** I now have first-hand experience and examples on how to extend NixOS and Nix.
However, it also seems the Nix project is at risk (https://save-nix-together.org).

**OpenBao & SOPs:** I've needed a better secrets manager for my homelab for a while. I am excited to
finally have a scalable solution in OpenBao that fits my GitOps deployment methodologies. However,
none of my NixOS machines are using OpenBao and none of my homelab services are using it yet. SOPs
is required to get "secret zero" onto the bare metal machines. This has yet to be of value.

**Manager Retro:** Finishing up the Manager Retro series was a great way of looking back and
celebrating the wins over the last four years and taking note of the areas for improvement. One of
the biggest challenges with having a growth mindset is to remember to celebrate the wins and not
only focus on the areas that need to be improved.

**Framework Laptop:** After setting up the majority of the new laptop, I am still using the previous
one since I have not yet migrated over my user data, the stateful changes that I have made in a
non-declarative way. This has yet to be of value.

**3D Printer:** Lots of time was spent setting up and reconfiguring the 3D printer. It has been a
few years since I last used it. The project requiring it is still in progress, so this has yet to
deliver value.

**FreeCAD:** The test print piece seems to work a bit better after adjusting. The outcome is a piece
of the ongoing project that will work marginally better. 

The updated picture looks like:

- Set up a new daily journal system to track notes on tasks (project logs) and notes on thoughts
  (fleeting notes for my zettelkasten)
- Wrapped up my reflection on the last four years to prepare to move forward into the next chapter

Value, outcomes, and impact are all more important that outputs or inputs. The value, outcomes, and
impact are all directly connected to the WHY of the system, so these are the most important things to
focus on and on which to monitor metrics.

---

## Resources

1. Capra, Fritjof, and Pier Luigi Luisi. The Systems View of Life: A Unifying Vision. Paperback edition first published 2016 with corrections, Cambridge University Press, 2016.
2. Forsgren, Nicole, et al. Accelerate: The Science behind DevOps: Building and Scaling High Performing Technology Organizations. First edition, IT Revolution, 2018.
3. Sterman, John D. Business Dynamics: Systems Thinking and Modeling for a Complex World. Nachdr., Irwin/McGraw-Hill, 2009.
4. Sinek, Simon. The Infinite Game. Portfolio/Penguin, 2019.
5. Meadows, Donella H., and Diana Wright. Thinking in Systems: A Primer. Earthscan, 2009.
6. Karlsson, Henrik. How to Think in Writing. 17 Jan. 2023, https://www.henrikkarlsson.xyz/p/writing-to-think.
7. Koch, Richard. The 80/20 Manager: The Secret to Working Less and Achieving More. 1st North American ed, Little, Brown and Company, 2013.



