import Paddle from './paddle.js'
import Input from './input.js'
import Ball from './ball.js'

let canvas = document.getElementById('gameScreen'),
    context = canvas.getContext('2d'),
    paddle,
    lastTime = 0,
    ball

const GAME_WIDTH = 800,
    GAME_HEIGHT = 600

paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT)
ball = new Ball(GAME_WIDTH, GAME_HEIGHT, paddle)

new Input(paddle)

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime
    lastTime = timestamp

    context.clearRect(0 ,0, GAME_WIDTH, GAME_HEIGHT) //Important to clear the canvas after every frame
    
    paddle.update(deltaTime)
    paddle.draw(context)

    ball.update(deltaTime)
    ball.draw(context)

    requestAnimationFrame(gameLoop)
}

requestAnimationFrame(gameLoop)

