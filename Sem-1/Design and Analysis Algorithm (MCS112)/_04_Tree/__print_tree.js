export function printTree(root, prefix = '', isLeft = true) {
    if (root === null) return;

    console.log(prefix + (isLeft ? '├──[L]: ' : '└──[R] ') + root.value);

    if (root.left || root.right) {
        printTree(root.left, prefix + (isLeft ? '│   ' : '    '), true);
        printTree(root.right, prefix + (isLeft ? '│   ' : '    '), false);
    }
}
