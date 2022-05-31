const orders = [
	{
		customerName: "Nicolas",
		total: 60,
		delivered: true,
	},
	{
		customerName: "Julian",
		total: 120,
		delivered: false,
	},
	{
		customerName: "Santiago",
		total: 180,
		delivered: true,
	},
	{
		customerName: "Valentina",
		total: 240,
		delivered: true,
    },
  ];
	
console.log('original' , orders);
const rta = orders.map(item => item.total);
console.log('rta', rta);

// const rta2 = orders.map((item) => {
// 	item.tax = 0.19;
// 	return item;
// });
// console.log('original' , orders);
// console.log('rta2', rta2);

const rta3 = orders.map((item) => {
	return {
		...item,
		tax : 0.19
	};
});


console.log('rta3', rta3);
console.log('original' , orders);


const array = [
  {
    name: "Product 1",
    price: 1000,
    stock: 10
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20
  },
  
];

function solution(array1) {
	const priceArray = array1.map(item => {
		const prices = item.price * 0.19;
		return {
			...item,
			taxes: prices
		};
		
	});
	return priceArray;
	console.log(priceArray);
}


function solution1(array){
	return array.map(item => ({
		...item,
		taxes: Math.trunc(item.price * .19)
	}))
}; 

console.log(solution(array));

console.log(solution1(array));

