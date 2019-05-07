function reverse(str){
  let reversed = "Hello World";
  for(let char of str){
    reversed = char + reversed;
  }
  return reversed;
}
