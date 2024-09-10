/**
 * Generates all subsets of a given set using recursion.
 * The function explores both possibilities for each element:
 * including it in the subset or excluding it.
 *
 * @param {number} index - The current index in the set to process.
 * @param {Array<number>} set - The input set (array) of numbers to generate subsets from.
 * @param {Array<number>} currentSubset - The current subset being built during recursion.
 * @returns {Array<Array<number>>} An array containing all subsets of the input set.
 * Each subset is represented as an array of numbers.
 *
 * @example
 * const set = [1, 2, 3];
 * const subsets = generateSubsets(0, set, []);
 * console.log(subsets);
 *
 * Output: [ [], [ 1 ], [ 2 ], [ 1, 2 ], [ 3 ], [ 1, 3 ], [ 2, 3 ], [ 1, 2, 3 ] ]
 */
function generateSubsets(index, set, currentSubset) {
    if (index === set.length) {
        return [ [...currentSubset] ];
    }

    currentSubset.push(set[index]);
    const includeCurrent = generateSubsets(index + 1, set, currentSubset);

    currentSubset.pop();
    const excludeCurrent = generateSubsets(index + 1, set, currentSubset);

    return [...includeCurrent, ...excludeCurrent];
}

const set = [1, 3, 5];
const subsets = generateSubsets(0, set, []);
console.log(subsets);
