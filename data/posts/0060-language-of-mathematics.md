!! title: The Language of Mathematics
!! slug: language-of-mathematics
!! published: 2024-09-30
!! description: The beauty of mathematics is in seeing it as a language.

---

Language exists to communicate thoughts and ideas between people. Everyone has different experiences
that develop their perspective of the world around them. These different perspectives lead to
different conclusions and different sets of rules to follow in making decisions. Language is the
medium in which people share these mental models with others.

Clear and effective strategies are important when discussing abstract concepts. There are few
concepts more abstract that the topics in that mathematics describe. It was not until my senior year
in university that I discovered what I consider to be the secret of mathematics.

We all start our journey into mathematics with learning the arithmetic operators (`+, -, ×, ÷, =`). As
our brains cannot process abstract thoughts as children, marbles are often used to build the
intuition of what these operators mean. "If Johnny has 3 marbles and Sue gives him 4 more, how many
marbles does Johnny now have? If there are 4 colors of marbles and Sue has 3 of each color, how many
marbles does Sue have? If Johnny has 8 marbles and gives his brother Mike half of them, how many
marbles does Johnny have now?" Instead of being taught the definitions of the operators, we are
taught how to think through the problem through experience and story.

As we continue on our journey, we start to think of just the numbers and operators (except in the
cases with "story problems" which all students seem to hate, but which the teacher says are the most
important for "real life"). We no longer need to think about Johnny and Sue, but only of the numbers
and operations the stories represented. We go on to learn about new operators like exponents,
parentheses, square roots, and square brackets. We add letters into our equations, learn about
circles and triangles, `π` and _e_, the Cartesian coordinate system and how algebraic equations
can be plotted to visually represent the solutions. 

Somewhere mixed in to all of the numbers and symbols, we learn four of the most powerful words: "Let
us suppose that...". With these four words, readers give us the power to create worlds, bend their
reality, and communicate an idea from our mental model to theirs. The secret of mathematics is that
it is a language.

Let us suppose that the _@_ symbol is defined as the addition operation, such that given two numbers,
_a_ and _b_, the following is true:

```katex
a @ b = a + b
```

Given the above definition of _@_, what are the following equal to?

```katex
\begin{align}
3 @ 4 = ?\\
(9 - 3) @ 2 = ?\\
0 @ 0 = ?
\end{align}
```

We have just given meaning to a symbol has not had previous meaning in mathematics (or at least no
agreed upon meaning wide enough to make it into Wikipedia's 
[Glossary of mathematical symbols](https://en.wikipedia.org/wiki/Glossary_of_mathematical_symbols)).
The reason we have a glossary of symbols like this in the first place is because someone in history
used the words "Let us suppose that" to define the meaning and everyone agreed that the definition
supposed was meaning now associated with that symbol.

It was using the language of mathematics that I have finally been able to understand the 
[standard normal table](https://en.wikipedia.org/wiki/Standard_normal_table) 
in statistics. Even while pursuing an undergraduate degree in mathematics, the Z table was a black
box. The professor was a bit hand-wavy on where those numbers came from and I had not come across
something like this in my previous studies. It was the first time in my mathematics career that I
could not calculate something to get an answer. I did not know how to fit that into my mental model
of mathematics.

Years later, I am in a business statistics class in preparation for class in operations theory. My
arch-enemy the Z table is back, and this time I need to master it. Standard deviations and Z-scores
are one of the central pillars of Six Sigma, the current leader in certification for operations
quality management.

While working with a normal distribution and the standard normal distribution, finding the
probability that an observation falls between two numbers is a common problem to solve. These
questions might be in the form of "What values are in the top 10%?" or "What is the probability of
an observation falling between number _a_ and number _b_?" The z-score of the observation is the
number of standard deviations away from the mean. The second problem requires working with two
different z-scores.

```katex
z = \frac{X - \mu}{\sigma}
```

Let us assume that the mean (_μ_) of a dataset is 3.1 and the standard deviation (_σ_) is 0.25.

```katex
\begin{align}
z = \frac{\textit{a} - 3.1}{0.25}\\
z = \frac{\textit{b} - 3.1}{0.25}
\end{align}
```

We now have two values for _z_. As I was trying to communicate with my thought process in a homework
assignment, I was struggling to communicate the differences between the first and second _z_ value.
How do we track which _z_ value corresponds to the original numbers _a_ and _b_? How can we
differentiate the Z table probabilities that are associated with both of these Z values? 

I first tried defining a mathematical function to represent the action of the _z_ lookup to
communicate. 

```katex
\begin{align}
zlookup(a) = z\\
zlookup^{-1}(z) = Probability
\end{align}
```

However, this approach was still not clear. It still depends on _z_ that might be associated with
either _a_ or _b_. Going back to the original problem above, the question of differentiation is can
be restated as "How do we _denote_ the difference between...?" When using this questions, the word
_denote_ led me to the word _notation_ which reminded me of the language of mathematics.
Mathematical notation is common in proofs and papers, heavily relying on the secret "Let us suppose
that...". 

My next attempt cleared up both my issues in communication on the next assignment and finally
resolved the confusion around the Z tables that I have had since undergrad.

```katex
\begin{align}
z_{a} = \frac{\textit{a} - 3.1}{0.25}\\
z_{b} = \frac{\textit{b} - 3.1}{0.25}
\end{align}
```

Expanding the use of this type of mathematical notation, I could also effectively write about the
probabilities associated with both of these _z_ values.

```katex
\begin{align}
P_{a} = zlookup(z_{a})\\
P_{b} = zlookup(z_{b})
\end{align}
```

Finding this notation allowed me to write in a clear and effective way. This in turn allowed me to
finally think clearly when it came to probabilities associated with normal distributions. "An idea
can have value in itself, but its usefulness diminishes to the extent that you can't articulate it
to someone else" (as cited in Zinsser, 1989). The language of mathematics provides a medium that can
be used to articulate an abstract concept to another person.

---

## Resources

1. Zinsser, W. (1989). Writing to learn. Harper Collins.


