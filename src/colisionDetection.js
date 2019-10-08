export function detectColision(ball, gameObject) {
    let topOfBall = ball.position.y,
    bottomOfBall = ball.position.y + ball.size,

    topOfObject = gameObject.position.y,
    bottomOfObject = gameObject.position.y + gameObject.height,

    leftEndObject = gameObject.position.x,
    rightEndObject = gameObject.position.x + gameObject.width

    if(bottomOfBall >= topOfObject &&
        topOfBall <= bottomOfObject &&
        ball.position.x >= leftEndObject && 
        ball.position.x + ball.size <= rightEndObject) {
        return true
    } else {
        return false
    }

}