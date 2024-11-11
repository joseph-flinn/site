!! title: Engineering Portfolio Management - Part 3
!! slug: engineering-portfolio-management-part3
!! published: 2024-11-11
!! description: Part three of the Engineering Portfolio Management series: a class summary and the lessons learned applied to the software industry

---

Without a product or service application, technology is worth little more than to satisfy curiosity
(Flinn, p.8). Manufacturing is a key process in developing products from technology. As such, the US
Department of Defense came up readiness levels for their suppliers that are similar to NASA's TRLs
discussed in [Part 2](./posts/0065-engineering-portfolio-management-part2). They are known as Manufacturing Readiness Levels (MRLs) (Flinn p.43). 

Similar to TRLs, MRLs exist to assist in considering the overall readiness of a technology project
during the different phases of development. For instance, is a technology worth developing all the
way to TRL 9 if it costs significantly more than a customer is willing to pay? If not, the
development of the technology may need to be put on hold.

The US DoD defines the MRLs as the following (Flinn p.44-45):

| Level | Description |
| ----- | ----------- |
| MRL 1 | Basic manufacturing implications identified |
| MRL 2 | Manufacturing concepts identified |
| MRL 3 | Manufacturing proof of concept developed |
| MRL 4 | Capability to produce the technology in a lab environment |
| MRL 5 | Capability to produce prototype components in a production relevant environment |
| MRL 6 | Capability to produce prototype system or subsystem in a production relevant environment |
| MRL 7 | Capability to produce prototype system, subsystem, or components in a production representative environment |
| MRL 8 | Pilot line capability demonstrated. Ready to begin low-rate production |
| MRL 9 | Low Rate Production demonstrated. Capability in place to being Full Rate Production |
| MRL 10 | Full Rate Production demonstrated and lean production practices in place |

With such vague descriptions, it is helpful to break these up into multiple categories to provide a
more robust framework for determining the overall MRL of a product. Rememeber, every organization is
a unique blend of people, process, and product, so ach organization may need different MRL
categoiries. A good base example to start from would be the following (Weber, 2024):

| Level | Process description / definition | Skill required to produce | Production Facilities | Cost management | Supply Chain Management | Phase |
| ----- | -------------------------------- | ------------------------- | --------------------- | --------------- | ----------------------- | ----- |
| MRL 1 | General concept proposed with justification | | | | | Research | 
| MRL 2 | Simple test work | Highly skilled and versatile | Facility & process developed in outline form | Broad idea of cost range | | Research | 
| MRL 3 | Specific process proven by producing representative parts | | Core processes and facility defined | Overall cost target & business case defined | Identified specialized processes required | Research | 
| MRL 4 | Processes fundamentals fully understood and rate capability proven | | Approach and budget defined | | | Development | 
| MRL 5 | Validated on production equipment & tooling | Skilled operator | Production facility modelled | Item-by-item targets | Make vs Buy Completed | Development | 
| MRL 6 | Production process defined | Trained production operator | Production process trialed | Full business case agreed ahead of MRL 7-9 | Critical suppliers selected | Development | 
| MRL 7 | | | | Validated with quotes | | Deployment | 
| MRL 8 | Production facilities and tooling used | | Production facilities installed | Cost & business case validated in production | All suppliers selected | Deployment | 
| MRL 9 | Facilities and tools in routine production | | Facilities proven at production rate | | Routine MRP scheduling in place | Deployment | 
| MRL 10 | Production process running under statistical process control | Full rate production personnel & skill set definitions in place | Surge capability for higher production rates understood | | Supply chain life-cycle management established | Full Production | 

The overall MRL of a product is the lowest MRL across all of these categories. If a production
facility has been designed and built, but the manufacturing process still requires highly skilled
scientists with PhDs to operate, the readiness level of manufacturing the product is constrained to
an MRL 2.

While these levels are specific to product manufacturing, the categories can be tweaked to apply the
same type of framework to software operational readiness: Operational Readiness Levels (ORLs). All
of the physical facilities and tooling are replaced with infrasturcture and processes needed to
operate software at scale. The categories that have been left are broad enough to remain the same.

