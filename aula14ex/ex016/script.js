function contar() {
    var inputInicio = document.getElementById('inputInicio')
    var inputFim = document.getElementById('inputFim')
    var inputPasso = document.getElementById('inputPasso')
    var contagem = document.getElementById('res')

    if (inputInicio.value.length == 0) {
        window.alert("Por Favor informe um valor para o Início!")
    } else if (inputFim.value.length == 0) {
        window.alert("Por Favor informe um valor para o Fim!")
    } else if (inputPasso.value.length == 0 || inputPasso.value == 0) {
        window.alert("Por Favor informe um valor válido maior que 0 para o Passo!")
    } else {
        var inicio = Number(inputInicio.value)
        var fim = Number(inputFim.value)
        var passo = Number(inputPasso.value)
        contagem.innerHTML = 'Contando...<br>'

        if (inicio > fim) {
            for (inicio; inicio >= fim; inicio -= passo) {
                contagem.innerHTML += `${inicio} &#128073; `
            }
        } else {
            for (inicio; inicio <= fim; inicio += passo) {
                contagem.innerHTML += `${inicio} &#128073; `
            }
        }


        contagem.innerHTML += '&#127937 Fim. &#127937'
    }
}