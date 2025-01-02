!! title: Engineering Portfolio Management - Part 5
!! slug: engineering-portfolio-management-part5
!! published: 2024-11-25
!! description: Part 5 (the final part) of the Engineering Portfolio Management series: a class summary and the lessons learned applied to the software industry

---

In this final post of the series, we are going to expand on the idea that Engineering Portfolio
Management is not a debate between Agile vs a gated idea-to-launch systems. A robust system that
integrates both Agile and a gated system is needed, especially in the software industry.

## Agile _vs_ Plan-driven (Gated system)

Plan-driven systems have been designed to focus on the validation and verification of deliverables
against a set of specifications (Cooper p.187). When a problem is well defined, the solution can
also be well defined and the deliverables measured against the required specifications. This is the
approach that physical engineering has traditionally taken (getting to the moon, the Space Shuttle,
etc.).

However, the experience of the authors of the Agile Manifesto, customers/users could not fully
specify what it was that they needed, so they chose to value customer collaboration over strict
specifications and contracts (Beck et al.). Agile focuses on only delivering what is currently
needed, because often future needs change and previous plans may no longer be relevant.

The conversation of Agile vs Plan-driven (waterfall) has been a constant point of tension.
Plan-driven approaches have been thoroughly studied for decades and been shown to have increased
new-product development success (Cooper p.15). But the same can also be said of Agile methodologies
(Cooper p.194). And going further, _Impact Engineering_, a book that was published this year,
conducted statistical analysis to look at the correlation of using Agile methodologies and project
failure, finding that projects following Agile practices when it came to requirements were 227% more
likely to fail (Ali, p.311). 

One of the reasons that this topic is so hotly debated is that because both sides are right.
Plan-driven projects work and Agile projects work. Both have their strengths in different
situations. Cooper describes the strengths of each approach (p.188):

| Characteristics of<br/>Project or Setting | Agile Strengths | Plan-driven Strengths |
| ----------------------------------------- | --------------- | --------------------- |
| Criticality of project | Low | High |
| Developers' Experience | Senior (experienced) | More junior |
| Product Requirements | Change often during Development | Stable with specifications |
| Project Team Size | Small | Large |
| Company Culture | Culture that responds to change | Culture that demands order |

Projects need a balance of _both agility and discipline_ (Cooper p.188). Swinging the pendulum too
far towards Agile leads to increased local communication, but also an increase of siloing around the
project team with decreased cross-departmental communication. However, swinging too far the other
direction results in a rigid system that does not provide room for the fast-paced changing world
that we are in (Cooper p.189). 


## Agile _and_ Plan-driven (Gated system)

Further examination of the characteristic differences can be seen below show that Plan-driven Agile
not only have their strengths for different projects, but also at different levels. Namely, the
Plan-driven is good at the macro-level planning and Agile is good at micro-level planning (Cooper
p.189):

| Characteristic | Gated System | Agile |
| -------------- | ----- | ------------ |
| Type of model | Macroplanning | Microplanning, project management |
| Scope | Idea to launch, end-to-end | Focused in the Development & Testing stages | 
| Organizational: project team and breadth | Cross-functional: Technical,<br/>Marketing, Sales, & Operations | Largely technical dedicated project teams |
| End point | Product launched into market | Developed and tested product |
| Decision model | Resource investment: Go/Kill from senior governance group | Tactical implementations by the self-managed team |

In the software industry, implementations of Agile often forget to solidify their requirements
through the Development phase by iterating with the customer to make sure they have a robust
voice-of-customer which is imperative to the success of a new product. I believe this one of the
underlying causes of the issues that Ali highlighted in _Impact Engineering_. If requirements are
not constantly being solidified throughout the Development stage, there is risk that the project
will never finish.

The Scrum flavor of Agile also has a high risk to focus too heavily on sprint goals and lose sight
of the overall objective (Cooper p.192). Flow of communication is drastically increased internal to
the project team, but it is often heavily siloed and lacks good process to communicate up and out.

The flaws in Agile implementations can be mitigated by embedding Agile practices into the more
disciplined gated idea-to-launch system. Gated systems communicate up and out, giving senior
management visibility into the health and value of projects while making sure that all projects are
aligned with the company objectives and are balanced on a quarterly basis. The gated systems bring
the discipline of making sure that due process is followed in building the voice-of-customer and the
business cases to validate the [continuous] resource investment. Once a rough project scope is
defined in the product backlog and validated by the customer, Agile practices can be effectively
deployed through the Development and Testing phases to continuously define and validate the
customer's needs are met through the iterative solutions delivered.

In the engineering and manufacturing industries, robust gated systems are often already in place
from decades of research into what makes product launches and firms successful. Implementing a
hybrid system normally looks like starting to use Agile practices to provide faster responses to
change and increased visibility in the Development & Testing portions of an already effective gated
system (Cooper p.213). In small organizations in the high-technology software industry, Agile is the
default and it is the gated system that is often missing. This makes sense while startups are small
and only have a single product/project going at a time. However, as soon as they grow to be big
enough to run multiple projects, a gated system is needed to manage the portfolio of projects. 


## Conclusion

The Agile Manifesto states (Beck et al.):

> **Individuals and interactions** over processes and tools<br/>
> **Working software** over comprehensive documentation<br/>
> **Customer collaboration** over contract negotiation<br/>
> **Responding to change** over following a plan<br/><br/>
> While there is value in the items on the right, we value the items on the left more

These principles do well in managing projects at the micro level; achieving the goals internal to
the project. However, none of these principles directly help support the goals of portfolio
management. Remember from [Part 4](./posts/engineering-portfolio-management-part4) that the goals of
portfolio management are to: 1) achieve strategic alignment with the business objectives, 2)
maximize the value of the portfolio of projects, 3) maintain the right balance of projects, and 4)
maintain the correct number of ongoing projects (Kahn et al, p.156). This is where a gated system
comes in to help support Agile. Using a gated system for portfolio management will lead to changes,
and Agile will help the organization respond to those changes. Both of these systems work
hand-in-hand to drive alignment throughout the entire organization and optimize for longevity in
the infinite game of business (Sinek).


---

## Resources

1. Cooper, Robert G. Winning at New Products: Creating Value through Innovation - 5th Edition. Fifth edition, Revised and Updated, Basic Books, 2017.
2. Beck, Kent, et al. Manifesto for Agile Software Development. 2001, https://agilemanifesto.org/.
3. Ali, Junade. Impact Engineering (Complete Omnibus). First edition, Engprax Ltd, 2024.
4. Kahn, Kenneth B., et al., editors. The PDMA Handbook of New Product Development. Third edition, Wiley, 2013. K10plus ISBN, https://doi.org/10.1002/9781118466421.
5. Sinek, Simon. The Infinite Game. Portfolio/Penguin, 2019.
