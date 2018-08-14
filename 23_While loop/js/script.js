//console.log("!!!" + location);
const item = document.getElementsByTagName('li');
console.log(item);
let counter = 0;
while (counter < item.length) {
	item[counter].innerHTML = counter + 1;
	counter++;
}