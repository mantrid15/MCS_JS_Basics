const form = document.forms[0];
const insert = document.querySelector('.total');

form.onsubmit = function (e) {
	e.preventDefault(); // отиена дефолтных событий
	insert.innerHTML = Math.sin((Math.PI * form.elements.degree.value) / 180)
};
console.log(form.onsubmit);

