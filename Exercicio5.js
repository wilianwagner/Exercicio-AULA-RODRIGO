//cada vetor representa um mes
let carros = [[], [], [], [], [], [], [], [], [], [], [], [], [],] 
let nomeCarro = 0 // variavel para nome de carro

//Loop para definir mês e encerrar programa
while (mes != "fim") {
  nomeCarro = 0 // Redefine o nome do carro para não travar while
  var mes = prompt("digite o numero do mês de venda, digite fim para sair")
  switch (mes) { // casos dos mes

    case '1': //janeiro 
      while (nomeCarro != "pronto") {
        nomeCarro = prompt("Digite o carro que você vendeu em janeiro, ao finalizar digite pronto:")
        carros[1].push(nomeCarro)
        console.log(nomeCarro)
      }
      console.log("janeiro")
      carros[1].pop()
     
      break

    case '2'://fevereiro
      while (nomeCarro != "pronto") {
        nomeCarro = prompt("Digite o carro que você vendeu em fevereiro, ao finalizar digite pronto:")
        carros[2].push(nomeCarro)
      }
      console.log("fevereiro")
      carros[2].pop()
     
      break

    case '3'://março
      while (nomeCarro != "pronto") {
        nomeCarro = prompt("Digite o carro que você vendeu em março, ao finalizar digite pronto:")
        carros[3].push(nomeCarro)
      }
      console.log("março")
      carros[3].pop()
     
      break



    case '4'://abril
      while (nomeCarro != "pronto") {
        nomeCarro = prompt("Digite o carro que você vendeu em abril, ao finalizar digite pronto:")
        carros[4].push(nomeCarro)
      }
      console.log("abril")
      carros[4].pop()
     
      break



    case '5'://maio
      while (nomeCarro != "pronto") {
        nomeCarro = prompt("Digite o carro que você vendeu em maio, ao finalizar digite pronto:")
        carros[5].push(nomeCarro)
      }
      console.log("maio")
      carros[5].pop()
     
      break


    case '6'://junho
      while (nomeCarro != "pronto") {
        nomeCarro = prompt("Digite o carro que você vendeu em junho, ao finalizar digite pronto:")
        carros[6].push(nomeCarro)
      }
      console.log("junho")
      carros[6].pop()
     
      break



    case '7'://julho
      while (nomeCarro != "pronto") {
        nomeCarro = prompt("Digite o carro que você vendeu em julho, ao finalizar digite pronto:")
        carros[7].push(nomeCarro)
      }
      console.log("julho")
      carros[7].pop()
     
      break


    case '8'://agosto
      while (nomeCarro != "pronto") {
        nomeCarro = prompt("Digite o carro que você vendeu em agosto, ao finalizar digite pronto:")
        carros[8].push(nomeCarro)
      }
      console.log("agosto")
      carros[8].pop()
     
      break


    case '9'://setembro
      while (nomeCarro != "pronto") {
        nomeCarro = prompt("Digite o carro que você vendeu em setembro, ao finalizar digite pronto:")
        carros[9].push(nomeCarro)
      }
      console.log("setembro")
      carros[9].pop()
     
      break

    case '10'://outubro
      while (nomeCarro != "pronto") {
        nomeCarro = prompt("Digite o carro que você vendeu em outubro, ao finalizar digite pronto:")
        carros[10].push(nomeCarro)
      }
      console.log("outubro")
      carros[10].pop()
     
      break


    case '11'://novembro
      while (nomeCarro != "pronto") {
        nomeCarro = prompt("Digite o carro que você vendeu em novembro, ao finalizar digite pronto:")
        carros[11].push(nomeCarro)
      }
      console.log("novembro")
      carros[11].pop()
     
      break

    case '12'://dezembro
      while (nomeCarro != "pronto") {
        nomeCarro = prompt("Digite o carro que você vendeu em dezembro, ao finalizar digite pronto:")
        carros[12].push(nomeCarro)
      }
      console.log("dezembro")
      carros[12].pop()
      break

    }
}
console.log(carros)
