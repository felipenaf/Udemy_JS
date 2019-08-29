const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

// funcs[2]()
// funcs[6]()
for(let j = 0; j < 10; j++){
    console.log("\n")
    for(let k = 0; k < 10; k++){
        funcs[k]()
    }
}

