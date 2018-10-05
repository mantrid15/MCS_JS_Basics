let crypto = [
	{
		name: "Bitcoin",
		price: 1388.37
	},
	{
		name: "Ethereum",
		price: 716
	},
	{
		name: "Litecoin",
		price: 140
	}
];
const hh = document.querySelectorAll('h1');
const pp = document.querySelectorAll('p');
const counter = document.getElementsByName('counter');
const button = document.querySelector('button');
var dataPrice = [];
var price;

function maxPrice() {

	for (let i = 0; i < crypto.length; i++) {
		dataPrice += crypto[i].price + ',';
	}
	price = dataPrice.split(',').map(Number).filter(Boolean);
	return Math.max.apply(null, price);
}

maxPrice(price);
button.onclick = () => {
	for (let i = 0; i < crypto.length; i++) {
		hh[i].innerHTML = crypto[i].name;
		pp[i].innerHTML = crypto[i].price;
		counter[i].style.width = 600 * crypto[i].price / maxPrice(price) + 'px';
	}
};