intergers = []
let i = 0
while (i < 100) {
  intergers.push(i+1)
  i++
}

for (x of intergers) {
  if (x % 3 == 0 && x % 5 == 0){
  console.log("Fizzbuzz")
} else if (x % 5 == 0) {
  console.log("buzz")
} else if (x % 3 == 0) {
  console.log("fizz")
} else {
  console.log(x)
}
}
