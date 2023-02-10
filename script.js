// prompt variable

let prompt;

// main div

let mainDiv = document.createElement('div')
mainDiv.setAttribute('id','main-div')

// grid's div

let gridDiv = document.createElement('div')
gridDiv.setAttribute('id','grid-div')

// squares and rows

let row = document.createElement('div')
let box = document.createElement('div')

// users inputs button

let button = document.createElement('button')
button.setAttribute('id','button')
button.textContent = 'New grid'

document.body.append(button, mainDiv)
mainDiv.append(gridDiv)

// functions

function grid(boxNumber){
    let squareSize = gridDiv.clientWidth / boxNumber
    clearGrid(gridDiv)
    for(let i = 0; i < boxNumber ; i++){
        let row = document.createElement('div')
        gridDiv.append(row)
        row.className = 'row'
        row.style.width = squareSize + 'px'
        for (let j = 0; j < boxNumber; j++){
            let box = document.createElement('div')
            row.append(box)
            box.className = 'box'
            box.style.width = squareSize + 'px'
            box.style.height = squareSize + 'px'
        }
    }

}

button.addEventListener('click', () => {
        let prompt = window.prompt('Enter the number of squares per side for the new grid - between 1 and 100')
        newGrid(prompt)
  })

  function mouseOver(){
    document.querySelectorAll('.box').forEach(item => {
        item.addEventListener('mouseover', event => {
            let hover = event.target
            //hover.classList.toggle('boxTwo')
            hover.classList.add('boxTwo')
        })
      })
  }

  function newGrid(integer){
    let convertToNumber = parseInt(integer, 10)
    if(Number.isInteger(convertToNumber) && convertToNumber < 100){
        grid(convertToNumber)
        mouseOver()
    } else
        console.log("It's not a valid number")
  }

  function clearGrid(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}


  // delete the previous grid to create a new one