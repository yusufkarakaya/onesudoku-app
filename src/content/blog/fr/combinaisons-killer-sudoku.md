---
title: "Combinaisons du Killer Sudoku : toutes les sommes de cage, de 2 à 9 cases"
description: "Le tableau complet des combinaisons du Killer Sudoku : tous les groupes de chiffres qui donnent chaque somme, pour des cages de deux à neuf cases, cages à réponse unique signalées."
pubDate: 2026-10-20
readingTime: 4
category: "Killer"
translationKey: "killer-sudoku-combinations"
---

Dans le Killer Sudoku, les chiffres d’une cage ne se répètent jamais : chaque somme ne peut donc se former que de quelques façons. Les connaître, c’est l’essentiel du jeu. Cette page liste toutes les combinaisons pour chaque taille de cage, générées en vérifiant les 511 groupes de chiffres distincts de 1 à 9.

Nouveau au Killer ? Commencez par [Règles du Killer Sudoku et comment commencer](/fr/blog/regles-killer-sudoku/), puis revenez ici.

## Comment lire le tableau

Trouvez la taille de la cage, puis la somme. La colonne de droite liste tous les groupes de chiffres qui conviennent. Une combinaison vous dit **quels** chiffres sont dans la cage, jamais **où** : l’ordre à l’intérieur est décidé par les règles des lignes, colonnes et carrés.

Les entrées en **gras** sont les cages qui n’ont qu’une seule combinaison possible. Ce sont les premières à chercher dans n’importe quel Killer, car elles vous disent exactement à quels chiffres vous avez affaire.

## Celles qui valent la peine d’être retenues

Inutile d’avoir tout le tableau en tête. Celles-ci reviennent sans cesse et couvrent la plupart des débuts de partie :

| Cage | Somme | Seuls chiffres possibles |
|---|---|---|
| 2 cases | 3 | 1 2 |
| 2 cases | 4 | 1 3 |
| 2 cases | 16 | 7 9 |
| 2 cases | 17 | 8 9 |
| 3 cases | 6 | 1 2 3 |
| 3 cases | 7 | 1 2 4 |
| 3 cases | 23 | 6 8 9 |
| 3 cases | 24 | 7 8 9 |
| 4 cases | 10 | 1 2 3 4 |
| 4 cases | 11 | 1 2 3 5 |
| 4 cases | 29 | 5 7 8 9 |
| 4 cases | 30 | 6 7 8 9 |

Le principe se retrouve facilement : pour chaque taille, la plus petite et la plus grande somme n’ont qu’une combinaison, tout comme la somme juste à côté de chaque extrémité.

Deux autres raccourcis :

- **Les grandes cages se lisent par ce qui manque.** Une cage de 7 cases qui fait 40 utilise tous les chiffres sauf deux qui font 5 (45 − 40) : il manque 1 et 4, ou 2 et 3. À une cage de 8 cases, il manque exactement un chiffre : 45 moins la somme.
- **Les chiffres communs.** Dans une cage de 2 cases qui fait 10, chaque combinaison est faite de deux chiffres différents qui font 10 : le 5 n’y est donc jamais. Une cage de 3 cases qui fait 8 vaut 1 2 5 ou 1 3 4 : elle contient donc toujours un 1.

## Le tableau complet

### 2 cases

| Somme | Combinaisons |
|---|---|
| 3 | **12** |
| 4 | **13** |
| 5 | 14 · 23 |
| 6 | 15 · 24 |
| 7 | 16 · 25 · 34 |
| 8 | 17 · 26 · 35 |
| 9 | 18 · 27 · 36 · 45 |
| 10 | 19 · 28 · 37 · 46 |
| 11 | 29 · 38 · 47 · 56 |
| 12 | 39 · 48 · 57 |
| 13 | 49 · 58 · 67 |
| 14 | 59 · 68 |
| 15 | 69 · 78 |
| 16 | **79** |
| 17 | **89** |

### 3 cases

