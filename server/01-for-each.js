const letters = ['a', 'b', 'c'];

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log('for', element);
    
}

const newLetters = [];
letters.forEach(item => {
    newLetters.push(item + '2'),
    console.log('forEach', item + 'hello')});

console.log(letters);
console.log(newLetters);