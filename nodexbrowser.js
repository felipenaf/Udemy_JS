module.exports.a = "abc"
module.exports.b = "def"
this.a = "ghi"
this.b = "jkl"

console.log(module.exports === this)
console.log(module.exports)