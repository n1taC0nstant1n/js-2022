var dr = document.querySelector('#dreptunghi')
dr.addEventListener('click', minimize)

async function minimize(){ 
    for(let i = 10; i >= 0; i--){
        await new Promise(r => setTimeout(r, 200))
        dr.style.height = i + 'em'
    }
}

var cerc = document.querySelector('#cerc')
cerc.addEventListener('click', mutaCerc)

async function mutaCerc(){
    for(let i = 0; i<= 500; i++){
        await new Promise(r => setTimeout(r, 40))
        cerc.style.top = cerc.style.left = i + 'px' 
    }

    cerc.removeEventListener('click', mutaCerc)

}