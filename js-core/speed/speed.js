// var btn = document.querySelector('#btn')
// btn.addEventListener('click', randomLetter)
// function randomLetter(){
//     let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     //console.log(letters.length)
//     var max = letters.length -1
//     var randomNumber = Math.round(Math.random() * max)
//     console.log(letters[randomNumber])

// }
//console.log(randomLetter())

function randomNumber(max){
    return Math.round(Math.random() * max)
}

function randomLetter(){
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let i = randomNumber(letters.length -1)
    return letters[i]
}
//console.log(randomLetter())

function randomColor(){
    let red = randomNumber(255)
    let green = randomNumber(255)
    let blue = randomNumber(255)
    return `rgb(${red},${green},${blue})`
}

function randomLetterElement(){
    let div = document.createElement('div')
    div.innerText = randomLetter()
    div.style.backgroundColor = randomColor()
    div.style.top = randomNumber(90) + 'vh'
    div.style.left = randomNumber(90) + 'vw'
    div.classList.add('letter')
    document.querySelector('body').append(div)
}

async function run(){
    var gameOver = false
    hideStart()
    while(!gameOver){
        randomLetterElement()
        await new Promise(r => setTimeout(r, 2000))
    }
}
var btn = document.querySelector('#btn')

function hideStart(){
    btn.style.display = 'none'
}

btn.addEventListener('click', run)