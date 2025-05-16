function enviar (){
    const input = document.querySelector('#nome')

    const nome = input.value
    
    input.value = ""
    
    const paragrafo = document.createElement("p")
    
    paragrafo.innerText = nome
    document.body.appendChild(paragrafo)
}
let p = document.createElement('p')
p.innerHTML = "Este paragrafo foi inserido na linha 2"

let linha2 = document.getElementById('linha2')
linha2.prepend(p)