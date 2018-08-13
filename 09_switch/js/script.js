console.log("!!!" + location);

let answer = prompt('Введите имя музыканта!!!', "YES");
answer = answer.toLowerCase();
//console.log(answer);
switch (answer) {
	case 'dre dre':
		console.log('rap');
		break;
	case 'yes':
		console.log('cool');
		break;
	default:
		console.log('not in base');
		break;
}