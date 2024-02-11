!! title: System Dynamics - A New Definition of DevOps?
!! slug: e2m-st-new-devops-perspecitve
!! published: 2024-01-29
!! description: Discuss a new perspective on what DevOps is 

---


I have spent the last five years working in different roles on teams with "DevOps" in the name. As "DevOps" is in my
title and I have been trusted with the responsibility of leading a DevOps teams, I spend quite a bit of time thinking
and discussing what "DevOps" means. Being a part of the interview panel for my new manager--with the title of _Director
of DevOps & Infrastructure_--I have had the chance to ask what DevOps means to each candidate. 

Before asking the question, I always preface it with something like: "DevOps means something different to every person
and it looks different at every company; so much so that each one of the engineers has a different perspective on what
it means. With this in mind, what does DevOps mean to you?" Unsurprisingly, each candidate had a different answer.

Since reading Accelerate [[1](https://itrevolution.com/product/accelerate/)] a few years ago, my working for any
discussion around DevOps has been: _"DevOps is a collection of engineering practices and methodologies to deliver more
value, faster, in a more stable way to the end user."_ I have not been satisfied with this definition or perspective
and recently I have found it lacking. A quick follow up question asking about the specific engineering practices and
methodologies can quickly lead to a opinion heavy debate over Trunk Based Development vs GitFlow, Continuous Delivery vs
Continuous Deployment, and how much testing is needed, where it's needed and what needs to be tested.

As I have become a student of System Dynamics, I am working on coming up with a new personal perspective of what DevOps
is and how it is defined.

> DevOps is System Dynamics applied a technical organization with the goals of high performing value delivery. --
> (Joseph Flinn)

This definition seems a bit more hand wavy and relies on some previously gained knowledge and interpretations of some of
the words. So, let's get into interpreting!

Before diving into the elephant in the room--System Dynamics--let's quickly touch on "high performing value delivery".
The previous phrasing of "deliver more value, faster, in a more stable way" was biased towards delivering new value.
Minimizing service degradation to maximize user access to the services is constant user value delivery. A user being
able to access the same set of features at any time is more user value than say only on Friday nights. Just think if we
could only stream from a provider one night of the week instead of on demand. "Value" in "high performing value
delivery" allows for the expanded definition of "value". "High performing" removes the specific metrics of "more",
"faster" and "more stable" that constrained the definition. While most organizations probably want to deliver more value
faster and in a more stable way, DevOps and Systems Dynamics can be applied to organizations that don't have these
metrics as defined goals.

Now for the elephant. _Thinking in Systems_ [[2](https://www.chelseagreen.com/product/thinking-in-systems/)] is a primer
in Systems Theory which is a large part of the study of Systems Dynamics. 

> Self-organization produces hetrogeneity and unpredictability. It is likely to come up with whole new structures, whole
> new ways of doing things. It requires freedom and experimentation, and a certain amount of disorder. These conditions
> that encourage self-organization often can be scary to individuals and threatening to power structures (p. 81). 

DevOps strives to improve the system of the organization to create a self-organizing structure that works towards the
goal of value delivery. The characteristics of a self-organizing system is experimentation which is the culture DevOps
pushed towards Westrum Organizational Culture [[1](https://itrevolution.com/product/accelerate/)]. 


> The destruction [from undesired behavior] is often blamed on particular actors or events, although it is actually a
> consequence of the system structure. Blaming, disciplining, firing, twisting policy levers harder, hoping for a more
> favorable sequence of driving events, tinkering at the margins--these standard responses will not fix structural
> problems (p. 112).

One of the most important practices in moving towards the direction of experimentation is a collaborative and
blameless retrospective to see where improvements to the system structure can be added. My favorite example of a
blameless retro is in the wake of an engineer deleting a production application or database. There's a tendency to put
blame on the engineer, holding them accountable, and saying that they should have known better. However, I don't see
this as the engineer's fault in the least (barring the very extreme and very rare case that includes malicious intent).
My first question is "Why did system that manages the application or database allow the engineer to delete it in the
first place?" If it was a software engineer accidentally deleting a production database, why did they have a DB user that
could delete the database or if they only need access to the database temporarily and forgot to switch back to using the
staging one, how can the process to gain access to the production database be improved to prevent this from happening? 


> At any given time, the input that is most important to a system is the one that is most limiting.... Shifting inputs
> that are not the limiting one does not make the overall output changes expected (p. 101)

> Missing information is one of the most common causes of system malfunction. Adding or restoring information can be a
> powerful intervention (p. 157)

Value stream mapping is the main way to visualize how net new value is delivered. There is often differing views of what
the value stream looks like and how it acts. Collaboratively working to map it out and measure the delays in it helps
add more information to the system to find the global bottleneck. Removing the global bottleneck is the only way to
increase flow through the value stream. Improving processes upstream of the bottleneck only achieves more flow getting
caught in the bottleneck. Improving processes downstream of the bottleneck achieves higher performance on the work once
it gets there, but the bottleneck is still delivering the same amount of work as previous. 

> Whenever one factor ceases to be limiting, growth occurs and the growth itself change the relative scarcity of factors
> until another becomes limiting. To shift attention from the abundant factors to the next potential limiting factor is
> to gain real understanding of, and control over, the growth process (p. 103).

To increase the overall flow through the value stream, it has to be seen in its entirety and the true bottleneck found
and removed. All other work to improve the flow of new value through the system has diminishing returns.

> Systems, like the three wishes in the traditional fairy tale, have a terrible tendency to produce exactly and only
> what you ask them to produce. Be careful what you ask them to produce (p. 137)

---

## Resources

1. [Accelerate - Nicole Forsgren, Jez Humble, Gene Kim](https://itrevolution.com/product/accelerate/)
2. [Donella H. Meadows - Thinking in Systems](https://www.chelseagreen.com/product/thinking-in-systems/)
