import { Node } from "./Node.js";



// - **Constructor**: Initializes an empty linked list with `head`, `tail`, and `size`.
// - **Getters & Setters**: Provide encapsulated access to `head`, `tail`, and `size` properties.
// - **append(key, value)**: Adds a new node to the end of the list.
// - **prepend(key, value)**: Adds a new node to the beginning of the list.
// - **at(index)**: Retrieves the node at a specific index.
// - **contains(key)**: Checks if a node with the given key exists.
// - **findIndex(key)**: Finds the index of a node with the specified key.
// - **findNode(key)**: Returns the node with the specified key.
// - **insertAt(index, key, value)**: Inserts a new node at a given index.
// - **removeAt(index)**: Removes the node at a specified index.
// - **pop()**: Removes and returns the last node in the list.
// - **toString()**: Converts the list into a string representation.


// - **Constructor**: Initializes an empty linked list with `head`, `tail`, and `size`.
export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  set head(newHead) {
    this._head = newHead;
  }
  get head() {
    return this._head;
  }
  set tail(newTail) {
    this._tail = newTail;
  }
  get tail() {
    return this._tail;
  }
  set size(newSize) {
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
// - **append(key, value)**: Adds a new node to the end of the list.
  append(key, value) {
    if (this.size === 0) {
      this.head = new Node(key, value);
      this.tail = this.head;
    } else {
      const node = new Node(key, value);
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
// - **prepend(key, value)**: Adds a new node to the beginning of the list.
  prepend(key, value) {
    if (this.size === 0) {
      this.head = new Node(key, value);
      this.tail = this.head;
    } else {
      const node = new Node(key, value);
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
// - **at(index)**: Retrieves the node at a specific index.
  at(index) {
    let n = 0;
    let pointer = this.head;
    while (pointer !== null) {
      if (n === index) {
        return pointer;
      }
      pointer = pointer.next;
      n++;
    }
  }
// - **contains(key)**: Checks if a node with the given key exists.
  contains(key) {
    let pointer = this.head;
    while (pointer !== null) {
      if (key === pointer.key) {
        return true;
      }
      pointer = pointer.next;
    }
    return false;
  }
// - **findIndex(key)**: Finds the index of a node with the specified key.
  findIndex(key) {
    let pointer = this.head;
    let index = 0;
    while (pointer !== null) {
      if (key === pointer.key) {
        return index;
      }
      pointer = pointer.next;
      index++;
    }
    return null;
  }
//  - **findNode(key)**: Returns the node with the specified key.
  findNode(key){
    let pointer = this.head;
    let index = 0;
    while (pointer !== null) {
      if (key === pointer.key) {
        return pointer;
      }
      pointer = pointer.next;
      index++;
    }
    return null;
  }
// - **insertAt(index, key, value)**: Inserts a new node at a given index.
  insertAt(index, key, value) {
    const node = new Node(key, value);
    const prev = this.at(index);
    node.next = prev.next;
    prev.next = node;
  }
//  - **removeAt(index)**: Removes the node at a specified index.
  removeAt(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    const node = this.at(index);
    const prev = this.at(index - 1);
    prev.next = node.next;
    if (index === this.size - 1) {
      this.tail = prev;
    }
    this.size--;
  }
// - **pop()**: Removes and returns the last node in the list.
  pop() {
    let pointer = this.head;
    const node = this.tail;
    while (pointer !== null) {
      if (pointer.next === node) {
        pointer.next = null;
        this.tail = pointer;
      }
      pointer = pointer.next;
    }
    return node;
  }
// - **toString()**: Converts the list into a string representation.
  toString() {
    let pointer = this.head;
    let str = "";
    while (pointer !== null) {
      str = str + `(${pointer.key}: ${pointer.value}) -> `;
      pointer = pointer.next;
    }
    str += "null";
    return str;
  }
}