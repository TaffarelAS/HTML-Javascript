function verificaPalavra() {
    const palavra = document.getElementById('palavra').value.toLowerCase()
    const palavraCorreta = "pamonha"
    


    if (palavra == palavraCorreta) {
        window.location.href = "correto.html"
    } else {
        window.location.href = "errado.html"
    }
}
var input = document.getElementById("palavra");
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("botao").click();
        }
    });