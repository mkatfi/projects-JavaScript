import { Tree, prettyPrint } from './Binary-Trees.js';


// Example usage:
const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(array);


console.log("Original Tree");

prettyPrint(tree.root);
tree.levelOrder(node => console.log(node.data));

console.log("After inserting 10");

tree.insert(10);
prettyPrint(tree.root);

console.log("After deleting 9");

tree.deleteItem(9);
prettyPrint(tree.root);
tree.find(10);
console.log("=====> In-order traversal");
tree.inOrder(node => console.log(node.data));

console.log("=====> Pre-order traversal");
tree.preOrder(node => console.log(node.data));

console.log("=====> Post-order traversal");
tree.postOrder(node => console.log(node.data));


console.log("Height of root:", tree.height(tree.root));
console.log("Depth of node with value 9:", tree.depth(tree.find(10)));
prettyPrint(tree.root);
console.log("Is tree balanced?", tree.isBalanced());

tree.insert(10000);
console.log("After inserting 10000:");
prettyPrint(tree.root);
console.log("Is tree balanced?", tree.isBalanced());

tree.rebalance();
console.log("After rebalancing:");
prettyPrint(tree.root);
console.log("Is tree balanced?", tree.isBalanced());