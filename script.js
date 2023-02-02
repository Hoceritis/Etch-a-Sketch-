let mainDiv = document.createElement('div')
mainDiv.setAttribute('id','main-div')
document.body.append(mainDiv)

let row = document.createElement('div')
let square = document.createElement('div')

function grid(){
    makeBlock(4)
}

function makeBlock(boxNumber){
    for(let i = 0; i < boxNumber ; i++){
        let row = document.createElement('div')
        mainDiv.append(row)
        row.className = 'row'
        row.style.backgroundColor = 'rgba(255, 255, 128, .5)';
        for (let j = 0; j < boxNumber; j++){
            let square = document.createElement('div')
            row.append(square)
            square.className = 'box'
        }
    }
}

grid()

document.querySelectorAll('.box').forEach(item => {
    item.addEventListener('mouseover', event => {
        let hover = event.target
        hover.classList.toggle('.boxTwo')
        //hover.style.backgroundColor = 'black'
        console.log(hover)
    })
  })
