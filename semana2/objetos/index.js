// Exercícios de Interpretação de Código

// Exercicio 1 -----------------------------------------------------------

// Matheus Nachtergaele, Virginia Cavenddish, canal: Globo, horário 14h

// Exercício 2 ------------------------------------------------------------

// a)
// nome: "Juca", 
	// idade: 3, 
	// raca: "SRD"

// nome: "Juba", 
	// idade: 3, 
	// raca: "SRD"

// nome: "Jubo", 
	// idade: 3, 
	// raca: "SRD"

// b) Ela faz uma cópia do objeto referido pra alterações posteriores, é conhecida como espalhamento ou spread

// Exercício 3 -----------------------------------------------------------

// a) false
//    undefined 

// b) Foi impresso undefined porque a variável "altura" não foi definida, logo um ele é indefinido

// Exercícios de escrita de código ----------------------------------------

// 1. ------------------------------------------------------------------------------------------------------
    // const pessoa = { 
    //     nome: "Luis Henrique",
    //     apelidos: ["Luizito", "Rik", "Lolo"]
    // }

    // function frase(objPessoa) {
    //     console.log(`Eu sou ${objPessoa.nome}, mas pode me chamar de: ${objPessoa.apelidos[0]}, ${objPessoa.apelidos[1]} ou ${objPessoa.apelidos[2]}.`)

    // }
    
    // frase(pessoa)

    // const pessoaNovosApelidos = {
    //     ...pessoa,
    //     apelidos: ["Luisão", "Luizi", "Quico"] 
    // }

    // frase(pessoaNovosApelidos)

// 2. -------------------------------------------------------------------------------------------------------------
//     const pessoa1 = {
//         nome: "Luis Henrique",
//         idade: 33,
//         profissao: "Estudante"
//     }

//     const pessoa2 = { 
//         nome: "Frederico",
//         idade: 29,
//         profissao: "Programador Full Stack"
//     }

// function array(objetoArray) {
//     const informacoes = [objetoArray.nome, objetoArray.nome.length, objetoArray.idade, objetoArray.profissao, objetoArray.profissao.length]
//     return informacoes
// }

// console.log(array(pessoa1))
// console.log(array(pessoa2))

// 3.------------------------------------------------------------------------------------------------------------
// const carrinho = []

// const fruta1 = {
//     nome: "Banana", 
//     disponibilidade: true
// }

// const fruta2 = {
//     nome: "Maçã", 
//     disponibilidade: true
// }

// const fruta3 = {
//     nome: "Morango", 
//     disponibilidade: true
// }

// function recebeFruta(fruta) {
//     const adicionaNoCarrinho = carrinho.push(fruta)
//     return adicionaNoCarrinho
// }

// recebeFruta(fruta1)
// recebeFruta(fruta2)
// recebeFruta(fruta3)

// console.log(carrinho)

// DESAFIOS --------------------------------------------------------------------------
// 1.
// const informacoesUsuario = {
//     nome: prompt("Qual o seu nome?"),
//     idade: prompt("Qual a sua idade?"),
//     profissao: prompt("Qual a sua profissão?")
// }

// console.log(informacoesUsuario)
// console.log(typeof informacoesUsuario)

// 2. ----------------------------------------------------------------------------------------

const filme1 = {
    anoDeLancamento: 2001,
    nome: "Senhor dos Anéis: A Sociedade do Anel"
}

const filme2 = {
    anoDeLancamento: 2002,
    nome: "Harry Potter e a Câmara Secreta"
 }

function idadeDosFilmes(recebeFilme1, recebeFilme2) {
    const filmePrimeiro = `O primeiro filme foi lançando antes do segundo? ${recebeFilme1.anoDeLancamento < recebeFilme2.anoDeLancamento}\n`
    const filmeSegundo = `O primeiro filme foi lançado no mesmo ano do segundo? ${recebeFilme1.anoDeLancamento === recebeFilme2.anoDeLancamento}`
    console.log(filmePrimeiro, filmeSegundo)
}

idadeDosFilmes(filme1, filme2)

// 3. --------------------------------------------------------------------------------------------------------------------------

// const carrinho = []

// const fruta1 = {
//     nome: "Banana", 
//     disponibilidade: true
// }

// const fruta2 = {
//     nome: "Maçã", 
//     disponibilidade: true
// }

// const fruta3 = {
//     nome: "Morango", 
//     disponibilidade: true
// }

// function recebeFruta(fruta) {
//     const adicionaNoCarrinho = carrinho.push(fruta)
//     return adicionaNoCarrinho
// }

// recebeFruta(fruta1)
// recebeFruta(fruta2)
// recebeFruta(fruta3)

// console.log(carrinho)

// function controleDeEstoque(controleFruta) {
//     let controle = controleFruta 
//     controle.disponibilidade = !controle.disponibilidade
//     return controle 
// }

// console.log(controleDeEstoque(fruta1))

