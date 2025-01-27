!! title: HackerRank-style Problems in the Wild
!! slug: hackerrank-in-the-wild
!! published: 2025-01-27
!! description: My encounter with a HackerRank-style problem in the wild and my solution.

---

I have done a hundred or so HackerRank-style coding problems throughout my career. Most of them have
been in preparation for an interview or to keep my algorithmic problem-solving skills somewhat
fresh.

One of the tools that I often reach for in these types of coding problems is the _sliding window
technique_. We manually use the _sliding window technique_ in our personal lives to analyze
time-series data. As an example, the average amount of money I spent on hobby _X_ over the last 12
months is an example of a 12 month sized window.

In general, given an array size _n_, the array can be broken up into smaller subarrays of size _k_
to look for a specific characteristic to then solve the problem. Here is a specific HackerRank
example where a _sliding window_ can be used:
https://www.hackerrank.com/challenges/three-month-preparation-kit-angry-children/problem.

We recently did a deep dive into control charts (also known as Shewhart charts) in my  _Statistical
Quality Control_ class. 

## Statistical Process Control - Control Charts

We're going to take a quick detour to introduce control charts and the two ways they can be used in
statistical process control.

Given the following dataset, `[82, 80.44, 84.5, 85.04, 91.7, 91.01, 91.37, 88.78, 90.53, 84.47,
85.3, 84.22, 84.16, 85.55, 85.24, 82.25, 81.58, 87.01, 88.08, 87.76]`, we can create a control chart
by plotting the data points and connecting them with straight lines. We then graph the
dataset mean as the center line and add 1, 2, and 3 standard deviation lines on each side of the
center line. 

![Example of a Control Chart](/posts/0076/control-chart-one.png)

Control charts can be used in two different parts of process control. The first is **phase I** where
the initial analysis work is done to bring a process under statistical control (Montgomery p.193).
Phase I gathers historical data to analyze what patterns already exist in the data to work on
removing the variation from the process to achieve higher quality in process output. Phase I is
repeated until the levels of variation are reduced to a satisfactory level. 

**Phase II** begins with the establishment of online process monitoring for any shifts in variation:
signaling that something has changed and needs addressing. Control charts with _sensitizing rule_
can be used for **phase II** to some success. The following is list of example rules (Montgomery
p.193):

1. One or more points outside of the control limits (three-sigma)
2. Two of three consecutive points outside the two-sigma warning limits on one side of the center
   line, but still inside the control limits. 
3. Four of five consecutive points beyond the one-sigma limit on one side of the line. 
4. Eight consecutive points on one side of the center line
5. Six points in a row steadily increasing or decreasing
6. Fifteen points in a row within Zone C, alternating up and down (cyclic)
7. Fourteen points in a row alternating up and down (cyclic)
8. Eight points in a row on both sides of the center line with none in Zone C
9. An unusual or nonrandom pattern in the data
10. One or more points near a warning or control limit

Do note that while control charts can be used for **phase II**, they are prone to false positives.
We can see that rule **10** will alert every time **1** and **2** does as well as any other time a
point is near a limit. From a process perspective, it is helpful to have the flexibility to take an
action (like performing a root cause analysis) even if the process did not exceed the hard limit.
But this also means that those alerts may not need corrective action. There are more modern
approaches that we'll discuss in more length in the coming _Statistical Process Control_ series.

During phase I, we are looking for any of the above rules that have been broken to help identify a
root cause of variation. Applying each of these rules to a dataset requires a manual search one rule
at a time. After a few seconds looking at the chart, it is really easy to miss one of the rules.
This is where HackerRank coding problem can be applied.


## Sensitizing Rule Code

