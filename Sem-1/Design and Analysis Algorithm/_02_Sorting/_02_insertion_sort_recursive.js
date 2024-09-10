/**
 * Sorts an array using the insertion sort algorithm recursively.
 * It sorts the subarray from 0 to n-1 and inserts the nth element into the correct position.
 *
 * @param {Array} sortableArray - The array of elements to be sorted.
 * @param {number} n - The size of the portion of the array to be sorted (starts with array length).
 * @returns {Array} - The sorted array.
 */
function recursiveInsertionSort(sortableArray, n = sortableArray.length) {
    if (n <= 1) {
        return sortableArray;
    }

    recursiveInsertionSort(sortableArray, n - 1);

    let currentElement = sortableArray[n - 1];
    let j = n - 2;

    while (j >= 0 && sortableArray[j] > currentElement) {
        sortableArray[j + 1] = sortableArray[j];
        j--;
    }

    sortableArray[j + 1] = currentElement;

    return sortableArray;
}

let sortables = [125, 134526, 453, 2];
console.log("Initial Array", sortables);
console.log("Sorted Array", recursiveInsertionSort(sortables));
