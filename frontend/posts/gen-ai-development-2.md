---
title: "[Gen AI] Claude Code Usage Notes (2) - Success?"
slug: gen-ai-development-2
published: 2025-07-26
description: >
  Notes from using Claude Code to work on dependency updates for a professional website from
  scratch, which was somewhat of a success (depending on how you define it).

---

## TL;DR

I used Claude Code to build and deploy my [independent consulting site](https://flinnsolutions.com)
in under 10 hours.


## Using Claude to Build a Professional Website from Scratch

A few months ago, I finally decided to launch an independent consulting firm. My first few clients
have been acquired through in-person networking. There had not been a need to build out some of the
modern business requirements like a website. As of two weeks ago, this was no longer the case.

When I built this site, I had made the decision to do it completely from scratch. I wanted to build
my own components from scratch instead of using a pre-made design system or component library. I
wanted the design to be fully "me" because this is the extension of myself on the wider internet.
However, this requirement doesn't hold for an independent consulting website.

After [my attempt using Claude Code to do a project migration](/posts/gen-ai-development-1), I
wanted to try my hand at a greenfield project. I decided to use Claude Code to build the firm's site
since I didn't have any strong design constraints. I just needed a professional-looking website.

I knew from my experience building this site, that a fully custom site would be about 200-250 hours
of work for a simple server side generated static site. With Claude Code seemingly good at
generating boilerplate code, it seemed that this might be a good test. I was hoping that Claude
could cut that time down significantly.

Learning from the migration project, Claude and I started with developing a strategic plan for the
project:

> I would like to build a static single-page SvelteKit website for an independent consulting
> company, featuring four main pages: Home, Services, Blog, and About. The site will be built with
> CI/CD automation and hosted on Cloudflare Pages. Please develop a strategic plan for this project
> and store it in CLAUDE_PLAN.md. Include code examples as needed.

Claude created a list of different tasks that were needed to complete this task

<details>
  <summary>Initial CLAUDE_PLAN.md</summary>

```
# FlinnSolutions Consulting Website - Project Plan

## Project Overview
A static single-page SvelteKit website for an independent consulting company, featuring four main pages: Home, Services, Blog, and About. The site will be built with CI/CD automation and hosted on Cloudflare Pages.

## Technical Stack
- **Framework**: SvelteKit (static site generation)
- **Hosting**: Cloudflare Pages
- **CI/CD**: GitHub Actions (or Cloudflare's built-in CI/CD)
- **Styling**: TailwindCSS (recommended for rapid development)
- **Content Management**: Markdown files for blog posts

## Project Structure
src/
├── routes/
│   ├── +layout.svelte          # Global layout
│   ├── +layout.js              # Prerender configuration
│   ├── +page.svelte            # Home page
│   ├── services/
│   │   └── +page.svelte        # Services page
│   ├── blog/
│   │   ├── +page.svelte        # Blog index
│   │   └── [slug]/
│   │       └── +page.svelte    # Individual blog posts
│   └── about/
│       └── +page.svelte        # About page
├── lib/
│   ├── components/             # Reusable components
│   ├── data/                   # Static data files
│   └── utils/                  # Utility functions
└── app.html                    # HTML template

## Development Phases

### Phase 1: Project Setup
- [ ] Initialize SvelteKit project
- [ ] Configure for static site generation
- [ ] Set up development environment
- [ ] Configure static adapter and prerendering
- [ ] Verify build process works

### Phase 2: Core Infrastructure
- [ ] Install and configure TailwindCSS v4
- [ ] Create global layout with navigation
- [ ] Set up responsive design system
- [ ] Create reusable UI components (Header, Footer, Navigation)
- [ ] Create placeholder pages for all routes

### Phase 3: Page Development
- [ ] **Home Page**: Hero section, company overview, CTA buttons, why choose us, industries
- [ ] **Services Page**: Comprehensive service offerings, process overview, detailed features
- [ ] **Blog Page**: External redirect to https://joseph.flinnlab.com/posts
- [ ] **About Page**: Company story, mission/vision, values, approach, key achievements
- [ ] **Contact Page**: Contact form, business info, FAQ section, business hours

### Phase 4: Content Management
- [ ] Set up markdown-based blog system
- [ ] Create blog post template
- [ ] Add sample blog content
- [ ] Implement blog post metadata (dates, tags, descriptions)

### Phase 5: SEO & Performance
- [ ] Add meta tags and Open Graph data
- [ ] Implement sitemap generation
- [ ] Optimize images and assets
- [ ] Add structured data markup

### Phase 6: Deployment & CI/CD
- [ ] Configure SvelteKit adapter for static sites
- [ ] Set up Cloudflare Pages deployment
- [ ] Create GitHub Actions workflow
- [ ] Configure custom domain (if applicable)

### Phase 7: Testing & Launch
- [ ] Cross-browser testing
- [ ] Mobile responsiveness testing
- [ ] Performance optimization
- [ ] Content review and final adjustments

## Key Features to Implement

### Navigation
- Responsive navigation bar
- Mobile hamburger menu
- Active page highlighting

### Home Page
- Hero section with compelling headline
- Services overview
- Client testimonials/logos
- Call-to-action sections

### Services Page
- Detailed service descriptions
- Pricing information
- Case studies or portfolio samples
- Contact/consultation CTA

### Blog
- Blog post listing with pagination
- Individual blog post pages
- Categories/tags filtering
- RSS feed generation

### About Page
- Company story and mission
- Team member profiles
- Contact information
- Company values/approach

### Global Features
- Contact forms (using Cloudflare Forms or external service)
- Social media links
- Analytics integration (Google Analytics/Cloudflare Analytics)
- Cookie consent (if needed)

## Content Strategy
- Professional, authoritative tone
- Focus on expertise and results
- Clear value propositions
- Strong calls-to-action throughout

## Technical Considerations
- Static site generation for optimal performance
- SEO-friendly URL structure
- Responsive design (mobile-first)
- Fast loading times
- Accessibility compliance (WCAG guidelines)

## Next Steps
1. Set up TailwindCSS for styling
2. Create the global layout and navigation
3. Build out the home page structure
4. Implement the services page
5. Set up the blog system

## Notes
- Keep the design clean and professional
- Ensure all pages load quickly
- Make the site easy to navigate
- Focus on conversion optimization
```
</details>

As we continued to develop the site, Claude and I collaboratively used CLAUDE_PLAN.md as the working
project management state of the project. For every new phase of the project, I would start a new
session to clear the context window with something like this: 

> I would like to move onto Phase 3 of the project plan found in CLAUDE_PLAN.md

Claude would read the task management file into its working memory and do pretty well staying on
target and developing the feature as needed. We'd go back and forth for a bit and then when it got
to a point I wanted to commit our work, I'd ask it commit the work and make an entry in the
CLAUDE_LOG.md file. I think the log file could be an interesting workflow to help set context for
future sessions, but I haven't gotten around to experimenting with it.

The first iteration of the site was a pure white background with black text. It looked modern, but
it definitely needed some work on getting to "professional". I asked Claude to add color to the site
and it developed a generic blue-gray Tailwind theme. I spent about an hour chatting with Gemini
about different Tailwind color palettes to find one that was good for "high tech software
consulting" which was really easy to drop in and replace the theme colors.

In about 5 hours, I went from not having a website to having a website available on the internet
(you can check it out at https://flinnsolutions.com if you are interested). I did have my Cloudflare
account set up because I use it as my cloud of choice for things like this personal site as well as
some other things. This saved me a bit of time, but would probably only be another hour of set up on
top of the 5 if I hadn't had it.

Even though I had a website, it had generic business consulting copy on it and didn't align with my
experience or the services that I offer. I asked Claude to rewrite all of the copy to be in line
with my description of myself:

> I'm Joseph Flinn, an engineering manager focused on empowering teams to reach their highest
> potential through curiosity and continuous improvement. I create inclusive, psychologically-safe
> environments where every team member's voice matters. My systems thinking approach to continuous
> improvement reinforces a safe environment while driving technical excellence with a balance
> between the short and long term goals. I have built an expertise in improving Engineering
> Operations across the SDLC: from Design to final value delivery to end users.

It did a pretty good job with correcting the copy, the list of services, and even story on the About
page. The blog is still just an example though. 

While it was an interesting experience using AI as a content management system, I didn't really want
to waste my limited daily tokens on updating copy and I definitely did not want to search through
the files in the codebase every time I needed to update copy. I also did not want to stand up a full
CMS either. This is a small static site that is not going to change that often and does not need the
complexity of a full CMS. I asked Claude to design a simple markdown-based CMS and add it as a
feature to the CLAUDE_PLAN doc. The first design was a file per page. While this was well organized,
the site is small enough that I just wanted a single file.

<details>
  <summary>Simple YAML CMS</summary>
This is the YAML CMS for the current revision of the site (at the time of this writing):

```
# Global site configuration
site:
  title: "Flinn Solutions"
  description: "Operations improvement specialist helping organizations optimize systems and processes"
  author: "Joseph Flinn"
  baseUrl: "https://flinnsolutions.com"

# Navigation and footer
navigation:
  items:
    - name: "Home"
      href: "/"
    - name: "Services"
      href: "/services"
    - name: "Blog"
      href: "/blog"
    - name: "About"
      href: "/about"
  cta:
    text: "Get Started"
    href: "/contact"

footer:
  description: >
    Operations improvement specialist helping organizations optimize systems and processes through
    a full-system perspective and continuous improvement approach.
  links:
    - name: "About"
      href: "/about"
    - name: "Blog"
      href: "/blog"
    - name: "Get in Touch"
      href: "/contact"

# Home page content
home:
  hero:
    title: "Transform Your Engineering Operations"
    subtitle: >
      Operations improvement specialist helping organizations achieve sustainable growth through
      systems thinking and continuous improvement.
    primaryCTA:
      text: "View Our Services"
      url: "/services"
    secondaryCTA:
      text: "Get Started Today"
      url: "/contact"

  services:
    title: "How We Help Your Organization Succeed"
    subtitle: > 
      Using a full-system perspective to identify problems, analyze solutions, and drive continuous
      improvement across your entire organization.

  whyChooseUs:
    title: "Why Choose Flinn Solutions?"
    subtitle: "We bring proven expertise, personalized approach, and measurable results to every engagement."
    items:
      - title: "Proven Results"
        description: "Track record of delivering measurable improvements and ROI for our clients."
        icon: "check-circle"
      - title: "Systems Thinking"
        description: "Full-system perspective to identify problems and analyze solutions with system-wide impact."
        icon: "users"
      - title: "Rapid Implementation"
        description: "Quick turnaround times without compromising on quality or thoroughness."
        icon: "lightning-bolt"
      - title: "Client-Focused"
        description: "Tailored solutions that align with your specific goals and business context."
        icon: "heart"

# Services page content
services:
  hero:
    title: "Our Services"
    subtitle: >
      Specialized consulting services focused on engineering operations, systems optimization, and
      sustainable organizational improvement.

  offerings:
    - title: "Engineering Operations Audits"
      onHome: true
      description: >
        Comprehensive assessment of your software development lifecycle to identify bottlenecks and
        improvement opportunities.
      icon: "chart-bar"
      features:
        - "SDLC Process Analysis"
        - "Engineering Productivity Metrics"
        - "Tool Chain Optimization"
        - "Team Performance Assessment"
        - "Technical Debt Evaluation"
    
    - title: "DevOps Transformation"
      onHome: true
      description: > 
        Accelerate delivery and improve reliability through modern DevOps practices and cultural
        transformation.
      icon: "lightning-bolt"
      features:
        - "CI/CD Pipeline Design"
        - "Infrastructure as Code"
        - "Monitoring & Observability"
        - "DevOps Culture & Practices"
        - "Security Integration (DevSecOps)"
    
    - title: "Platform Engineering"
      description: >
        Build developer platforms that improve productivity, reduce toil, and enable teams to focus
        on value delivery.
      icon: "cog"
      features:
        - "Developer Platform Strategy"
        - "Self-Service Infrastructure"
        - "API & Service Design"
        - "Developer Experience Optimization"
        - "Platform Governance & Standards"
    
    - title: "AI Strategy"
      onHome: true
      description: 
        Strategic integration of AI technologies to enhance operations, decision-making, and
        competitive advantage.
      icon: "brain"
      features:
        - "AI Strategy & Roadmap"
        - "Machine Learning Operations"
        - "Data Pipeline Architecture"
        - "AI Ethics & Governance"
        - "Team Training & Adoption"

# About page content
about:
  hero:
    title: "About Flinn Solutions"
    subtitle: >
      Operations improvement professional passionate about helping organizations optimize systems
      and processes for sustainable growth.

  story:
    title: "Story"
    paragraphs:
      - > 
        We are deeply passionate about the continual improvement of systems and processes. Our
        background is in continuously improving software engineering organization processes, where
        we have built expertise across the entire SDLC - from design to final value delivery to end
        users.
      - > 
        In team building and management, we focus on empowering teams to reach their highest
        potential through curiosity and continuous improvement. We create inclusive,
        psychologically-safe environments where every team member's voice matters, while driving
        technical excellence with a balance between short and long-term goals.
      - >
        With a passion for organization longevity and sustainability, we work hard to help the world
        improve their systems and processes. Using a fully-system perspective, we identify problems,
        analyze possible solutions, and understand their system-wide impact, before creating a
        strategy to execute.

  achievements:
    title: "Key Achievements"
    stats:
      - label: "Years Experience"
        value: "8+"
      - label: "Successful Projects"
        value: "20+"
      - label: "Client Satisfaction"
        value: "98%"
      - label: "Industry Sectors"
        value: "12+"

  mission:
    title: "Mission"
    description: >
      To help organizations improve their systems and processes through a full-system perspective,
      identifying problems and analyzing solutions with their system-wide impact in mind. We're
      committed to organization longevity and sustainability through continuous improvement.

  vision:
    title: "Vision"
    description: >
      A world where organizations thrive through optimized systems and processes. By applying
      systems thinking and continuous improvement principles, every organization can achieve
      sustainable growth and operational excellence while maintaining long-term viability.

  values:
    - title: "Continuous Improvement"
      description: >
        Passionate about the continual improvement of systems and processes, creating environments
        where teams can thrive.
      icon: "lightning-bolt"
    - title: "Psychological Safety"
      description: >
        We create inclusive, psychologically-safe environments where every team member's voice
        matters and curiosity drives growth.
      icon: "shield-check"
    - title: "Systems Thinking"
      description: >
        We use a full-system perspective to identify problems, analyze solutions, and understand
        their system-wide impact.
      icon: "chart-bar"
    - title: "Sustainability"
      description: >
        Focused on organization longevity and sustainability, balancing short-term goals with
        long-term technical excellence.
      icon: "leaf"

# Contact page content
contact:
  hero:
    title: "Get in Touch"
    subtitle: >
      Ready to transform your business? Let's start a conversation about your goals and how we can
      help you achieve them.

  form:
    title: "Send us a Message"
    success:
      title: "Message Sent!"
      message: "Thank you for reaching out. We'll get back to you within a business day."
    submitText: "Send Message"
    sendingText: "Sending..."

  contactInfo:
    title: "Contact Information"
    details:
      - title: "Email"
        value: "contact@mail.flinnsolutions.com"
        icon: "mail"

  businessHours:
    title: "Business Hours"
    schedule:
      - day: "Monday - Friday"
        hours: "9:00 AM - 5:00 PM (PT)"
      - day: "Saturday"
        hours: "10:00 AM - 2:00 PM (PT)"
      - day: "Sunday"
        hours: "Closed"
    note: "* Emergency consultations available by appointment"

  faq:
    title: "Frequently Asked Questions"
    subtitle: "Get quick answers to common questions about our services and process."
    items:
      - question: "How quickly can you start a project?"
        answer: >
          We typically begin new engagements within 1-2 weeks of project approval, depending on
          scope and current capacity.
      - question: "What is your typical project timeline?"
        answer: >
          Project timelines vary based on scope and complexity, ranging from 4-6 weeks for focused
          assessments to 6-12 months for comprehensive transformations.
      - question: "Do you work with small businesses?"
        answer: >
          Yes, we work with organizations of all sizes, from startups to enterprise companies. Our
          approach is scalable and tailored to your specific needs and budget.
      - question: "What happens after the initial consultation?"
        answer: >
          Following our consultation, we'll provide a detailed proposal outlining scope, timeline,
          deliverables, and investment. We'll work with you to refine the approach before beginning.

  cta:
    title: "Ready to Get Started?"
    subtitle: "Take the first step toward transforming your business. Schedule a complimentary consultation today."
    buttonText: "Schedule Your Consultation"
```
</details>

Since my past experience is highly technical, I do not need a complex CMS. There are some things
that this CMS plus the site doesn't handle. If I add another service, the rendering of the services
isn't the best user experience. But, this works for now.

I spent the last 5 hours manually creating a logo for the firm and setting up the backend logic to
handle the contact form. A logo and icon are important marketing assets for any business. And like
most contact forms, I want to receive an email any time someone wants to connect about the services
that I provide.


## Unexpected Behaviors

Throughout the development process I ran into two instances of risk that showed the current state of
(im)maturity of the technology.

When I first started the project, I built out the CLUADE.md and CLAUDE_LOG.md files in the project
directory. However, when asked to create the new SvelteKit site, the SvelteKit CLI couldn't scaffold
the site because the directory was not empty. Claude created a `./backup` directory with the two
files in it to try to resolve this. Since this was still in the same directory, the SvelteKit CLI
still failed. To resolve this failure, Claude deleted the `./backup` directory, successfully created
the site scaffold and then tried to restore the files from the now deleted `./backup` directory.
This is reminiscent of the recent deletion of a production database by an AI agent 
[[1](https://x.com/jasonlk/status/1946069562723897802)].

I was directly observing the agent and saw where it was going and was able to save myself a few
minutes of rework by quickly making a copy of the `./backup` directory outside of the project
directory. While this might all be scary because the "backup" nature of it, in general this
highlights another gap in file system state management in the agent's working memory. 

The other unexpected behavior was from the collaborative nature between human and LLM. Claude had
made some changes to a handful of files while working on a feature. Afterward, I decided that I
wanted to remove a specific section on each page and update the background colors of the divs that
were surrounding it. While working on the next part of the task, Claude saw the changes, decided
that they somehow changed when they shouldn't have, and added them back in. 

This behavior may have been avoided with an updated development workflow. Maybe this wouldn't have
happened if I would have either committed those changes right after making them or alert Claude that
I made some manual changes. Either way, I think this points to another gap in the file system state
management process of coding agents. If the state isn't what it was expecting, we may want the agent
to ask the human if this was an expected change instead of assuming that it wasn't. I have not found
a smooth way of utilizing git inside of the agentic coding workflow that follows the good
engineering practice of committing small pieces of work. The agent seems to want to make code
changes in large sweeps. Further experimentation is needed on refining the human + agent workflow in
this regard.


## Outcomes

Using CLAUDE_PLAN and a clean session for every task resulted in quick delivery of the business
requirements. I have a professional looking website that allows people to contact me when they are
interested in my consulting services.

However, the engineering quality of the site is relatively low. I chose to go with a SvelteKit site
because I am currently the most familiar with that framework. The most glaring issue is that Claude
chose to hardcode all of the pages with components on each page. There is very little abstraction
and reusability which violates SOLID engineering principles. I am confident that I could use Claude
to quickly refactor the entire site to use components rather than hardcoded site pages. However, the
site as-is currently meets all business requirements.

This experience highlights one of my concerns about the current state of AI. AI is a tool that
enables quick deployment of solutions that meet short-term business requirements. In my case, the
initial solution is being deployed with tech-debt on day one. Why? Because it meets the financial
and business requirements. However, as soon as I need to go update the site design, I will have to
wade through a mess of code (or an AI agent will). 

My concern is that AI is amplifying the over-optimizing of short-term business goals rather than
building for a sustainable business. Or maybe sustainable business are a thing of the past and
instead everyone should be looking to capitalize on whatever the trend is, spending someone else's
money and trying to exit before it is no longer the trend. Then again, this feels like trying to
time the stock market.

---

## Resources 

1. https://x.com/jasonlk/status/1946069562723897802