| Level | Process description / definition | Skill required to operate | Infrastructure & Operating Processes | Cost management | Supply Chain Management | Phase |
| ----- | -------------------------------- | ------------------------- | --------------------- | --------------- | ----------------------- | ----- |
| ORL 1 | General concept proposed with justification | | | | | Research | 
| ORL 2 | Simple test work | Highly skilled and versatile (Architect) | Infrastructure & operating processes developed in outline form | Broad idea of cost range | | Research | 
| ORL 3 | Specific process proven by producing representative system | | Core processes and infrastructure defined | Overall cost target & business case defined | Identified specialized processes required | Research | 
| ORL 4 | Processes fundamentals fully understood and request-rate capability proven | | Approach and budget defined | | | Development | 
| ORL 5 | Process validated in production representative system (staging) | Skilled operator (Specialized SRE) | Production infrastructure & processes modeled | Item-by-item targets | Make vs Buy Completed | Development | 
| ORL 6 | Production process defined | Trained production operator (Any SRE) | Production process trialed | Full business case agreed ahead of MRL 7-9 | Critical suppliers selected | Development | 
| ORL 7 | | | | Validated with quotes | | Deployment | 
| ORL 8 | Process validated in Production | | Production infrastructure installed | Cost & business case validated in production | All suppliers selected | Deployment | 
| ORL 9 | Process in routine use in Production | | Infrastructure & processes proven at production rate | | Routine MRP scheduling in place | Deployment | 
| ORL 10 | Production process running under statistical process control | Full rate production personnel & skill set definitions in place | Surge capability for higher throughput understood | | Supply chain life-cycle management established | Full Production | 

TRLs and MRL/ORLs are distinct but not fully separate. As an example, let's say a team of engineers
are working to add a new product feature that requires a new type of cache. As there are many
different caching strategies and technologies, the decisions on which to use will require some
collaboration between the architect, the software engineers, and the site reliability engineers. The
development work of the product feature would heavily use the TRL framework while the infrastructure
design and implementation would more likely use the ORLs. However, the overall feature will need to
meet both TLR 9 and ORL 10 in order to be determined complete and fully operational in production.

What happens if the site reliability team determines that there are infrastructure constraints on
which new caching system can be chosen? What happens if the cost of the desired caching
technology--in infrastructure, networking egress, and maintenance--is significantly more than an
alternative? This is why close collaboration across all of the teams is imperative in the earliest
stages of the project.

In physical engineering, this early collaboration is called design for manufacturing and assembly or
DFMA. Not only do the engineers need to solve the specific engineering problem, but they also need
to make sure that their design does not interfere with other portions of the larger project. For
instance, if a team of engineers were designing a new engine, they need to be constantly
communicating among themselves to make sure their part designs do not use the same physical space as
another part. They also need to be in communication with their maintenance crews to make sure that
bolts holding the engine together are easy to get to get to and do not require new specialized tools.

DFMA is the practice of bringing experts from manufacturing together with the product engineers in
the design phase to collaborate throughout the entire product development life-cycle. The
collaboration with manufacturing, operations, and customer support in the early phases of product
development helps identify suboptimal designs before significant investment.

Unfortunately from my experience, in the software industry, SRE teams are often brought in late in
the project life-cycle, after features and systems are fully designed and implemented. This not only
stretches the timelines for project delivery--while putting stress on the SRE team--but it also
risks unintended issues like an increase of network traffic to a specific endpoint or user process
that causes issues for a significant portion of the users. An example of such an unintended issue
could be two products with wildly different usage patterns sharing the same infrastructure.
Optimizing for one usage pattern would then interfere with the other product. Collaborating with SRE
during the design phase helps to uncover these issues in order to keep long-term tech debt low.

We can take lessons from the processes that the manufacturing industry has been continuously
improving and apply them to the software industry. Using MRLs (or ORLs) for objective measurements
of project progress help make sure that an organization's resources are being invested responsibly.
Over the last few posts we have been building up the foundation to examine how TRLs and MRL/ORLs can
be used in implementing a system to provide streamlined decision making to effectively manage resource
investment. We will look at such a system in the upcoming [Part 4]().


---

## Resources

1. Flinn, Peter. Managing Technology and Product Development Programmes: A Framework for Success. Wiley, 2019.
2. Weber, Gary. TRL/MRL Categories. Gonzaga University, ENGM 510.
