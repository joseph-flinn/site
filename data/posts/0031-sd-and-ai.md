!! title: Systems Dynamics and AI
!! slug: sd-and-ai 
!! published: 2024-03-04
!! description: A discussion on why AI is not currently a replacement for Systems Dynamics

---

The age of artificial intelligence (AI) is upon us and the explosion of Generative AI over the last
year or so has been fascinating to watch. Being a new student of Systems Dynamics, I have been
pondering whether the field of AI replaces it; or if it does not, where AI fits into the field. Both
Systems Dynamics and AI build models to solve problems, so there might be a case of replacement.

A model's usefulness is not in how accurately it can describe system, but instead how to abstract
and simplify reality with some minimized loss of accuracy. The abstraction of reality makes the
model easier for humans to understand and to then apply to make policy decisions. The simpler the
model, the simpler it will be for a human to understand. However, the less accurate the model, the
less valuable it is for testing policy. "The usefulness of models lies in the fact that they
simplify reality, creating a representation of it we can comprehend. A truly comprehensive model
would be just as complex as the system itself and just as inscrutable" (Sterman 89). A balance has
to be found between accuracy and representation, and simplicity for humans to understand. 

Machine learning models make predictions from what they have previously seen in the direction in the
problem that they have been designed to solve. As a example, the outputs of a neural network are
predefined. If the neural network is being trained to detect if a picture is either a cat or not a
cat, the only two outputs from the model can be those two answers. It cannot also output "it is not
a cat, but it is a dog". Similarly, if a model is being trained to recommend a movie to watch on my
favorite streaming platform, that model can only respond with a movie in the library on the
streaming platform. It cannot give a recommendations from all movies ever made (another model could
be trained to do this though).

Predictive machine learning is, at best, a model trained off of historical behavioral data.
Supervised learning with neural networks is done by passing in dataset with thousands of variables
to find the correlations between the variables and the expected output. 

In general, I appreciate my favorite streaming service looking out for me and recommending movies
that there is a reasonable chance that I won't feel like I wasted a couple hours of my life watching
(we'll ignore the issue of recommendation algorithms creating limited worldviews by not showing
outputs that don't align with the user profile's interest and in doing so further dividing humanity
into "sides"). However, I am concerned about risk of depending too heavily on neural networks and
machine learning in solving real problems like global warming, equality, war, famine, etc. 

There is one major missing piece in neural networks to do accurate sustained prediction. Since
neural networks are trained with historical data (data collected at some point in the past), neural
networks cannot be aware of dormant feedback loops the they systems that they are predicting.

Take as an example a change in someone's personal life in which there is a second person now sharing
a streaming profile? Or what if my grandmother comes for a visit and wants to watch a movie? The
algorithm cannot make an accurate recommendation for the situation because there was a feedback loop
that was dormant in the system as the recommendation algorithm learned my movie tastes.

Correlations should not be used in the creation of models to solve problems. They are not a
representation of the structure of the system, but rather how the system has historically behaved.
While this is important for testing the model to make sure that it fits historical behavior, it is
insufficient for the model creation itself. "Behavior includes not only replicating historical
experience but also responding to circumstances and policies that are entirely novel. Correlations
among variables reflect past _behavior_ of a system. Correlations do not represent the _structure_
of the system...Correlations among variables will emerge from behavior of the model when you
simulate it" (Sterman 141).

Systems Dynamics is becoming an even more important area of study as the world and tools like
machine learning continue to get more complex. Models that are not understood are difficult to
trust to solve problems. I am not sure exactly where machine learning fits into Systems Dynamics as
a tool, but I am curious to find out. 

---

## Resources

1. Sterman, John D. Business Dynamics : Systems Thinking and Modeling for a Complex World. Boston,
   Irwin, 2000.

