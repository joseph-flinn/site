---
title: "[Gen AI] Claude Code Usage Notes (1) - Failure?"
slug: gen-ai-development-1
published: 2025-07-22
description: >
  Notes from using Claude Code to work on dependency updates for Strapi plugin, ultimately ending in
  failure. 

---

I have recently started consulting with a local dance company who is working on finding a low-cost
solution to simplify payments and check-in for lessons and social dances. Pre-paid physical punch
cards were just rolled out as a low-tech solution. It is low-cost and is a great improvement for
regular dancers, but they are looking for even more of an improvement.

Working with a story of a failed mobile app in the past and the non-technical CEO working on vibe
coding an app, I decided that it was time for me to get my hands dirty with using genAI
experimentation in a development workflow.

With some research into tools available, I decided to go with an Expo app for ease of cross platform
and Strapi as the headless CMS. We needed content updates to be easily done by non-technical admins
and Strapi has the most stars on the [Jamstack site's CMS list](https://jamstack.org/headless-cms/).
This architecture would easily allow for a follow-on update to the business's website if they chose
to share the backend.

I soon found that the Stripe integration for Strapi was from a third-party and was only compatible
with version 4. The project had not been touched for 2 years. The plugin is relatively small so I
thought that dependency update and migration for the plugin would be a good test on how well genAI
could handle development tasks. 

```
      66 text files.
      60 unique files.
      10 files ignored.

github.com/AlDanial/cloc v 2.06  T=0.11 s (545.4 files/s, 154036.3 lines/s)
-------------------------------------------------------------------------------
Language                     files          blank        comment           code
-------------------------------------------------------------------------------
JSON                             3              0              0          11468
JSX                             17            200             78           2394
JavaScript                      36            158             71           2256
Markdown                         2             83              0            157
Nix                              1              7              6             47
YAML                             1              2              0             19
-------------------------------------------------------------------------------
SUM:                            60            450            155          16341
-------------------------------------------------------------------------------
```

I know from past experience, a project of this size would take me about two weeks to fully update
myself. I'd have to spin up on how Strapi pluigns work (in both v4 and v5), spin up on the code
base, read the docs on breaking changes, develop the updates, and test. The tasks in front of
us--Claude Code and I--were to update the project dependencies while upgrading the plugin to support
the v5 major version of Strapi. 


## TL;DR

- **Attempt 1:** Vibe coding into a security vulnerability
- **Attempt 2:** Learnings around context management and collaborative planning


## Attempt #1

I did an `npm update && npm upgrade` in the project and worked through problem after problem using
the browser errors as a guide. I worked this way for about 5 days squashing one library bug after
another. Fixing one thing seemed to break something somewhere else. 

Shortly after starting, it became apparent that something weird happened in the development cycles
of Strapi which was confusing Claude. Strapi's major verison update to version 5 was released on
September 18, 2024. It included a major version update to the custom design system that was tagged
`2.0.0-rc*`, but not yet released. Claude kept trying to use the latest released `1.19.0` (from May
31, 2024) instead of using v2. The plugin code would successfully build, but then break in the
browser when trying to

Errors were being logged in the browser console where Claude didn't have access to them. I was doing
a lot of copy and pasting of errors into the Claude Code chat (ie. vibe coding). I set up a
Puppeteer MCP server to try to give Claude direct access to those errors, but Claude didn't seem to
use it. It could have been a setup issue or something else entirely.

In some downtime, I made a note that one of drawbacks of using genAI in this way was that once you
needed to "eject" from that workflow, the context is not as robust as the one that you would have
built from manually working in the codebase.

> I have been fighting with the AI for about a week. If I give up, I'll have nothing really to show
> for it since all of the context that I would have built while manually working on the code does
> not exist.

After a bit more work, we finally had the design system updates that we needed to make the plugin
work when navigated to instead of fully breaking the interface. 

Throughout the process, I observed some inefficiencies in the tasks that Claude chose to take on. I
asked Claude to revert a change that we had just made. Instead of using the context that we had just
created, it decided to read all of the files again. I get that the agent may not be time-aware or
change-aware (as in not knowing if I had made a manual change as a developer), but it felt weird for
it to go read all of the files again that we had just edited instead of having state awareness in
context. Maybe this is a future improvement.

On to the next task: fixing the backend breaking change for CMS file upload, which is required to
create Stripe Products in the database. During this task, Claude started creating new coding and
architecture patterns which surprised me. One of the things that great engineers learn to do is to
work within the patterns that are already set up in a project. This skill supports effective
long-term maintenance of the code base. It is really difficult to maintain a code-base that has
constantly shifting patterns.

The project came with a utils file pattern where all of the api calls were being handled. We needed
a new api call to solve the file upload issue, and instead of creating a new fuction in the utils
file, Claude created it directly in the page that we were working on. This function was also going
to be needed elsewhere, so this pattern violates both SOLID and DRY principles. 

That being said, this pattern was implicit in the code base and not explicitly called out in
Claude's working memory through CLUADE.md or any collaborative planning doc (which we'll take a look
at in Attempt 2). I asked it to fix this by moving the function to a shared file which it did. Then
Claude created a new `./hooks/` directory instead of adding the function to the already existing
utils file. I finally explicitly asked it to move the code to the `./utils.js` file. But then in
testing the function, the implementation was found to be incorrect. During the whole process of
moving the function around, the implementation details of the function were rewritten causing a bug.

