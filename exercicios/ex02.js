/**
 * Escreva um programa que calcule e mostre a tabuada 
 * (até 10x) de um número qualquer, digitado pelo usuário.
*/

let tabuada = function (n){
    let r = []
    for(let i=1; i<=10; i++){
        r.push(n*i)
    }
    return r
}

tabuada(6).forEach(vl => {
    console.log(vl)
});
