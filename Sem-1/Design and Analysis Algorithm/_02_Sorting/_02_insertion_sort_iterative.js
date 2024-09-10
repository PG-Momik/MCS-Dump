/**
 * Sorts an array using the insertion sort algorithm iteratively.
 * It repeatedly takes elements from the unsorted portion and inserts them into the sorted portion.
 *
 * @param {Array} sortableArray - The array of elements to be sorted.
 * @returns {Array} - The sorted array.
 */
function insertionSort(sortableArray) {
    let sortedArray = [...sortableArray];

    for (let i = 1; i < sortedArray.length; i++) {
        let currentElement = sortedArray[i];
        let j = i - 1;

        while (j >= 0 && sortedArray[j] > currentElement) {
            sortedArray[j + 1] = sortedArray[j];
            j--;
        }

        sortedArray[j + 1] = currentElement;
    }

    return sortedArray;
}

let sortables = [125, 134526, 453, 2];
console.log("Initial Array", sortables);
console.log("Sorted Array", insertionSort(sortables));
