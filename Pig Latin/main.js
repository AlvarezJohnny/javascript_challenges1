function pigLatin(string) {
  let stringWord = string.toLowerCase().split("");
  let pigLatinString = [];

  let i = 0;

  while (i < stringWord.length) {
    letters = stringWord[i].split("");
    letters.push(letters.splice(0,1) + "ay");
    newWordLatin = letters.join("");
    if (i == 0) {
      newWordLatin = newWordLatin.slice(0,1) + newWordLatin.slice(1);
    }
    pigLatinString.push(newWordLatin);
    i++
  }
  pigLatinString = pigLatinString.join("");
  return pigLatinString;
}
