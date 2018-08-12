console.log("!!!" + location);

const Colored = document.querySelector('.colored');
console.log(Colored);
//
console.log(Colored.style);
let quest = prompt('Wnat color you need?')
//Colored.style.backgroundColor = 'blue';
Colored.style['background-color'] = quest;
