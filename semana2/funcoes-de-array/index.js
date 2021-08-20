//------------------------- Exercícios de Interpretaçãeo de código ----------------------------

// 1. Vai aparecer os objetos juntos do seus respectivos index numa nova array, e uma repetição
// das arrays pra cada elemento.

//--------------------------------------------------------------------------------------------

// 2. Vai aparecer os elementos dos objtos, nomes. Isso dentro de uma array nova.

//---------------------------------------------------------------------------------------------

// 3. Vai aparecer uma nova array com os objetos pertecentes ao filtro colocado, que é tudo 
// diferente ao objeto que contenha o apelido chijo, ou seja os objetos da Amanda e da Lais 

//------------------------ Exercícios de Escrita de código ---------------------------------------

// 1. 

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

// a)

const nomeDosPets = pets.map((item) => {
    return item.nome
})

// b)

const apenasSalsichas = pets.filter((item) => {
    return item.raca === "Salsicha"
})

// c)

const mensagemPoodle = pets
.filter((item) => {
    return item.raca === "Poodle"
})
.map((item) => {
    return (`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`)
})

//-----------------------------------------------------------------------------------------------------

// 2. 

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// a)

const nomeItem = produtos.map((item) => {
    return item.nome
})

// b)

const descontoItems = produtos.map((item) => {
    return {nome: item.nome, preco: item.preco * 0.95}
})

// c)

const filtraBebidas = produtos.filter((item) => {
    return item.categoria === "Bebidas"
})

// d)

const apenasYpe = produtos.filter((item) => {
    return item.nome.includes("Ypê")
})

// e)

const fraseYpe = produtos
.filter((item) => {
    return item.nome.includes("Ypê")
})
.map((item) => {
    return (`Compre ${item.nome} por ${item.preco}`)
})


// ------------------------------------- Desafios --------------------------------------------------

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 // a)

const pokemonsOrdemAlfabetica = pokemons.map((item) => {
    return item.nome
}).sort()

// b)

const tiposPokemonsSemRepeticao = []
pokemons.forEach((item) => {
    if (!tiposPokemonsSemRepeticao.includes(item.tipo)) {
        tiposPokemonsSemRepeticao.push(item.tipo)
    }
})

console.log(tiposPokemonsSemRepeticao)

