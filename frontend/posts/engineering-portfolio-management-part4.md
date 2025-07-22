---
title: "[Engineering Portfolio Management] Portfolio Gate Reviews"
slug: engineering-portfolio-management-part4
published: 2024-11-18
description: >
  Part 4 of the Engineering Portfolio Management series: a discussion on the generic approach to
  building a portfolio management system with gate reviews

---

After all the buildup through what portfolio management is and the role it plays 
([Part 1](/posts/engineering-portfolio-management-part1)), the definitions of  Technology Readiness
Levels ([Part 2](/posts/engineering-portfolio-management-part2)), and the definitions of
Manufacturing Readiness and how it can be applied to the software industry 
([Part 3](/posts/engineering-portfolio-management-part3)), we finally get to the part where this is
all integrated into a portfolio management system.

Before diving into what makes up a portfolio management system, it is important to understand why we
need a system to manage projects throughout their life-cycle in addition to the frameworks we use
to manage the projects individually (like Scrum, Kanban, etc).

## Why do we need a system?

In [Part 1](/posts/engineering-portfolio-management-part1), we defined a balanced portfolio as one
that is invested in 70% derivative projects, 20% platform projects, and 10% breakthrough projects.
The further right projects are on this scale, the riskier the investment is. In his research, Robert
G. Cooper found that the number of new-to-the-world innovations decreased from 20.4% to 11.5%
between the 1900s and the 2000s (p.8). This was after the revolutionary breakthrough of the
internet which was shaking up the global market which should have instead created a boom in further
innovation.

Those riskiest projects, the new-to-the-world or breakthrough innovations, are the ones most
necessary for firms to stay relevant in the market; furthering their time in the infinite game
(Sinek). We have heard that one out of ten startups succeed and one out of seven new products are
successful (Cooper p.22). However, Cooper's research found a significant difference between the
performance between the best and worst innovators, showing that the best innovators regularly hit a
70% success rate measured with hitting profit objectives and project schedule which is well above
the average 14% success rate (p.15):

| Area | Best | Worst | Ratio |
| ---- | ---- | ----- | ----- |
| Project met profit objectives | 70.0% | 29.9% | 2x |
| Successful project launch  | 79.5% | 37.6% | 2x |
| Percent of revenue from new products | 36.3% | 10.0% | 3x |
| Projects completed on time | 79.4% | 20.5% | 4x |
| Project slip rate | 17.2% | 44.3% | 2x |

New-product development is no doubt hard, but it is not simply a 1:7 gamble. If it were, the best
innovators could not maintain a 70% new-product development success rate. How do they do it? It
should not be a surprise that the number one driver is delivering a superior product. Best
innovators do this significantly better than worst performers (Cooper p.41)

| Area | Best | Worst | Ratio |
| ---- | ---- | ----- | ----- |
| Make sure main benefits of product are important to the user | 86.2% | 23.1% | 3.7x |
| Offer new unique benefits | 86.2% | 7.7% | 8.0x |
| Offer more value for money | 65.5% | 19.2% | 3.4x |
| Deliver a superior product in meeting customer needs | 58.6% | 15.4% | 3.8x |
| Deliver a product with superior quality | 58.6% | 28.0% | 2.0x |

There is nothing surprising in any of these areas. We intuitively know that if a firm comes to
market with a superior product that meets all of the customer needs and has a higher value-to-money
ratio, that product is going to win. The above data reinforces this intuition but does not give us
insight into how to tactically implement a successful new-product development strategy. "Just do it"
is not sufficient.

Cooper goes on to describe the nine critical success drivers for new-product development (p.66):

1. Product innovation and technology strategy focuses the business on the best strategic areas and
   provides direction on ideation, roadmapping, and resource allocation.
2. Stay focused; do fewer projects that are the right mix by implementing tough Go/Kill decisions
   into the firm's idea-to-launch _system_.
3. Focus on core competencies (or mitigate risk through collaborative development)
4. Target attractive markets
5. Have resources in place
6. Cultivate a climate and culture for innovations
7. The right organizational design and structure to maximize product teams
8. Top management support, focused on developing a innovation strategy rather than hands-on managing
   of the projects themselves
9. Utilizing a multistage stage-and-gate idea-to-launch system


## Portfolio Management System

Firms establish multi-stage portfolio management systems to implement five of the nine critical
drivers for successful new product development. An effective portfolio management system will: 1)
achieve strategic alignment with the business objectives, 2) maximize the value of the portfolio of
projects, 3) maintain the right balance of projects, and 4) maintain the correct number of ongoing
projects (Kahn et al, p.156). The critical success drivers 2, 3, 4, 5, and 9 are all met with an
effective portfolio management system.

