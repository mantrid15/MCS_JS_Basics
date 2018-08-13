/*
let pipl = ['Mantrid', 'Csdf', 'Basil'];
console.log(pipl);
console.log(pipl[0]);
pipl[2] = 'Murzik';
console.log(pipl.length);

let bigArr = [
		[1,2,3],
		[true, false],
		['j', 'a', 'd']
];
console.log(bigArr[0][0]);
*/

/*
let bigObj = {
	names : ['Mantrid', 'Csdf', 'Basil'],
	grades : [
		{
			intern : 1,
			junior : 2
		},
		{
			middle : 3,
			senior : 2
		}
	]
};
console.log(bigObj.names[2]);
console.log(bigObj.grades[1].middle);
*/
const cart = {
	orderID: 12345,
	shopperName: "Ваня Иванов",
	shopperEmail: "ivanov@example.com",
	contents: [
		{
			productID: 34,
			productName: "Супер товар",
			quantity: 1
		},
		{
			productID: 56,
			productName: "Чудо товар",
			quantity: 3
		}
	],
	orderCompleted: true
}
console.log(cart.contents[1].productName);