While working through this problem, I caught the agent rereading the files that it had just read
instead of using what was already in its context. This highlights an issue with short-term and
long-term memory while working on the same task. This is both frustrating from a time efficiency
perspective as well as an economic one, since tokens are being burned through doing the same thing. 

I was also finding it "forgetting" how I told it to use git. I have GPG signing set up for my
account. Claude doesn't know the password for my GPG key (and I will not give it access to use it).
I explicitly told it to skip GPG signing in the CLAUDE.md file. However, every time it would try
committing the first time in the session it would try with the GPG signing key.

And now for the scariest part of this whole experience. While I was getting familiar with how the
plugin worked while during my management of the Claude agent, I noted that the plugin didn't support
the modern pattern of using user session tokens or RBAC. It instead used a hardcoded environment
variable for STRAPI_ADMIN_API_TOKEN. This environment variable is set in the build server, but is
referenced in the `./admin/` directory. The admin directory is the javascript that is loaded into
the browser, so this environment variable is sent to the browser and is readable to whomever loads
that minified Javascript file. Alarm bells started going off in my head. 

Thankfully, this is a pattern that came with the plugin and Claude had nothing to do with creating
this security vulnerability. I worked with Claude to convert to the user session tokens, which
didn't end up working. But then then Claude "fixed" the user session token issue that it created by
reverting to using the hardcoded admin token because "that's what the project was set up with". The
next few attempts ended with Claude changing all of the authenticated routes to public ones. More
alarm bells. It was here where I decided to completely restart the upgrade using a different
approach in collaborating with Claude.


## Attempt #2

With attempt number two, I decided to follow a different AI use pattern and use a collaborative
project management plan document for extended state management of the tasks prior to working on the
tasks themselves. I decided to keep this plan in a CLAUDE_PLAN.md document alongside the CLAUDE.md.
The initial plan seemed pretty good, but I did have to use what I learned from the first attempt to
highlight the issues with the design system components as well as the security vulnerability.

The first thing that I did was have Claude generate a full test suite to have something to verify
changes against. Unfortunately this was mostly for the backend code (`./server`)and not the frontend
code (`./admin`) where I was having most of the problems. I am pretty unfamiliar with testing
frontend code, so I didn't look too far into creating a more robust suite.

