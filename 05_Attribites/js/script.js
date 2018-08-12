console.log("!!!" + location);

let image = document.querySelector('img');
console.log(image.hasAttribute('alt'));
image.removeAttribute('alt');
console.log(image.hasAttribute('alt'));
console.log(image.getAttribute('src'));
image.setAttribute('src', "img/google.jpg");
console.log(image.getAttribute('src'));