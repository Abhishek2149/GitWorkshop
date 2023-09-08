const input = require("prompt-sync")();
let a = input("Enter a number:");
a = parseInt(a);
// console.log(a)

for(let i = a;i<=a*10;i=i+a){
    console.log(i)
}