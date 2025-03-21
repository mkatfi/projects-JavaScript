# Battleship Game

## 📌 Project Overview
This is a **Test-Driven Development (TDD)** implementation of the classic game **Battleship**. The project is built with JavaScript and utilizes **Jest** for testing.

## 🚀 Features
- Ship objects that track hits and determine if they are sunk.
- A **Gameboard** that allows placing ships, receiving attacks, and tracking hits/misses.
- A **Player system**, including a simple AI opponent.
- Interactive **User Interface** to play the game.

## 🛠️ Installation
To get started, clone the repository and install dependencies:

```sh
# Clone the repo
git clone https://github.com/mkatfi/projects-JavaScript/tree/main/Battleship

# Navigate to the project folder
cd Battleship

# Initialize npm
npm init -y

# Install Jest for testing
npm install --save-dev jest
```

## 🧪 Running Tests
Make sure Jest is correctly configured for **ES Modules**.

1. Update `package.json`:
   ```json
   "scripts": {
     "test": "NODE_OPTIONS=--experimental-vm-modules jest"
   }
   ```
2. Create a `jest.config.js` file:
   ```javascript
   export default {
     transform: {},
   };
   ```
3. Run the tests:
   ```sh
   npm test
   ```

## 🎮 How to Play
1. Open `index.html` in a browser.
2. Place ships on your board.
3. Click on the enemy board to attack.
4. The game alternates between player and AI turns.
5. The game ends when all ships are sunk.

## 🔧 Future Enhancements
- Implement **drag and drop** ship placement.
- Improve AI for smarter moves.
- Add a **multiplayer mode**.


---
Happy coding! 🚀

