const LEFT_KEY = 37,
    RIGHT_KEY = 39,
    ESC = 27,
    SPACE_BAR = 32

export default class inputHandler {
    constructor (paddle, game) {
        document.addEventListener('keydown', event => {
            switch (event.keyCode) {
                case LEFT_KEY:
                    paddle.moveLeft()
                    break;
                case RIGHT_KEY:
                    paddle.moveRight()                    
                    break;
                case ESC:
                    game.pause()                    
                    break;     
                case SPACE_BAR:
                    game.start()
                    break;        
            }
        })

        document.addEventListener('keyup', event => {
            switch (event.keyCode) {
                case LEFT_KEY:
                    paddle.stop()
                    break;
                case RIGHT_KEY:
                    paddle.stop()                    
                    break;
            }
        })
    }
}