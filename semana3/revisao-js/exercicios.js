// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a - b);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const apenasNumerosPares = array.filter((item) => {
    return item % 2 === 0;
  });
  return apenasNumerosPares;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  return array
    .filter((item) => {
      return item % 2 === 0;
    })
    .map((item) => {
      return item ** 2;
    });
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior = -Infinity;
  for (let numero of array) {
    if (numero > maior) {
      maior = numero;
    }
  }
  return maior;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNumero;
  if (num1 > num2) {
    maiorNumero = num1;
  } else {
    maiorNumero = num2;
  }

  let menorNumero;
  if (num1 > num2) {
    menorNumero = num2;
  } else {
    menorNumero = num1;
  }

  let maiorDivisivelPorMenor = maiorNumero % menorNumero === 0;

  let diferenca = maiorNumero - menorNumero;

  return {
    maiorNumero,
    maiorDivisivelPorMenor,
    diferenca,
  };
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let arrayNumerosPares = [];

  for (let i = 0; i < n; i++) {
    arrayNumerosPares.push(2 * i);
  }
  return arrayNumerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoB === ladoC) {
    return 'Equilátero';
  } else if (
    (ladoA === ladoB && ladoA !== ladoC && ladoB !== ladoC) ||
    (ladoA === ladoC && ladoC !== ladoB && ladoA !== ladoB) ||
    (ladoB === ladoC && ladoA !== ladoB && ladoC !== ladoA)
  ) {
    return 'Isósceles';
  } else {
    return 'Escaleno';
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let maior = -Infinity;
  let menor = Infinity;
  let segundoMaior = -Infinity;
  let segundoMenor = Infinity;

  array.forEach((numero) => {
    if (maior < numero) {
      maior = numero;
    }
    if (menor > numero) {
      menor = numero;
    }
  });
  array.forEach((numero) => {
    if (segundoMaior < numero && maior > numero) {
      segundoMaior = numero;
    }
    if (segundoMenor > numero && menor < numero) {
      segundoMenor = numero;
    }
  });
  return [segundoMaior, segundoMenor];
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  const filmeEscolhido = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci'],
  };

  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  return { ...pessoa, nome: 'ANÔNIMO' };
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  return pessoas.filter((item) => {
    return item.altura >= 1.5 && item.idade > 14 && item.idade < 60;
  });
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  return pessoas.filter((item) => {
    return item.altura < 1.5 || item.idade <= 14 || item.idade >= 60;
  });
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  contas.forEach((item) => {
    item.saldoTotal =
      item.saldoTotal -
      item.compras.reduce((accummulator, value) => accummulator + value, 0);
    item.compras = [];
  });

  return contas;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  return consultas.sort((a, b) => {
    if (a.nome > b.nome) {
      return 1;
    }
    if (a.nome < b.nome) {
      return -1;
    }
    return 0;
  });
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  return consultas.sort((a, b) => {
    const splitA = a.dataDaConsulta.split('/');
    const data1 = new Date(splitA[2], splitA[1], splitA[0]);
    const splitB = b.dataDaConsulta.split('/');
    const data2 = new Date(splitB[2], splitB[1], splitB[0]);

    if (data1 > data2) {
      return 1;
    }
    if (data1 < data2) {
      return -1;
    }
    return 0;
  });
}
