/**
 * Calculates the Fibonacci number at a specific index using recursion.
 *
 * @param {number} n - The index of the Fibonacci number to calculate.
 * @returns {number} The Fibonacci number at index n.
 *
 */
function fibonacci(n) {
    if (n < 2 ) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Generates the Fibonacci series up to a given count.
 *
 * @param {number} fiboCount - Number of items in the fibonacci series.
 * @returns {number[]} An array containing the Fibonacci series.
 * @throws {RangeError} Throws an error if count is a negative number.
 *
 * @example
 * fibonacciSeries(5); => returns [0, 1, 1, 2, 3]
 */
function fibonacciSeries(fiboCount) {
    if (fiboCount < 0) {
        throw new RangeError("Count must be a non-negative integer.");
    }

    const series = [];

    for (let i = 0; i < fiboCount; i++) {
        series.push(fibonacci(i));
    }

    return series;
}

console.log(fibonacciSeries(6))