Claude seemed to freak out about the security vulnerability that I mentioned and decided to focus on
it first in the plan. Looking back, I wish I had had Claude focus on the design system update first.
There was no way to test if the security vulnerability had been fixed until the design system update
was finished and the plugin would load. Overall, the use of the CLAUDE_PLAN doc seemed to keep
Claude very focused on the task at hand. It also was very helpful for Claude to generate example
code in the plan for future Claude sessions to use.

One note of interest during this attempt was that I would find myself trusting Claude to work on
making the changes without direct oversight (in a separate git branch that I would then review).
This allowed me to focus on doing critical thinking through writing notes (which is where the notes
in this post are coming from).

Unfortunately, I ran into a weird issue the second time around with the design system update. In the
week since the first attempt, two new `2.0.0-r*` versions had been tagged and published. The design
system library is not yet stable and is crashing the plugin. I am not a fan of using pre-release
libraries in production, and the fact that Strapi v5 has been doing this for the last 10 months with
an unstable design system library has led to me making the decision to move on to another CMS
option. This is not really a reflection on using Claude, but a reflection on the Strapi project in
general.


## Conclusion

After both of these attempts, I consider this a failure. The first attempt was a failure in both how
the agent was working on the project and how I was using. One of the big contributors to the failure
was that the plugin project wasn't set up in a way where the agent could verify the changes itself.
It required me manually testing and reporting back the errors. The second attempt was a failure
created from the decision on which CMS to use. Going forward, I will be looking into Ghost and
Payload to see which one I want to go with. I am currently leaning towards Payload as it would allow
for an easy integration with Next.js for a website.

---

<details>
  <summary>Raw project notes [click to expand]</summary>

- Some simple mobile app framework generation with Expo. Didn't really have any user requirements,
  so it was really just seeing what Claude would come up with.
- Sitting down to build out a list of high-level business requirements resulted in a small list that
  includes Stripe integration for users to purchase products, and a public event calendar. TODO:
  further refinement of these through user stories is required.
- A CMS is pretty important for any future updates to the mobile app and website. Strapi seems like
  a good headless swiss army knife. However, the Strip integration does not support Strapi v5. The
  seems like a good place to use Claude: dependency updates.
- With the update of Strapi to v5 and strapi/design-system at the pre-release 2.0, Claude is getting
  confused when searching GitHub for code usage examples since the latest release is 1.19. I think
  it is time to dive into the world of context engineering. So far CLAUDE.md has been this:
```
# Bash commands
    - nix develop: Start the development environment
    - npm run build: Build the project npm run lint: Run ESLint
    - npm audit: Run an audit on npm packages looking for vulnerabilities

# Code style
    - Use ES modules (import/export) syntax, not CommonJS (require)
    - Destructure imports when possible (eg. import { foo } from 'bar')

# Workflow
    - Be sure to typecheck when you’re done making a series of code changes
    - Prefer running single tests, and not the whole test suite, for performance
    - Commit work after task is finished, skipping the GPG signing
```

- https://www.anthropic.com/engineering/claude-code-best-practices
- I think it might be helpful to give Claude access to Puppeteer since a lot of our testing is going
  to be visual. Time to set up some MCP servers. They seem to be able to be hosted through docker
  containers, so maybe a docker compose project is a good way to go. Docker compose isn't acutally
  needed since the "server" is just a CLI tool inside of docker container

- Frustrating when things happen and compiling no longer works, and reverting the work to a working
  commit fails to solve the problem.
- Implicitly referencing an error that we just fixed and reverted, Claude decided to redo all of the
  work from scratch instead of starting with a reverting of the revert.
- Wow, this is fucking hell. Fixing one issue breaks something else...
- I have been fighting with the AI for about a week. If I give up, I'll have nothing really to show
  for it since all of the context that I would have built while manually working on the code does
  not exist.
- The issue with the product page is not with the new Fields.
- I've reworked all of the IconButtons and it did not resolve the issue.
- Confirmed that the working Alert component in Configuration is the same as the one in the
  ProductTable.
