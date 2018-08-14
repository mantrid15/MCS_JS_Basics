let names = [
	[
		['куры', 'гуси', 'павлины'],
		['сокол', 'орел', 'соловей']
	],
	[
		['собака', 'кошка'],
		['обезьяна', 'рысь']
	]
];

	let res = '';
	let namesNew;
	names.forEach(function(key) {
		res += key +',';
	namesNew = res.split(',');
	namesNew.pop();
		});
	console.log(res); // если строкой
	console.log(namesNew); // если массивом
/*
const button = document.querySelector('button');
const lorems = document.querySelectorAll('div');

button.onclick = () => {
	lorems.forEach((lorem) => {
		lorem.style.fontSize = '25px';
	})
}*/