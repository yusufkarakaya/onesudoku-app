---
title: "Règles du Killer Sudoku et comment commencer"
description: "Le Killer Sudoku remplace les chiffres donnés par des cages à somme. Voici les règles, la règle du 45 et une méthode pas à pas pour entrer dans votre première grille."
pubDate: 2026-10-20
readingTime: 6
category: "Killer"
translationKey: "killer-sudoku-rules"
---

Un Killer Sudoku ressemble à un sudoku ordinaire que quelqu’un aurait oublié de remplir. Il y a peu de chiffres donnés, voire aucun. À la place, la grille est couverte de contours en pointillés appelés **cages**, chacune avec un petit nombre dans son coin. Ce nombre, et un peu d’arithmétique, voilà de quoi vous résolvez.

Si vous connaissez déjà le sudoku classique, vous avez fait le plus gros. Sinon, lisez d’abord les [Règles du sudoku](/fr/blog/regles-du-sudoku/) : le Killer les conserve toutes.

## Les règles

1. **Les règles classiques s’appliquent.** Chaque ligne, chaque colonne et chaque carré de 3×3 contient les chiffres de 1 à 9 une seule fois.
2. **Chaque cage fait sa somme.** Les chiffres d’une cage en pointillés doivent totaliser le petit nombre de son coin.
3. **Aucun chiffre ne se répète dans une cage.** Une cage de deux cases qui fait 4 ne peut être que 1 et 3, jamais 2 et 2.

C’est tout le règlement. Tout Killer à solution unique se résout avec, sans deviner.

## Premiers coups : les cages faciles

Certaines cages ne se forment que d’une seule façon. Cherchez-les en premier.

- Une **cage de deux cases qui fait 3** est toujours 1 et 2. Une cage qui fait 17 est toujours 8 et 9.
- Une **cage de trois cases qui fait 6** est toujours 1, 2 et 3. Une cage qui fait 24 est toujours 7, 8 et 9.
- Une **cage d’une case** est simplement un chiffre donné : sa somme est le chiffre.

Ces cages vous disent quels chiffres elles contiennent, mais pas dans quel ordre. Notez les deux ou trois en candidats ; les lignes, colonnes et carrés autour régleront l’ordre.

Le [tableau des combinaisons du Killer Sudoku](/fr/blog/combinaisons-killer-sudoku/) liste chaque taille de cage et chaque somme, les cages à réponse unique étant signalées.

## La règle du 45

C’est la technique qui fait du Killer un jeu à part entière.

Les chiffres de 1 à 9 font **45** au total. Donc chaque ligne, chaque colonne et chaque carré fait 45. Si vous connaissez le total de presque tout un carré, vous connaissez le reste.

**Exemple.** Un carré est couvert par trois cages entièrement à l’intérieur, qui font 38, plus une case appartenant à une cage venue de l’extérieur. Cette case isolée vaut forcément 45 − 38 = **7**.

Cela marche dans les deux sens :

- **Les cases intérieures.** Des cages remplissent une ligne, une colonne ou un carré sauf quelques cases qui appartiennent à des cages qui dépassent. Ces cases restantes font 45 moins les cages contenues.
- **Les cases extérieures.** Une cage dépasse d’un carré d’une ou deux cases. Additionnez toutes les cages qui touchent le carré et retirez 45 : le reste est le total des cases qui dépassent.

Dès que vous savez que deux cases font, disons, 4, vous revoilà en terrain connu : c’est 1 et 3.

La règle s’étend aussi. Deux lignes voisines font 90, trois font 135. Les grilles plus dures vous demandent de vous en servir.

## Une routine qui marche

1. Repérez toutes les cages à réponse unique.
2. Appliquez la règle du 45 à chaque carré, puis à chaque ligne et colonne, à la recherche d’une ou deux cases restantes.
3. Utilisez la logique habituelle du sudoku sur ce que vous avez placé : singletons d’abord, puis paires.
4. Si une cage admet encore plusieurs combinaisons, cherchez un chiffre présent dans **toutes**. Ce chiffre est forcément dans la cage, donc il ne peut apparaître nulle part ailleurs dans une ligne, une colonne ou un carré qui contient toute la cage.
5. Revenez à l’étape 2. Chaque chiffre placé rend possible un nouveau calcul du 45.

## Le Killer dans One Sudoku

L’app propose trois niveaux de Killer, chacun avec ses idées propres :

| Niveau | Au départ | Ce qu’il demande |
|---|---|---|
| **Facile** | Petites cages de 2 à 3 cases et quelques chiffres déjà placés | Sommes des cages et singletons |
| **Moyen** | Sommes seules, cages de 2 à 4 cases | En plus, la règle du 45 sur une ligne, une colonne ou un carré |
| **Difficile** | Sommes seules, cages de 3 à 5 cases | En plus, la règle du 45 sur deux lignes ou colonnes, les paires nues et le pointage |

Chaque grille est vérifiée par un solveur qui raisonne comme une personne : il y a donc toujours une étape logique suivante, et vous n’avez jamais à deviner. Si vous êtes arrivé en Difficile en Classique, commencez le Killer en Facile : les sommes deviennent automatiques en quelques parties, et la suite va vite.
