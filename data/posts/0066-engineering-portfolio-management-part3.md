!! title: Engineering Portfolio Management - Part 3
!! slug: engineering-portfolio-management-part3
!! published: 2024-11-11
!! description: Part three of the Engineering Portfolio Management series: a class summary and the lessons learned applied to the software industry

---

Without a product or service application, technology is worth little more than to satisfy curiosity
(Flinn, p.8). Manufacturing is the process to create products for distribution and sale. Similarly
to NASA's Technology Readiness Levels (discussed in [Part 2]()), the US Department of Defense
developed Manufacturing Readiness Levels (MRLs) (Flinn p.43). 

TRLs and MRLs are used together in portfolio management systems to monitor and control the progress
of technology projects. MRLs are an important piece to consider in the overall readiness of a
technology project during the different phases of new product development. To bring the point home,
is a technology worth developing all the way to TRL 9 if it costs significantly more than a customer
is willing to purchase it for? The DoD defines the MRLs as the following (Flinn p.44-45):

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

Similarly to the TRLs, it is helpful to break these descriptions up along multiple categories for a
better defined process. Such an example may look like this (Weber, 2024):

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

Similar to TRLs, every project has an overall MRL that is the lowest MRL of all of these categories.
These levels are pretty specific to product manufacturing. However, the categories can be tweaked to
apply the same type of framework to operation readiness to operations for managing Site Reliability
for cloud-based software. I would call these software ORLs.

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

Using the TRLs and MRLs (or ORLs) in conjunction with a portfolio management system creates a
transparent process to push projects through across the entire engineering team. It provides an
extremely robust and collaborative approach projects. Like with most organizational process, the
timing of the different TRLs and MRLs will be unique to each. However, they should be operating in
parallel during the phases of the portfolio management system. These examples use Research,
Development, and Deployment and pair three levels each, but this isn't the only way to do it. It
might make more sense to pair MRL 2 with TRL 6 or some other combination. As mentioned a few times
in [Part 2](), we are building up to review portfolio management systems and gate reviews in 
[Part 4]() and how TLRs and MRLs (or ORLs) fit.

Before moving on from manufacturing, there is a really important idea in the physical engineering
world that I would like to discuss: design for manufacturing and assembly (DFMA). DFMA is the
practice of bringing experts from manufacturing together with the product engineers in the design
phase. The collaboration with manufacturing early on in the design helps identify suboptimal designs
early on to save investing resources in them.

The idea of DFMA can be translated into the software industry by including SRE teams in the design
discussions before development begins. From my experience, the majority of the time SRE teams are
brought in really late in the game after features and systems are fully designed and implemented
that result in unintended increase of network traffic to a specific endpoint or user process that
causes significant issues for some or all of the users. A good example would be two products with
wildly different usage patterns sharing the same infrastructure. Collaborating with SRE during the
design phase can help uncover these issues to keep long-term tech debt low.


---

## Resources

1. Flinn, Peter. Managing Technology and Product Development Programmes: A Framework for Success. Wiley, 2019.
2. Weber, Gary. TRL/MRL Categories. Gonzaga University, ENGM 510.
