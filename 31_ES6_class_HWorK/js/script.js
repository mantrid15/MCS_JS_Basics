class Custumer {
	constructor(name) {
		this.name = name
	}
	buy() {
		return 'Куплено ' + this.name;
	}
}

class childCustumer extends Custumer {
	getPresent() {
		return 'Шарик в подарок ' + this.name;
	}
}
const Man = new Custumer('Mantrid');
console.log(Man);
console.log(Man.buy());

const child = new childCustumer ('Кузя')
console.log(child.getPresent());

