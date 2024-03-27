let lista = document.getElementById("selListaNumeros")
let listaNumeros = []
let resultados = document.getElementById("resultados")


function adicionar() {
    let inputNumero = document.getElementById("inputNumber")
    let numero = inputNumero.value
    if (numero.length == 0 || numero < 1 || numero > 100) {
        window.alert("informe um número válido entre 1 e 100!")

    } else {
        if (listaNumeros.indexOf(numero) == -1) {
            listaNumeros.push(numero)
            lista.innerHTML = ""

            for (let c = 0; c < listaNumeros.length; c++) {
                let item = document.createElement('option')
                item.text = `valor ${listaNumeros[c]} adicionado.`
                lista.appendChild(item)
            }
            resultados.innerHTML = ''


        } else {
            window.alert("Valor já existe na lista!")
        }
    }
    inputNumero.value = ''
    inputNumero.focus()
}

function finalizar() {

    if (listaNumeros.length == 0) {
        window.alert("Adicione Valores antes de Finalizar!")
    } else {
        listaNumeros.sort()
        let soma = 0
        let maior = listaNumeros[0]
        let menor = listaNumeros[0]
        let total = listaNumeros.length

        for (let pos in listaNumeros){
            soma += Number(listaNumeros[pos])
            if(listaNumeros[pos] > maior){
                maior = listaNumeros[pos]
            }
            if(listaNumeros[pos] < menor){
                menor = listaNumeros[pos]
            }
            
        }
        media = soma / total

        resultados.innerHTML += `<p>Ao todo, temos <strong> ${total}</strong>  números cadastrados.`
        resultados.innerHTML += `<p>O maior valor informado foi <strong>${maior}</strong> `
        resultados.innerHTML += `<p>O menor valor informado foi <strong>${menor}</strong>`
        resultados.innerHTML += `<p>Somando todos os valores, temos <strong>${soma}</strong>`
        resultados.innerHTML += `<p>A média dos valores digitados é <strong>${media}</strong>`
    }
}

function limpar() {
    listaNumeros = []
    lista.innerHTML = ""
    resultados.innerHTML = ""
}