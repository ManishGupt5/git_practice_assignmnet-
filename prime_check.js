let a = 5
let count=0
for (let i = 1; i <= a; i++) {
  if (a %i !== 0)
    count++
}
if (count == 3) {
  console.log("this is prime number")
}
else {
    console.log("not a prime")
  }