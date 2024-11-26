/**
 * Solves the Tower of Hanoi problem recursively.
 *
 * @param {number} n - The number of disks to move.
 * @param {string} source - The name of the source peg.
 * @param {string} destination - The name of the destination peg.
 * @param {string} auxiliary - The name of the auxiliary peg.
 */
function towerOfHanoi(n, source, destination, auxiliary) {
    if (n === 1) {
        console.log(`Move disk 1 from ${source} to ${destination}`);
        return;
    }

    towerOfHanoi(n - 1, source, auxiliary, destination);

    console.log(`Move disk ${n} from ${source} to ${destination}`);

    towerOfHanoi(n - 1, auxiliary, destination, source);
}

// Example usage:
const numberOfDisks = 3;
towerOfHanoi(numberOfDisks, 'A', 'C', 'B');
