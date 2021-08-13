// // Interpretação de código

// // Exercício 1

// let array
// console.log('a. ', array)
// // Não parecerá mensagem

// array = null
// console.log('b. ', array)
// // Aparecerá null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// // Aparecerá a quantidade de itens na lista, que é 11

// let i = 0
// console.log('d. ', array[i])
// // Aparecerá o número 3

// array[i+1] = 19
// console.log('e. ', array)
// // Aparecerá a lista da array com ate 19 elementos, o que tem mais

// const valor = array[i+6]
// console.log('f. ', valor)
// // Aparecerá o sétimo elemneto da lista que é o 9

// Exercício 2

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// SUBI NUM ÔNIBUS EM MIRROCOS e o número de letras da fras = 27

// Exercício de Escita de código

// Exercício 1

// nomeDoUsuario = prompt("Qual é o seu nome?")
// emailDoUsuario = prompt("Qual é o email?")

// console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

// Exercício 2 

//  const comidasPreferidas = ["japonesa", "chinesa", "pizza", "carnes", 
//  "chocolate"]
//  console.log(comidasPreferidas)

//  console.log("Essas são minha comidas preferidas:")
//  console.log(comidasPreferidas[0])
//  console.log(comidasPreferidas[1])
//  console.log(comidasPreferidas[2])
//  console.log(comidasPreferidas[3])
//  console.log(comidasPreferidas[4])

//  const comidaUsuario = prompt("Qual a sua comida favorita?")
//  comidasPreferidas[1] = comidaUsuario
//  console.log(comidasPreferidas)


// Exercício 3

// const listaDeTarefas = []

// const primeiraTarefa = prompt("Qual a primeira tarefa ao realizar no dia?")
// const segundaTarefa = prompt("Qual a segunda tarefa ao realizar no dia?")
// const terceiraTarefa =  prompt("Qual a terceira tarefa ao realizar no dia?")
// listaDeTarefas.push(primeiraTarefa)
// listaDeTarefas.push(segundaTarefa)
// listaDeTarefas.push(terceiraTarefa)

// console.log(listaDeTarefas)

// const tarefaConcluida = prompt("Qual tarefa foi concluída? de 0, 1 ou 2")
// listaDeTarefas.splice(tarefaConcluida, 1)

// console.log(listaDeTarefas)

// Desafios

// Exercício 1
const frase = "Hoje fiz todos os exercícios propostos"
const arrayFrase = frase.split(" ")
console.log(arrayFrase)

// Exercício 2

const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let posicaoAbacaxi = frutas.findIndex(procuraAbacaxi)
function procuraAbacaxi(valor) {
    return valor === "Abacaxi";
  }

console.log(posicaoAbacaxi, frutas.length)

//Nos desafios tive ajuda do meu irmão que é programador

