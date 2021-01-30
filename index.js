// 1
// 2
let map = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]

const clickToPlace = (e) => {
    console.log('e')
}

let actions = 0
let whoAction = 'x'

window.onload = () => {
    console.log('window loaded')
    let el = document.getElementsByClassName("container")[0]
    let end = document.getElementById('end')
    for (i = 0; i < map.length; i++) {
        for (y = 0; y < map.length; y++) {
            let container = document.createElement('div')
            container.className = 'item-cont null'
            container.id = `${i} ${y}`
            container.onclick = function () {
                if (container.className.split(" ")[1] === 'null') {
                    const [mId, tId] = container.id.split(" ")
                    map[mId][tId] = whoAction === 'x' ? 1 : 2
                    console.log(map)
                    container.innerHTML = whoAction
                    actions++
                    whoAction === 'x' ? whoAction = 'o' : whoAction = 'x'
                    container.className = 'item-cont not-null'
                    if (actions > map.length) {
                        if (winGoriz1()) {
                            end.innerHTML = "Выиграли крестики!"
                        } else if (winGoriz2()) {
                            end.innerHTML = "Выиграли нолики!"
                        } else if (win1()) {
                            end.innerHTML = "Выиграли крестики!"
                        } else if (win2()) {
                            end.innerHTML = "Выиграли нолики!"
                        } else if (win21()) {
                            end.innerHTML = "Выиграли крестики!"
                        } else if (win22()) {
                            end.innerHTML = "Выиграли нолики!"
                        } else if (winVertical1()) {
                            end.innerHTML = "Выиграли крестики!"
                        } else if (winVertical2()) {
                            end.innerHTML = "Выиграли нолики!"
                        } else {
                            if (actions === map.length*map.length)  {
                                end.innerHTML = "Ничья!"
                            }
                        }
                    }
                }
            };
            el.appendChild(container)
        }
    }
    
}


function winGoriz1() {
    let c = 0
    for (i = 0; i < map.length; i++) {
        if (c !== map.length) {
            c = 0
        } else {
            break;
        }
        for (a = 0; a < map.length; a++){
            if (map[i][a] === 1){
                c++
            }
        }
        
    }
    if (c === map.length){
        return true
    } else {
        return false
    }
}

function winVertical1() {
    let c = 0
    for (i = 0; i < map.length; i++) {
        if (c !== map.length) {
            c = 0
        } else {
            break;
        }
        let x = i
        for (a = 0; a < map.length; a++){
            if(map[a][x] === 1){
                c++
            }
        }
    }
    if (c === map.length){
        return true
    } else {
        return false
    }
}

function win21(){
    let b = 0
    for(i = 0; i < map.length; i++){
        if(map[map.length - (map.length - i)][map.length - (map.length - i)] === 1){
            b++
        }
    }
    if(b === map.length){
        return true
    } else {
        return false
    }
}

function win1(){
    let b = 0
    for(i = map.length - 1; i >= 0; i--){
        if(map[(map.length - i) - 1][i] === 1){
            b++
        }
    }
    if(b === map.length){
        return true
    } else {
        return false
    }
}

function winGoriz2() {
    let c = 0
    for (i = 0; i < map.length; i++) {
        if (c !== map.length) {
            c = 0
        } else {
            break;
        }
        c = 0
        for (a = 0; a < map.length; a++){
            if(map[i][a] === 2){
                c++
            }
        }
        
    }
    if (c === map.length){
        return true
    } else {
        return false
    }
}

function winVertical2() {
    let c = 0
    for (i = 0; i < map.length; i++) {
        if (c !== map.length) {
            c = 0
        } else {
            break;
        }
        let x = i
        for (a = 0; a < map.length; a++){
            if(map[a][x] === 2){
                c++
            }
        }
    }
    if (c === map.length){
        return true
    } else {
        return false
    }
}

function win22(){
    let b = 0
    for(i = 0; i < map.length; i++){
        if(map[map.length - (map.length - i)][map.length - (map.length - i)] === 2){
            b++
        }
    }
    if(b === map.length){
        return true
    } else {
        return false
    }
}

function win2(){
    let b = 0
    for(i = map.length - 1; i >= 0; i--){
        if(map[(map.length - i) - 1][i] === 2){
            b++
        }
    }
    if(b === map.length){
        return true
    } else {
        return false
    }
}