//Ваша задача
// 1. ﻿Написать такой JS, который по нажатию на кнопку с классом .request изменит стиль блока .popup на строку flex
// 2. ﻿По нажатию на элемент с классом closePopup — изменит стиль .popup обратно на ‘none’
//3. ﻿По нажатию на элемент .openMenu изменит свойство left у элемента .menu на значение 0
// 4. ﻿По нажатию на элемент .closeMenu — изменит свойство left у .menu обратно на строку ‘-50vw’
/*
const popUp = document.querySelector('.popup');
const button = document.querySelector('.request');
const closePopup = document.querySelector('.closePopup');
const openMenu = document.querySelector('.openMenu');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.closeMenu');

button.addEventListener('click', function () {
	popUp.style.display = 'flex';
});
closePopup.addEventListener('click', function () {
	popUp.style.display = 'none';
});
openMenu.addEventListener('click', function () {
	menu.style.left = '0';
});
closeMenu.addEventListener('click', function () {
	menu.style.left = '-50vw';
	});*/

const popUp = document.querySelector('.popup');
const openMenu = document.querySelector('.openMenu');
const menu = document.querySelector('.menu');

document.querySelector('.request').onclick =  function () {
	popUp.style.display = 'flex';
};
document.querySelector('.closePopup').onclick =  function () {
	popUp.style.display = 'none';
};
document.querySelector('.openMenu').onclick =  function () {
	menu.style.left = '0';
};
document.querySelector('.closeMenu').onclick =  function () {
	menu.style.left = '-50vw';
};