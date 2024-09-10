import {dummyTree} from "./_02_make_binary_tree.js";
import {printTree} from "./__print_tree.js";

function flatten(root) {
    if (!root) return null;

    let left = flatten(root.left);
    let right = flatten(root.right);

    if (left) {
        let temp = left;
        while (temp.right) temp = temp.right;
        temp.right = right;
        root.right = left;
        root.left = null;
    } else {
        root.right = right;
    }

    return root;
}

const tree = dummyTree();

printTree(tree);

console.log(flatten(tree));

