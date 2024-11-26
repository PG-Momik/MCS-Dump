import {dummyTree} from "./_02_make_binary_tree.js";
import TreeNode from "./_01_make_node.js";
import {printTree} from "./__print_tree.js";

function isBalanced(root) {
    if (!root) return true;

    function getDepth(node) {
        if (!node) return 0;
        return Math.max(getDepth(node.left), getDepth(node.right)) + 1;
    }

    const leftDepth = getDepth(root.left);
    const rightDepth = getDepth(root.right);
    return Math.abs(leftDepth - rightDepth) <= 1 && isBalanced(root.left) && isBalanced(root.right);
}

const tree = dummyTree()
tree.right.right.left = new TreeNode(1)
tree.right.right.right = new TreeNode(3)

console.log("\n---------------- TREE: ----------------")
printTree(tree)
console.log("---------------------------------------\n");

console.log( "Is Balanced:", isBalanced(tree));