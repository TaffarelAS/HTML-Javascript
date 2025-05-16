const adicionar = document.querySelector('#adicionar')
const remover = document.querySelector('#remover')

adicionar.addEventListener('click',() => {
    document.querySelector("div").classList.add("class1")
})
remover.addEventListener('click',() => {
    document.querySelector("div").classList.remove("class1")
})