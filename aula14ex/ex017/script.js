function geraTabuada() {

    var inputNumero = document.getElementById('inputNumero')

    if (inputNumero.value.length == 0) {
        window.alert("informe um número!")
    } else {
        var tabuada = document.getElementById('tabuada')

        tabuada.innerHTML = ''
        for (i = 1; i <= 10; i++) {
            var mult = inputNumero.value * i
            tabuada.innerHTML += ` ${inputNumero.value} x ${i} = ${mult}\n`
        }
    }
}