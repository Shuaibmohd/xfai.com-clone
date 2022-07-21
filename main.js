document.querySelector('.menu').addEventListener('click', () => document.querySelector('.menu-item').classList.toggle('show').document.body.classList.toggle('no-scroll'));




const btn = document.getElementById('menu')
const nav = document.getElementById('menu-item')

function navToggle() {
    
    document.body.classList.toggle('no-scroll')

}

btn.addEventListener('click', navToggle)