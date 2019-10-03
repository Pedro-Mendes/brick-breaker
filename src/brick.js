import { detectColision } from './colisionDetection.js'
export default class Brick {
    constructor(game, position) {
        this.image = document.getElementById('brick')
        this.width = 80
        this.height = 24
        this.game = game
        this.position = position
    }

    update(deltaTime) {
        //check brick colision
        if (detectColision(this.game.ball, this)) {
            this.width = 0
            this.height = 0
            this.game.ball.speed.y = -this.game.ball.speed.y
            this.game.ball.position.y = this.position.y - this.game.ball.size
        }
    }

    draw(context) {
        context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
} 