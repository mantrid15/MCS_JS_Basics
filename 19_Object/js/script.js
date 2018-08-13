


let person = {
	name : 'Mantrid',
	surname : "Moses",
	age : 40,
	teacher : true, 
	sayHello : function () { return "Sholom " + this.name}
	}
console.log(person.name);
console.log(person.sayHello());

person.canCode = true;
console.log(person);

person.age = 33;
console.log(person);
console.log(person['age']);
