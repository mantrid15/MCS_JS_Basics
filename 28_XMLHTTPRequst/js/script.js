
document.querySelector('button').onclick = function () {

const APIKey = 'ea658a8330bdcda1589c5054d782e43a';
const city = document.getElementById('city').value;
const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;
const outtemp = document.getElementById('outtemp');
const outwind = document.getElementById('outwind');

let xhr = new XMLHttpRequest();
xhr.open('GET', url, false);
xhr.send();
var DATA = JSON.parse(xhr.responseText);

		if(xhr.status != 200) {
		console.log(xhr.status + ' ' + xhr.statusText );
	} else {

		const inTemp = 'Температура воздуха: ' + Math.floor(DATA.main.temp - 273) + ' градусов по Цельсию';
			outtemp.innerHTML = inTemp;
	const inWind = 'Скорость ветра: ' + DATA.wind.speed + ' м/сек.';
	outwind.innerHTML = inWind;

// console.log(outtemp);
// console.log(inTemp);
console.log(DATA);
			console.log(DATA.wind.speed);
	}
}

