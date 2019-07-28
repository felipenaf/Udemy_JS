
const Cliente = function() {

    this.setNome = function(nome){
        this.nome = nome
    }

    this.getNome = function(){
        return this.nome
    }
}

Cliente.prototype.idade = 15

c1 = new Cliente()
c1.setNome("Felipe")
console.log(c1.getNome())

c2 = new Cliente()
c2.setNome("Tati")
console.log(c2.getNome())

console.log(c1.idade)

