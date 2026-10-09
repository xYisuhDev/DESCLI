const answers = [true, false, true, true, false, true, true];

for (let i = 1; i <= 7; i++) {
	const question = document.getElementById(`question${i}`);
	const trueButton = document.getElementById(`falseOptionButton${i}`);
	const falseButton = document.getElementById(`trueOptionButton${i}`);


	trueButton.addEventListener('click', () => {
		question.classList.remove('correct', 'incorrect');
		question.classList.add(answers[i - 1] === true ? 'correct' : 'incorrect');
	});

	falseButton.addEventListener('click', () => {
		question.classList.remove('correct', 'incorrect');
		question.classList.add(answers[i - 1] === false ? 'correct' : 'incorrect');
	});
}
