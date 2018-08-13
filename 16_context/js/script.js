const button = document.querySelector('button');
console.log(this);

window.onscroll = function () {
	console.log(this);
}


button.onclick = function () {
	this.innerHTML = 'Sholom';
}

button.onclick = () => {
	console.log(this);
}