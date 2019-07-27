// As constantes não entram em conflito pois cada uma pertence a um contexto diferente
// E no caso da chave "nome" também entra na mesma explicação
const saudacao = "olá" //contexto léxico

function exec(){
    const saudacao = "Hello"
    return saudacao
}

const cliente = {
    nome: "Felipe",
    idade: "27",
    peso: 80,
    endereco:{
        nome: "Rua dos bobos",
        numero: 150
    }
} 

console.log(saudacao)
console.log(exec())
console.log(cliente)