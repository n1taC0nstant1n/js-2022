var btnAnim = document.querySelector('#circleAnimation')
var circle = document.querySelector('#circle')
btnAnim.addEventListener('click', circleAnimation)

async function circleAnimation(){
    var top = 0 
    var left = 0
    var maxTop = 400
    var maxLeft = 400
    for(mt = 0, l = 0; mt <= maxTop, l <= maxLeft; mt++, l++){
        await new Promise(r => setTimeout(r, 10))
        circle.style.top= mt + 'px'
        circle.style.left = l + 'px'
        var info = document.getElementById('info')
        btnAnim.removeEventListener('click', circleAnimation)

    }

    // circle.style.top = "350px";
    // circle.style.left = "350px";
}


async function reverseCircleAnimation(){
    var top = 400 
    var left = 400
    var minTop = 0
    var minLeft = 0
    for(mt = 400, l = 400; mt >= minTop, l >= minLeft; mt--, l--){
        await new Promise(r => setTimeout(r, 10))
        circle.style.top= mt + 'px'
        circle.style.left = l + 'px'
        var info = document.getElementById('info')
        if(mt >= maxTop && l >= maxLeft ){
            info.innerText ='Ai reusit!'
        }
    }
}

