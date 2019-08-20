function tratarErro(erro){
    throw new Error("Error ...")
    
    // throw {
    //     codigo: 10,
    //     nome: "Não foi possível imprimir",
    //     data: new Date()
    // }

    // throw new Error(erro.name)
}

function imprimirNome(obj){
    try{
        console.log(obj.name.toUpperCase())
    }catch(e){
        tratarErro(e)
    }
}

var obj = {nome: "Felipe"}

imprimirNome(obj)