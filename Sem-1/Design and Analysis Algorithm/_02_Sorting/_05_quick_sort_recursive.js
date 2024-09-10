/**
 * Sorts an array using the recursive quick sort algorithm.
 *
 * @param {Array<number>} array - The array to be sorted.
 * @returns {Array<number>} The sorted array.
 */
function quickSort(array) {
    if (array.length <= 1) return array;

    let pivot = array[0];
    let left = [], right = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

let array = [122, 1189, 2, 1435, 1, 12];
console.log("Sorted Array:", quickSort(array));
