import { detectColision } from './colisionDetection.js'
export default class Ball {
    constructor(game) {
        this.image = document.getElementById('ball')
        this.reset()
        this.size = 25
        this.game = game
    }
    reset() {
        this.speed = {
            x: 6,
            y: -6
        }
        this.position = {
            x: 10,
            y: 300
        }
    }

    draw(context) {
        context.drawImage(this.image, this.position.x, this.position.y, this.size, this.size)
    }

    update(deltaTime) {
        this.position.x += this.speed.x
        this.position.y += this.speed.y
        
        //board limits left or right
        if (this.position.x + this.size > this.game.width || this.position.x < 0) {
            this.speed.x = -this.speed.x
        }

        //board limits top or bottom
        if (this.position.y < 0) {
            this.speed.y = -this.speed.y
        }

        if (this.position.y + this.size > this.game.height) {
            this.game.lives--
            this.reset()
        }

        if (detectColision(this, this.game.paddle)) {
            this.speed.y = -this.speed.y
            this.position.y = this.game.paddle.position.y - this.size
        }
        
    }
}