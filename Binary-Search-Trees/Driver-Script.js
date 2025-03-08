import { Tree, prettyPrint } from './Binary-Trees.js';

// Function to generate an array of random numbers
function generateRandomArray(size, max) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * max));
}

// Create a binary search tree from an array of random numbers < 100
const randomArray = generateRandomArray(15, 100);
const tree = new Tree(randomArray);

// Confirm that the tree is balanced by calling isBalanced
console.log("Is the tree balanced?", tree.isBalanced());

// Print out all elements in level, pre, post, and inorder
console.log("Level order:");
tree.levelOrder(node => console.log(node.data));

console.log("Pre-order:");
tree.preOrder(node => console.log(node.data));

console.log("Post-order:");
tree.postOrder(node => console.log(node.data));

console.log("In-order:");
tree.inOrder(node => console.log(node.data));

// Unbalance the tree by adding several numbers > 100
tree.insert(150);
tree.insert(200);
tree.insert(250);

// Confirm that the tree is unbalanced by calling isBalanced
console.log("Is the tree balanced after adding numbers > 100?", tree.isBalanced());

prettyPrint(tree.root);
// Balance the tree by calling rebalance
tree.rebalance();

// Confirm that the tree is balanced by calling isBalanced
console.log("Is the tree balanced after rebalancing?", tree.isBalanced());
prettyPrint(tree.root);

// Print out all elements in level, pre, post, and in order
console.log("Level order after rebalancing:");
tree.levelOrder(node => console.log(node.data));

console.log("Pre-order after rebalancing:");
tree.preOrder(node => console.log(node.data));

console.log("Post-order after rebalancing:");
tree.postOrder(node => console.log(node.data));

console.log("In-order after rebalancing:");
tree.inOrder(node => console.log(node.data));

// Print the tree structure
prettyPrint(tree.root);