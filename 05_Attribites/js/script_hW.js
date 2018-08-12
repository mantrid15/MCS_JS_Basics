let money = +prompt('денег у тебя?', "1000");
let apples= +prompt('сколько яблок купил', "10");
let brad = +prompt('сколько хлеба купил', "10");
let applesCost = +prompt('цена яблок, р.', "10");
let bradCost = +prompt('цена хлеба, р.', "10");
let  saldo= (money - (apples * applesCost + brad * bradCost));

if (saldo < 0) {
	document.body.innerHTML = false;
}else {
	document.body.innerHTML = true;
}
