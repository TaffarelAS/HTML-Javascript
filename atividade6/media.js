function calcular(){
    const nota1 = Number(document.getElementById("nota1").value)
    const nota2 = Number(document.getElementById("nota2").value)
    const nota3 = Number(document.getElementById("nota3").value)
    const media = document.getElementById("media")
    const status = document.getElementById("status")

    if (nota1 !== '' && nota2 !== '' && nota3 !== ''){

        const calculo = (nota1 + nota2 + nota3) / 3

        if(calculo >= 7){
            media.innerHTML = `${calculo.toFixed(2)}`
            status.innerHTML = `Aprovado`
        } else {
            media.innerHTML = `${calculo.toFixed(2)}`
            status.innerHTML = `Reprovado`
        }

    } else {
        status.innerHTML = `Insira notas validas!`
    }
}