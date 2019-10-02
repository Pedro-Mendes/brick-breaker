import Paddle from './paddle.js'
import Input from './input.js'
import Ball from './ball.js'
import Game from './game.js'

let canvas = document.getElementById('gameScreen'),
    context = canvas.getContext('2d'),
    paddle,
    lastTime = 0,
    ball,
    game

const GAME_WIDTH = 800,
    GAME_HEIGHT = 600

game = new Game(GAME_WIDTH, GAME_HEIGHT)
game.start()

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime
    lastTime = timestamp

    context.clearRect(0 ,0, GAME_WIDTH, GAME_HEIGHT) //Important to clear the canvas after every frame
    
    game.update(deltaTime)
    game.draw(context)
    
    requestAnimationFrame(gameLoop)
}

requestAnimationFrame(gameLoop)

