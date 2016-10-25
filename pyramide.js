const words = ['canapé', 'traîneau', 'étoilé', 'vertigineux', 'fermentation']
const tirage = Math.floor(Math.random() * words.length)

const words = ['cochon', 'paragraphe', 'poubelle', 'amplificateur', 'tasse']
const cochon = ['animal', 'tire-bouchon', 'pue', 'rose', 'porc']
const paragraphe = ['texte', 'morceau', 'guillemet', 'paramètre', 'aérographe']
const poubelle = ['déchet', 'boîte', 'sac', 'camion', 'moche']
const amplificateur = ['son', 'augmenter', 'basses', 'démultiplicateur']
const tasse = ['contenant', 'thé', 'anse', 'soucoupe', 'pé']

document.addEventListener('DOMContentLoaded', () => {
	// Here the html page is loaded
	const htmlResult = document.querySelector('h2.resultat')
	htmlResult.innerText = words[tirage]

	const htmlGo = document.querySelector('button')
	htmlGo.onclick = evt => {
		// To prevent an automatic page reload
		evt.preventDefault()
		const answer = document.querySelector('input').value
		console.log('Ta réponse : ', answer)
	}
})