- Wow...We finally have the fix. I missed a few of the IconButtons in the product table...The reason
  why it was new was because of the product being returned from the database.
- Now I need to go fix all of the Fields again.

- Continuing to debug the file upload breaking change, Claude decided to not follow the implicit
  pattern of using a utils file for the fixed upload call. Instead, it created it in the component
  that it was needed. I had to explicitly ask Claude to move its implementation to the original file
  twice. The first time it created a custom hook which was a new project organization pattern
  instead of following the pattern it already found.
- Once that was set, the actual implementation was not correct. In correcting the issue, I caught
  the agent doing the same codebase searches for the same patterns it had already done. There is a
  pretty glaring issue with short and long-term memory with agents. In moving the function around,
  Claude rewrote the solutions instead of keeping the same logic as its original solution.
- The plugin doesn't currently support user session tokens and is designed around the hardcoded ENV
  var. I would like to update this, but I'm scared that Claude doesn't know what it's doing.
- Claude reset the authorization to use the admin token, and I am now wondering if this is a
  security issue:
  ```
  Plugin Architecture Analysis:

  1. Server routes (routes/index.js) - All configured with auth: false and policies: ['plugin::strapi-stripe.apiToken']
  2. Custom API Token Policy (policies/apiToken.js) - Validates admin API tokens with 'full-access' type
  3. Frontend Components - Designed to use process.env.STRAPI_ADMIN_API_TOKEN

  What I fixed:

  1. apiCalls.js:102-114 - Restored uploadFiles(files, apiToken) with Bearer token authentication
  2. CreateProduct component - Added const apiToken = process.env.STRAPI_ADMIN_API_TOKEN;
  3. editProduct component - Added const apiToken = process.env.STRAPI_ADMIN_API_TOKEN;
  4. Function calls - Now pass the API token: uploadFiles(image, apiToken)

  Why this works:
  - The build output shows STRAPI_ADMIN_API_TOKEN is included in the JS bundle
  - The environment variable is properly set in .env
  - The server policy validates admin API tokens, not user session tokens
  - File uploads to /api/upload require the same admin API token authentication

  ```
  I don't think that the STRAPI_ADMIN_API_TOKEN should be in the bundled JS. That means that it
  would be available on the server.
- This seems like it needs a full redesign...
- I am seeing if Claude can handle the overhaul
- Claude also doesn't seem to be able to build the plugin to test for errors? Maybe this is a
  context thing?
- While trying to fix the authentication errors, Claude changed all of the routes from authenticated
  ones to fully public ones.

- Claude seems to ignore the CLAUDE.md file. I wonder if it got pushed out of the context window?
  If so, the agent should make sure that the CLAUDE.md file is always in the context window, not
  just at the start of a session.
- Even while in the first context window, Claude "forgets" that git committing
  needs to skip GPG signing.

- I am restarting the plugin development from scratch for testing purposes. This
  time around I am going to be using TDD (with a comprehensive testsuite that Claude generated) and
  a collaborative planning cycle that is dumped to CLAUDE_PLAN.md for longer term memory.
- The initial plan seems pretty good . However, the two main pain points were 
  not surfaced in the first go through. I had to use my personal context to nudge Claude to identify
  the component API issues as well as the security vulnerability.

- Using CLAUDE_PLAN, Claude seems pretty focused and is not running into issues where it says that
  everything should be working when it isn't. I do wish that I saved the security vulnerability for
  after the migration as the system is not really live in production and testing could have been
  done directly after the work instead of needing to pause for the design system migration.
- One other interesting thought: if I trust Claude enough to implement the plan in the background, I
  have found that I that I can do some critical thinking and note taking as it is working. This is
  an interesting workflow change.
- Having Claude implement example code in CLAUDE_PLAN seems to really help in future sessions.

</details>

