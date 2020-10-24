
import {SNAKE_SPEED, update as updateSnake, draw as drawSnake,
getSnakeHead, snakeIntersection} from './snake.js';
import {update as updateFood, draw as drawFood} from './food.js';
import {outsideGrid} from './grid.js';

let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board')

let gameOver = false; 

function main(currentTime) {
    if(gameOver){
        showGamePanel();
        return;
    }
    window.requestAnimationFrame(main);
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondSinceLastRender < 1 / SNAKE_SPEED) return;
    lastRenderTime = currentTime;
    update();
    draw();

}


window.requestAnimationFrame(main);

function draw() {
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function update(){
    updateSnake();
    updateFood();
    checkDeath();
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}

function restartGame() {
    const restart = document.getElementById('restart');
    restart.addEventListener('click' , () =>{
        window.location = '/';
    })
}

function showGamePanel(){
    const gamePanel = document.getElementById('game-panel');
    gamePanel.style.visibility = 'visible'
    restartGame();
}