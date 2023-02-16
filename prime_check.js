let number = 11;
let count = 0;

for(let i=2; i<number;){
    number%i===0 ? count++ :  i++
}

count===0 ? console.log("Prime number") : console.log("Not Prime Number");