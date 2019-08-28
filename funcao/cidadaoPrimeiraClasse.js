// Função em JS é First-Class Object (citizens)
// Higher-order function

function fun01() {}

const fun02 = function() {}

const fun03 = [
    function() {},
    function() {},
    function() {}
]

fun03.forEach(element => {
    console.log(element)
});

const obj = {}
obj.fun04 = function() {}

console.log(obj.fun04)

function fun05(fun06) {
    fun06()
}

fun05(function(){
    console.log("OLÁ!!!")
})

function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}

// duas formas de fazer
soma(5, 2)(4)

const mais = soma(5, 2)
mais(4)