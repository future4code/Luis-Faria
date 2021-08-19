// ------------- Exercícios de Interpretação de Código ------------

// 1. a) O código pede um número ao o usuário e diz se passou no teste que no caso verifica
//      se o número é um número par
//    b) Números pares
//    c) Número ímpares

// 2. a) O código serve para definir o preço das frutas selecionadas
//    b) O preço da fruta, Maçã, é de R$2.25
//    c) Ao invés do código passar o valor da pêra, ele vai passar o valor do default que é 5

// 3. a) A linha tem uma variável número que é igual a um número inserido pelo usuário. 
//       O tipo é transformado é número também.
//    b) Para 10: Esse número passou no teste
//       Para -10: Não aparecerá uma mensagem pois o else não foi definido
//    c) Haverá um erro pois foi criado uma variável dentro do escopo do if e isso não é permitido.

// -------------- Exercícios de Escrita de Código ------------------

// 1.

// const idadeUsuario = Number(prompt("Qual a sua idade?"))

// if (idadeUsuario >= 18){
//     console.log("Você pode dirigir")
// } else { 
//     console.log("Você não pode dirigir")
// }

// 2. 

// const turnoEstudante = prompt("Em que turno você estuda? M (Matutino), V (Vespertino) ou N (Noturno)")

// if (turnoEstudante === "M") {
//     console.log("Bom dia!")
// } else if (turnoEstudante === "V") {
//     console.log("Boa tarde!")
// } else if (turnoEstudante === "N") {
//     console.log("Boa noite!")
// } else {
//     console.log("Digite um turno válido")
// }

// 3.

// const turnoEstudante = prompt("Em que turno você estuda? M (Matutino), V (Vespertino) ou N (Noturno)")

// switch (turnoEstudante){
//     case "M":
//         console.log("Bom dia!")
//         break
//     case "V":
//         console.log("Boa tarde!")
//         break
//     case "N":
//         console.log("Boa noite!")
//         break
//     default: 
//         console.log("Digite uma turno válido.")
// }

// 4. 

// const generoFilme = prompt("Qual o gênero do filme?")
// const precoFilme = Number(prompt("Qual o valor do ingresso?"))

// if (generoFilme === "fantasia" && precoFilme < 15) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }

// ----------------------------------- Desafios -------------------------------------

// 1.


// const generoFilme = prompt("Qual o gênero do filme?")
// const precoFilme = Number(prompt("Qual o valor do ingresso?"))

// if (generoFilme === "fantasia" && precoFilme < 15) {
//     lanchinho = prompt("Qual lanchinho você vai comprar?")
//     console.log("Bom filme!")
//     console.log(`Aproveite o seu ${lanchinho}`)
// } else {
//     console.log("Escolha outro filme :(")
// }

// 2.

    nomeCompleto = prompt("Qual o seu nome completo?"),
    tipoDeJogo = prompt("Qual o tipo de jogo: IN(internacional) ou DO(doméstico?)"),
    etapaDoJogo = prompt("Qual a etapa do jogo: SF(semi-final), DT(decisãso terceiro lugar) ou FI(final)?"),
    categoriaDoJogo = Number(prompt("Qual a categoria: 1, 2, 3 ou 4?")),
    quantidadeDeIngressos = Number(prompt("Qual a quantidade de ingressos?"))


const imprimeInformacoesDoIngresso = (nome, tipo, etapa, categoria, quantidade) => {
    console.log("---Dados da compra---")
    console.log(`Nome do cliente: ${nome}`)
    
    let tipoCondicional
    if (tipo.toUpperCase() === "IN"){
       tipoCondicional = "Internacional" 
    } else if (tipo.toUpperCase() === "DO") {
        tipoCondicional = "Nacional"
    } else {
        console.log("Digite um valor válido")
    }
    console.log(`Tipo do jogo: ${tipoCondicional}`)

    let etapaCondicional
    if (etapa.toUpperCase() === "SF") {
        etapaCondicional = "Semi-Final"
    } else if (etapa.toUpperCase() === "DT"){
        etapaCondicional = "Decisão Terceiro Lugar"
    } else if (etapa.toUpperCase() === "FI") {
        etapaCondicional = "Final"
    } else {
        console.log("Digite um valor válido")
    }
    console.log(`Etapa do jogo: ${etapaCondicional}`)

    let categoriaCondicional
    if (categoria === 1) {
        categoriaCondicional = 1
    } else if (categoria === 2) {
        categoriaCondicional = 2
    } else if (categoria === 3) {
        categoriaCondicional = 3
    } else if (categoria === 4) {
        categoriaCondicional = 4
    } else {
        console.log("Digite um valor válido")
    }
    console.log(`Categoria: ${categoriaCondicional}`)

    console.log(`Quantidade de ingressos: ${quantidade}`)
    
    console.log("---Valores---")

    let valorCondicional

    if (etapa.toUpperCase() === "SF" && categoria === 1 ) {
        valorCondicional = 1320.00
    }

    if (etapa.toUpperCase() === "SF" && categoria === 2 ) {
        valorCondicional = 880.00
    }

    if (etapa.toUpperCase() === "SF" && categoria === 3 ) {
        valorCondicional = 550.00
    }

    if (etapa.toUpperCase() === "SF" && categoria === 4 ) {
        valorCondicional = 220.00
    }

    if (etapa.toUpperCase() === "DT" && categoria === 1 ) {
        valorCondicional = 660.00
    }
    
    if (etapa.toUpperCase() === "DT" && categoria === 2 ) {
        valorCondicional = 440.00
    }

    if (etapa.toUpperCase() === "DT" && categoria === 3 ) {
        valorCondicional = 330.00
    }

    if (etapa.toUpperCase() === "DT" && categoria === 4 ) {
        valorCondicional = 170.00
    }

    if (etapa.toUpperCase() === "FI" && categoria === 1 ) {
        valorCondicional = 1980.00
    }

    if (etapa.toUpperCase() === "FI" && categoria === 2 ) {
        valorCondicional = 1320.00
    }

    if (etapa.toUpperCase() === "FI" && categoria === 3 ) {
        valorCondicional = 880.00
    }

    if (etapa.toUpperCase() === "FI" && categoria === 4 ) {
        valorCondicional = 330.00
    }

    if (tipo.toUpperCase() === "IN") {
        valorCondicional = valorCondicional * 4.10
    } 

    console.log(`Valor do ingresso: R$ ${valorCondicional}`)

    let valorFinal = valorCondicional * quantidade
    console.log(`Valor Total: R$ ${valorFinal}`)
}

imprimeInformacoesDoIngresso (nomeCompleto, tipoDeJogo, etapaDoJogo,categoriaDoJogo, quantidadeDeIngressos)




