---
title: Pyramide game
description: Construire une application pour jouer au jeu pyramide contre l'ordinateur
image_url: https://github.com/bndct/pyramide-game/blob/master/img/.jpg?raw=true
---

# Pyramide game

## Contexte
Pour permettre aux fans du jeu télévisé de rejouer à ce jeu mythique, ils peuvent s'exercer sur cette application du jeu sur le téléphone, la tablette ou l'ordinateur.

## Informations

- [site](http://jeupyramide.free.fr/) ?

## Lancement en local
Par exemple via [http-server]()

## Ce que j'ai compris aujourd'hui jeudi 13 Octobre
-let est une constante qui change
-pour associer des indices à un mot à trouver je les mets dans un objet en nommant le mot à trouver et en le définissant puis en nommant les indices et en les définissant en les mettant dans un tableau
-pour que mon code soit plus explicite je crée des fonctions  
-le innerText me permet de placer quelque chose dans des balises html, je le sélectionne grâce à document.querySelector
-la fonction onclick = evt : on associe une action (l'évènement) à une fonction onclick
-evt.preventDefault() me permet de ne pas recharger toute la page à chaque clic

## Ce que j'ai compris aujourd'hui dimanche 16 Octobre
-il y a différents niveaux d'échanges entre les parties du js: le monde extérieur au début, la maison dès que j'invoque le DOM, la chambre dès que je fais des choses après la fonction click et chaque fois que j'ouvre des moustaches c'est comme si j'ouvrais un placard
Les choses du placard peuvent aller dehors et interagir avec le monde extérieur mais le monde extérieur ne peut pas rentrer dans le placard
-la fonction est un moule qui me permet de créer des actions, je peux alors les appeller par la suite, je ne peux pas demander à une variable (const) d'effectuer une action
-le + pour tries = + document... me permet d'être sur d'avoir un chiffre rond
-if, else if, else me permet de créer une hypothèse et de créer plusieurs possibilités d'échec et de réussite, si c'est bon c'est gagné, si c'est pas gagné et que c'est le nombre de briques choisies, c'est perdu, sinon on peut essayer encore
-pour que le texte que le joueur écrit s'efface il faut mettre  une chaine de caractères vide sur la valeur à chaque fois que l'on clique
-pour que les indices arrêtent après une réussite ou un échec, il faut mettre  une chaine de caractères vide après displayClue dans le if

## Ce que j'ai compris aujourd'hui mardi 18 Octobre
-je simplifie en mettant tous mes messages dans la même fonction displayMsg, je passe d'autres messages dans le displayClue pour éviter de mettre un champs vide et de rajouter une fonction avec un autre message
-('input.proposition').focus() permet de pouvoir écrire directement dans le champs de réponse sans avoir besoin de remettre la souris au bon endroit
-pour choisir alléatoirement un mot je crée une variable drawWord avec un Math.random, j'instancie drawWord dans ma variable solution ou clues
-wordTofind[drawWord].word correspond à un worTofind[0].word, soit mon premier mot, sauf que le chiffre sera alléatoire grâce à ma variable drawWord
-pour que mon indice n'apparaisse que quand j'ai sélectionné le nombre d'indices que je souhaitais, je crée une fonction onclick, l'évènement de l'affichage sera associé au click des boutons radio
-pour créer mes mots, je les mets dans un fichier words.js à part que je rattache dans le html avec script

## Backlog

- [Consulter Les User Stories terminées](https://github.com/)