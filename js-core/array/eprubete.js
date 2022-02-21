var scores = [50, 65, 49, 81, 20, 55, 19, 91, 58, 60];

document.write(`Al doilea scor este ${scores[1]} <br>`)
document.write(`Ultimul scor este ${scores[9]} <br>`)
document.write('<hr>')

var max = 0;
for(let i = 0; i < scores.length; i++){
    if(scores[i] > max){
        max = scores[i]
    }
}
document.write(`Numarul maxim este ${max}<br>`)

// ordoneaza elementele unui array
scores.sort()
document.write(scores)

document.write('<hr>')
fruits = ['orange', 'banana', 'apple', 'wasabi']
fruits[0] = 'kiwi'
document.write(fruits + '<br>')

// push adauga la sfarsitul array-ului
fruits.push('pear')
document.write(fruits + '<br>')

// unshift adauga la inceputul array-ului
fruits.unshift('strawberry')
document.write(fruits + '<br>')

// pop sterge de la sfarsitul unui array
fruits.pop()
document.write(fruits + '<br>')
fruits.shift()
document.write(fruits + '<br>')

// splice fara al treilea parametru scoate unul sau mai multe elemente dintr-un array
fruits.splice(1,2)
document.write(fruits + '<br>')

fruits.splice(2, 2, 'bannana', 'apple')
document.write(fruits + '<br>')


fruits.sort()
document.write(fruits + '<br>')
document.write('<hr>')
var words = ['hello', 'Visual Studio', 'Java Script', 'if', 'object']
var upperWords = []

for(word of words){
    // word[0] e prima litera si verificam daca se afla intre A si Z
    //o alta varianta word[0].toUpperCase() == word[0]
    if(word[0] >= 'A' && word[0] <= 'Z'){
        upperWords.push(word)
    }
}

upperWords.sort()
document.write(upperWords)
document.write('<h1>Litere distincte</h1>')

// litere distincte
var cuvant = 'hello'
var litereDistincte = 0;
for(let i = 0; i < cuvant.length; i++){
    document.write(cuvant[i] + '<br>')

}


