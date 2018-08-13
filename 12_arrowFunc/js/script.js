console.log("!!!" + location);


function haveEnough(money, apples, applesCost, brad, bradCost) {

	money - (apples * applesCost + brad * bradCost) >= 0 ? console.log('Вам хватает денег на покупки') : console.log('Вам не хватает денег на покупки');
}


haveEnough(1000, 10, 50, 10, 80);

/*
let myText = (elem, text) => {elem.innerHTML = text;}
/!*
let myText = function (elem, text) { // ES 5
	elem.innerHTML = text
}
*!/

myText(document.body, 'Shik')*/
