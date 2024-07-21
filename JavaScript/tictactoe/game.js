const Gameboard = (() => {
    let board = Array(9).fill(null);
    return {
        getBoard: () => board,
        resetBoard: () => {
            board.fill(null);
            console.log("Board reset:", board);
        },
        setCell: (index, marker) => {
            if (board[index] === null) {
                board[index] = marker;
                console.log(`Set cell at index ${index} to ${marker}`);
                return true;
            }
            return false;
        }
    };
})();

const Player = (name, marker) => {
    console.log(`Player created: ${name} with marker ${marker}`);
    return { name, marker };
};

const Game = (() => {
    let players = [];
    let currentPlayerIndex = 0;
    let gameActive = false;

    const checkWin = () => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        const board = Gameboard.getBoard();
        return winningCombinations.some(([a, b, c]) => 
            board[a] && board[a] === board[b] && board[a] === board[c]
        );
    };

    return {
        startGame: (player1Name, player2Name) => {
            players = [Player(player1Name, 'X'), Player(player2Name, 'O')];
            currentPlayerIndex = 0;
            gameActive = true;
            Gameboard.resetBoard();
            DisplayController.render();
            DisplayController.setMessage(`${players[currentPlayerIndex].name}'s turn`);
            console.log("Game started with players:", players);
        },
        playTurn: (index) => {
            if (!gameActive || !Gameboard.setCell(index, players[currentPlayerIndex].marker)) return;
            if (checkWin()) {
                gameActive = false;
                DisplayController.setMessage(`${players[currentPlayerIndex].name} wins!`);
                console.log(`${players[currentPlayerIndex].name} wins!`);
            } else if (Gameboard.getBoard().every(cell => cell !== null)) {
                gameActive = false;
                DisplayController.setMessage(`It's a tie!`);
                console.log(`It's a tie!`);
            } else {
                currentPlayerIndex = (currentPlayerIndex + 1) % 2;
                DisplayController.render();
                DisplayController.setMessage(`${players[currentPlayerIndex].name}'s turn`);
                console.log(`Turn played. Current board:`, Gameboard.getBoard());
            }
        }
    };
})();

const DisplayController = (() => {
    const gameBoardDiv = document.getElementById('gameBoard');
    const gameStatusDiv = document.getElementById('gameStatus');
    const startBtn = document.getElementById('startBtn');
    const restartBtn = document.getElementById('restartBtn');
    const player1Input = document.getElementById('player1');
    const player2Input = document.getElementById('player2');

    const render = () => {
        gameBoardDiv.innerHTML = '';
        Gameboard.getBoard().forEach((cell, index) => {
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            cellDiv.textContent = cell;
            cellDiv.addEventListener('click', () => Game.playTurn(index));
            gameBoardDiv.appendChild(cellDiv);
        });
        console.log("Rendered board:", Gameboard.getBoard());
    };

    const setMessage = (message) => {
        gameStatusDiv.textContent = message;
        console.log("Game status message:", message);
    };

    startBtn.addEventListener('click', () => {
        Game.startGame(player1Input.value || 'Player 1', player2Input.value || 'Player 2');
        startBtn.style.display = 'none';
        restartBtn.style.display = 'block';
    });

    restartBtn.addEventListener('click', () => {
        Game.startGame(player1Input.value, player2Input.value);
    });

    return { render, setMessage };
})();

Game.startGame('Player 1', 'Player 2');
