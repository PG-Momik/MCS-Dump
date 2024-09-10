/**
 * Sorts an array using the merge sort algorithm.
 *
 * @param {Array<number>} array - The array to be sorted.
 * @returns {Array<number>} A new array sorted in ascending order.
 */
function mergeSort(array) {
    if (array.length <= 1) return array;

    let mid = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid));

    return mergeArrays(left, right);
}

/**
 * Merges two sorted arrays into one sorted array.
 *
 * @param {Array<number>} left - The left array, sorted in ascending order.
 * @param {Array<number>} right - The right array, sorted in ascending order.
 * @returns {Array<number>} A new array containing all the elements from both `left` and `right` arrays, sorted.
 */
function mergeArrays(left, right) {
    let result = [];
    let i = 0, j = 0;

    // Merge the arrays by comparing elements from both
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Concatenate the remaining elements (if any) from either left or right
    return result.concat(left.slice(i), right.slice(j));
}

let array = [12, 11, 13, 5, 6, 7];
console.log("Original Array:", array);
console.log("Sorted Array:", mergeSort(array));
