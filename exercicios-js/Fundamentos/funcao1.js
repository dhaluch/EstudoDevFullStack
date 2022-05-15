//Funcao sem retorno em javascript
function imprimirSoma(a , b){
    console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2);
//vai imprimer a soma dos dois primeiros e ignorar o restante
imprimirSoma(2, 3, 4, 5, 6, 7, 8, 9);
imprimirSoma();

//Funcao com retorno em javascript
function soma(a, b = 0){
    return a + b;
}
console.log(soma(3, 3));
console.log(soma(3));