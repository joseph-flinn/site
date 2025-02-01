---
title: "Graph Theory of Organizational Communication"
slug: graph-theory-of-org-comms
published: 2024-09-09
description: >
  Using graph theory to show why organizational communication policies are important.
---

<script>
  import Mermaid from "$lib/components/Mermaid.svelte";
</script>


Graph theory is my favorite area of mathematics. I was introduced to it between my sophomore and
junior years in university while researching secure routing algorithms at the University of
Houston-Downtown. Ever since I learned about graphs and their algorithms, I tend to see them
everywhere.

Computer networks are graphs. Family trees are graphs (the tree data structures are a subset of
graphs). Social networks (both digital and physical) are graphs. The products in a grocery store can
be represented as a graph where the edges are the distances between the each product (the distance
between the peanut butter and jam/jelly is always very short). Roads and intersections are graphs. I
could continue listing examples for quite a while. It could be argued that everything is a graph.
The objects that do not have any relationship to another is just a graph of a single node with no
edges.

Out of all of the graphs that exist, the one that I find the most fascinating is the communication
channel graph of social structures; more specifically, social structures of organizations.


## Graph Theory of Communication Channels

Somewhere between my self-study of graph theory in the context of computer networks and studying
graph theory in the more formal classroom setting, I stumbled into the realization that all social
systems can represent their "communication channels" as edges in a communication graph. Four
examples of such graphs are given below for the theoretical maximum number of communication channels
for small groups of people. For now, we will assume only a single medium of communication; perhaps
verbal communication as an example.

![Complete graphs for 2, 3, 4, and 5 verticies](/posts/0057/complete-graphs.png)

Each vertex of the graph represents a person. The edge between each person represents the people
exchanging information across our assumed single medium of communication. To prevent the need for
drawing out all of these complete graphs for larger numbers of people, the following equation
computes the number of edges for any complete graph of _n_ people:

$$
E_K(n) = \frac{n(n-1)} 2
$$

Graphing this equation over the set of `{ 0, 50, 100, 200, 250 }` people results in this line chart
(also known as a graph, but a different type of graph than the mathematical graph data structure we
are discussing in this post):

<Mermaid> 
xychart-beta
  title "Communication Channel Growth"
  x-axis [0, 50, 100, 150, 200, 250]
  y-axis "Channels" 0 --> 40000
  line [ 0, 50, 100, 150, 200, 250 ]
  line [ 0, 1225, 4950, 11175, 19900, 31125 ]
</Mermaid>

As a social system grows linearly, the number of possible communication channels grows polynomially
(slower than exponentially, but will never plateau naturally). The horizontal-looking line at the
bottom of the graphs _f(n)_, the linear growth function for the number of people in the social
system. 

When the social system is an organization like a company, the increase in communication complexity
is one of the overhead costs of growing the organization or any sub-team in that organization. Each
additional person added to a team adds _(n - 1)_ new channels to manage.


## Multiple Tools for Communication

Now, to make this problem a bit more complicated, most social systems have multiple mediums of communication. 
Basic information transfer can be done via written or verbal and there are an ever-growing number of
tools to exchange this information. Examples of these tools in an organization would include:
meetings, phone calls, instant messengers, threads in project management software, comments in the
organization's documentation solution, etc. Some of these tools may even have multiple communication
channels built inside of them creating more complexity. For example, Slack provides DMs, group
chats, channels, and single-depth threads in each of these, to structure communication around. 

Each tool that is used in and organization to fasciliate communication increases the overall
complexity of the number of communication channels. Essentially, a complete graph exists for each
communication tool that the organization uses. For example, if an organization of 100 people uses
five different communication tools, instead of having a theoretical maximum of ~5000, they would
instead of ~25000.


## Organization Communication Policies

A communication graph is at the core of any social system. In a hierarchical system such as an
organization, the org chart is the backbone of the communication graph, but the graph extends out
past the org chart. Some of these extensions are formally created through cross-functional team
projects with stakeholders somewhere else in the organization.  Other extensions may happen
organically where individuals on different teams build channels between themselves for social
benefit or organization benefit (to improve execution on projects or operations).

Dr. Melvin Conway described the importance of communication policies for an organization in that the
organization can only design and deliver systems that mimic and copy its own structure (Conway
1968). Creating policies and frameworks on how communication flows in an organization has a direct
impact on the products and services the organization can provide.

While small startups might be able to fully use all of their theoretical communication channels,
once a company reaches a certain size, it becomes impossible to actively manage all of the channels.
This is where policies and frameworks can come in to support. Unfortunately, there is no one best
way to structure and manage communication because every organization has different goals and needs.
However, all organizations should have policies, protocols, and guidelines on how to effectively
manage communication channels to effectively achieve those goals and meet those needs. 

As examples of a company's communication policy, Elon Musk pushes Tesla employees to use direct
communication rather than running the information through the chain of command, even to the point of
mentioning that actively preventing this type of communication was a fire-able offense (Bariso
2017). A [SOAP Report](https://www.ncbi.nlm.nih.gov/books/NBK482263/) in the Emergency Services
context is an example of both a framework and protocol structured in such a way where repetitive
delivery of the same report over a spotty radio transmission has a high likelihood of being fully
received after enough repetitions. The operator on the other end knows what data goes in what
portion of the report, so they can fill out that portion even if they missed a previous portion of
the report.

Project-driven teams need a different communication framework than operations teams.  Air Traffic
Control (ATC), who conduct more operational type work, has a list of communication protocols (found
[here](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap4_section_2.html)). Scrum
project management contains some frameworks for specific types of project communication. There are a
number of ceremonies with set agendas on what to communicate when. The PMBOK sets Communications
Management as one of the ten complete Knowledge Bodies in project management (PMI, 2017). Every
project should include a plan for how to manage communications. 


## Conclusion

Creating communication policies, protocols, and frameworks to follow as an organization will help
limit the number of used communication channels that exist out of the number of theoretical
channels. However, while creating those policies, protocols, and frameworks, it is imperative to
remember Conway's Law in which an organization can only design and deliver products and services
which replicate their own internal communication structures. It is important to make sure that the
design of the internal communication structures--and possibly even the formal organizational
structure--are serving the overall mission of the organization.

---

## Resources

1. Conway, Melvin E. “HOW DO COMMITTEES INVENT?” Datamation, Apr. 1968.
2. Bariso, Justin. “This Email From Elon Musk to Tesla Employees Describes What Great Communication Looks Like.” Inc.Com, 30 Aug. 2017, https://www.inc.com/justin-bariso/this-email-from-elon-musk-to-tesla-employees-descr.html.
3. Project Management Institute, editor. A Guide to the Project Management Body of Knowledge: PMBOK Guide. Sixth edition, Project Management Institute, 2017.








