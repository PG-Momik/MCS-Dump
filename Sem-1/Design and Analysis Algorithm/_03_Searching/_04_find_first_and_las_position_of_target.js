/**
 * Finds the first and last position of a target value in a sorted array.
 *
 * @param {Array<number>} array - The sorted array to search in.
 * @param {number} target - The target value to search for.
 * @returns {Array<number>} The first and last index of the target, or [-1, -1] if not found.
 */
function findFirstAndLast(array, target) {
    let result = [-1, -1];

    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (array[mid] === target) {
            result[0] = mid;
            right = mid - 1;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    if (result[0] === -1) return result;

    left = 0;
    right = array.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (array[mid] === target) {
            result[1] = mid;
            left = mid + 1;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}

let arr = [10, 20, 20, 20, 30, 40, 50];
console.log(findFirstAndLast(arr, 20));
console.log(findFirstAndLast(arr, 60));
