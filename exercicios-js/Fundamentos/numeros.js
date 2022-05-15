const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
//retorna false or true se o valor é um inteiro

console.log(Number.isInteger(peso1))

const avalidacao1 = 9.871
const avaliacao2 = 6.871

const total = avalidacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)
//toFixed() serve para controlar a quantidade de casas decimais que será mostrada.
console.log(media.toFixed(2))