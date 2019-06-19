console.log("## Declaração de Variáveis ##");
console.log("\n");

var num = 1;
{
    var num = 2;
    console.log("dentro = ", num);
}

console.log("\n");
console.log("fora = ", num);
console.log("\n");

/**

    O var só não é global quando esta dentro de função 
    Nesse caso o segundo var está sobrepondo o primeiro

*/
