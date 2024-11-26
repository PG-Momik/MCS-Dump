import TreeNode from "./_01_make_node.js";
import {printTree} from "./__print_tree.js";
import {
    inOrderTraversal,
    levelOrderTraversal,
    postOrderTraversal,
    preOrderTraversal
} from "./_03_tree_traversal_techniques.js";

const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);

root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);

root.right.left = new TreeNode(12);
root.right.right = new TreeNode(18);

root.right.left.left = new TreeNode(11);
root.right.left.right = new TreeNode(17);


console.log("\n---------------- TREE: ----------------")
printTree(root)
console.log("---------------------------------------\n");

console.log('Pre-order Traversal:');
preOrderTraversal(root);

console.log('In-order Traversal:');
inOrderTraversal(root);

console.log('Post-order Traversal:');
postOrderTraversal(root);

console.log('Level-order Traversal:');
levelOrderTraversal(root);







