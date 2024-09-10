import TreeNode from "./_01_make_node.js";
import {printTree} from "./__print_tree.js";

export function dummyTree(){
    const root = new TreeNode(10);
    root.left = new TreeNode(5);
    root.right = new TreeNode(15);

    root.left.left = new TreeNode(3);
    root.left.right = new TreeNode(7);

    root.right.left = new TreeNode(12);
    root.right.right = new TreeNode(18);

    return root
}