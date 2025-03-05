Here’s your `README.md` for the Fibonacci and Merge Sort project:

---

# Recursion: Fibonacci & Merge Sort

## Overview
This project explores recursion through two classic problems: the **Fibonacci sequence** and **Merge Sort**. The goal is to implement both iterative and recursive solutions to Fibonacci and apply recursion in sorting an array using **Merge Sort**.

## Features
- **Fibonacci Sequence**:
  - `fibs(n)`: Iterative function returning the first `n` numbers in the Fibonacci sequence.
  - `fibsRec(n)`: Recursive function returning the first `n` numbers in the Fibonacci sequence.
- **Merge Sort**:
  - `mergeSort(array)`: Recursively sorts an array using the **divide and conquer** strategy.

## Setup & Running the Code
1. Clone the repository:
   ```bash
   git clone https://github.com/mkatfi/projects-JavaScript/tree/main/Recursion
   ```
2. Run the JavaScript files using Node.js:
   ```bash
   node main.js
   ```
   
## Project Structure
```
recursion-algorithms/
├── main.js         # Fibonacci sequence && Merge Sort implementation
├── index.html      # HTML
├── README.md       # Documentation
```

## Implementation Details
### Fibonacci Sequence
1. **Iterative Approach (`fibs(n)`)**
   - Uses a loop to generate the Fibonacci sequence.
   - Efficient, with **O(n) time complexity**.

2. **Recursive Approach (`fibsRec(n)`)**
   - Uses recursion to compute the Fibonacci sequence.
   - **Base case**: `n === 0` or `n === 1`.
   - **Recursive case**: `fibsRec(n - 1) + fibsRec(n - 2)`.
   - Less efficient due to **O(2ⁿ) time complexity**, but demonstrates recursion principles.

### Merge Sort
- **Algorithm Steps**:
  1. Base case: If the array length is 1 or 0, return the array (already sorted).
  2. Recursively split the array into two halves.
  3. Merge the sorted halves back together.
- **Time Complexity**: **O(n log n)**.

## Example Usage
### Fibonacci
```javascript
console.log(fibs(8));    // Output: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibsRec(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
```

### Merge Sort
```javascript
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110]));       // Output: [79, 100, 105, 110]
```

## Acknowledgments
Inspired by **The Odin Project** and **Harvard CS50x** lectures.

---