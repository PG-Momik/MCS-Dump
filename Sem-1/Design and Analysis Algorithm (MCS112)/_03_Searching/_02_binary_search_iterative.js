/**
 * Performs binary search iteratively to find the index of a target value in a sorted array.
 *
 * @param {Array<number>} array - The sorted array to search in.
 * @param {number} target - The target value to search for.
 * @returns {number} The index of the target, or -1 if not found.
 */
function binarySearchIterative(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

let arr = [10, 20, 30, 40, 50];
console.log(binarySearchIterative(arr, 30));
console.log(binarySearchIterative(arr, 60));
