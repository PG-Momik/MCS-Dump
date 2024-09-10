/**
 * Sorts an array using the iterative merge sort algorithm.
 *
 * @param {Array<number>} array - The array to be sorted.
 * @returns {Array<number>} The sorted array.
 */
function mergeSort(array) {
    let currentSize;
    let leftStart;

    // Loop through the array in increasing sizes, doubling each time
    for (currentSize = 1; currentSize <= array.length - 1; currentSize = 2 * currentSize) {
        // Merge subarrays in pairs
        for (leftStart = 0; leftStart < array.length - 1; leftStart += 2 * currentSize) {
            let mid = Math.min(leftStart + currentSize - 1, array.length - 1);
            let rightEnd = Math.min(leftStart + 2 * currentSize - 1, array.length - 1);

            merge(array, leftStart, mid, rightEnd);
        }
    }

    return array;
}

/**
 * Merges two sorted subarrays into a single sorted array.
 *
 * @param {Array<number>} array - The array containing the subarrays to be merged.
 * @param {number} leftStart - The starting index of the left subarray.
 * @param {number} mid - The ending index of the left subarray and the midpoint of the merge.
 * @param {number} rightEnd - The ending index of the right subarray.
 */
function merge(array, leftStart, mid, rightEnd) {
    let leftArray = array.slice(leftStart, mid + 1);
    let rightArray = array.slice(mid + 1, rightEnd + 1);
    let i = 0, j = 0, k = leftStart;

    // Merge the left and right subarrays back into the original array
    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] <= rightArray[j]) {
            array[k] = leftArray[i];
            i++;
        } else {
            array[k] = rightArray[j];
            j++;
        }
        k++;
    }

    // If there are any remaining elements in the left subarray, append them
    while (i < leftArray.length) {
        array[k] = leftArray[i];
        i++;
        k++;
    }

    // If there are any remaining elements in the right subarray, append them
    while (j < rightArray.length) {
        array[k] = rightArray[j];
        j++;
        k++;
    }
}

let array = [12, 11, 13, 5, 6, 7];
console.log("Original Array:", array);
console.log("Sorted Array:", mergeSort(array));
