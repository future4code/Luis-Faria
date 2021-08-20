/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    if(confirm("Boas vindas ao jogo de Blackjack! \nQuer inciar uma nova rodada?")) {
       let cartaUsuario1 = comprarCarta()
       let cartaUsuario2 = comprarCarta()
       let cartaComputador1 = comprarCarta()
       let cartaComputador2 = comprarCarta()

       while(cartaUsuario1.valor === 11 && cartaUsuario2.valor === 11) {
         cartaUsuario1 = comprarCarta()
         cartaUsuario2 = comprarCarta()
       }

       while(cartaComputador1.valor === 11 && cartaComputador2.valor === 11) {
         cartaComputador1 = comprarCarta()
         cartaComputador2 = comprarCarta()
       }

       let arrayCartas = [cartaUsuario1, cartaUsuario2]
       let arrayCartasComputador = [cartaComputador1, cartaComputador2]

       let somaCartasUsuario = arrayCartas.reduce((a, b) => a + b.valor, 0)
       let somaCartasComputador = arrayCartasComputador.reduce((a, b) => a + b.valor, 0)

       while (somaCartasUsuario <= 21 && confirm(`Suas cartas são ${arrayCartas.map(item => item.texto)}. A carta revelada do computador é ` 
       + `${cartaComputador1.texto}\nDeseja comprar mais uma carta?`)){
         arrayCartas.push(comprarCarta()) 
         somaCartasUsuario = arrayCartas.reduce((a, b) => a + b.valor, 0)
       }

       while (somaCartasComputador < 21 && somaCartasComputador <= somaCartasUsuario && somaCartasUsuario <= 21){
          arrayCartasComputador.push(comprarCarta())
          somaCartasComputador = arrayCartasComputador.reduce((a, b) => a + b.valor, 0)
       }

       let quemGanhou = ""
       if(somaCartasUsuario > 21 || (somaCartasComputador > somaCartasUsuario && somaCartasComputador <= 21)) {
          quemGanhou = "O computador ganhou!"
       } else if (somaCartasComputador > 21 && somaCartasUsuario <= 21){
          quemGanhou = "O usuário ganhou!"
       }  else if (somaCartasComputador === somaCartasUsuario) {
          quemGanhou = "O jogo terminou em empate!"
       }

       alert(`Sua cartas são ${arrayCartas.map(item => item.texto)}. Sua pontuação é ${somaCartasUsuario}` + 
       "\n" +
       `As cartas do computador são ${arrayCartasComputador.map(item => item.texto)}. A pontuação do computador é ${somaCartasComputador}` +
       "\n" +
       quemGanhou
       )
    
    
    } else {
       alert("O jogo acabou")
    }