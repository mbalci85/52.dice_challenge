// create a dice game using our DOM knowledge. When you press the button, dice rolls randomly and generate a winner (or draw).

const randomNumber = () => {
	return Math.ceil(Math.random() * 6);
};

let startButton = document.querySelector('#start');

let dice1 = 