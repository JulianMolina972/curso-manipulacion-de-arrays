const letters = ['a','b','c'];


// El método de map transforma el array original y crea uno nuevo con las modificaciones de cada elementp
const newArray = letters.map(item => item + '++')
// const newArray = [];
// for (let index = 0; index < letters.length; index++) {
//     const element = letters[index];
//     newArray.push(element + '++');
    
// }

console.log(`Original ${letters}`);
console.log(`New ${newArray}`);