var number = 1
var count = 0;

function clickMe() {

    if (count >= 10) {
        count += 10;
        number.innerHTML = count;
        document.querySelector('.botao').textContent = ("Clicou " + count + " vez(es)")
    } else {
        count += 1;
        number.innerHTML = count;
        document.querySelector('.botao').textContent = ("Clicou " + count + " vez(es)")
    }
}
