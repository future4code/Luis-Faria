~~~javascript
let numeroVezes = 0
  for (let numero of arrayDeNumeros) {
    if (numeroEscolhido === numero) {
      numeroVezes++ 
    }
  }
  if (numeroVezes > 0) {
    return `O número ${numeroEscolhido} aparece ${numeroVezes}x`
  } else {
    return "Número não encontrado"
  }  
}
~~~