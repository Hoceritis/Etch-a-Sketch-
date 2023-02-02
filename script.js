let mainDiv = document.createElement('div')
mainDiv.setAttribute('id','main-div')
document.body.append(mainDiv)

function grid(){
    makeBlock(4)
}

function makeBlock(boxNumber){
    for(let i = 0; i < boxNumber ; i++){
        let row = document.createElement('div')
        row.className = 'row'
        mainDiv.append(row)
        row.style.backgroundColor = 'red'
        for (let j = 0; j < boxNumber; j++){
            let square = document.createElement('div')
            square.className = 'box'
            square.style.backgroundColor ='green'
            row.append(square)
        }
    }
}

grid()
