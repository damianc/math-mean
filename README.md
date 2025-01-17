# math-mean

`Math.mean` exposes the following methods:

- `arithmetic(numbers, weights = null)`

$$
\frac{\sum x}{n}
$$

- `geometric(numbers, weights = null)`

$$
\sqrt[n]{\prod x}
$$

- `harmonic(numbers, weights = null)`

$$
n \cdot \left[
\sum \frac{1}{x}
\right]^{-1}
$$

- `quadratic(numbers, weights = null)`

$$
\sqrt[2]{\frac{\sum x^2}{n}}
$$

- `power(numbers, weights = null, power)`

$$
\sqrt[p]{\frac{\sum x^p}{n}}
$$

- `root(numbers, weights = null, degree = 2)`

$$
\left(
\frac{\sum \sqrt[d]{x}}{n}
\right)^d
$$

- `logarithmic(numbers, weights = null, base = Math.E)`

$$
e^{\square}, \square = \frac{1}{n} \sum \log_b(x)
$$

- `contraharmonic(numbers, weights = null)`

$$
\frac{\sum x^2}{\sum x}
$$

- `Lehmer(numbers, weights = null, p = 2)`

$$
\frac{\sum x^p}{\sum x^{p-1}}
$$

- `f(numbers, weights = null, fn, inverseFn)`

$$
f^{-1}\left(
\frac{1}{n} \sum f(x)
\right)
$$
