var c = 1

// executa o comando e depois testa a condição
// do {
//     console.log(`olá, tudo bem? Passo: ${c}`)
//     c++
// } while (c <= 6)



/*
// testa a condição e depois executa o comando
while (c <= 10) {
    console.log(`olá, tudo bem? Passo: ${c}`)
    c++
}


// essencialmente é a mesma coisa
*/
// console.log('Vai começar...')
// for (i = 1; i < 10; i++) {
//     console.log(`olá, tudo bem? Passo: ${i}`)
// }
// console.log('FIM!')


c = 50
fim = 10

// while (c >= fim) {
//     console.log(`Passo: ${c}`)
//     c--
// }

for (c; c >= fim; c-= 2) {
    console.log(`Passo: ${c}`)
}