const form = document.forms[0];
//console.log(form[0].elements.quantility);
const insert = document.querySelector('.total');

form.onsubmit = function (e) {
	e.preventDefault(); // отиена дефолтных событий
	insert.innerHTML = form.elements.quantility.value * form.elements.price.value
};
console.log(document.forms[0]);