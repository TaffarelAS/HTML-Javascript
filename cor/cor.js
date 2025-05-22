function verificar(){
    let square = document.querySelector("#square")
    let outraCor = document.querySelector("select").value

    if(outraCor == 'vermelho'){
        square.style.backgroundColor = "red"
    } else if (outraCor == 'azul'){
        square.style.backgroundColor = "blue"
    } else if (outraCor == 'preto'){
        square.style.backgroundColor = "black"
    } else if (outraCor == 'roxo'){
        square.style.backgroundColor = "purple"
    } else if (outraCor == 'amarelo'){
        square.style.backgroundColor = "yellow"
    } else {
        square.style.backgroundColor = "transparent"
    }
}