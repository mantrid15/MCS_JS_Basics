console.log("!!!" + location);

let ball = document.querySelector('.ball');
//console.log(ball.className);
document.getElementById('start').onclick = function () {
	ball.className += " animated";
};

document.getElementById('stop').onclick = function () {
	ball.className = "ball";
};

//