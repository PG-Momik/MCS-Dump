import {printTree} from "./__print_tree.js";
import TreeNode from "./_01_make_node.js";

export function sortedArrayToBST(arr) {
    if (arr.length === 0) return null;

    const mid = Math.floor(arr.length / 2);
    const node = new TreeNode(arr[mid]);

    node.left  = sortedArrayToBST(arr.slice(0, mid));
    node.right = sortedArrayToBST(arr.slice(mid + 1));

    return node;
}

/**
 * Commenting this out because i'm exporting this function to _08_delete_from_bst
 * const sortedArray = [1, 5, 7, 10, 15,9];
 * const bst = sortedArrayToBST(sortedArray);
 *
 * console.log(sortedArray);
 * printTree(bst);
 */