const pets = ['dog', 'cat', 'bird', 'fish'];


let includeArray = false;
for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  if (element === 'dog') {
    includeArray = true;
    break;
  }
  
}

console.log('for', includeArray);

const rta = pets.includes('dog');

console.log('includes', rta);



function solution(words, query) {
	const rta4 = words.filter(word => word.includes(query));
	
	
	return rta4;
}; 

console.log(solution(["ana", "santi", "nico", "anastasia"], "an"));

