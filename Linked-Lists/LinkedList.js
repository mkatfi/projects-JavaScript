export class Node {
    constructor(value) {
      this.value = value;
      this.nextNode = null;
    }
}
  
export class LinkedList {
    constructor() {
      this.headNode = null;
      this.length = 0;
    }
  
    // Adds a new node to the end
    append(value) {
      const newNode = new Node(value);
      if (!this.headNode) {
        this.headNode = newNode;
      } else {
        let current = this.headNode;
        while (current.nextNode) {
          current = current.nextNode;
        }
        current.nextNode = newNode;
      }
      this.length++;
    }
  
    // Adds a new node to the start
    prepend(value) {
      const newNode = new Node(value);
      newNode.nextNode = this.headNode;
      this.headNode = newNode;
      this.length++;
    }
  
    // Returns the total number of nodes
    size() {
      return this.length;
    }
  
    // Returns the first node
    head() {
      return this.headNode;
    }
  
    // Returns the last node
    tail() {
      if (!this.headNode) return null;
      let current = this.headNode;
      while (current.nextNode) {
        current = current.nextNode;
      }
      return current;
    }
  
    // Returns the node at a given index
    at(index) {
      if (index < 0 || index >= this.length) return null;
      let current = this.headNode;
      for (let i = 0; i < index; i++) {
        current = current.nextNode;
      }
      return current;
    }
  
    // Removes the last element
    pop() {
      if (!this.headNode) return null;
      if (!this.headNode.nextNode) {
        this.headNode = null;
      } else {
        let current = this.headNode;
        let prev = null;
        while (current.nextNode) {
          prev = current;
          current = current.nextNode;
        }
        prev.nextNode = null;
      }
      this.length--;
    }
  
    // Checks if the list contains a value
    contains(value) {
      let current = this.headNode;
      while (current) {
        if (current.value === value) return true;
        current = current.nextNode;
      }
      return false;
    }
  
    // Finds the index of a value
    find(value) {
      let current = this.headNode;
      let index = 0;
      while (current) {
        if (current.value === value) return index;
        current = current.nextNode;
        index++;
      }
      return null;
    }
  
    // Converts the list into a string format
    toString() {
      let current = this.headNode;
      let result = "";
      while (current) {
        result += `( ${current.value} ) -> `;
        current = current.nextNode;
      }
      return result + "null";
    }
  
    // Inserts a node at a specific index
    insertAt(value, index) {
      if (index < 0 || index > this.length) return;
      const newNode = new Node(value);
      
      if (index === 0) {
        this.prepend(value);
      } else {
        let current = this.headNode;
        let prev = null;
        for (let i = 0; i < index; i++) {
          prev = current;
          current = current.nextNode;
        }
        prev.nextNode = newNode;
        newNode.nextNode = current;
        this.length++;
      }
    }
  
    // Removes a node at a specific index
    removeAt(index) {
      if (index < 0 || index >= this.length) return;
  
      if (index === 0) {
        this.headNode = this.headNode.nextNode;
      } else {
        let current = this.headNode;
        let prev = null;
        for (let i = 0; i < index; i++) {
          prev = current;
          current = current.nextNode;
        }
        prev.nextNode = current.nextNode;
      }
      this.length--;
    }
}
  