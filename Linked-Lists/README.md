# Linked List Implementation in JavaScript

## Introduction
A linked list is a fundamental data structure in computer science. Unlike arrays, linked lists allow for dynamic memory allocation, making insertion and deletion operations more efficient in certain scenarios. This project implements a simple linked list using JavaScript.

## Features
This implementation includes the following methods:

### Core Methods:
- `append(value)`: Adds a new node containing `value` to the end of the list.
- `prepend(value)`: Adds a new node containing `value` to the start of the list.
- `size()`: Returns the total number of nodes in the list.
- `head()`: Returns the first node in the list.
- `tail()`: Returns the last node in the list.
- `at(index)`: Returns the node at the given index.
- `pop()`: Removes the last element from the list.
- `contains(value)`: Returns `true` if the list contains `value`, otherwise `false`.
- `find(value)`: Returns the index of the node containing `value`, or `null` if not found.
- `toString()`: Returns a string representation of the list in the format:
  
  ```
  ( value ) -> ( value ) -> ( value ) -> null
  ```

### Extra Credit Methods:
- `insertAt(value, index)`: Inserts a new node with the provided value at the given index.
- `removeAt(index)`: Removes the node at the given index.

## Installation & Setup
Ensure you have Node.js v22 (or later) installed, as ES6 modules are required.

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd linked-list-js
   ```
3. Create a `main.js` file to test your implementation.
4. Import your `LinkedList` class and run tests.

## Example Usage
Create an instance of `LinkedList` and test its methods:
```javascript
import LinkedList from './LinkedList.js';

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
```
### Expected Output:
```
( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
```
---
**Happy Coding! 🚀**