| Somme | Combinaisons |
|---|---|
| 6 | **123** |
| 7 | **124** |
| 8 | 125 · 134 |
| 9 | 126 · 135 · 234 |
| 10 | 127 · 136 · 145 · 235 |
| 11 | 128 · 137 · 146 · 236 · 245 |
| 12 | 129 · 138 · 147 · 156 · 237 · 246 · 345 |
| 13 | 139 · 148 · 157 · 238 · 247 · 256 · 346 |
| 14 | 149 · 158 · 167 · 239 · 248 · 257 · 347 · 356 |
| 15 | 159 · 168 · 249 · 258 · 267 · 348 · 357 · 456 |
| 16 | 169 · 178 · 259 · 268 · 349 · 358 · 367 · 457 |
| 17 | 179 · 269 · 278 · 359 · 368 · 458 · 467 |
| 18 | 189 · 279 · 369 · 378 · 459 · 468 · 567 |
| 19 | 289 · 379 · 469 · 478 · 568 |
| 20 | 389 · 479 · 569 · 578 |
| 21 | 489 · 579 · 678 |
| 22 | 589 · 679 |
| 23 | **689** |
| 24 | **789** |

### 4 cases

| Somme | Combinaisons |
|---|---|
| 10 | **1234** |
| 11 | **1235** |
| 12 | 1236 · 1245 |
| 13 | 1237 · 1246 · 1345 |
| 14 | 1238 · 1247 · 1256 · 1346 · 2345 |
| 15 | 1239 · 1248 · 1257 · 1347 · 1356 · 2346 |
| 16 | 1249 · 1258 · 1267 · 1348 · 1357 · 1456 · 2347 · 2356 |
| 17 | 1259 · 1268 · 1349 · 1358 · 1367 · 1457 · 2348 · 2357 · 2456 |
| 18 | 1269 · 1278 · 1359 · 1368 · 1458 · 1467 · 2349 · 2358 · 2367 · 2457 · 3456 |
| 19 | 1279 · 1369 · 1378 · 1459 · 1468 · 1567 · 2359 · 2368 · 2458 · 2467 · 3457 |
| 20 | 1289 · 1379 · 1469 · 1478 · 1568 · 2369 · 2378 · 2459 · 2468 · 2567 · 3458 · 3467 |
| 21 | 1389 · 1479 · 1569 · 1578 · 2379 · 2469 · 2478 · 2568 · 3459 · 3468 · 3567 |
| 22 | 1489 · 1579 · 1678 · 2389 · 2479 · 2569 · 2578 · 3469 · 3478 · 3568 · 4567 |
| 23 | 1589 · 1679 · 2489 · 2579 · 2678 · 3479 · 3569 · 3578 · 4568 |
| 24 | 1689 · 2589 · 2679 · 3489 · 3579 · 3678 · 4569 · 4578 |
| 25 | 1789 · 2689 · 3589 · 3679 · 4579 · 4678 |
| 26 | 2789 · 3689 · 4589 · 4679 · 5678 |
| 27 | 3789 · 4689 · 5679 |
| 28 | 4789 · 5689 |
| 29 | **5789** |
| 30 | **6789** |

### 5 cases

| Somme | Combinaisons |
|---|---|
| 15 | **12345** |
| 16 | **12346** |
| 17 | 12347 · 12356 |
| 18 | 12348 · 12357 · 12456 |
| 19 | 12349 · 12358 · 12367 · 12457 · 13456 |
| 20 | 12359 · 12368 · 12458 · 12467 · 13457 · 23456 |
| 21 | 12369 · 12378 · 12459 · 12468 · 12567 · 13458 · 13467 · 23457 |
| 22 | 12379 · 12469 · 12478 · 12568 · 13459 · 13468 · 13567 · 23458 · 23467 |
| 23 | 12389 · 12479 · 12569 · 12578 · 13469 · 13478 · 13568 · 14567 · 23459 · 23468 · 23567 |
| 24 | 12489 · 12579 · 12678 · 13479 · 13569 · 13578 · 14568 · 23469 · 23478 · 23568 · 24567 |
| 25 | 12589 · 12679 · 13489 · 13579 · 13678 · 14569 · 14578 · 23479 · 23569 · 23578 · 24568 · 34567 |
| 26 | 12689 · 13589 · 13679 · 14579 · 14678 · 23489 · 23579 · 23678 · 24569 · 24578 · 34568 |
| 27 | 12789 · 13689 · 14589 · 14679 · 15678 · 23589 · 23679 · 24579 · 24678 · 34569 · 34578 |
| 28 | 13789 · 14689 · 15679 · 23689 · 24589 · 24679 · 25678 · 34579 · 34678 |
| 29 | 14789 · 15689 · 23789 · 24689 · 25679 · 34589 · 34679 · 35678 |
| 30 | 15789 · 24789 · 25689 · 34689 · 35679 · 45678 |
| 31 | 16789 · 25789 · 34789 · 35689 · 45679 |
| 32 | 26789 · 35789 · 45689 |
| 33 | 36789 · 45789 |
| 34 | **46789** |
| 35 | **56789** |

