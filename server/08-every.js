const numbers = [1,30,43,12,213];

let rta = true;

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if(element >= 241){
    rta = false;
  }
  
}

console.log('for', rta);

const rta2 = numbers.every(item => item < 41);

console.log('every', rta2);

//challenge

const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const rta3 = team
//.map(item => item.age)
.every(item => item.age < 15);

console.log('every', rta3);

if(rta3 === false){
  console.log('they do cannot enter');
} else {
  console.log('they can enter');
}



