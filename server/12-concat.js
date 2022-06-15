const elements = [1,1,2,2,];
const othersElements = [3,3,3,4,5];

const newArray = [...elements];

for (let index = 0; index < othersElements.length; index++) {
  const element = othersElements[index];
  newArray.push(element);
  
}

const newArray2 = elements.concat(othersElements);
const rta2 = [...elements, ...othersElements];
const rta3 = [...elements, 'random'];



console.log(rta3);
console.log(rta2);
console.log(newArray);
console.log(newArray2);

elements.push(...othersElements);
console.log(elements);