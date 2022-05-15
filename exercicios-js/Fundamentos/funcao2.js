//Armazenando uma funcao em uma variavel
const imprimirSoma = function(a, b = 0){
   console.log(a + b);
}
imprimirSoma(2, 3);

//Armazeando uma funcao arrow em uma variavel
const soma = (a, b = 0) => {
    return a + b;
}
console.log(soma(3, 3));

//retorno implicito
const subtracao = (a, b) => a - b;

console.log(subtracao(3, 5));