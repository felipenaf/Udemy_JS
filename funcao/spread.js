let pDez = [0,1,2,3,4,5,6,7,8,9]

let sDez = [...pDez, 10,11,12,13,14,15,16,17,18,19]

// console.log(sDez)

const profissao = {
    cargo: "Programador",
    empresa: "AML"
}

const pessoa = {
    nome: "Felipe",
    idade: 27,
    fone: "958106963",
    ddd: 11,
    ...profissao
}

console.log(pessoa)