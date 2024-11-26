/**
 * Represents a node in a binary tree.
 *
 * @class
 *
 * @property {number} value - The value stored in the node.
 * @property {TreeNode|null} left - The left child node (or null if no left child).
 * @property {TreeNode|null} right - The right child node (or null if no right child).
 */
export  default class TreeNode {
    /**
     * Creates an instance of a tree node.
     *
     * @param {number} value - The value to store in the node.
     */
    constructor(value) {
        /**
         * The value of the node.
         *
         * @type {number}
         */
        this.value = value;

        /**
         * The left child node.
         *
         * @type {TreeNode|null}
         */
        this.left = null;

        /**
         * The right child node.
         *
         * @type {TreeNode|null}
         */
        this.right = null;
    }
}


