function converter(){ 
    const dolar = Number(document.getElementById("dolar").value)
    const resultado = document.getElementById("resultado")

    if(dolar !== ''){
        const conversao = (dolar * 5.67).toFixed(2)
        
        resultado.innerHTML = `US$ ${dolar.toFixed(2)} = R$ ${conversao}`

    } else {
        resultado.innerHTML = "Insira um valor válido!"
    }
}