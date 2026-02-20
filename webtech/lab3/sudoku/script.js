const boardElement = document.getElementById("sudoku-board");

const puzzle = [
    [5, 3, "", "", 7, "", "", "", ""],
    [6, "", "", 1, 9, 5, "", "", ""],
    ["", 9, 8, "", "", "", "", 6, ""],
    [8, "", "", "", 6, "", "", "", 3],
    [4, "", "", 8, "", 3, "", "", 1],
    [7, "", "", "", 2, "", "", "", 6],
    ["", 6, "", "", "", "", 2, 8, ""],
    ["", "", "", 4, 1, 9, "", "", 5],
    ["", "", "", "", 8, "", "", 7, 9]
];

function generateSudoku() {
    boardElement.innerHTML = "";

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const input = document.createElement("input");
            input.type = "text";
            input.maxLength = 1;
            input.classList.add("cell");

            if (puzzle[row][col] !== "") {
                input.value = puzzle[row][col];
                input.disabled = true;
            }

            input.dataset.row = row;
            input.dataset.col = col;

            boardElement.appendChild(input);
        }
    }
}

function checkSolution() {
    const cells = document.querySelectorAll(".cell");
    let board = [];

    for (let i = 0; i < 9; i++) {
        board[i] = [];
    }

    cells.forEach(cell => {
        const row = cell.dataset.row;
        const col = cell.dataset.col;
        board[row][col] = cell.value;
    });

    if (isValid(board)) {
        alert("✅ Correct Solution!");
    } else {
        alert("❌ Incorrect Solution!");
    }
}

function isValid(board) {
    for (let i = 0; i < 9; i++) {
        let rowSet = new Set();
        let colSet = new Set();
        let boxSet = new Set();

        for (let j = 0; j < 9; j++) {
            let rowVal = board[i][j];
            let colVal = board[j][i];

            if (rowVal === "" || colVal === "") return false;

            if (rowSet.has(rowVal) || colSet.has(colVal)) return false;

            rowSet.add(rowVal);
            colSet.add(colVal);

            let boxRow = 3 * Math.floor(i / 3) + Math.floor(j / 3);
            let boxCol = 3 * (i % 3) + (j % 3);
            let boxVal = board[boxRow][boxCol];

            if (boxSet.has(boxVal)) return false;
            boxSet.add(boxVal);
        }
    }
    return true;
}

generateSudoku();