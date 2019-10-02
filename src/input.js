const LEFT_KEY = 37,
    RIGHT_KEY = 39

export default class inputHandler {
    constructor (paddle) {
        document.addEventListener('keydown', event => {
            switch (event.keyCode) {
                case LEFT_KEY:
                    paddle.moveLeft()
                    break;
                case RIGHT_KEY:
                    paddle.moveRight()                    
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