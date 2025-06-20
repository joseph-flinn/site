---
title: "The Language of Mathematics"
slug: language-of-mathematics
published: 2024-09-30
description: >
  The beauty of mathematics is in seeing it as a language.

---

Language exists to communicate thoughts and ideas between people. Everyone has different experiences
that develop their perspective of the world around them. These different perspectives lead to
different conclusions and different sets of rules to follow in making decisions. Language is the
medium in which people share these mental models with others.

Clear and effective strategies are important when discussing abstract concepts. There are few
concepts more abstract that the topics that mathematics describe. It was not until my senior year in
university that I discovered the secret of mathematics.

We all start our journey into mathematics with learning arithmetic operators (`+, -, ×, ÷, =`). 
Marbles are often used to build the intuition of what these operators mean. "If Johnny has 3 marbles
and Sue gives him 4 more, how many marbles does Johnny now have? If there are 4 colors of marbles
and Sue has 3 of each color, how many marbles does Sue have? If Johnny has 8 marbles and gives his
brother Mike half of them, how many marbles does Johnny have now?" We are taught to build the
intuition of what these operators mean through stories and first-hand experience rather than being
given an abstract definition.

As we continue on our mathematics journey, we start thinking in just numbers and operators (except
in the cases with "story problems" which all students seem to hate, but which the teacher says are
the most important for "real life"). We no longer need to think about Johnny and Sue, but only of
the numbers and operations the stories represented. We go on to learn about new operators like
exponents, parentheses, square roots, and square brackets. We add letters into our equations, learn
about circles and triangles, `π` and _e_, functions, the Cartesian coordinate system and how
algebraic equations can be plotted to visually represent the function solutions. 

Somewhere mixed in to all of the numbers and symbols, we learn four of the most powerful words: "Let
us suppose that...". With these four words, we have the power to define worlds, bend reality, and
tranfers parts of our mental models to others. The secret is that mathematics is a language.

Let us suppose that the _@_ symbol is defined as the addition operation, such that given two numbers,
_a_ and _b_, the following is true:

$$
a @ b = a + b
$$

Given the above definition of _@_, what are the following equal to?

$$
\begin{align}
3 @ 4 = ?\\
(9 - 3) @ 2 = ?\\
0 @ 0 = ?
\end{align}
$$

Using the language of mathematics, we have just given meaning to a symbol does not have meaning (or
at least no agreed upon meaning wide enough to make it into Wikipedia's [Glossary of mathematical
symbols](https://en.wikipedia.org/wiki/Glossary_of_mathematical_symbols)). The reason we have a
glossary of symbols like this is because someone in history used the words "Let us suppose that" to
define the meaning and everyone agreed that the definition proposed was the meaning now associated
with that symbol.

It was using the language of mathematics that I have finally been able to understand the 
[standard normal table](https://en.wikipedia.org/wiki/Standard_normal_table) in statistics. Even
while in my undergraduate degree in mathematics, the Z table was a black box. My professor was a bit
hand-wavy on where the numbers came from and I had never seens something like the Z table in my
previous studies in mathematics. It was the first time that I could not calculate an answer, but was
rather required to look up the answer in a table. I did not know how to fit that into my mental
model of mathematics.

Years later, I am in a business statistics class. My arch-enemy the Z table is back and this time I
need to master it. Standard deviations and Z-scores are one of the central pillars of Six Sigma, the
current leader in certification for operations quality management, and operations theory is the next
business class that I am going to be taking.

The z-score of the observation is the number of standard deviations away it is from the mean of the
dataset. It is used while calculating the probabiltiy that an observations falls between two numbers
is a common problem to solve while working with a normal and standard normal distributions. These
questions might be in the form of "What values are in the top 10%?" or "What is the probability of
an observation falling between number _a_ and number _b_?" The second problem requires working with
two different z-scores which is where most of my troubles began.

$$
z = \frac{X - \mu}{\sigma}
$$

Let us assume that the mean (_μ_) of a dataset is 3.1 and the standard deviation (_σ_) is 0.25.

$$
\begin{align}
z = \frac{\textit{a} - 3.1}{0.25}\\
z = \frac{\textit{b} - 3.1}{0.25}
\end{align}
$$

We now have two values for _z_. As I was trying to communicate with my thought process in a homework
assignment, I was struggling to communicate the differences between the first and second _z_ value.
How do we track which _z_ value corresponds to the original numbers _a_ and _b_? How can we
differentiate the Z table probabilities that are associated with both of these Z values? 

I first tried defining a mathematical function to represent the action of the _z_ lookup to
communicate. 

$$
\begin{align}
zlookup(a) = z\\
zlookup^{-1}(z) = Probability
\end{align}
$$

However, this approach was still not clear. It still depends on _z_ which may be associated with
either _a_ or _b_. Going back to the original problem above, the question of differentiation can be
restated as "How do we _denote_ the difference between...?" When using this question, the word
_denote_ led me to the word _notation_ which reminded me of the language of mathematics.
Mathematical notation is common in proofs and papers, heavily relying on the secret "Let us suppose
that...". 

My next attempt cleared up both my issues in communication on the next assignment and finally
resolved the confusion around the Z tables that I have had for years.

$$
\begin{align}
z_{a} = \frac{\textit{a} - 3.1}{0.25}\\
z_{b} = \frac{\textit{b} - 3.1}{0.25}
\end{align}
$$

Expanding the use of this type of mathematical notation, I could also effectively write about the
probabilities associated with both of these _z_ values.

$$
\begin{align}
P_{a} = zlookup(z_{a})\\
P_{b} = zlookup(z_{b})
\end{align}
$$

Finding this notation allowed me to write in a clear and effective way. This in turn allowed me to
think clearly when it came to probabilities associated with normal distributions. "An idea can have
value in itself, but its usefulness diminishes to the extent that you can't articulate it to someone
else" (as cited in Zinsser, 1989). The language of mathematics provides a medium that can be used to
articulate an abstract concept to another person. In the articulation to another person, the idea
and thinking around it becomes clear.

---

## Resources

1. Zinsser, W. (1989). Writing to learn. Harper Collins.


