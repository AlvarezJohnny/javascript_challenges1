str = "banana"
const vowels = ['a', 'e', 'i', 'o', 'u']

let pigLatin = (string) => {
  if (vowels.includes(string[0])) {
    console.log('This starts with a consonant')
  }
}
