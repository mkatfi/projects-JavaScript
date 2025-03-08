class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
}
  
export class Tree {
    constructor(array) {
        this.root = this.buildTree(array);
    }

    buildTree(array) {
        if (!array.length) return null;

        // Remove duplicates and sort the array
        array = [...new Set(array)].sort((a, b) => a - b);

        return this.buildTreeHelper(array, 0, array.length - 1);
    }

    buildTreeHelper(array, start, end) {
        if (start > end) return null;

        const mid = Math.floor((start + end) / 2);
        const node = new Node(array[mid]);

        node.left = this.buildTreeHelper(array, start, mid - 1);
        node.right = this.buildTreeHelper(array, mid + 1, end);

        return node;
    }


// Find an item    
    find(value){
        return this.findNode(this.root, value);
    }
    findNode(node, value){
        if (node === null || node.data === value){
            console.log("find", node);
            return node;
        }

        if(value < node.data){
            // console.log("find in left", node);
            return this.findNode(node.left, value);
        }else{
            // console.log("find in right", node);
            return this.findNode(node.right, value);
        }
    }

// Insert an item
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
        this.root = newNode;
        } else {
        this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {

        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

// Delete an item
    deleteItem(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(node, value) {
        if (node === null) return null;

        if (value < node.data) {
            node.left = this.deleteNode(node.left, value);
        } else if (value > node.data) {
            node.right = this.deleteNode(node.right, value);
        } else {
        // Node with only one child or no child
            if (node.left === null) return node.right;
            if (node.right === null) return node.left;

            // Node with two children: Get the inorder successor (smallest in the right subtree)
            node.data = this.minValue(node.right);

            // Delete the inorder successor
            node.right = this.deleteNode(node.right, node.data);
        }

        return node;
    }

    minValue(node) {
        let min = node.data;
        while (node.left !== null) {
        min = node.left.data;
        node = node.left;
        }
        return min;
    }

// Level order traversal
    levelOrder(callback) {
        if (typeof callback !== 'function') {
          throw new Error('A callback function is required');
        }
    
        if (this.root === null) return;
    
        const queue = [this.root];
    
        while (queue.length > 0) {
          const node = queue.shift();
          callback(node);
    
          if (node.left !== null) {
            queue.push(node.left);
          }
    
          if (node.right !== null) {
            queue.push(node.right);
          }
        }
    }
// In-order traversal
    inOrder(callback) {
        if (typeof callback !== 'function') {
          throw new Error('A callback function is required');
        }
        this.inOrderHelper(this.root, callback);
    }

    inOrderHelper(node, callback) {
        if (node !== null) {
            this.inOrderHelper(node.left, callback);
            callback(node);
            this.inOrderHelper(node.right, callback);
        }
    }
//  Preorder traversal
    preOrder(callback) {
        if (typeof callback !== 'function') {
            throw new Error('A callback function is required');
        }
        this.preOrderHelper(this.root, callback);
    }

    preOrderHelper(node, callback) {
        if (node !== null) {
            callback(node);
            this.preOrderHelper(node.left, callback);
            this.preOrderHelper(node.right, callback);
        }
    }
// Postorder traversal
    postOrder(callback) {
        if (typeof callback !== 'function') {
            throw new Error('A callback function is required');
        }
        this.postOrderHelper(this.root, callback);
    }

    postOrderHelper(node, callback) {
        if (node !== null) {
            this.postOrderHelper(node.left, callback);
            this.postOrderHelper(node.right, callback);
            callback(node);
        }
    }

// Check the height of the tree
    height(node){
        if(node === null){
            return -1;
        }
        let leftHeight = this.height(node.left);
        let rightHeight = this.height(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }

// Check the depth of the tree    
    depth(node) {
        return this.depthHelper(this.root, node, 0);
    }
    
    depthHelper(current, node, depth) {
        if (current === null) return -1;
        if (current === node) return depth;

        const leftDepth = this.depthHelper(current.left, node, depth + 1);
        if (leftDepth !== -1) return leftDepth;

        return this.depthHelper(current.right, node, depth + 1);
    }

// Check if the tree is balanced    
    isBalanced(){
        return this.checkBalanced(this.root);
    }
    checkBalanced(node){
        if(node === null){
            return true;
        }
        let leftHeight = this.height(node.left);
        let rightHeight = this.height(node.right);
        if(Math.abs(leftHeight - rightHeight) > 1){
            return false;
        }
        return this.checkBalanced(node.left) && this.checkBalanced(node.right);
    }

// rebalances an unbalanced tree
    rebalance(){
        let array = [];
        this.inOrder(node => array.push(node.data));
        this.root = this.buildTree(array);
    }
}
  
export const prettyPrint = (node, prefix = "", isLeft = true) => {
if (node === null) {
    return;
}
if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
}
console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
}
};
