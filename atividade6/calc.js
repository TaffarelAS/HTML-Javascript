function calcular(){
    const preco = Number(document.getElementById("preco").value)
    const porcentagemDesc = Number(document.getElementById("porcentagemDesc").value)
    const valorDesc = document.getElementById("valorDesc")
    const precoFinal = document.getElementById("precoFinal")

    if(preco > 0){
        const calculo1 = (preco / 100) * porcentagemDesc
        const calculo2 = preco - calculo1

        valorDesc.innerHTML = `Valor do desconto: R$ ${calculo1.toFixed(2)}`
        precoFinal.innerHTML = `Preço final com desconto: R$ ${calculo2.toFixed(2)}`
    } else {
        precoFinal.innerHTML = `Insira um preço valido.`
    }
}