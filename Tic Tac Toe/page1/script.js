let player1 = document.getElementById('player1')
let player2 = document.getElementById('player2')
let rounds = document.getElementById('rounds')
let ww = document.getElementById('submit')
document.cookie=``
submit.onclick = function(e)
{
    localStorage.setItem('name1',`${player1.value}`)
    localStorage.setItem('name2',`${player2.value}`)
    localStorage.setItem('rounds',`${rounds.value}`)
    player1.value=""
    player2.value=""

}
console.log("Hi")