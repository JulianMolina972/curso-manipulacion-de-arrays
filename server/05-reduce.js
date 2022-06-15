/*
Este método REDUCE, efectivamente hace eso. Solo reduce a un solo valor y no devuelve otro array, simplemente un valor.
.
Se utiliza muchísimo para hacer cálculos a partir de la información de un array.
.
En su composición, a primeras, tiene como argumentos de la función del primer parámetro, al acumulador y como segundo parámetro al elemento por el que va iterando el loop. Y como segundo argumento del reduce(), se pasa el valor inicial del acumulador.
*/const totals = [1,2,3,4];


let sum = 0;
for (let i = 0; i < totals.length; i ++){
  const total = totals[i];
  sum += total;
  
}

console.log(sum);

const rta = totals.reduce((sum, element) => sum - element, 0);
console.log('rta', rta);

// 0 - 1 = -1;
// -1 - 2 = -3;
// -3 - 3 = -6;
// -6 - 4 = -10;