Full code (with added documentation and rudimentary logging) for all of the rules can be found 
[on GitHub](https://github.com/joseph-flinn/spc). 

When I started writing the accompanying code, I began with Rule 1 and a simple `O(N)` linear search:
looping through and checking if the point was outside 3 standard deviations from the mean. This
worked, but it ended up looking very similar to the code for Rule 2, so I generalized the code into
a `LimitRule` base class that uses the _sliding window technique_ for Rules 1, 2, and 3.

```python
class LimitRule(Rule):
    def __init__(self, sigmas: int=3, window_size: int=1, fail_count: int=1):
        self.sigmas = sigmas
        self.window_size = window_size
        self.fail_count = fail_count

    def run(self, data: list[float], mean: float, std: float) -> None:
        issues = []
        upper_limit = mean + (self.sigmas * std)
        lower_limit = mean - (self.sigmas * std)

        for idx, window in enumerate(
            sliding_window(data, self.window_size)
        ):
            count_above = sum([
                1 if point > upper_limit else 0
                for point in window
            ])
            count_below = sum([
                1 if point < lower_limit else 0
                for point in window
            ])
            if count_above >= self.fail_count or count_below >= self.fail_count:
                issues.append((type(self).__name__, idx + 1))

        return issues
```

The constructor is initializing the class with the data that makes Rules 1, 2, and 3 different from
each other. It defaults to creating a `ControlLimitRule` for Rule 1.

When executing a `Rule` on a dataset, we pass in the dataset, the _mean_, and _std_. Using _mean_
and _std_, we can compute the upper and lower limits given the _sigma_ that the specific
`LimitRule`.

**enumerate()** is used to iterate through the windows of size *window_size* while tracking _idx_ for
later output. **sliding_window()** returns generator which we'll review below. For each window, we
want to see if there are more points outside of the limits than are allowed by *fail_count*. If the
*fail_count* is exceeded on one side of the center line, we note the point's index and the `Rule`
which we are analyzing for further investigation. The 1-based index (`idx + 1`) is chosen because
the datasets we were working with were indexed by 1. An improvement could be made to the base class
by passing in the type of index on Rule initialization to support both 0-based and 1-based indexing.

After writing the _sliding window technique_ from scratch a handful of times while working on
HackerRank problems, we thought it would be best to write a generalized and reusable function. Doing
array-index math in Python hurts my brain and we would rather work on solving the problems at hand
instead of solving the same array-index math every time a _sliding window_ problem came up.

```python
def sliding_window(arr: list[float], window_size: int, start: int=0):
    """
    Iterate all windows of a given size for the array.

    Args:
        arr: The data array to iterate through
        windows_size: The static size of the window to use.
        start: Optional parameter to start the window other than at the
            beginning of the array.
    """
    for idx in range(len(arr) - window_size + 1):
        yield arr[idx: idx + window_size]
```

For a window size of _k_ and an array size _n_, there `n - k + 1` windows. A generator is used to
incrementally return each window as soon as it is calculated. The result would look something like
this:

![sliding window technique](/posts/0076/sliding-window.png)

The `LimitRule` class is overkill for detecting if a single point is outside of the limits. However,
setting the *window_size* and *fail_count* to 1, the same code works for all three of the first
Rules.

```
class ControlLimitRule(LimitRule):
    """
    Rule 1

    Detect any points that lie outside of 3 standard deviations from the mean.
    """
    def __init__(self):
        super().__init__()


class WarningLimitRule(LimitRule):
    """
    Rule 2

    Detect any set of three points where at least two are outside of 2 standard
    deviations from the mean.
    """
    def __init__(self):
        super().__init__(sigmas=2, window_size=3, fail_count=2)


class ZoneCLimitRule(LimitRule):
    """
    Rule 3

    Detect any set of five points where at least four are outside of 1 standard
    deviation from the mean.
    """
    def __init__(self):
        super().__init__(sigmas=1, window_size=5, fail_count=4)
```

From here, it is a matter of importing the data, calculating the mean and standard deviation, and
running the rules over the data.

```python
import numpy as np
import pandas as pd


# ===== Load dataset =====
datafile = "datasets/three.csv"
data = list(pd.read_csv(datafile)['Value'])

mean = np.mean(data, axis=0)
std = np.std(data, axis=0)

# ===== Initialize Sensitizing Rules =====
rules = [
    ControlLimitRule(),
    WarningLimitRule(),
    ZoneCLimitRule(),
]

# ===== Run all rules =====
issues = []

for rule in rules:
    issues = issues + rule.run(data, mean, std)

print("===== Detected Events =====")
for issue in issues:
    print(f"Rule: {issue[0]}, Point: {issue[1]}")
```

Running this for `datasets/three.csv`, we'll get the following output:

```
===== Detected Events =====
Rule: ControlLimitRule, Point: 12
Rule: ControlLimitRule, Point: 23
```

---

It is always fun to find places in the wild where data structures and algorithms can be used to our
advantage; whether it is a sliding window problem like this or a memoization problem to prevent
unneeded recalculations (or network calls). The hundreds of hours of programming competition and
HackerRank-style problems sometimes pays off.

---

## Resources

1. Montgomery, Douglas C. Introduction to Statistical Quality Control. Eighth edition, John Wiley & Sons, Inc., 2020.
