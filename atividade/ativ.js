var number = 1
var count = 0;

function clickMe(){
    count += 1;
    number.innerHTML = count;
    document.querySelector('.botao').textContent = ("Clicou "+count+" vez(es)")
}

function borrar(){
    document.querySelector('.botao').textContent = "Tirou o Mouse!"
}

function passe(){
    document.querySelector('.botao').textContent = "Passou o Mouse!"
}