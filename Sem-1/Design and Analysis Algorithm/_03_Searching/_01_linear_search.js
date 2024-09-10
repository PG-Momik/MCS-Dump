/**
 * Performs a linear search to find the index of a target value in an array.
 *
 * @param {Array<number>} array - The array to search in.
 * @param {number} target - The target value to search for.
 * @returns {number} The index of the target, or -1 if not found.
 */
function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}

let arr = [10, 20, 30, 40, 50];
console.log(linearSearch(arr, 30));
console.log(linearSearch(arr, 60));
