# Knight's Travails

## Overview
Knight's Travails is a JavaScript program that finds the shortest path a knight can take from one position to another on a standard **8×8** chessboard. The program uses **Breadth-First Search (BFS)** to efficiently explore possible moves and determine the optimal route.

## Features
- Finds the shortest path for a knight's movement.
- Implements **BFS** to ensure the shortest path is found.
- Outputs the path in a clear, step-by-step format.
- Prevents revisiting squares to optimize performance.

## Getting Started

### Prerequisites
- Node.js (for running JavaScript files in the terminal)

### Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/mkatfi/Knights-Travails
   cd Knights-Travails
   ```
2. Run the script in Node.js:
   ```sh
   node main.js
   ```

## Usage
Call the `knightMoves(start, end)` function, where `start` and `end` are **[x, y]** coordinates representing the knight’s starting and target positions.

### Example
```js
knightMoves([0, 0], [3, 3]);
knightMoves([3, 3], [0, 0]);
knightMoves([0, 0], [7, 7]);
knightMoves([3, 3], [4, 3]);
```

### Expected Output
```sh
You made it in 2 moves! Here's your path:
[0,0] -> [2,1] -> [3,3]

You made it in 2 moves! Here's your path:
[3,3] -> [2,1] -> [0,0]

You made it in 6 moves! Here's your path:
[0,0] -> [2,1] -> [4,2] -> [6,3] -> [7,5] -> [5,6] -> [7,7]

You made it in 3 moves! Here's your path:
[3,3] -> [4,5] -> [2,4] -> [4,3]
```

## How It Works
1. Defines **all possible knight moves**.
2. Uses **BFS** to explore moves in layers.
3. Keeps track of **visited positions** to avoid cycles.
4. Outputs the **shortest path** in a readable format.

## Algorithm Complexity
- **Time Complexity:** **O(V + E)**, where `V` is the number of vertices (64 for an 8×8 board) and `E` is the number of edges.
- **Space Complexity:** **O(V)** due to storing visited nodes.

## Contributions
Feel free to fork this repository and submit pull requests with improvements!

## License
This project is open-source and available under the MIT License.

---
Happy coding! 🚀♞

