// tryAgain : String -> String 
const tryAgain = (clue) => {
	displayClue(clue)
	return 'essaie encore'
}

// displayClue : String -> undefined
const displayClue = (clue) => {
	document.querySelector('h2.resultat')
	  .innerText = clue
}

const displayVerification = (msg) => {
	document.querySelector('h2.verification')
		.innerText = msg 
}

document.addEventListener('DOMContentLoaded', () => {
	const wordToFind = {word:'cochon', clue:['animal', 'tire-bouchon', 'pue', 'rose', 'porc']}
	const clues = wordToFind.clue
	const words = wordToFind.word
	let round = 0

	displayClue(clues[round])
	
	const htmlGo = document.querySelector('button')
	htmlGo.onclick = evt => {
		evt.preventDefault()
		const answer = document.querySelector('input').value
		round = round + 1
		const sentence = answer === words ? 'gagné' : tryAgain(clues[round])
		displayVerification(sentence)
	}
})
