function reverse(str){
 if(str === ""){
  return str
 }else{
  return reverse(str.substr(1)) + str[0]
 }
}
