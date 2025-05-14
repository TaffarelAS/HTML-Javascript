function clickMe(){
    let filme = document.querySelector('#filme').value
    let musica = document.querySelector('#musica').value
    let jogo = document.querySelector('#jogo').value

    let resposta = `Seu filme favorito é ${filme}, sua musica favorita é ${musica}, seu jogo preferido é ${jogo}`

    document.querySelector('#mostrar').textContent = (resposta)
}