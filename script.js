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
let square = document.createElement('div')

// users inputs button

let button = document.createElement('button')
button.setAttribute('id','button')
button.textContent =' Click me'

document.body.append(button, mainDiv)
mainDiv.append(gridDiv)

// functions

function grid(boxNumber){
    for(let i = 0; i < boxNumber ; i++){
        let row = document.createElement('div')
        gridDiv.append(row)
        row.className = 'row'
        row.style.backgroundColor = 'rgba(255, 255, 128, .5)';
        for (let j = 0; j < boxNumber; j++){
            let square = document.createElement('div')
            row.append(square)
            square.className = 'box'
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
            hover.classList.toggle('boxTwo')
            //hover.classList.add('boxTwo')
        })
      })
  }

  function newGrid(integer){
    let convertToNumber = parseInt(integer, 10)
    if(Number.isInteger(convertToNumber) && convertToNumber < 100){
        if(grid(convertToNumber) && convertToNumber > 30)
        { 
            document.getElementsByClassName('box').style.width = "20px"
            document.getElementsByClassName('box').style.height = "20px"
        }
        mouseOver()
    } else
        console.log("It's not a valid number")
  }

  // reduce the size of the box when a treshold is reached
  // delete the previous grid to create a new one