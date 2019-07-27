// funções são objetos no js
function Pessoa(nome){
    this.nome = nome
    this.exec = function(){
        return "Executando ..."
    }
}

var p1 = new Pessoa("Felipe")
console.log(p1.nome)
console.log(p1.exec())