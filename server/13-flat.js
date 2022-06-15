const matriz = [
  [1,2,3],
  [4,5,6,[1,2,3]],
  [7,8,9]
];


const newArray = [];
for (let i = 0; i < matriz.length; i++) {
  const array1= matriz[i];
  for (let j = 0; j < array1.length; j++) {
    const array2 = matriz[i][j];
    newArray.push(array2);
      
  
      
  }  
}

function depth(list){
  let newList = [];
  if (typeof list != 'object') return list;
  list.forEach(element => { 
    newList = newList.concat(depth(element));
    
  });

  return newList;
  

}

const newArray1 = depth(matriz);
console.log('function',newArray1);

const rta = matriz.flat(2);

console.log('for', newArray);
console.log('flat', rta);