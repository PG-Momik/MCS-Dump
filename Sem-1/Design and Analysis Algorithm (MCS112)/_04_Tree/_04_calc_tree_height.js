import {dummyTree} from "./_02_make_binary_tree.js";
import {printTree} from "./__print_tree.js";

/**
 * Calculates the height of a binary tree.
 *
 * @param {TreeNode} root - The root node of the binary tree.
 * @returns {number} - The height of the binary tree.
 */
function calculateHeight(root) {
    if (root === null) {
        return -1;
    }

    const leftHeight = calculateHeight(root.left);
    const rightHeight = calculateHeight(root.right);

    return Math.max(leftHeight, rightHeight) + 1;
}

const root = dummyTree();

console.log("\n---------------- TREE: ----------------")
printTree(root)
console.log("---------------------------------------\n");
console.log("Height of the tree:", calculateHeight(root)); // Output: 2
