import Paddle from './paddle.js'
import Input from './input.js'
import Ball from './ball.js'
import {buildLevel, level1, level2} from './level.js'

const GAME_STATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER:3,
    NEW_LEVEL: 4
}

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gamestate = GAME_STATE.MENU
        this.height = gameHeight
        this.width = gameWidth
        this.paddle = new Paddle(this)
        this.ball = new Ball(this)   
        this.gameObjects = []
        this.bricks = []
        this.lives = 3
        this.levels = [level1, level2]
        this.currentLevel = 0
        new Input(this.paddle, this)
    }

    start() {  
        if(this.gamestate !== GAME_STATE.MENU && this.gamestate !== GAME_STATE.NEW_LEVEL) return

        this.ball.reset()
        this.bricks = buildLevel(this, this.levels[this.currentLevel])     
        this.gameObjects = [this.ball, this.paddle]
        this.gamestate = GAME_STATE.RUNNING
    }

    update(deltaTime) {
        if(this.lives === 0) this.gamestate = GAME_STATE.GAMEOVER
        
        if(this.gamestate === GAME_STATE.PAUSED || 
            this.gamestate === GAME_STATE.MENU ||
            this.gamestate === GAME_STATE.GAMEOVER) 
            return
        
        if(this.bricks.length === 0) {
            this.currentLevel++
            this.gamestate = GAME_STATE.NEW_LEVEL
            this.start()
        }

        [...this.gameObjects, ...this.bricks].forEach(obj => obj.update(deltaTime))

        this.bricks = this.bricks.filter(obj => !obj.markedForDeletion)
    }

    draw(context) {
        /* context.font = "30px Arial"
        context.fillStyle = "red"
        context.textAlign = "left"
        context.fillText("LIVES:", this.width/2, this.height/2) */

        [...this.gameObjects, ...this.bricks].forEach((obj) => obj.draw(context))   
        
        if(this.gamestate === GAME_STATE.PAUSED) {
            context.rect(0,0, this.width, this.height)
            context.fillStyle = "rgba(0,0,0,0.5)"
            context.fill()
            
            context.font = "30px Arial"
            context.fillStyle = "white"
            context.textAlign = "center"
            context.fillText("PAUSED", this.width/2, this.height/2)
        }

        if(this.gamestate === GAME_STATE.MENU) {
            context.rect(0,0, this.width, this.height)
            context.fillStyle = "rgba(0,0,0,1)"
            context.fill()
            
            context.font = "30px Arial"
            context.fillStyle = "white"
            context.textAlign = "center"
            context.fillText("Press SPACEBAR to start", this.width/2, this.height/2)
        }

        if(this.gamestate === GAME_STATE.GAMEOVER) {
            context.rect(0,0, this.width, this.height)
            context.fillStyle = "rgba(0,0,0,1)"
            context.fill()
            
            context.font = "30px Arial"
            context.fillStyle = "red"
            context.textAlign = "center"
            context.fillText("GAME OVER", this.width/2, this.height/2)
        }
    }

    pause() {
        if(this.gamestate === GAME_STATE.PAUSED) {
            this.gamestate = GAME_STATE.RUNNING
        } else {
            this.gamestate = GAME_STATE.PAUSED

        }
    }
}