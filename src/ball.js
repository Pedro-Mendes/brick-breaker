export default class Ball {
    constructor(game) {
        this.image = document.getElementById('ball')
        this.speed = {
            x: 4,
            y: 4
        }
        this.position = {
            x: 10,
            y: 10
        }
        this.size = 30
        this.gameWidth = game.width
        this.gameHeight = game.height
        this.game = game
    }

    draw(context) {
        context.drawImage(this.image, this.position.x, this.position.y, this.size, this.size)
    }

    update(deltaTime) {
        this.position.x += this.speed.x
        this.position.y += this.speed.y
        
        //left or right
        if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
            this.speed.x = -this.speed.x
        }

        //top or bottom
        if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {
            this.speed.y = -this.speed.y
        }

        //check paddle colision
        let bottomOfBall = this.position.y + this.size,
            topOfPaddle = this.game.paddle.position.y,
            leftEndPaddle = this.game.paddle.position.x,
            rightEndPaddle = this.game.paddle.position.x + this.game.paddle.width,
            ballPositionX = this.position.x

        if(bottomOfBall >= topOfPaddle && ballPositionX >= leftEndPaddle && ballPositionX <= rightEndPaddle) {
            this.speed.y = -this.speed.y
            this.position.y = this.game.paddle.position.y - this.size
        }
        /* if(this.position.y + this.size >= this.game.paddle.position.y && this.position.x >= this.game.paddle.position.x && this.position.x < this.game.paddle.position.x+this.game.paddle.width) {
            this.speed.y = -this.speed.y
        } */
        
    }
}