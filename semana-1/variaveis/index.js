// Exercícios de interpretação de código

// 1. Vai sair impresso no console do navegador primeiro 10 e depois 10, 5
// 2. No console aparecerá 10, 10, 10. C apesar de não atribuído a uma variável é considerada como uma variável global.
// 3. p = horasTrabalhoDia t = salarioDia

// Exercícios de escrita de código

// 1.
let nome
let idade
console.log(typeof nome)
console.log(typeof idade)
// Foi impresso na tela "undefined" 2 vezes porque as variáveis não foram declaradas e, por padrão, essa é a respota

nome = prompt("Qual é o seu nome?")
idade = prompt ("Qual é sua idade?")
console.log(typeof nome)
console.log(typeof idade)
// Agora as variáveis são consideradas como strings, ou seja, como textos com as respostas dadas.

console.log("Olá", nome + ", você tem", idade, "anos")

// 2. 
let relógio = prompt("Você está usando relógio?") 
let animal = prompt("Você possui um animal de estimação?")
let celular = prompt("Seu celular usa o sistema operacional android?")
console.log("Você está usando relógio? - ", relógio)
console.log("Você possui um animal de estimação? - ", animal)
console.log("Seu celular usa o sistema operacional android? - ", celular)

// 3.
let a = 10
let b = 25
let c = a
a = b
b = c
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

// Desafio
let irmaos = prompt("Voce possui quantos irmãos?")
let diaNascimento = prompt("Qual o dia do seu nascimento?")
console.log("1. O primeiro número somado ao segundo número resulta em:", irmaos + diaNascimento)
console.log("2. O primeiro número multiplicado pelo segundo número resulta em:", irmaos * diaNascimento)
// Refleti e o resultado da adição está em string, não sei como passar para number. Já o resultado da multiplicação está certo




// const nome = "Luis Henrique"
// const sobrenome = "Fernandes de Faria"
// let idade = 33
// const eEstudante = true

// console.log("Meu nome é", nome, sobrenome, "e tenho", idade, "anos.", "Sou estudante?", eEstudante)  

// const nome = prompt("Qual o seu nome?")
// const idade = prompt("Qual sua idade?")

// console.log("Nome", typeof nome)
// console.log("Idade", typeof idade)



