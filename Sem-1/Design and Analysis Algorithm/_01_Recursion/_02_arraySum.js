/**
 * This function takes an array of numbers and returns the sum of its elements.
 * If the array is empty, it returns 0.
 *
 * @param {number[]} numbersArray - An array of numbers to sum up.
 * @returns {number} The sum of all numbers in the array.
 *
 * @example
 * arraySum([1, 2, 3, 4, 5]); => 15
 * arraySum([]); => 0
 */
function arraySum(numbersArray) {
    if (!Array.isArray(numbersArray)) throw new Error("Input must be an array.");

    if (numbersArray.some(item => typeof item !== 'number')) throw new Error("Array must contain only numbers.");

    if (numbersArray.length === 0) return 0;

    return numbersArray[0] + arraySum(numbersArray.slice(1));
}

console.log(arraySum([1, 2, 3, 4, 5]));
