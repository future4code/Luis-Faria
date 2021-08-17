// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  altura = prompt("Digite aqui a altura:")
  largura = prompt("Digite aqui a lagura:")
  const areaRetangulo = altura * largura
  console.log(areaRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento) {
  anoAtual = prompt("Digite aqui o ano atual:")
  anoNascimento = prompt("Digite aqui o ano de seu nascimento:")
  const idadeUsuario = anoAtual - anoNascimento 

  console.log(idadeUsuario)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
    IMC = peso / (altura * altura)

  return IMC
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nomeUsuario, idadeUsuario, emailUsuario) {
  nomeUsuario = prompt("Digite o seu nome:")
  idadeUsuario = prompt("Qual a sua idade?")
  emailUsuario = prompt("Qual o seu email?")

  const informacoesUsuario = `Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`
  console.log(informacoesUsuario)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(primeiraCor, segundaCor, terceiraCor) {
  primeiraCor = prompt("Qual a sua primeira cor favorita?")
  segundaCor = prompt("Qual a sua segunda cor favorita?")
  terceiraCor = prompt("Qual a sua terceira cor favorita?")

  const coresFavoritas = [primeiraCor, segundaCor, terceiraCor]

  console.log(coresFavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  string = string.toUpperCase()
  return string

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const quantidadeIngresso = Math.ceil(custo / valorIngresso)
  return quantidadeIngresso 

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  eIgual = string1.length === string2.length
  return eIgual

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  primeiroElemento = array[0]
  return primeiroElemento

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  ultimoElemento = array[array.length - 1]
  return ultimoElemento

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let novoArray = array
  const temporario1 = novoArray[0]
  novoArray[0] = novoArray[novoArray.length - 1]
  novoArray[novoArray.length - 1] = temporario1
  return novoArray
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase()
   
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = prompt("Qual o ano atual?")
  const anoNascimento = prompt("Qual o seu ano de nascimento?")
  const anoCarteiraEmitida = prompt("Qual o ano que sua carteira de identidade foi emitida?")

  const idade = anoAtual - anoNascimento
  const idadeCarteira = anoAtual - anoCarteiraEmitida
  
  if (idade <= 20 && idadeCarteira >= 5) {
    console.log(true)
  } else if (idade > 20 && idade <= 50 && idadeCarteira >= 10) {
    console.log(true)
  } else if (idade > 50 && idadeCarteira >= 15) { 
    console.log(true)
  } else { 
    console.log(false)
  }

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  
const condicao1 = ano % 400 === 0
const condicao2 = ano % 4 === 0 || (ano % 100 === 0 && !ano % 400 === 0)

return condicao1 || condicao2 === true 

 

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}