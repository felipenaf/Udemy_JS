function random(min = 0, max = 0){
    let resultado = Math.random() * (max - min) + min
    resultado = Math.round(resultado)
    console.log(resultado)
}

random(25, 50)