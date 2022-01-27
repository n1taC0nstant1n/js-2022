var p = document.getElementById('greenplanet')
p.innerText = 'An allien appeared'
p.innerHTML = '<b>An allien appeared</b>'
//p.style.color = 'red'
p.style.fontSize = '30px'
// p.style.color = 'red'
// p.style.backgroundColor = 'rgba(230, 210, 200)'

// p.className = 'warning'
p.classList.add('warning')
// p.classList.remove('warning')

var newElement = document.createElement("p")
newElement.innerText = 'Hello there!'
newElement.classList.add('message')
// 
//document.appendChild(newElement)

// pune elementul in body la sfarsit
document.querySelector('body').appendChild(newElement)

p.append(newElement)
// punem elementul inaintea elementului p in body
//document.querySelector('body').insertBefore(newElement, p)
p.before(newElement)
// p.after(newElement)

// sterge un element
document.querySelector('#blueplanet').remove()

// executa functia changeMessage cand se da click pe input:
document.querySelector('input').addEventListener('click', changeMessage)

function changeMessage() {
    document.querySelector('#redplanet').classList.add('warning')
}

// p.append() - adauga la sfarsitul elementului
// p.prepend() - adauga la inceputul elementului
// p.before() - adauga inaintea elementului
// p.after() - adauga dupa element

