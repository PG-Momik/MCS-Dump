export function preOrderTraversal(node) {
    if (node === null) return;
    console.log(node.value);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
}
export function inOrderTraversal(node) {
    if (node === null) return;
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right);
}
export function postOrderTraversal(node) {
    if (node === null) return;
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    console.log(node.value);
}
export function levelOrderTraversal(root) {
    if (root === null) return;

    let queue = [root];

    while (queue.length > 0) {
        let currentNode = queue.shift();
        console.log(currentNode.value);

        // Add left and right children to the queue
        if (currentNode.left !== null) queue.push(currentNode.left);
        if (currentNode.right !== null) queue.push(currentNode.right);
    }
}