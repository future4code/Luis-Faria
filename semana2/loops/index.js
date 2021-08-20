// ---------------------- Exercícios de Interpretação de código ---------------------

// 1. O código tem uma condição de continuação de i menor que que 5, sendo que ele vai parar
// quando chegar no 4. O valor vai ser esse índice somando com os indices anteriores. Logo
// no console vai aparecer 10 (4 + 3 + 2 + 1) 

//-----------------------------------------------------------------------------------

// 2. a) Vão aparecer os números 19, 21, 23, 25, 27 e 30
//    b) Sim. Mas desde que tenha o método entries descrito abaxio

// for (const [i, v] of ['a', 'b', 'c'].entries()) {
//     console.log(i, v)
//   }

//-------------------------------------------------------------------------------------

// 3. Vai aparecer: *
//                  **
//                  ***
//                  ****

// ----------------------------- Exercícios de Escrita de Código -----------------------

// 1.

// const quantidadeBichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))

// const arrayBichinhos = []

//     if (quantidadeBichinhos === 0) {
//         console.log("Que pena! Você pode adotar um pet!")
//     }

//     for(let i = 0; i < quantidadeBichinhos; i++){
//         let nomeBichinhos = [prompt("Qual o nome do seu pet?")]
//         arrayBichinhos.push(nomeBichinhos)
//     } 

// console.log(arrayBichinhos)

//------------------------------------------------------------------------------------

// 2.

// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// Resposta letra a. ---------------------------

// for(let i = 0; i < array.length; i++){
//     console.log(array[i])
// }
    
// Resposta letra b. ----------------------------

// for(let i = 0; i < array.length; i++){
//     console.log(array[i] / 10)
// }

// Resposta letra c. ------------------------------

// let novoArray = []

// for(let i of array) {
//    if (i % 2 === 0) {
//         novoArray.push(i) 
//    } 
// }console.log(novoArray)

// Resposta letra d. --------------------------------

// let novoArray = []

// for(let i = 0; i < array.length; i++) {
//     novoArray.push(`O elemento do índex ${i} é ${array[i]}`)
// }   

// console.log(novoArray)

// Resposta letra e. -------------------------------

// let maior = 0
// let menor = Infinity

// for(let i of array) {

//     if(i > maior) {
//         maior = i
//     }

//     if(i < menor){ 
//         menor = i
//     }
// }

// console.log(`O maior número é ${maior} e o menor é ${menor}`)

// ------------------------ Desafios --------------------------------------

// 1.

// const numeroEscolhido = Number(prompt("Escolha um número"))

// console.log("Vamos jogar!")

// let inputUsuario = Number(prompt(`Tente advinha o número`))

// let numeroDeTentativas = 1

// while (inputUsuario !== numeroEscolhido){
//     console.log(`O número chutado foi ${inputUsuario}`)
//     if(inputUsuario > numeroEscolhido) {
//         console.log(`Errow! O número é menor`)
//     } else {
//         console.log(`Errow! O número é maior`)
//     }
//     inputUsuario = Number(prompt(`Tente advinhar o número outra vez`))
//     numeroDeTentativas++
// }

// console.log("Acertou!")
// console.log(`O número de tentativas foi de: ${numeroDeTentativas} `)

//--------------------------------------------------------------------------

// 2.

const numeroEscolhido = Math.floor(Math.random() * 100) 

console.log("Vamos jogar!")

let inputUsuario = Number(prompt(`Tente advinhar o número`))

let numeroDeTentativas = 1

while (inputUsuario !== numeroEscolhido){
    console.log(`O número chutado foi ${inputUsuario}`)
    if(inputUsuario > numeroEscolhido) {
        console.log(`Errow! O número é menor`)
    } else {
        console.log(`Errow! O número é maior`)
    }
    inputUsuario = Number(prompt(`Tente advinhar o número outra vez`))
    numeroDeTentativas++
}

console.log("Acertou!")
console.log(`O número de tentativas foi de: ${numeroDeTentativas} `)


