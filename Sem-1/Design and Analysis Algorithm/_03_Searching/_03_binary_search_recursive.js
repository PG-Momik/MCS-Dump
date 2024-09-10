/**
 * Performs binary search recursively to find the index of a target value in a sorted array.
 *
 * @param {Array<number>} array - The sorted array to search in.
 * @param {number} target - The target value to search for.
 * @param {number} left - The left boundary of the array (start index).
 * @param {number} right - The right boundary of the array (end index).
 * @returns {number} The index of the target, or -1 if not found.
 */
function binarySearchRecursive(array, target, left = 0, right = array.length - 1) {
    if (left > right) {
        return -1;
    }

    let mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
        return mid;
    } else if (array[mid] < target) {
        return binarySearchRecursive(array, target, mid + 1, right);
    } else {
        return binarySearchRecursive(array, target, left, mid - 1);
    }
}

let arr = [10, 20, 30, 40, 50];
console.log(binarySearchRecursive(arr, 30));
console.log(binarySearchRecursive(arr, 60));
