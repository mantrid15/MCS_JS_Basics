/*class User {
	constructor(name, email, password) {
		name,
		email,
		password
	}
	sayHi() {
		return 'Sholom' + this.name;
	}
}*/

class User {
	constructor(name, email, password) {
		this.name = name,
		this.email = email,
		this.password = password
	}
	sayHi() {
		return 'Sholom ' + this.name;
	}
}

class Female extends User{
	sayHi() {
		return 'Sholom ' + this.name + ' Ты зарегина';
	}
}

const Man = new User('some', '123@uc.com', '1234');
console.log(Man);
console.log(Man.sayHi());

const Ann = new Female('someone', '12@u.com', '12');
console.log(Ann);
console.log(Ann.sayHi());

