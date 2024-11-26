/**
 * Sorts an array using the selection sort algorithm iteratively.
 * It repeatedly finds the minimum element from the unsorted portion and swaps it with the first unsorted element.
 *
 * @param {Array} sortableArray - The array of elements to be sorted.
 * @returns {Array} - The sorted array.
 */
function selectionSort(sortableArray) {
    let sortedArray = [...sortableArray];

    for (let i = 0; i < sortedArray.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < sortedArray.length; j++) {
            if (sortedArray[j] < sortedArray[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            const tempVal = sortedArray[i];
            sortedArray[i] = sortedArray[minIndex];
            sortedArray[minIndex] = tempVal;
        }
    }

    return sortedArray;
}

let sortables = [1123, 12, 1, 10];
console.log("Initial Array", sortables);
console.log("Sorted Array", selectionSort(sortables));
