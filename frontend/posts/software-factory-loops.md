---
title: Loops that form a Software Factory
slug: software-factory-loops
published: 2026-09-11
description: >
  I've been thinking a lot about software factory loops lately, pairing deterministic engineering
  with the non-determinism of LLMs

---

I've been thinking a lot about loops lately. In process design, loops are at risk of being
inefficiencies. They carry that risk indefinitely. If the time it takes for a task inside that loop
increases, the loop that surrounds it amplifies it in the process. My main area of expertise in my
career has been shortening feedback loops in the software engineering processes through the
principles of DevOps.

Elsewhere, loops are a foundational concept in System Dynamics. They are used to model learning from
the perspective of mental models: single-loop learning where the mental model and decision rules
stay static, and double-loop learning where the feedback from the environment updates the mental
model which updates the decision-making rules. Loops are also used to model dynamically complex
systems in causal loop diagrams, showing and predicting how systems will behave over time.

But recently, I have been thinking about loops even more in the context of GenAI and LLMs. Arguably,
the leaps ahead in artificial intelligence have been heavily influenced by loops. Common LLMs are
directed acyclic graphs of probabilistic weights [1]. By definition, they do not loop. However,
token generation through predicting the next token is done through looping the previous token and
the context before it through the model. This looping in the inference engine shocked the world in
2022 when OpenAI launched ChatGPT 3.5. Loops are at the heart of this major leap.

Given the probabilistic nature of these models, the resulting outputs were themselves stochastic.
Users found that the results contained information that was incorrect. With long context in chat,
the responses degraded. The interest in the technology was growing at a steady rate, but so were the
mistakes that were showing up in people's professional lives. Law cases were cited that didn't
exist. Events were announced that were not scheduled.

It was around this time (August 2024) when I finally opened up my first chat window to start testing
the technology. It was almost 2 years old and seemed to prove that it had not failed its promises
like implementations of blockchain technology. And then, in May of 2025, the second loop shot the
industry forward into the even more chaotic industry as it is today. A loop with tools that an LLM
can use to work towards a goal, responding to its own outputs: agentic AI [2]. Loops are again at
the heart of the leap forward.

Being a later adopter of LLM technology and understanding the probabilistic nature of it, I am still
suspicious of the claims of others around this technology. This suspicion is amplified with the
claims that the companies themselves are making, companies that are highly incentivized for
outlandish claims to be true (whatever they may be). It isn't the mathematics of the model that I am
suspicious of, or the value that it has and will continue to have. It is all of the noise in the
industry that is hard to cut through.

I've spent the last two years spinning up in this domain, cutting through the noise, and getting an
understanding of what the elements of the systems are and how they work. As a systems thinker and
systems engineer, I am interested in building the systems around these stochastic outputs that
create value. There are two more loops that are already here that have their own revolutions on the
horizon: workflow loops and campaign loops. Workflow loops can be seen in the Hermes Agent
Kanban board as well as Claude Code's Dynamic Workflows (among others I'm sure). The shape of the
campaign loops can just start to be seen with OpenAI's Hugging Face hack (but are not the focus of
this post).

There are two approaches to a workflow loop: 1) non-deterministic orchestrators break down work and
hand it off to other agents, and 2) a deterministic shell that runs specific steps that LLM agents
are elements of. The first is a generalizable system that uses the LLM as a runtime itself, and has
little visibility into the system when something goes wrong. The deterministic pipeline approach
sees the LLMs as only a smaller system element of the whole process and can compensate for the
weaknesses of the element.

It is going to be harder to generalize a deterministic workflow loop than inference engines and
agentic AI loops. A workflow loop is essentially a deterministic automation of a project management
flow. Project management flows are often unique to businesses, so it's going to be hard to pull a
deterministic workflow tool off the shelf and plug it into an existing business.

![Software Factory Loops](/posts/0098/software-factory-loops.png)

These workflow loops have been called Software Factories or Dark Software Factories. This is where I
have been spending my extra mental cycles recently. I've been working on building out a software
factory for my personal projects, and these loops are going to be the next revolution in the AI
industry.

---

## Resources

1. https://d2l.ai/chapter_attention-mechanisms-and-transformers/transformer.html
2. https://www.mihaileric.com/The-Emperor-Has-No-Clothes/

