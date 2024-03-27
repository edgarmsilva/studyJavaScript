let num = [5, 2, 8]

// adicionar em uma posição específica do array
num[3] = 3

// adicionar no ultimo índice do array
num.push(9)


console.log(`Nosso vetor é: ${num}`)
console.log(`O primeiro valor do vetor é: ${num[0]}`)
console.log(`tamanho do vetor: ${num.length}`)
console.log(`vetor em ordem crescente: ${num.sort()}`)
console.log(`vetor em ordem decrescente: ${num.reverse()}`)
console.log("--------------------------------------------------")

let soma = 0
for (let i = 0; i < num.length; i++) {
    console.log(`Valor do vetor na posição ${i} é: ${num[i]}`)

    soma += num[i]
    console.log(soma)

}

console.log(soma)


console.log("--------------------------------------------------")

for (let pos in num) {
    console.log(`Valor do vetor na posição ${pos} é: ${num[pos]}`)
}

console.log("--------------------------------------------------")

let busca = 10
let pos = num.indexOf(busca)

if (pos == -1) {
    console.log(`Valor não encontrado no array! ${busca}`)
} else {
    console.log(`o valor ${busca} está na posição ${num.indexOf(busca)}`)
}

