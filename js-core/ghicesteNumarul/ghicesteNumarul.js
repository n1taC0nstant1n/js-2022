document.querySelector('input[type="button"]').addEventListener('click', verificaNumar)
rezultat = document.querySelector("#rezultat")
// genereaza un nr aleatoriu intre 0 si 100
var max = 100
var numarAles = numarAleatoriu(max)

// query
// un query returneaza o valoare folosind return
function numarAleatoriu(max){
    max++
    return Math.round(Math.random() * max)

}

// max = 100

// comanda
// o comanda nu returneaza nimic
function verificaNumar(){
    // value reprezinta valoarea data in input
    let numarIntrodus = document.querySelector('#numar').value

    if(numarAles == numarIntrodus){
        rezultat.innerText = 'Ai ghicit!'
    }else if(numarAles > numarIntrodus){
        rezultat.innerText = 'Prea mic!'
    }else{
        rezultat.innerText = 'Prea mare!'

    }
}
console.log(numarAles)