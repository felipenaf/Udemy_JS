console.log("## Declaração de Variáveis ##");
console.log("\n");

let num = 1;
{
    let num2 = 2;
    console.log("dentro = ", num);
}

console.log("\n");
console.log("fora = ", num);
console.log("\n");

/** 
 
    Caso não haja a variável let dentro do escopo, o sistema procura o mais próximo fora dele e acima.

*/
