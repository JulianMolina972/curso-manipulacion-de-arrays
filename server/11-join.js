const elements = ['fire', 'water', 'earth', 'air'];


let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  rtaFinal += element + separator;
  const newStr = rtaFinal.slice(0, -2);
  console.log(newStr);

}



const rta2 = elements.join(separator);

console.log(rtaFinal);

console.log(rta2);


const title = 'Curso de manipulacion de arrays';

const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal);