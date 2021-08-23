// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(((a,b) => a-b))
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    
    const apenasNumerosPares = array.filter((item) => {  
        return item % 2 === 0 
    })
    return apenasNumerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

    return array.filter((item) => {  
        return item % 2 === 0
    }).map((item) => {
        return item ** 2
    })
    
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {

    let maior = -Infinity
    for(let numero of array) {
       if (numero > maior) {
           maior = numero
       }  
    }
    return maior 
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    let maiorNumero 
    if (num1 > num2) {
        maiorNumero = num1
    } else {
        maiorNumero = num2
    }

    let menorNumero 
    if (num1 > num2) {
        menorNumero = num2
    } else {
        menorNumero = num1
    }


    let maiorDivisivelPorMenor = maiorNumero % menorNumero === 0

    let diferenca = maiorNumero - menorNumero

        return {
            maiorNumero,
            maiorDivisivelPorMenor,
            diferenca
        }
   

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
    let arrayNumerosPares = []

    for(let i = 0; i < n; i++) {
        arrayNumerosPares.push(2 * i)
    }
    return arrayNumerosPares

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if (ladoA === ladoB && ladoB === ladoC) {
        return "Equilátero"
    } else if ((ladoA === ladoB && ladoA !== ladoC && ladoB !== ladoC) || (ladoA === ladoC && ladoC !== ladoB && ladoA !== ladoB) || (ladoB === ladoC && ladoA !== ladoB && ladoC !== ladoA )) {
        return "Isósceles"
    } else {
        return "Escaleno"
    } 
    


}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}