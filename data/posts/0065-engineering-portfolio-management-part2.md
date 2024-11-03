!! title: Engineering Portfolio Management - Part 2
!! slug: engineering-portfolio-management-part2
!! published: 2024-11-03
!! description: Part two of the Engineering Portfolio Management series: a class summary and the lessons learned applied to the software industry

---

Technology is being developed at increasing speeds. In the software industry, this is apparent with
entire companies being built around new technology seemingly every day and running their entire
life-cycle within a few years. With the world going faster and faster, I have not paused to take a
step back and think about what technology is or what it's role is.

_Technology_ is defined as "the practical application of research and science to develop new
solutions that could subsequently be taken into commercial application through a product or
service" (Flinn p.5). The "tech industry" is the entire industry where research and science is being
applied to develop new solutions. Generative AI is definitely in the tech industry, and so is mRNA,
CO2-based heat pumps, and solid-state batteries. While I do work in the tech industry, it might be
more correct to say the software industry.

Product development is the process in which technology is turned into a commercial product or
service. How do we know when a technology is sufficiently ready to be turned into a product? Some
might say as soon as someone is willing to pay for it, but this leaves out a whole slew of
testing and safety considerations. It also leaves out one of the more important business questions:
"How do we know which of the technologies are the most promising (ie. best return for the
organization)?"

Fortunately, one of the great innovators of the 20th century has built a guide in determining the
readiness of technology. These readiness levels help measure technologies against themselves in
order to monitor their progress as well as measure against other competing technologies to determine
which technology has the best return. NASA developed Technology Readiness Levels to capture this
data (_Technology Readiness Levels - NASA_). 

| Level | Description |
| ----- | ----------- |
| TRL 1 | Basic principles observed and reported |
| TRL 2 | Technology concept and/or application formulated |
| TRL 3 | Analytical and experimental critical function and/or characteristic proof-of-concept |
| TRL 4 | Component and/or breadboard validation in laboratory environment |
| TRL 5 | Component and/or breadboard validation in relevant environment |
| TRL 6 | System/sub-system model or prototype demonstrated in relevant environment (ground or space) |
| TRL 7 | System prototype demonstrated in space environment |
| TRL 8 | Actual system completed and "flight qualified" through test and demonstration (ground or space) |
| TRL 9 | Actual system "flight proven" through successful mission operations |

While specific to an aerospace flight vehicle, the differences between the levels helps extrapolate
TRLs to other industries. A light-weight system can then be built around these levels to ensure that all
criteria has been met to achieve each level before investing too heavily into the next ones. [Part
4]() will go into more detail on such a system.

It is helpful to expand each of the description definitions along multiple dimensions to make sure
that the correct level is assigned at any given review. These definitions could be unique to every
organization depending on what product or services they provide. Staying in the physical engineering
realm, such an expansion could look like the following (Weber, 2024):

| Level | Product Definition | Form of Physical Realization | Technical Requirements | Testing & Validation | Regulatory Approval | Phase |
| ----- | ------------------ | ---------------------------- | ---------------------- | -------------------- | ------------------- | ----- |
| TRL 1 | Idea | Hand-made/mock-up | | Calculations| | Research |
| TRL 2 | Sketches & narrative description | | Scientific principles in lab or published literature | | | Research |
| TRL 3 | | Operational prototype demonstrated | | Key features demoed by test/analysis | Computer models lab test | Regulations identified; ID need for new standards | Research |
| TRL 4 | Schematics, models; limited change control | | Test/validation plan in place | | | Development | 
| TRL 5 | Design rules & operation environment defined | Production unit validation & verification plan defined | | Design for Manufacturing; Failure Mode & Effects Analysis | | Development |
| TRL 6 | Form change control in place | | Inspection, service, repair methods demoed | Accelerated/extreme testing | Approach to regulatory approval defined | Development |
| TRL 7 | Detailed CAD models, specs, bill of materials | Fully representative but not made off tools | | Real environment testing | | Deployment |
| TRL 8 | Full production information | Made off production tools | Design values validated | Real environment testing with end users | | Deployment |
| TRL 9 | | Made off tools in final production process | Final product/process fully qualified | | Full regulatory approval; Qualified specs & standards | Deployment |

