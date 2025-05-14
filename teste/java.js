let n1 = Number(prompt("Insira a primeira nota"))
let n2 = Number(prompt("Insira a segunda nota"))
let n3 = Number(prompt("Insira a terceira nota"))

let media = (n1+n2+n3)/3
let mediaCorreta = media.toFixed(1)

alert (mediaCorreta)

if (media >= 6){
    alert("O aluno Passou")
} else {
    alert("O Aluno Reprovou")
}
