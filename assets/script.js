const grid = document.querySelector('.grid')
const blockWidth = 100
const blockHeight = 20


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

