import Paddle from './paddle.js'
import Input from './input.js'
import Ball from './ball.js'

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.height = gameHeight
        this.width = gameWidth
    }

    start() {  
        this.paddle = new Paddle(this)
        this.ball = new Ball(this)
        new Input(this.paddle)

        this.gameObjects = [
            this.ball,
            this.paddle
        ]
    }

    update(deltaTime) {
        /* this.paddle.update(deltaTime)
        this.ball.update(deltaTime) */
        this.gameObjects.forEach((obj) => obj.update(deltaTime))
    }

    draw(context) {
        /* this.paddle.draw(context)
        this.ball.draw(context) */
        this.gameObjects.forEach((obj) => obj.draw(context))        
    }
}