The structure of the system is provided by the stages of product development life-cycle with gates
between each that include criteria to be met prior to moving on to the next. This is a generic
example of what a traditional stage and gate flow looks like:

![Stage and gate diagram](/posts/0067/traditional-stage-and-gates.png)

In such an example, most of the work is done in serial and all criteria must be met prior to moving
on in the flow. Every gate review meeting is a chance for the firm to make the Go/Kill decision on
the project. The criteria for each gate will look different at every firm as each firm has different
strategies to attain their objectives. These criteria are where TRLs 
([Part 2](/posts/engineering-portfolio-management-part2)) and MRLs/ORLs 
([Part 3](/posts/engineering-portfolio-management-part3)) could come in. A firm can choose to select
specific TRLs and MRL/ORLs to meet before a project is ready to move to the next stage. For example,
criteria for Gate 3 might be that the project must have reached a TRL 3 and an ORL 3 before moving
into the Development stage. 

| Review | Criteria Examples |
| ------ | ----------------- |
| Gate 1 | - Fit the company's strategy?<br/> - Attractive market?<br/> - Technically Feasible? |
| Gate 2 | - Legal or technical "killer variables"?<br/> - Core competency synergies?<br/> - Risk vs reward? |
| Gate 3 | - Does the in-depth financial business case still work?<br/> - Is the project officially well defined?<br/> - TRL 3?<br/> - ORL 3? |
| Gate 4 | - Does the project meet specs?<br/> - Still financially viable?<br/> - TRL 5?<br/> - ORL 5? |
| Gate 5 | - Does the project meet all quality standards?<br/> - Marketing plan ready?<br/> - Operations plan ready?<br/> - TRL 9?<br/> - ORL 7? |

Pairing a stage-and-gate system like the above with a policy of expected timelines that projects
should meet while progressing through the gates, helps bring structure and transparency to the
project investment process. During a quarterly portfolio review, if projects have not been able to
meet their scheduled stage (measured by their gate criteria) the project committee may deem that the
project should no longer receive resource investment and make the decision to kill it.
Alternatively, if the project is close to meeting the gate requirements but not quite there, the
committee may elect to approve a Conditional pass meaning that the project can automatically move to
the next stage if the set conditions met. However, if it fails to meet the condition in the
additional time set, it is killed.

As mentioned above, this example is a generic approach to new product development. Such a portfolio
management system would be extremely helpful for long-term projects spanning multiple quarters or
years. However, there is a lot of upfront work that comes along with a serial process which might
provide friction in an environment that uses Agile project management. The generic stage-and-gate
system can be tweaked to work within any environment that a firm has. The main idea is to establish
Go/Kill decision criteria to optimize the resource investment across the firm as well as making the
it transparent. 

In the software industry, a portfolio management system brings the needed structure to managing
project life-cycles. I have witnessed too many large software projects go immediately from ideation
to development. Often, these projects are projects born from the intuition of powerful people in the
firm and the social pressures to complete them led to decisions to skip strategic planning and
assessments that would normally accompany building a business case. The stage-and-gate system helps
mitigate the risks from the 1:7 gamble on intuition that executives seem to often use to make
project investment decisions.

In multi-project organizations where there is not a system to manage portfolio decisions, the
environment of product development teams quickly becomes unstable. Teams do not know what they are
working on week-to-week because projects appear and disappear so quickly. Organizational capacity is
often overloaded causing project slip and quality issues to appear because key activities are
omitted from the pressure to deliver (Kahn et al, p.157). This can result in degrading team
performance and critical performance reviews of the teams and individuals trying to keep up on the
constantly changing priorities. The quickly shifting priority projects often come at the expense of
the projects that are tied to the continued success of the organization. Over a few years, this
leads to burnout.

While it seems that implementing project management portfolio will slow everything down, it only
slows down the processes that need to be. As the military saying goes, "slow is smooth, smooth is
fast". Building a system to support strategic decisions slows down the decision making and planning
processes, but speeds up the overall process to get to a confident direction where the firm is
maximizing its potential in working in alignment with its mission and purpose. It supports
delivering more value to end customers in a faster more reliable way.

The next post will look at how the serial generic and traditional stage-and-gate system can be
tweaked to better fit in an organization that uses Agile as its main approach to project management.


---

## Resources

1. Cooper, Robert G. Winning at New Products: Creating Value through Innovation - 5th Edition. Fifth edition, Revised and Updated, Basic Books, 2017.
2. Sinek, Simon. The Infinite Game. Portfolio/Penguin, 2019.
3. Kahn, Kenneth B., et al., editors. The PDMA Handbook of New Product Development. Third edition, Wiley, 2013. K10plus ISBN, https://doi.org/10.1002/9781118466421.

