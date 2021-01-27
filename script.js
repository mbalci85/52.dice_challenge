// create a dice game using our DOM knowledge. When you press the button, dice rolls randomly and generate a winner (or draw).

const randomNumber = () => {
	return Math.ceil(Math.random() * 6);
};

let startButton = document.querySelector('#start');

let dice1 = document.getElementById('dice_A');
let dice2 = document.getElementById('dice_B');

startButton.onclick = () => {
	let randomNum1 = randomNumber();
	let randomNum2 = randomNumber();

	dice1.src = `images/dice${randomNum1}.png`;
	dice2.src = `images/dice${randomNum2}.png`;

	if (randomNum1 > randomNum2) {
		document.querySelector('h1').innerHTML = 'Player 1 Wins!!!';
		document.getElementById('player_1').style.color = 'red';
		document.getElementById('player_1').style.fontWeight = 'bold';
		document.getElementById('player_2').style.color = 'green';
	} else if (randomNum1 < randomNum2) {
		document.querySelector('h1').innerHTML = 'Player 2 Wins!!!';
		document.getElementById('player_2').style.color = 'red';
		document.getElementById('player_2').style.fontWeight = 'bold';
		document.getElementById('player_1').style.color = 'green';
	} else if (randomNum1 == randomNum2) {
		document.querySelector('h1').innerHTML = 'Draw!!!';
		document.getElementById('player_2').style.color = 'yellow';
		document.getElementById('player_2').style.fontWeight = 'bold';
		document.getElementById('player_1').style.color = 'yellow';
	}
};
