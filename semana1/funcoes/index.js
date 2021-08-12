// Exercícios de interpretação de código


// 1. a) Vai ser impresso no console 10 e 50
//    b) Não iria parecer nada, pois na na função não espcifica um console log

// 2. a) Ela faz com que um usuário entre um texto transforma tudo em caixa baixa e diz se é verdaeeiro ou falso que o texto tem cenoura.
//    b) i) eu gosto de cenoura TRUE
//       ii) cenoura é bom pra vista TRUE
//       iii) cenouras crescem na terra TRUE    

// Exerc;icios de escrita de código 

// 1. a) 

// function imprimeInformacoes () {
//     console.log("Eu sou Luis, tenho 33 anos, moro em Brasília e sou estudante")
//  }

// imprimeInformacoes()

// // b) 

// let nome = prompt("Qual o seu nome?")
// let idade = Number(prompt("Qual a sua idade?"))
// let endereço = prompt("Qual a sua cidade?")
// let profissao = prompt("Qual a sua profissão?")

// function imprimeFraseInformacoes (nome, idade, endereço, profissao) { 
//     console.log(`Eu sou ${nome}, tenho ${idade}, moro em ${endereço} e sou ${profissao}`)
// }

// imprimeFraseInformacoes(nome, idade, endereço, profissao)

// 2. a)

// function imprimeSoma (numeroA, numeroB) { 
//     const resultado = numeroA + numeroB
//     return resultado
// }

// console.log(imprimeSoma(4, 5))

// b) 

// function maiorOuIgual (numA, numB) { 
//     const resultado = numA >= numB
//     return resultado
// } 

// console.log(maiorOuIgual(4,2))

// c) 

// function numeroPar (numeroPar) {
//     const resultado = numeroPar % 2 === 0
//     return resultado
// }

// console.log(numeroPar(8))

// d)

// function fraseMaiuscula (fraseA) { 
//     const fraseTamanhoMaisucula = fraseA.length
//     console.log(fraseA.toUpperCase())
//     console.log(fraseTamanhoMaisucula)
// }

// fraseMaiuscula("uma frase versao teste")

// 3)

function soma (numA, numB) { 
    const soma = numA + numB
    return soma
}  
function subtracao (numA, numB) { 
    const subtracao = numA - numB
    return subtracao
} 
function multiplicacao (numB, numB) {
    const multiplicacao = numA * numB
    return multiplicacao
}
function divisao (numA, numB){
    const divisao = numA / numB
    return divisao
}

    numA = Number(prompt("Insira o primeiro número:"))
    numB = Number(prompt("Insira o segundo número:"))

console.log(soma(numA, numB))
console.log(subtracao(numA, numB))
console.log(multiplicacao(numA, numB))
console.log(divisao(numA, numB))





