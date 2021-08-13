// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)          FALSE

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado)          FALSE

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)           TRUE

// console.log("d. ", typeof resultado)    Boolean



// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)
// RESPOSTA 2: Os números serão tratados como strings, serão concatenados e a soma não vai ocorrer.

// RESPOSTA 3: Especificar logo antes do prompt que as respostas deverão ser números, assim:
// let primeiroNumero = NUMBER(prompt("Digite um numero!"))
// let segundoNumero = NUMBER(prompt("Digite outro numero!"))

let idade = Number(prompt("Qual a sua idade?"))
let idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo ou amiga?"))
console.log("Sua idade é maior do que a do seu amigo?", idade > idadeAmigo)
console.log("A diferença de idade é: ", idade - idadeAmigo)

let numeroPar = Number(prompt("Insira um número par"))
console.log("Número divido por 2, seu resto é: ", numeroPar % 2) // O resultado sempre será 0 caso o número for par
// Caso o usuário coloque um número impar, o resto vai vir com o número do resto da divisão, diferente de 0

let idadeAnos = Number(prompt("Qual a sua idade em anos?"))
console.log("Idade em meses: ", idadeAnos * 12)
console.log("Idade em dias: ", idadeAnos * 365)
console.log("Idade em horas: ", idadeAnos * 8760)

let numeroA = Number(prompt("Escreva um número de 0 a 10"))
let numeroB = Number(prompt("Escreva outro número de 0 a 10"))

console.log("O primeiro numero é maior que segundo?", numeroA > numeroB)
console.log("O primeiro numero é igual ao segundo?", numeroA === numeroB)
let divisao1 = numeroA % numeroB
console.log("O primeiro numero é divisível pelo segundo?", divisao1 === 0)
let divisao2 = numeroB % numeroA
console.log("O segundo numero é divisível pelo primeiro?", divisao2 === 0)