### 6 cases

| Somme | Combinaisons |
|---|---|
| 21 | **123456** |
| 22 | **123457** |
| 23 | 123458 · 123467 |
| 24 | 123459 · 123468 · 123567 |
| 25 | 123469 · 123478 · 123568 · 124567 |
| 26 | 123479 · 123569 · 123578 · 124568 · 134567 |
| 27 | 123489 · 123579 · 123678 · 124569 · 124578 · 134568 · 234567 |
| 28 | 123589 · 123679 · 124579 · 124678 · 134569 · 134578 · 234568 |
| 29 | 123689 · 124589 · 124679 · 125678 · 134579 · 134678 · 234569 · 234578 |
| 30 | 123789 · 124689 · 125679 · 134589 · 134679 · 135678 · 234579 · 234678 |
| 31 | 124789 · 125689 · 134689 · 135679 · 145678 · 234589 · 234679 · 235678 |
| 32 | 125789 · 134789 · 135689 · 145679 · 234689 · 235679 · 245678 |
| 33 | 126789 · 135789 · 145689 · 234789 · 235689 · 245679 · 345678 |
| 34 | 136789 · 145789 · 235789 · 245689 · 345679 |
| 35 | 146789 · 236789 · 245789 · 345689 |
| 36 | 156789 · 246789 · 345789 |
| 37 | 256789 · 346789 |
| 38 | **356789** |
| 39 | **456789** |

### 7 cases

| Somme | Combinaisons |
|---|---|
| 28 | **1234567** |
| 29 | **1234568** |
| 30 | 1234569 · 1234578 |
| 31 | 1234579 · 1234678 |
| 32 | 1234589 · 1234679 · 1235678 |
| 33 | 1234689 · 1235679 · 1245678 |
| 34 | 1234789 · 1235689 · 1245679 · 1345678 |
| 35 | 1235789 · 1245689 · 1345679 · 2345678 |
| 36 | 1236789 · 1245789 · 1345689 · 2345679 |
| 37 | 1246789 · 1345789 · 2345689 |
| 38 | 1256789 · 1346789 · 2345789 |
| 39 | 1356789 · 2346789 |
| 40 | 1456789 · 2356789 |
| 41 | **2456789** |
| 42 | **3456789** |

### 8 cases

| Somme | Combinaisons |
|---|---|
| 36 | **12345678** |
| 37 | **12345679** |
| 38 | **12345689** |
| 39 | **12345789** |
| 40 | **12346789** |
| 41 | **12356789** |
| 42 | **12456789** |
| 43 | **13456789** |
| 44 | **23456789** |

### 9 cases

| Somme | Combinaisons |
|---|---|
| 45 | **123456789** |

## Là où le tableau ne suffit plus

Le tableau réduit chaque cage à un groupe de chiffres. Pour les placer, combinez-le avec les règles habituelles du sudoku et avec la **règle du 45** : chaque ligne, colonne et carré fait 45, donc si des cages couvrent tout un carré sauf une case, cette case vaut 45 moins le total des cages. [Règles du Killer Sudoku et comment commencer](/fr/blog/regles-killer-sudoku/) l’explique avec des exemples.

Le mode Killer de One Sudoku a trois niveaux. Facile utilise de petites cages de deux ou trois cases et quelques chiffres placés pour démarrer. Moyen et Difficile n’affichent que les sommes, avec des cages allant jusqu’à quatre et cinq cases. Chaque grille se termine par la logique, sans deviner.
