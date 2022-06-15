const elements = [1, 3, 2, 3, 3, 12, 1];

const rta = elements.reduce((obj, element) => {
  if (!obj[element]) {
    obj[element] = 1;
  } else {
    obj[element]++;
  }

  return obj;

  
},{});

console.log(rta);

const data = [
  {
    name: 'Julian',
    level: 'hight',
  },
  {
    name: 'Hector',
    level: 'low',
  },
  {
    name: 'Rosalba',
    level: 'medium',
  },
  {
    name: 'Ana',
    level: 'high',
  },
  {
    name: 'Vale',
    level: 'low',
  },
  
];

const rta2 = data
.map(item => item.level)
.reduce((obj1, element1) => {
  if (!obj1[element1]) {
    obj1[element1] = 1;
  } else {
    obj1[element1]++;
  }

  return obj1;
}, {});

console.log(rta2);

//challenge

const numbers = [1,2,2,3,4,4,5,5,6,7,7,8,8,9,9,10,10];

const result = numbers.reduce((obj, element) => {
  if (element < 5) obj["1-4"]++;
  else if (element < 9) obj["5-8"]++;
  else obj["9-10"]++;
  
  return obj;
}, {
  "1-4": 0,
  "5-8": 0,
  "9-10": 0,
});

console.log(result);


const newNumbers = [9,6,5,8,7,4,1,2,3,6,5,2,1,4,7,8,9,6,6,2,5,4,9,6,6,5,5,6,10];
const numbersRangle = newNumbers.reduce((obj2,item) =>{
    if(item >= 1 && item <= 5){
        if(!obj2['1-5']){
            obj2['1-5'] = 1;
        }else{
            obj2['1-5'] += 1;
        }
    }else if(item >= 6 && item <= 8){
        if(!obj2['6-8']){
            obj2['6-8'] = 1;
        }else{
            obj2['6-8'] += 1;
        }
    }else if(item >= 9 && item <= 10){
        if(!obj2['9-10']){
            obj2['9-10'] = 1;
        }else{
            obj2['9-10'] += 1;
        }
    }

    return obj2;
},{});

console.log(numbersRangle);