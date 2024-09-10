/**
 * Sorts an array in asc order using the bubble sort algorithm.
 * Basically repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
 * The process is repeated until the array is sorted.
 *
 * @param {Array} sortableArray - The array of elements to be sorted.
 * @returns {Array} - A new array that is sorted in ascending order.
 */
function bubbleSort(sortableArray) {
    // Doing this because arrays are passed by reference so i dont wanna change the original array
    let sortedArray = [...sortableArray];

    for (let i = 0; i < sortedArray.length - 1; i++) {
        for (let j = 0; j < sortedArray.length - 1 - i; j++) {
            if (isGreaterThan(sortedArray[j], sortedArray[j + 1])) {
                const tempVal = sortedArray[j];
                sortedArray[j] = sortedArray[j + 1];
                sortedArray[j + 1] = tempVal;
            }
        }
    }
    return sortedArray;
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

let sortables = [653, 21, 1, 10];

console.log("Initial Array", sortables);
console.log("Sorted Array", bubbleSort(sortables));
