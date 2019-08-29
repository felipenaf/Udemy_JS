const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(let i in notas){
    console.log(notas[i])
}

const pessoa = {
    nome: "Felipe",
    sobrenome: "Ferreira",
    idade: 27,
    peso: 85
}

for(let attr in pessoa){
    console.log(`${attr} = ${pessoa[attr]}`)
}