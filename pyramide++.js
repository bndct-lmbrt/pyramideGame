const wordTofind = {
	word: 'cochon', clue: ['animal', 'tire-bouchon', 'pue', 'rose', 'porc']
}
const words = wordTofind.word
const clues = wordTofind.clue
let round = 0

document.addEventListener('DOMContentLoaded', () => {
	const displayClue = clue => {
		document.querySelector('h2.resultat') = clue
	}
	displayclue(clue[round])
})