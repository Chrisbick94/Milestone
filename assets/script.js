const grid = document.querySelector('.grid')
const blockWidth = 100
const blockHeight = 20
const boardWidth = 560
const ballDiameter = 20
const boardHeight = 600
let timerID
let xDirection = 2
let yDirection = 2

const playerStart = [230, 10]
let currentPosition = playerStart


const ballStart = [270, 40]
let ballCurrentPosition = ballStart


// Blocks
class Block {
    constructor(xAxis, yAxis) {
      this.bottomLeft = [xAxis, yAxis]
      this.bottomRight = [xAxis + blockWidth, yAxis]
      this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
      this.topLeft = [xAxis, yAxis + blockHeight]
    }
  }
  

const blocks = [
  new Block(10, 570),
  new Block(120, 570),
  new Block(230, 570),
  new Block(340, 570),
  new Block(450, 570),
  new Block(10, 540),
  new Block(120, 540),
  new Block(230, 540),
  new Block(340, 540),
  new Block(450, 540),
  new Block(10, 510),
  new Block(120, 510),
  new Block(230, 510),
  new Block(340, 510),
  new Block(450, 510),
  new Block(210, 310),

    
]


function addBlocks() {
    for (let i = 0; i < blocks.length; i++) {
        const block = document.createElement('div')
        block.classList.add('block')
        block.style.left = blocks[i].bottomLeft[0] + 'px'
        block.style.bottom = blocks[i].bottomLeft[1] + 'px'
        grid.appendChild(block)
        console.log(blocks[i].bottomLeft)
    }
}
addBlocks()



const player = document.createElement('div')
player.classList.add('player')
drawPlayer()
grid.appendChild(player)


function drawPlayer() {
  player.style.left = currentPosition[0] + 'px'
  player.style.bottom = currentPosition[1] + 'px'
}

function drawBall() {
   ball.style.left = ballCurrentPosition[0] + 'px'
   ball.style.bottom = ballCurrentPosition[1] + 'px'
}



function movePlayer(e) {
  switch (e.key) {
    case 'ArrowLeft':
      if (currentPosition[0] > 0) {
        currentPosition[0] -= 10
        console.log(currentPosition[0] > 0)
        drawPlayer()   
      }
      break;
    case 'ArrowRight':
      if (currentPosition[0] > 0) {
        currentPosition[0] += 10
        console.log(currentPosition[0])
        drawPlayer()   
      }
      break;
  }
}
document.addEventListener('keydown', movePlayer)




const ball = document.createElement('div')
ball.classList.add('ball')
grid.appendChild(ball)
ball.style.left = ballCurrentPosition[0] + 'px'
ball.style.bottom = ballCurrentPosition[1] + 'px'
drawBall()


function moveBall() {
    ballCurrentPosition[0] += xDirection
    ballCurrentPosition[1] += yDirection
    drawBall()
    checkForCollisions()
}

timerID = setInterval(moveBall, 30) 


// collisions with walls

function checkForCollisions() {
  if (
    ballCurrentPosition[0] >= (boardWidth - ballDiameter) || 
    ballCurrentPosition[1] >= (boardHeight - ballDiameter)
    ) {
    changeDirection()
  }
}

function changeDirection() {
  if (xDirection === 2 && yDirection ===2) {
    xDirection = -2
    return
  }


}

