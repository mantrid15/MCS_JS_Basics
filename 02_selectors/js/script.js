console.log("You Are At " + window.location);


const byTag = document.getElementsByTagName('div');
const byClass = document.getElementsByClassName('myClass');
const byId = document.getElementById('myId');

console.log(byTag, byClass, byId);
const allByselecor = document.querySelectorAll('.coolClass.mine');
const  firstBySelector = document.querySelector('div');
console.log(allByselecor, firstBySelector);
const quest = prompt(" Что хотите написать на странице");
byId.innerHTML = quest;
firstBySelector.innerHTML = "<h2>Hello i am first div selector</h2>";