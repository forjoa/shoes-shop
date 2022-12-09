const toggleButton = document.getElementsByClassName('toggle-button')[0]
const listaNavLinks = document.getElementsByClassName('p-list')[0]

toggleButton.addEventListener('click', () => {
    listaNavLinks.classList.toggle('active')
})