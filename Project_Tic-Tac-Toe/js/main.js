const Player = (name, marker) => {
  return { name, marker };
};

const Gameboard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];

  const resetBoard = () => {
    board = ["", "", "", "", "", "", "", "", ""];
  };

  const getBoard = () => board;

  const setCell = (index, value) => {
    if (board[index] === "") {
      board[index] = value;
      return true;
    }
    return false;
  };

  return { resetBoard, getBoard, setCell };
})();



const GameController = (() => {
  let player1, player2, currentPlayer, gameOver;

  const startGame = (player1Name, player2Name) => {
    player1 = Player(player1Name, "X");
    player2 = Player(player2Name, "O");
    currentPlayer = player1;
    gameOver = false;
    Gameboard.resetBoard();
    DisplayController.updateBoard();
    DisplayController.setStatus(`${currentPlayer.name} Turn`, `${currentPlayer.marker}`);
  };

  const playTurn = (index) => {
    if (!gameOver && Gameboard.setCell(index, currentPlayer.marker)) {
      DisplayController.updateBoard();
      if (checkWinner()) {
        gameOver = true;
        DisplayController.setStatus(`${currentPlayer.name} Wins!`, `${currentPlayer.marker}`);
        return;
      }
      if (Gameboard.getBoard().every((cell) => cell !== "")) {
        gameOver = true;
        DisplayController.setStatus("It's a Draw!");
        return;
      }
      currentPlayer = currentPlayer === player1 ? player2 : player1;
      DisplayController.setStatus(`${currentPlayer.name} Turn`, `${currentPlayer.marker}`);
    }
  };

  const checkWinner = () => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6],            // Diagonals
    ];

    const winwin = winningCombinations.some((combo) =>
      combo.every((index) => Gameboard.getBoard()[index] === currentPlayer.marker)
    );
    return winwin;
  };
  return { startGame, playTurn };
})();


const DisplayController = (() => {
  const gameBoardDiv = document.getElementById("gameBoard");
  const statusDiv = document.getElementById("status");

  const updateBoard = () => {
    gameBoardDiv.innerHTML = "";
    Gameboard.getBoard().forEach((cell, index) => {
      const cellDiv = document.createElement("div");
      cellDiv.className = "cell";
      cellDiv.textContent = cell;
      cellDiv.addEventListener("click", () => GameController.playTurn(index));
      gameBoardDiv.appendChild(cellDiv);
    });
  };

  const setStatus = (message , turn) => {
    statusDiv.textContent = message;
    console.log(turn);
    if (turn === "X"){
      document.querySelector(".bg").style.left = "0px";
    }
    if ((turn === "O")){
      document.querySelector(".bg").style.left = "85px";
    }
  };

  return { updateBoard, setStatus };
})();


document.getElementById("startButton").addEventListener("click", () => {
  const player1Name = document.getElementById("player1Name").value || "Player 1";
  const player2Name = document.getElementById("player2Name").value || "Player 2";

  
  GameController.startGame(player1Name, player2Name);
});

document.getElementById("restartButton").addEventListener("click", () => {
  GameController.startGame("Player 1", "Player 2");
});
