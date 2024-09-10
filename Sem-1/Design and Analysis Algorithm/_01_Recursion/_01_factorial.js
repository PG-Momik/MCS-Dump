/**
 *
 * @param {number} number - A positive numeric value.
 * @returns {number} The factorial of the given number.
 *
 * @throws {Error} Throws an error if the input is not a non-negative integer.
 *
 * @example
 * factorial(5); => 120
 * factorial(0); => 1
 */
function factorial(number) {
    if (number < 0 || !Number.isInteger(number)) throw new Error("Input must be a non-negative integer.");

    if (number <= 1) return 1;

    return number * factorial(number - 1);
}

console.log(factorial(5));