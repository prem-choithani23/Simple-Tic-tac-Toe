let rounds = localStorage.getItem('rounds')
rounds = Number.parseInt(rounds)
console.log(Math.floor(3 / 2))
let clearCount = 0;
let win = 0
let count = clearCount
let winning = document.getElementById('winning')
let turn = document.getElementById('turn')
let container = document.getElementById('container')
let clear = document.getElementById('clear')
let p1name = document.getElementById('p1name')
let p2name = document.getElementById('p2name')
let p1score = document.getElementById('p1score')
let p2score = document.getElementById('p2score')

p1score.innerHTML = 0
p2score.innerHTML = 0

let manager = [0, 0, 0, 0, 0, 0, 0, 0, 0]
//input arrays
let cross = []
let zero = []

let player1Score = 0;
let player2Score = 0;

let cross_win = localStorage.getItem('name1')
let zero_win = localStorage.getItem('name2')

p1name.innerHTML = cross_win
p2name.innerHTML = zero_win

//pattern arrays
let patterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

setInterval(() => {
    if (count % 2 == 0 && win != 1) {
        turn.innerHTML = `${cross_win}'s Turn`
    } else if (win != 1) {
        turn.innerHTML = `${zero_win}'s Turn`
    }
}, 100)


for (let i = 0; i < 9; i++) {
    let div = document.createElement('div')
    div.className = "innerBox center-div"
    div.id = 'box' + (i + 1)
    container.append(div)
    div.addEventListener('click', () => {
        if (manager[i] != 1 && win != 1) {
            manager[i] = 1
            if (count % 2 == 0) {
                div.innerHTML = '<i class="fa-solid fa-xmark cross"></i>'
                div.style.backgroundColor = 'rgb(243, 125, 125)'//cross
                cross.push(i)
            }
            else {
                div.innerHTML = '<i class="fa-solid fa-o zero"></i>'
                div.style.backgroundColor = 'rgb(124, 179, 237)'
                zero.push(i)
            }
            count++
        }
        result()
        p1score.innerHTML = player1Score
        p2score.innerHTML = player2Score
        if (win == 1) {
            console.log(player1Score)
            if (player1Score >= Math.floor(rounds / 2) + 1) {
                winning.innerHTML = `${cross_win} Wins...Game Over`
            } else if (player2Score >= Math.floor(rounds / 2) + 1) {
                winning.innerHTML = `${zero_win} Wins...Game Over`
            }
        }

    })
}

function clearAll() {
    cross = []
    zero = []
    win = 0;
    count = (++clearCount);
    winning.innerHTML = ''
    let innerBoxes = document.getElementsByClassName('innerBox')
    for (let i = 0; i < 9; i++) {
        manager[i] = 0;
        innerBoxes[i].innerHTML = ""
        innerBoxes[i].style.backgroundColor = ""
    }
}
//clear button
clear.addEventListener('click', () => {
    clearAll()
})



function result() {
    let innerBoxes = document.getElementsByClassName('innerBox')


    for (let i = 0; i < 8; i++) {
        if (patterns[i].every(v => cross.includes(v))) {
            innerBoxes[patterns[i][0]].style.backgroundColor = 'rgb(128, 180, 128)'
            innerBoxes[patterns[i][1]].style.backgroundColor = 'rgb(128, 180, 128)'
            innerBoxes[patterns[i][2]].style.backgroundColor = 'rgb(128, 180, 128)'
            player1Score++
            win = 1;
            break;
        }
        if (patterns[i].every(v => zero.includes(v))) {
            player2Score++
            innerBoxes[patterns[i][0]].style.backgroundColor = 'rgb(128, 180, 128)'
            innerBoxes[patterns[i][1]].style.backgroundColor = 'rgb(128, 180, 128)'
            innerBoxes[patterns[i][2]].style.backgroundColor = 'rgb(128, 180, 128)'
            win = 1;
            break;
        }
    }
    if (count == 9 + clearCount && win != 1) {
        winning.innerHTML = "DRAW !"
    }
}