At any one time, the technology may be at different levels across these categories. The overall
Technology Readiness Level is the minimum achieved across all categories. For example, if we were
reviewing a new technology that had a TRL 7 in _Product Definition_ but a TRL 2 in _Testing &
Validation_, the overall TRL of the technology would be a TRL 2. 

These level definitions have a heavy skew towards physical engineering. Lucky for us, NASA also
develops software and has adapted their original TRLs to the software world (_Software Technology
Readiness Levels - NASA_):

| Level | Software Description |
| ----- | -------------------- |
| TRL 1 | Scientific knowledge generated underpinning basic properties of software architecture and mathematical formulation. |
| TRL 2 | Practical application is identified but is speculative, no experimental proof or detailed analysis is available to support the conjecture. Basic properties of algorithms, representations and concepts defined. Basic principles coded. Experiments performed with synthetic data. |
| TRL 3 | Development of limited functionality to validate critical properties and predictions using non-integrated software components. |
| TRL 4 | Key, functionally critical, software components are integrated, and functionally validated, to establish interoperability and begin architecture development. Relevant Environments defined and performance in this environment predicted. |
| TRL 5 | End-to-end software elements implemented and interfaced with existing systems/simulations conforming to target environment. End-to-end software system, tested in relevant environment, meeting predicted performance. Operational environment performance predicted. Prototype implementations developed. |
| TRL 6 | Prototype implementations of the software demonstrated on full-scale realistic problems. Partially integrate with existing hardware/software systems. Limited documentation available. Engineering feasibility fully demonstrated. |
| TRL 7 | Prototype software exists having all key functionality available for demonstration and test. Well integrated with operational hardware/software systems demonstrating operational feasibility. Most software bugs removed. Limited documentation available. |
| TRL 8 | All software has been thoroughly debugged and fully integrated with all operational hardware and software systems. All user documentation, training documentation, and maintenance documentation completed. All functionality successfully demonstrated in simulated operational scenarios. Verification and Validation (V&V) completed. |
| TRL 9 | All software has been thoroughly debugged and fully integrated with all operational hardware/software systems. All documentation has been completed. Sustaining software engineering support is in place. System has been successfully operated in the operational environment. |

All software technology _projects_ need to go through all TRLs (anything at the task level should be
governed by other processes that reinforce these levels). However, not all levels need to be done by
the same organization. For instance, a company doesn't need to start from TRL 1 when purchasing and
rolling out a payroll software from a vendor. However, the TRL of the rollout will probably be lower
than the vendor's internal TRL until the software has been fully demoed and rolled for the entire
workforce. From another perspective, if a company is building custom software in-house as a product,
some of the projects may need to start all the way at TRL 1 and work up through TRL 9.

As mentioned in [Part 1](./posts/0064-engineering-portfolio-management-part1), my career has been in
the Software-as-a-Service industry and in Cloud Operations. Both of these areas are relatively new
compared to other industries like the food, aerospace, or steel industries. It seems we are in our
adolescence, where we think we know better than our parent engineering industries, but are still
learning what works and what does not.

While I advocated for DevOps methodologies and building the capabilities for failing fast forward,
it seems that some of the approaches adopted have cut the TRL corners. "Fail fast" has become a
motto and badge of honor in the software industry. However, the original idea seems to have lost its
efficacy. It seems to have become an excuse to not to do the upfront legwork to validate ideas
before building them. If the user likes a new feature, "Great! Let's keep it". If they don't, it may
or may not be removed, but no harm no foul. It is just a bunch of intangible ones and zeros, so it
is hard to say what the feature actually is worth in effort and in value to the company.

Failing fast needs to get back to failing early in the TRL levels rather than after the technology
has been fully implemented. While learning after the fact is good, it is better to learn prior to
the bulk of the financial investment in TRL 7-9. This will become more apparent with the gate review
system that we'll discuss in [Part 4]().

---

## Resources

1. Flinn, Peter. Managing Technology and Product Development Programmes: A Framework for Success. Wiley, 2019.
2. Technology Readiness Levels - NASA. 27 Sept. 2023, https://www.nasa.gov/directorates/somd/space-communications-navigation-program/technology-readiness-levels/.
3. Weber, Gary. TRL/MRL Categories. Gonzaga University, ENGM 510.
4. Software Technology Readiness Levels - NASA. https://www.nasa.gov/wp-content/uploads/2017/12/458490main_trl_definitions.pdf.



