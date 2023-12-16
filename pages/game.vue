<template>
  <div
    class="min-h-screen bg-white flex flex-col items-center justify-center pt-16"
  >
    <h1 class="text-3xl md:text-5xl mb-4 text-gray-700 font-mono pt-2">
      {{ result }}
      <div v-if="result === '' && currentPlayer !== ''">
        It's {{ currentPlayer === "twemoji:frog" ? "your" : "computer" }} turn
      </div>
    </h1>
    <div
      class="bg-white border-2 border-green-500 my-auto"
      style="margin: -2px"
    >
      <div
        v-for="(row, rowIndex) in board"
        :key="rowIndex"
        class="flex flex-row"
      >
        <div
          v-for="(cell, colIndex) in row"
          :key="colIndex"
          @click="makeMove(rowIndex, colIndex)"
          class="h-22 w-22 md:h-40 md:w-40 flex items-center justify-center border-2 border-green-500 cursor-pointer"
        >
          <Icon :name="cell" size="100" class="p-2 md:p-0" />
        </div>
      </div>
    </div>
    <div class="mt-4 h-11 w-40 bg-green-500 p-1 rounded-3xl hover:scale-110">
      <button
        @click="restartGame"
        class="bg-green-500 text-white h-full w-full rounded-3xl text-bold text-xl border border-white hover:text-2xl hover:border-2"
      >
        {{ result ? "Restart" : "Start Game" }}
      </button>
    </div>
  </div>
</template>

<script setup>
const board = ref([
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
]);

const currentPlayer = ref("");
const result = ref("");
const gameOver = ref(false);

onMounted(() => {
  startGame();
});

const startGame = () => {
  currentPlayer.value =
    Math.random() < 0.5 ? "twemoji:frog" : "vscode-icons:file-type-lilypond";
  result.value = "";
  gameOver.value = false;
  clearBoard();

  if (currentPlayer.value === "vscode-icons:file-type-lilypond") {
    setTimeout(() => {
      computerMove();
      currentPlayer.value = "twemoji:frog"; // Switch back to the user
    }, 500); // Delay for half a second to make it visually clear
  }
};

const restartGame = () => {
  startGame();
};

const clearBoard = () => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      board.value[i][j] = "";
    }
  }
};

const makeMove = (row, col) => {
  // Check if the game is over, if yes, return early
  if (gameOver.value) {
    return;
  }

  // Check if the cell is empty and it's the user's turn
  if (
    board.value[row][col] === "" &&
    result.value === "" &&
    currentPlayer.value === "twemoji:frog"
  ) {
    board.value[row][col] = currentPlayer.value;
    checkWinner();

    // Check for a tie after the user's move
    if (!board.value.flat().includes("") && result.value === "") {
      result.value = "It's a tie!";
      gameOver.value = true;
      return;
    }

    // Computer's turn (lilypad)
    if (!gameOver.value) {
      setTimeout(() => {
        computerMove();
        currentPlayer.value = "twemoji:frog"; // Switch back to the user
      }, 500); // Delay for half a second to make it visually clear
    }
  }
};

const computerMove = () => {
  let emptyCells = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board.value[i][j] === "") {
        emptyCells.push({ row: i, col: j });
      }
    }
  }

  if (emptyCells.length > 0) {
    // Prioritize winning moves or blocking moves
    const strategicMove = findStrategicMove(emptyCells);
    const { row, col } = strategicMove || getRandomMove(emptyCells);

    // Use a specific icon for the computer player
    board.value[row][col] = "vscode-icons:file-type-lilypond";
    checkWinner();
  }
};

// Helper function to find a winning move, blocking move, or random move
const findStrategicMove = (emptyCells) => {
  // Implement a more sophisticated algorithm here
  // Currently, it checks for winning or blocking moves
  for (const cell of emptyCells) {
    const tempBoard = JSON.parse(JSON.stringify(board.value));
    tempBoard[cell.row][cell.col] = currentPlayer.value;

    if (checkWin(tempBoard, currentPlayer.value)) {
      return cell; // Winning move
    }

    if (checkWin(tempBoard, togglePlayer())) {
      return cell; // Blocking move
    }
  }

  return null;
};

// Helper function to get a random move
const getRandomMove = (emptyCells) => {
  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  return emptyCells[randomIndex];
};

// Helper function to toggle players
const togglePlayer = () => {
  return currentPlayer.value === "twemoji:frog"
    ? "vscode-icons:file-type-lilypond"
    : "twemoji:frog";
};

const checkWinner = () => {
  // Check rows, columns, and diagonals
  for (let i = 0; i < 3; i++) {
    if (
      checkLine([board.value[i][0], board.value[i][1], board.value[i][2]]) ||
      checkLine([board.value[0][i], board.value[1][i], board.value[2][i]])
    ) {
      result.value = `${board.value[i][0]} wins!`;
      gameOver.value = true;

      // Display different messages for user win and loss
      if (board.value[i][0] === "twemoji:frog") {
        result.value = "Ribbit Ribbit! You WIN!";
      } else {
        result.value = "Opps... You LOST!";
      }
      return;
    }
  }

  if (
    checkLine([board.value[0][0], board.value[1][1], board.value[2][2]]) ||
    checkLine([board.value[0][2], board.value[1][1], board.value[2][0]])
  ) {
    result.value = `${board.value[0][0]} wins!`;
    gameOver.value = true;

    // Display different messages for user win and loss
    if (board.value[0][0] === "twemoji:frog") {
      result.value = "Ribbit Ribbit! You WIN!";
    } else {
      result.value = "Opps... You LOST!";
    }
    return;
  }

  // Check for a tie
  if (!board.value.flat().includes("") && result.value === "") {
    result.value = "It's a tie!";

    gameOver.value = true;
    return;
  }
};

const checkLine = (line) => {
  if (line[0] !== "" && line[0] === line[1] && line[1] === line[2]) {
    return true;
  }
  return false;
};

const checkWin = (tempBoard, player) => {
  // Check rows, columns, and diagonals
  for (let i = 0; i < 3; i++) {
    if (
      checkLine([tempBoard[i][0], tempBoard[i][1], tempBoard[i][2]], player) ||
      checkLine([tempBoard[0][i], tempBoard[1][i], tempBoard[2][i]], player)
    ) {
      return true;
    }
  }

  if (
    checkLine([tempBoard[0][0], tempBoard[1][1], tempBoard[2][2]], player) ||
    checkLine([tempBoard[0][2], tempBoard[1][1], tempBoard[2][0]], player)
  ) {
    return true;
  }

  return false;
};
</script>
