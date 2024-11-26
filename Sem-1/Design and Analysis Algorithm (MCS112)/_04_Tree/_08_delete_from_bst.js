import {printTree} from "./__print_tree.js";
import TreeNode from "./_01_make_node.js";
import {sortedArrayToBST} from "./_07_array_to_bst.js";

function deleteNodeBST(root, value) {
    if (root === null) return root;

    if (value < root.value) {
        root.left = deleteNodeBST(root.left, value);
    } else if (value > root.value) {
        root.right = deleteNodeBST(root.right, value);
    } else {
        if (root.left === null) return root.right;
        else if (root.right === null) return root.left;

        let minNode = findMin(root.right);
        root.value = minNode.value;
        root.right = deleteNodeBST(root.right, minNode.value);
    }

    return root;
}

function findMin(node) {
    while (node.left !== null) {
        node = node.left;
    }
    return node;
}


const sortedArray = [1, 5, 7, 10, 15];
const bst = sortedArrayToBST(sortedArray);

printTree(bst);
deleteNodeBST(bst, 5)
console.log()
printTree(bst);
