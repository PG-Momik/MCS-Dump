/**
 * Sorts an array using the selection sort algorithm recursively.
 * It finds the minimum element in the unsorted portion and swaps it with the first unsorted element.
 *
 * @param {Array} sortableArray - The array of elements to be sorted.
 * @param {number} startIndex - The index of the first unsorted element (defaults to 0).
 * @returns {Array} - The sorted array.
 */
function selectionSort(sortableArray, startIndex = 0) {
    if (startIndex >= sortableArray.length - 1) {
        return sortableArray;
    }

    let minIndex = startIndex;

    for (let j = startIndex + 1; j < sortableArray.length; j++) {
        if (sortableArray[j] < sortableArray[minIndex]) {
            minIndex = j;
        }
    }

    if (minIndex !== startIndex) {
        const tempVal = sortableArray[startIndex];
        sortableArray[startIndex] = sortableArray[minIndex];
        sortableArray[minIndex] = tempVal;
    }

    return selectionSort(sortableArray, startIndex + 1);
}

let sortables = [1123, 12, 1, 10];
console.log("Initial Array", sortables);
console.log("Sorted Array", selectionSort(sortables));
