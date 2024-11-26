/**
 * Recursively sorts an array using the bubble sort algorithm.
 * It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
 * The process is repeated until the array is sorted.
 *
 * @param {Array} sortableArray - The array of elements to be sorted.
 * @param {number} n - The length of the portion of the array to sort (starts as array length).
 * @returns {Array} - A new array that is sorted in ascending order.
 */
function recursiveBubbleSort(sortableArray, n = sortableArray.length) {
    if (n <= 1) {
        return sortableArray;
    }

    for (let i = 0; i < n - 1; i++) {
        if (isGreaterThan(sortableArray[i], sortableArray[i + 1])) {
            const tempVal = sortableArray[i];
            sortableArray[i] = sortableArray[i + 1];
            sortableArray[i + 1] = tempVal;
        }
    }

    return recursiveBubbleSort(sortableArray, n - 1);
}

/**
 * Checks if the first number is greater than the second.
 *
 * @param {number} num1 - The first number to compare.
 * @param {number} num2 - The second number to compare.
 * @returns {boolean} - Returns true if num1 is greater than num2, otherwise false.
 */
function isGreaterThan(num1, num2) {
    return Number(num1) > Number(num2);
}

let sortables = [123, 543, 1231, 11, 11];

console.log("Initial Array", sortables);
console.log("Sorted Array", recursiveBubbleSort(sortables));
