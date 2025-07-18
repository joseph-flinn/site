!! title: [Generative AI] My Current State of Thought
!! slug: gen-ai-thoughts-2025-06-11
!! published: 2025-06-11
!! description: A collection of thoughts and concerns about the current state of Generative AI.

---

There is a lot of content being created around genAI right now. Articles are being written showing
how it is increasing software engineering productivity while other experienced software engineers
are taking full breaks from thinking about genAI. With this post, I am adding to the mix.

This post is not to try to convince anyone of anything, but instead to capture my current state of
thought around the subject.


## Background

I have surprised myself by being a late adopter of genAI technology. Working in the software
industry and generally being an early adopter of new technology, I surprised myself with my late
adoption. It wasn't until August 2024 that I first used genAI through a chat interface. I am curious
why general behavior changed for this technology.

I have degrees in both Computer Science and Mathematics. During my schooling, I studied artificial
intelligence and the underlying mathematics being used (probability, statistics, linear algebra,
etc) and the algorithms used (gradient decent, sigmoid function, etc). After school, I continued to
study artificial intelligence and machine learning. I took Andrew Ng's online machine learning
course that took a deep dive into the underlying linear algebra that neural networks and other
machine learning algorithms use.


## Current State

Through the last ten months of usage, I have found some constructive use for using genAI. I have had
conversations around financial projections of different careers that contained specific decisions
along the way. It is also helpful for quickly exploring new areas where a Google search no longer is
helpful.

I find it interesting that the topic of genAI, and AI in general, quickly gets to discussions of
philosophy. The only other topic that I can think of that gets into philosophy so quickly is
religion. But over time we have learned that in a lot of social settings (at least in the Pacific
Northwest), the topic of religion is only brought with consent from both parties.


### Curiosity

I am curious about the new approach to using genAI by creating agents. It seems pretty powerful to
expose tools and have an LLM have the permission to make decisions to use them with the whatever
feedback they are getting from their feedback loops. The systems engineer in me is interested in how
systems are incorporating LLMs. Without too much in-depth learning, it seems that the most
productive uses of LLMs are currently with stringent systems designed around them.

A common use case that I have been seeing is building an LLM agent that has context around
codebases, generates code changes, runs test suites, updates the code, and loops until the
acceptance criteria has been met and a PR drafted. Let's assume that there was a specific style that
the code review engineer wanted. Any feedback from the engineer could result in the style being
adapted, but the LLM would forget about that style as soon as the PR is put in. There is a high risk
that a future PR from that LLM would make the same mistake.

