function soma(a, b, c){
    a = isNaN(a) ? 1 : a
    b = isNaN(b) ? 1 : b
    c = isNaN(c) ? 1 : c
    console.log(a + b + c)
}

function soma2(a = 1, b = 1, c = 1){
    console.log(a + b + c)    
}

soma(0,0,0)
soma2(0,0,0)

