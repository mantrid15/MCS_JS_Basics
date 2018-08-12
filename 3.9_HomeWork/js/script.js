let colorBg = prompt('Какой будет фон у страницы?', 'orange');
let colorBackGround = document.querySelector('body');
colorBackGround.style.backgroundColor = colorBg;

let colorF = prompt('Какой будет цвет текста на странице?', 'green');
let colorFont = document.querySelector('.page ');
colorFont.style.color = colorF;

let name = prompt('Как зовут человека, который вас вдохновляет', "Lenin");
let manName = document.querySelector('.name');
manName.innerHTML = name;

let img = prompt('Введите адрес картинки', 'https://www.thefamouspeople.com/profiles/images/og-vladimir-lenin-96.jpg' );
let image = document.querySelector('img');
image.setAttribute('src', img);


let bigText = 'Знаменитый призыв вождя пролетариата "Учиться, учиться и учиться!" взят из статьи "Попятное направление русской социал-демократии", написанной им в 1899 и опубликованной в 1924 году в "Пролетарской революции". Некоторые биографы считают, что Ленин мог взять эту фразу из произведения Чехова "Моя жизнь (рассказ провинциала)", где она приводится в таком контексте:\n' +
		'\n' +
		'"Учиться нам нужно, учиться и учиться, а с глубокими общественными течениями погодим: мы еще не доросли до них' +
		' и, по совести, ничего в них не понимаем".\n';

let text = prompt('Введите текст страницы', bigText);
let oldText = document.querySelector('.shortBio');
oldText.innerHTML = bigText;

oldText.className += " animated";




