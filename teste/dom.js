//document.getElementById('exemplo')/*pegando o ID*/

//document.getElementsByClassName('lista')/*pegando a classe*/

//document.getElementsByTagName('button')/*pegando a tag*/

/*pega tudo, usar # para id e . para classe. ('#exemplo' ou '.lista' ou 'button')*/
document.querySelector('#exemplo').innerText = "Hoje é terça-feira"
document.querySelector('button').innerHTML = "<h1>Amanhã tem jogo</h1>"
document.querySelector('.lista').textContent = "Pinguins de Madagascar" //<<<---- usar este

document.querySelector('input').value // pegando valor de um input