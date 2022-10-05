let x = 0
let vet = []
while (x < 100) {
  x++
  vet.push(x)
  console.log(x)
}
console.log(vet)
//---------------------------------parte 2
console.log("-------------exercicio 2----------------")
let val1 = Number(prompt("Digite o valor inicial.:"))
let val2 = Number(prompt("Digite o valor final.:"))
let vet2 = []
while (val1 < val2) {
  val1++
  vet2.push(val1)
  
}
vet2.pop(val1)
console.log(vet2)