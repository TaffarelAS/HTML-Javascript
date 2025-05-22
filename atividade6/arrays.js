//arrays em JS
let names = ["Fulano","Beltrano","Ciclano"]
console.log(names)
 
//tamanho do array
//console.log('Tamanho do Array: ${names.length}')
//console.log(names[1])
 
//for(let i = 0; i < names.length; i++){
//    console.log(names[i])
//}

let listaNomes = ['Guilherme','Bruno','Junior','Richarlyson']
for(let contador = 0; contador < listaNomes.length; contador++){
    let mensagem = `Boas vindas ${listaNomes[contador]}`
    console.log(mensagem)
}
//forEach
listaNomes.forEach((listaNomes) => {
    console.log(listaNomes)
})

//listaNomes.push ('Rodolfo')
//console.log(listaNomes)
//listaNomes.pop()
//console.log(listaNomes)
listaNomes.shift()
console.log(listaNomes)

let posicao = 2
let novoNome = 'Lucas'
listaNomes.splice(posicao, 0, novoNome)
console.log(listaNomes);