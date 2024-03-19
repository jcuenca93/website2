rulesBtn - document.getElementById('rules-btn')
rules = document.getElementById('rules')
closeBtn = document.getElementById('close-btn')
canvas = document.getElementById('canvas')
ctx = canvas.getContext('2d')

//create ball properties
ball = {
    x:canvas.width / 2,
    y:canvas.heaight /2
    size: 10,
    speed: 4,
    dx:4;
    dy:-4;
}
//drawball on canvas
function drawBall(){
    ctx.beginPath()
    ctx.arc(ball.x,ball.y,ball.size,0,Math.PI*2,true)
    ctx.fillStyle = '#009599'
    ctx.fill()
    ctx.closePath()

}
drawBall()














rulesBtn.addEventListener('click', () => {
    rules.classList.add('show')
})
closeBtn.addEventListener('click',() => {
    rules.classList.remove('show')
})