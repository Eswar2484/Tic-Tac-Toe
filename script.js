const boardEl = document.getElementById('board');
const turn = document.getElementById('turn');
const winMsg = document.getElementById('winMsg');
const drawMsg = document.getElementById('drawMsg');
const xScore = document.getElementById('xScore');
const oScore = document.getElementById('oScore');

let board = Array(9).fill(null);
let current = 'X'
let gameOver = false;

const scores = {x:0, o:0};

const WIN = [
    [0,1,2], [3,4,5], [6,7,8], 
    [0,3,6], [1,4,7], [2,5,8], 
    [0,4,8], [2,4,6]
];

for(let i=0; i<9; i++){
    const btn = document.createElement('div');
    btn.className = 'cell';
    btn.dataset.i = i;
    btn.onclick = () => handleClick(i);
    boardEl.appendChild(btn);
}

function handleClick(i) {
    if(board[i] || gameOver) return;
    board[i] = current;
    boardEl.children[i].textContent = current;

    const winLine = checkWin();
    if(winLine) {
        highlightWin(winLine);
        winMsg.textContent = current + ' WINS!';
        drawMsg.textContent = '';
        if(current === 'X') scores.x++; else scores.o++;
        updateScores();
        gameOver = true;
        return;
    }

    if(board.every(c => c)) {
        drawMsg.textContent = 'MATCH DRAW!';
        winMsg.textContent = '';
        gameOver = true;
        return;
    }

    current = current === 'X' ? 'O' : 'X' ;
    turn.textContent = current;
}

function checkWin() {
    for(const c of WIN) {
        if(board[c[0]] && board[c[0]] === board[c[1]] && board[c[1]] === board[c[2]]) {
            return c;
        }
    }
    return null;
}

function highlightWin(cells){
    cells.forEach(i => boardEl.children[i].classList.add('win'));
}

function updateScores(){
    xScore.textContent = scores.x;
    oScore.textContent = scores.o;
}

document.getElementById('newRound').onclick = reset;

document.getElementById('resetScores').onclick = () => {
    scores.x = 0; scores.o = 0; updateScores();
};

function reset() {
    board = Array(9).fill(null);
    gameOver = false;
    current = 'X';
    turn.textContent = current;
    winMsg.textContent = '';
    drawMsg.textContent = '';
    Array.from(boardEl.children).forEach(c => {
        c.textContent = '';
        c.classList.remove('win');
    });
}