[Best practices with Claude Code](https://docs.anthropic.com/en/docs/claude-code/memory) show how to
prevent some of these ongoing mistakes by codifying these solutions in "memory" files. I am curious
about how to solve some of these memory problems and think some of these solutions could be quite
interesting. In reflecting on how I make decisions, there is often a chain of thought tied to them.
In cases where decisions are updated, the outcomes are linked to the past decisions. This form
reminds me of blockchain technology where all data is visible, immutable, and can be linked. I am
curious if personal LLMs or agents could be improved by having a "memory" file in the form of an
immutable database like blockchain. 

Through training, the weights of a neural network or LLM are set to some specific version of
reality. Interestingly, using a memory file or an immutable database would essentially be
overwriting that reality and overwriting the combinations of weights in the LLM that are
"incorrect". This might be able to be seen as similar to fine-tuning. The question is: when does the
memory file become too complex for the agent to maintain and instead use a neural network to store
memory?


### Frustration

In general use, some of my interactions with genAI have been frustrating. Until recently, I don't
think I had words to express my frustrations. However, I recently resonated with Glyph's
frustrations with the "aesthetics"
[in their AI post](https://blog.glyph.im/2025/06/i-think-im-done-thinking-about-genai-for-now.html).

Through a few of my conversations, I have run into a frustrating pattern: genAI chats may emulate
human interaction, but they always assume that their next message is correct. By their nature they
take in all context, all past training and the immediate context provided by the user, and generate
an output that has the highest probability of being what the user wanted. However, unlike a human
agent, they will not stop and ask questions to create more context. This requires enough
self-awareness to draw a conclusion, compare that conclusion to what was requested, and then decide
that it is not close enough to actually answer the initial question. 

This loop seems like it might be possible with an genAI agent interfacing with an LLM. It would be
interesting to what such an agent would look like. But as of right now, the user experience is
aesthetically displeasing. More often than not, working on something productive seems to get
aggravating quickly. Granted, this may stem from not understanding how best to utilize LLM
technology effectively. We'll see what the next few weeks of experimentation creates.


### Concerns

There are quite a few different concerns that I have with genAI. None are really with the technology
itself, but the behavior that it is supporting and decisions being made.


#### Loss of Ability to Learn and Think

My biggest concern by far is the loss of ability to learn. This is not something that will happen
immediately, but over time as people lean on genAI to do things for them. As a simplistic example,
with the advent of computers and spellcheck, people seem to have gotten worse at spelling. I find
this in myself as well. With my joy and extent of reading, I am familiar with words. But if I am
writing and do not know how to spell a word, I get as close as I can and let spellcheck take over.
I have graduated to sending passages to genAI to check grammar for me.

The counter argument is that technological advancements almost always remove the need for learning
something. Very few people need to know how kerosene lamps work or how to maintain them because of
the invention of electricity. Blacksmiths and stone masons, while still exist, are considered
artisans because their skill sets are not needed by the wider public.

But counter to this counter argument, the skill that genAI provides is "writing" text. And this is
what concerns me the most. I can easily see a future in which I no longer proofread my own writing
and wrestle with how a sentence should be written. In such a future, any sentence that was fixed by
the genAI was a sentence which I did not struggle and learn how to write better. Writers and authors
tend to agree that one has to write--on a daily basis--to improve and to eventually find my voice.
Letting an AI write for you keeps this from happening as it is their voice being used (or
technically a cacophony of writers on which the model was trained).

The scariest part for me is that writing is how I think. I take the cloud of ideas and thoughts in
my head and put them into written word on a page. This forces me to organize them in a linear
fashion and check the validity of the thought while doing so. 
[My favorite essay](https://www.henrikkarlsson.xyz/p/writing-to-think) by Henrik Karlsson goes into
a lot of depth on this idea as well as _Writing to Learn_ by William Zinsser. Relying on an external
tool to assist with writing puts critical thinking at risk. This is something that I am not willing
to do.


#### Speculative Investing

At best, investing in genAI technology is speculative. In March of this year (2025), McKinsey
published a 
[State of AI Report](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai) 
found that over 80% of companies that have deployed genAI have not seen an impact to their bottom
line. If companies are not seeing increased revenue, a genAI implementation is a break-even project
at best. With genAI providers still in the red, the technology is still not in a sustainable state.
While this may not be true forever, a future where genAI is can only be speculative. All we can
conclude right now is that genAI is not a sustainable technology in its current state. Further
technological advancements are required to make it sustainable.

My concern is with what seems like a headlong rush into implementing a technology that is not yet
sustainable. However, I do know that this is a personal bias of mine from years spent in maintaining
production systems where only proven technology is implemented. 

What happens if genAI doesn't pan out like companies hope? What happens to the investors that have
invested trillions of dollars into the industry? What happens if it does pan out, people's jobs are
replaced, and then genAI creates a bigger mess than we started with 10 years down the road, and the
skills to clean it up have been lost by the majority of the workforce?


#### Environmental Impact

[An article on Forbes](https://www.forbes.com/sites/katharinabuchholz/2024/08/23/the-extreme-cost-of-training-ai-models/)
shows that training a single GPT-style model costs over a $100 million before taking into account
the salaries or operational costs of the model. This is a lot of compute/cooling power to train, and
this is only for a single company training a single model. It is so much power that all of the major
cloud providers are investing in companies building next-generation nuclear power plants so that
they can keep on track for their carbon neutral roadmaps.

In [a Nature article](https://www.nature.com/articles/s41598-024-76682-6), researchers found that if
LLMs can replace humans in companies, the LLM environmental impact may be decreased, but this
assumes that LLMs can replace humans in companies--which assumes that their bottom-line is somehow
positively affected to justify the cost of the implementation--and ignores the assumption that the
human is removed from the smaller company system but (hopefully) still accounted for in the larger
global system.

Since ROI has not been show in the majority of companies, genAI providers are still not profitable,
I have to conclude that the current state of genAI is having a net negative on the environment. All
arguments that LLMs will help us solve environmental problems are speculative since it has not been
shown that LLMs are capable of original thought.


#### Model Providers

As I have learned more about business and business practices in the software world, the more I
distrust any corporate entity. I have to assume that companies have their best interest in mind and
will immediately sacrifice my best interest for theirs. With genAI being a technology that is not
easily understood (experts cannot explain why models generate the output they do) nor can stand up
to scientific testing (different outputs generated for the same input), blindly trusting a company
to provide a tool that is starting to be integrated into everything seems like a very ill-advised
proposition for my interests.

In addition to this, a lot of the use cases with a positive ROI require access to confidential or
private information. Achieving these benefits while using a model directly from a genAI provider
requires shipping this information to the company, which then can do whatever they would like with
the data as long as it abides by their data privacy agreement which the user agreed to prior to
using their service (or in some cases, the implied consent in using their service). I am really
curious about the experience chatting with my extensive collection of digital notes in my
`second-brain`, but am not curious enough to send those notes to a genAI provider.


#### Building Factions

It seems like genAI is one of the latest topics that is suffering from poor discussion skills. In
general, it feels like humanity's communication skills have gotten worse and that constructive
discussions are disappearing (but this is a topic for another post). Most of the discussions around
the concerns or lack of concerns around genAI all rely speculation of what the future will look
like. Since no one can predict the future, there is a lot of hand wavy assumptions that are made.
This is true for both AI visionaries and AI cautionaries.

I think there are some interesting and important opportunities for problems to be solved with genAI,
but I also think there are some very real risks that need to be discussed. This cannot happen if
both the cautionaries and the visionaries cannot communicate with each other because of created
factions.


## Hopeful Future State

There are some really interesting problems to be solved around genAI. The use of personalized local
LLMs really intrigues me. However, it might be a personal question on whether I should work on those
problems while the above concerns remain unresolved. The outcome of better agents would further the
use of genAI, but has a high risk of increasing those concerns.

I do not have any conclusions other than proceeding into the future with caution, continuing to
think critically by keeping my writing AI-free, and making sure that I personally do not use genAI
in a way that will cause any of my concerns to increase.

---


## Resources

1. https://docs.anthropic.com/en/docs/claude-code/memory
2. https://blog.glyph.im/2025/06/i-think-im-done-thinking-about-genai-for-now.html
3. https://www.henrikkarlsson.xyz/p/writing-to-think
4. https://www.forbes.com/sites/katharinabuchholz/2024/08/23/the-extreme-cost-of-training-ai-models/
5. https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai
6. https://www.nature.com/articles/s41598-024-76682-6
