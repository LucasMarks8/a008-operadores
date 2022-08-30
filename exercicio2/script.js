let numero1 = Number(prompt("Escolha um numero qualquer"))
let numero2 = Number(prompt("escolha outro número"))

console.log("O primeiro numero é maior que o segundo?", numero1 > numero2)
console.log("O primeiro numero é igual ao segundo?", numero1 === numero2)
console.log("O primeiro numero é divisível pelo segundo?", numero1 % numero2 === 0)
console.log("O segundo numero é divisível pelo primeiro?", numero2 % numero1 === 0)