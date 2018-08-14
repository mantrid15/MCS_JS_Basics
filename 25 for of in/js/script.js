//console.log("!!!" + location);
const buttons = document.querySelectorAll('button');

for (button of buttons) {
	button.style.backgroundColor = 'lightblue';
}
let person = {
	name : 'Mantrid',
	sname : 'Mantrid2',
	teacher: true,
	bbb : 'r87t'
}
 for (key in person) {
	 console.log(person);
 }


/*
for (key in buttons) {
	buttons[key].style.backgroundColor = 'lightblue';
}*/
