console.log("!!!" + location);

let Users = {
	hasAccesToProfile: true,
	approved: true,
	sayHi: function () {
		return 'Sholom';
	}
}

function User(name, email, password) {
	// constructor
	this.name = name;
	this.email = email;
	this.password = password;
	this.__proto__ = Users;
}
const Fedya = new User('Федя', 'fedya@ex.com', 'qwerty');
console.log(Fedya);
console.log(Fedya.sayHi());

function FUser(name, email, password) {
	// constructor
	this.name = name;
	this.email = email;
	this.password = password;
	this.__proto__ = Users;
	this.sayHi = function () {
		return 'Sholom,' + this.name + 'Ты зарегистрирована!!!! You are registred and FOAD!! ';
	}
}

const Alla = new FUser('Alla', 'a@ex.com', 'qwerafd');
console.log(Alla);
console.log(Alla.sayHi());