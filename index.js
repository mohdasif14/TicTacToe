const tictac = document.querySelector(".tictac");
const boxes = document.querySelectorAll(".box");
const h1 = document.getElementsByTagName("h1")[0];
const resetBtn = document.getElementById("resetbtn");

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function resetGame(e) {
  if (e.target.classList.contains("box") && e.target.innerText === "" && h1.innerText === "Tic Tac Toe") {
    e.target.textContent = currentPlayer;
    count++;
    winner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

let currentPlayer = "X";
tictac.addEventListener("click", resetGame);

let count = 0;
function winner() {
  let win = false;
  winningConditions.forEach((items) => {
    let [index0, index1, index2] = items;
    let val0 = boxes[index0].innerText;
    let val1 = boxes[index1].innerText;
    let val2 = boxes[index2].innerText;

    if (val0 !== '' && val0 == val1 && val1 == val2) {
      h1.innerText = `Player ${val0} wins!`;
      boxes[index0].classList.add("win");
      boxes[index1].classList.add("win");
      boxes[index2].classList.add("win");
      tictac.removeEventListener("click", resetGame);
      win = true;
    }
  });

  if (!win && count === 9) {
    h1.innerText = `It's a draw!`;
    tictac.removeEventListener("click", resetGame);
  }
}

resetBtn.addEventListener("click", () => {
  boxes.forEach(box => {
    box.innerText = '';
    box.classList.remove("win");
  });
  count = 0;
  h1.innerText = 'Tic Tac Toe';
  currentPlayer = "X";
  tictac.addEventListener("click", resetGame);
});

