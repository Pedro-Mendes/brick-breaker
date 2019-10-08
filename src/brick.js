import { detectColision } from './colisionDetection.js'
export default class Brick {
    constructor(game, position) {
        this.image = document.getElementById('brick')

        this.width = 80
        this.height = 24

        this.game = game

        this.position = position

        this.markedForDeletion = false
    }

    update(deltaTime) {
        if (detectColision(this.game.ball, this)) {
            this.markedForDeletion = true
            this.game.ball.speed.y = -this.game.ball.speed.y
        }
    }

    draw(context) {
        context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
} 