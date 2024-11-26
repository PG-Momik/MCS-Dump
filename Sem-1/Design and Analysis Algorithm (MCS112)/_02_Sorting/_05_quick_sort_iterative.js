/**
 * Sorts an array using the iterative quick sort algorithm.
 *
 * @param {Array<number>} array - The array to be sorted.
 * @returns {Array<number>} The sorted array.
 */
function quickSort(array) {
    let stack = [];
    stack.push({ left: 0, right: array.length - 1 });

    while (stack.length) {
        let { left, right } = stack.pop();
        if (left >= right) continue;

        let pivotIndex = partition(array, left, right);

        stack.push({ left, right: pivotIndex - 1 });
        stack.push({ left: pivotIndex + 1, right });
    }

    return array;
}

function partition(array, left, right) {
    let pivot = array[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
        if (array[j] < pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    [array[i + 1], array[right]] = [array[right], array[i + 1]];
    return i + 1;
}

let array = [122, 1189, 2, 1435, 1, 12];
console.log("Sorted Array (Iterative):", quickSort(array));
