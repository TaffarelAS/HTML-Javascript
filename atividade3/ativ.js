function clickMe(){
    let idade = document.querySelector('#idade').value

    let resultado = `${idade}`

    if(idade >= 16){
        document.querySelector('#verificar').textContent = ('Você pode votar!')
    } else {
        document.querySelector('#verificar').textContent = ('Você não pode votar!')
    }
}