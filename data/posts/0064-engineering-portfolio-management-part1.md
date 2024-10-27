!! title: Engineering Portfolio Management - Part 1
!! slug: engineering-portfolio-management-part1
!! published: 2024-10-28
!! description: Part one of the class summary for Engineering Portfolio Management and the lessons learned applied to the software industry

---

Until the first day of class, my association of the word "portfolio" was in terms of an artist's
portfolio or an investment portfolio. Learning about portfolio management in terms of the project
management function has changed how I see the business world.

I was introduced to portfolio management on the first day of class in two of my grad school classes:
Engineering Portfolio Management and Foundations of Project Management. Coming from the
Software-as-a-Service (SaaS) industry, both of these areas a really foreign. The Agile Manifesto was
penned in 2002 (Beck et al.) which has turned project management strategies in the SaaS and cloud
software industries on their head. Then along came DevOps and Lean Software Development which pushed
the velocity boundaries of software development even further, delivering software development
practices to streamline value delivery to the end user in safer ways.

Before moving too much further, I do want to recognize the my bias in the software industry being
mostly in the startup Software-as-a-Service space. I know that there are more stringent requirements
in industries like aerospace where Agile is taboo and "test in production" cannot be used.

As the majority of the software industry has kept pushing towards faster value delivery, "waterfall"
or "traditional project management" have become terms that are avoided at all costs. With the taboo
came the social pressures to also avoid tools that had been traditionally used (*cough* Gantt charts
*cough*). From my experience, Gantt charts are synonymous with waterfall and the general feeling was
that they should never be used; especially in DevOps circles. Tensions seem to continue to rise
between business functions that want to know when a project is going to be delivered and engineering
functions who are very uncomfortable giving quantitative estimates on timelines for deliverables
which contain high levels of uncertainty (one of the original reasons that the Agile Manifesto was
penned). This tension is heightened with any current or historical experiences of timelines being
weaponized against the engineers when their estimates were off.

Now, it might seem like I am starting down an anti-Agile path, but I am not whatsoever. I fully
agree with the philosophies of Agile and Lean Development, with the caveat that they are applied to
only project management. It will be helpful to define a few terms as they seem to be rarely used in
the SaaS industry. The following definitions come from the *A Guide to the Project Management Body
of Knowledge* (Project Management Institute, p.4). 

**Project:** A temporary endeavor undertaken to create a unique product, service, or result. The
temporary nature of projects indicate a beginning and an end to the project work or a phase of the
project work. Projects can stand alone or be part of a program or portfolio.

**Program:** Related projects, subsidiary programs, and program activities that are managed in a
coordinated manner to obtain a benefit not available from managing them individually.

**Portfolio:** Projects, programs, subsidiary portfolios, and operations managed as a group to
achieve strategic objectives.

I will argue that every firm has portfolio management. All projects a firm conducts is trying to
achieve some strategic objective. Now the question is whether or not the portfolio management is
being conducted in an effective way. If there is not a portfolio management system with transparent
processes, the answer to this question would be a "no". This is where a lot of growing startups--and
even established firms--seem to fail. Any firm that has more than a single project that is ongoing
needs a portfolio management system.


## Portfolio Management Overview

The most important part of portfolio management is alignment of projects to the overall strategic
objectives of a firm. A firm's strategic objectives are derived from the firm's mission, values, and
vision. The mission answers the question "Why do we exist?". A firm's values answers the question
"What is important to us?". And a firm's vision answers the question "Where do we want to be?".
Strategic drivers answer the question "How do we get there?". From the strategic drivers, strategic
objectives are born.

![Organizational Strategic Alignment Diagram](/posts/0064/organization-strategic-alignment.png)

Strategic objectives should be defined in the initiation phase a portfolio and continously updated
as the portfolio continues through its life-cycle (Wu & Chatzipanos, p.23) . During portfolio
optimization activities, if a project cannot be tied back to on of the firm's strategic objective,
it should be killed immediately. Any project that is not in alignment is a waste of investment and
is working against the success of the firm. A portfolio management system is the key to optimizing a
firm's investment towards their strategic objectives. Such a system will be discussed in [Part 3]()
of this series.

In addition to strategic alignment, portfolio management also brings a balance of investment to a
firm's project portfolio. Continuous innovation is important in today's business climate. Innovation
takes investment in both time and money. A firm needs the right balance of projects over multiple
time horizons to make sure that they are capitalizing on both the short-term gains that are
available to continuously improve and the long-term gains in innovation to keep the firm relevant. 

From a product and process perspective, these time horizons are categorized as derivative, platform,
and breakthrough. Derivative projects can be defined as projects that look to increase one or two
variables. For the software industry, this might be adding a new feature to a product or using
caching in the CI pipelines to achieve an 15% increase in speed. Platform projects are projects that
improve multiple key metrics and are scalable past the specific product or process where initially
applied. Examples of a software platform project includes Microsoft Office where a suite of products
can be mixed and matched to meet many customers' needs. Breakthrough projects significantly disrupt
an industry or economy. Two areas where there have been breakthrough projects recently are in the
LLM space and Apple's unified memory design of their M-series chips (especially for the local LLM
space).

A balanced portfolio is one that invests 70% in derivative projects, 20% in platform projects, and
10% in breakthrough projects (Flinn, p.97). While this is a great rule of thumb for established
firms, software startups that normally have a single product may need to adjust this definition
slightly to: 70% in short-term projects, 20% in the mid-term projects, and 10% in the long-term
projects. The definitions of short-term, mid-term, and long-term will most likely change over time.
Many software companies run their entire life-cycle in the time span of "short-term" in industries
like aerospace where firms like Boeing have existed for over 100 years. At a software company, these
project definitions should be written down and transparent so that everyone is on the same page at
how time and money are invested over a balanced time-horizon.

---

## Resources

1. Beck, Kent, et al. Manifesto for Agile Software Development. 2001, https://agilemanifesto.org/.
2. Project Management Institute. A Guide to the Project Management Body of Knowledge (PMBOK® Guide) – Seventh Edition and The Standard for Project Management (ENGLISH). 7th edition, Project Management Institute, 2021.
3. Wu, Te, and Panos A. Chatzipanos, editors. Implementing Project Portfolio Management: A Companion Guide to the Standard for Portfolio Management. Project Management Institute, Inc, 2018.
4. Flinn, Peter. Managing Technology and Product Development Programmes: A Framework for Success. Wiley, 2019.
