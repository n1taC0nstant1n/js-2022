var dr = document.querySelector('#dreptunghi')
dr.addEventListener('click', minimize)

async function minimize(){ 
    for(let i = 10; i >= 0; i--){
        await new Promise(r => setTimeout(r, 200))
        dr.style.height = i + 'em'
    }
}