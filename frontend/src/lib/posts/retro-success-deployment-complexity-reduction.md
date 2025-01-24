---
title: [Manager Retro] Success - Deployment Complexity Reduction
slug: retro-success-deployment-complexity-reduction
published: 2024-06-03
description: >
  Reflection and gratitude on one of the most challenging project we worked on. 

---

One of the greatest technical achievements that the team has made was to decrease the complexity the
backend deploy. There is also a significant failure associated with the result, but we will review
that with the long list of other failures and the lessons learned from them.

There are two types of complexities when it comes to systems: combinatorial and dynamic (Sterman
2009). Combinatorial complexity is associated with the size of the system or the size of the
solution search space for a particular problem. Dynamic complexity on the other hand is the
complexity of subsystems interacting with one another over time. 

Specifically in software systems, combinatorial complexity is directly correlated with the number of
services and subsystems that make up the overall system. Examples of such services are the core API
service, the third-party payment service, the Azure queues, the database, and the client
applications. As the number of services and systems grows, the combinatorial complexity grows
linearly with it.

Dynamic complexity is complexity that arises out of the services and subsystems interacting over
time. Let's use a database as an example. When the software system is relatively young with a small
amount of data, retrieving all data that matches a query whether the application needs it or not is
inexpensive (a `SELECT *` for the more technically inclined readers). However, as the dataset grows,
returning all of the unneeded data becomes more expensive. At some point in the future, this will
result in a system to significantly slow down while the database wastes cycles compiling data to
send to the application that the application is not going to use. 

Software architecture has to balance both the combinatorial complexity of the system with the
dynamic complexity of the system. Over time as the organization grows and the software system has to
handle more data and more throughput, more problems arise where the original software system is no
longer able to keep up with the throughput. When this happens, the system needs to updated or risk
catastrophic collapse.

The software delivery life cycle processes also have to balance combinatorial complexity and the
dynamic complexities of the system. As the organization grows, the delivery processes that worked
when the organization was at a smaller size with less changes going out, may no longer work. And
similarly, if these processes are not updated to support the growing system, it also risks failure
and possibly collapse.

Back to the team's success story. We worked extremely hard and collaborated really closely with our
sister team to roll out a brand new production environment in a new region. The organization's
delivery processes at the time were going to scale linearly at best and my team was not given the
opportunity to double in size to support double the work. We needed to figure out a way to prevent
this new production environment from doubling the work. We decided to migrate away from the tech
debt of the current delivery process for one in favor of being able to grow to many environments and
enabled delivery processes needed for non-production environments. 

It took six months and many iterations, but we were able to replace the underlying compute
architecture with one that provided a lot more flexibility in deployments and paired this with
automating our database changes (where we were previously only allowed to make them manually).
Between the two of these changes, we were able to able to decrease the number of manual steps that
were needed for a successful deploy of an environment by 96%.

While this was a resounding success for my team, the project did not come without its challenges.
There was extreme amounts of pressure on the team to deliver by deadlines that were found to be
artificial. This pressure resulted in some breakdown in communication between the teams which made
collaboration more difficult. It also led to decisions being made that weighted the short term
higher than the long term. And my challenges with effective communication skills and the lack of
curiosity from leadership created an extremely stressful few weeks after the environment was
delivered. It was found that the architecture that was requested did not take into account how the
organization would receive payments from two separate environments. We scrambled to support the rest
of the engineering org who was building a net-new service so that the organization could get paid
from the users of the new environment.


## Gratitude

I am extremely grateful for my peer manager and his patience and willingness to lean into hardship
through the entire project. There were many times that we left conversations impassioned and
frustrated from our differing perspectives, but we didn't let that come between us. We figured out
how to lean in, get frustrated, communicate, and get to a solution we could move forward with. I
learned a lot about human connection and how powerful it is to use differing perspectives in
communication and problem solving. While I am tempted to wish to go back and use what I know now, I
wouldn't know what I know now if I had not had to stumble though those less-than-stellar times of
communication.

I am also grateful for how the team came together to solve all of the problems. It is amazing what
alignment on a goal can do for bringing a team together. We had a mission, we executed, and we
delivered. Through it I saw a lot of growth in the people on the team. Team members stepped up and
did what was best for the team over what was best for themselves. This is not something that can be
asked or demanded of by leadership, but something that leadership can only develop by providing the
right environment where everyone feels psychologically safe and cares for the people around them. As
a relatively new manager, I often questioned myself on how I was doing as a manager and a team
leader. The observation of members stepping up and caring for the team speaks more to that than I
can express. 


---

## Resources

1. Sterman, John D. Business Dynamics: Systems Thinking and Modeling for a Complex World. Nachdr., Irwin/McGraw-Hill, 2009.
