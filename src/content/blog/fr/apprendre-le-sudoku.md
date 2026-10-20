---
title: "Apprendre le sudoku : un chemin clair de Facile à Expert"
description: "Chaque niveau de One Sudoku repose sur un ensemble précis de techniques. Voici ce que chacun vous demande, dans l’ordre, et comment progresser sans rester bloqué."
pubDate: 2026-10-20
readingTime: 6
category: "Guide"
translationKey: "learn-sudoku"
heroImage: ../../../assets/blog/learn-sudoku-hero.jpg
heroAlt: "Une main tenant un crayon au-dessus d’un livre de sudokus, une grille déjà remplie"
heroCredit: "Richard Bell on Unsplash"
heroCreditUrl: "https://unsplash.com/photos/xFGRrdyd92E"
---

La plupart des apps de sudoku classent leurs grilles en Facile ou Difficile selon le nombre de chiffres manquants. C’est au mieux une indication grossière. Une grille avec peu d’indices peut être simple, et une grille bien remplie peut vous arrêter net.

One Sudoku classe chaque grille autrement. Avant qu’elle ne vous parvienne, un évaluateur la résout comme le ferait une personne : il essaie d’abord les techniques les plus simples et retient la plus difficile dont il a réellement eu besoin. C’est cette technique qui fixe le niveau. Cela veut aussi dire qu’**aucune grille n’oblige à deviner** : si l’évaluateur ne peut pas la terminer par la logique, la grille est écartée.

Résultat : chaque niveau vous apprend quelque chose de précis. En les suivant dans l’ordre, vous apprenez vraiment le sudoku, une idée à la fois.

## Étape 1 : les règles

Remplissez la grille de 9×9 de façon que chaque ligne, chaque colonne et chaque carré de 3×3 contienne les chiffres de 1 à 9 une seule fois. ([Règles du sudoku](/fr/blog/regles-du-sudoku/) les détaille.) C’est tout. Aucun calcul : les chiffres pourraient tout aussi bien être des lettres ou des couleurs.

Le seul autre mot à connaître est **candidat** : un chiffre qui pourrait encore aller dans une case vide sans enfreindre de règle. Chaque technique ci-dessous est une façon de réduire les candidats jusqu’à ce qu’il n’en reste qu’un.

## Étape 2 : Facile — le Singleton nu

| Technique | L’idée |
|---|---|
| **Singleton nu** (Naked Single) | Regardez une case vide. Barrez tous les chiffres déjà présents dans sa ligne, sa colonne et son carré. S’il n’en reste qu’un, c’est la réponse. |

Les grilles faciles de One Sudoku n’exigent rien d’autre. Chaque coup se trouve en regardant une seule case, ce qui fait du niveau Facile l’endroit idéal pour apprivoiser la grille et trouver un rythme.

**Vous êtes prêt à passer au niveau suivant quand** vous terminez Facile en moins de 5 minutes sans indice.

## Étape 3 : Moyen — le Singleton caché

| Technique | L’idée |
|---|---|
| **Singleton caché** (Hidden Single) | Choisissez un chiffre et une ligne, une colonne ou un carré. Si ce chiffre ne peut aller que dans une seule case, il va là, même si la case a d’autres candidats. |

C’est le saut que ressentent la plupart des débutants. Chaque grille Moyen exige au moins un Singleton caché ; l’examen case par case finit donc par s’épuiser. La solution : passer de « que va-t-il dans cette case ? » à « où va le 7 dans ce carré ? », et balayer les chiffres de 1 à 9.

**Vous êtes prêt à passer au niveau suivant quand** Moyen vous prend moins de 10 minutes.

## Étape 4 : Difficile — paires, triplets et pointage

En Difficile, les notes ne sont plus facultatives. Ces techniques ne placent pas de chiffres directement : elles **éliminent des candidats**, et c’est ce qui finit par révéler le singleton suivant.

| Technique | L’idée |
|---|---|
| **[Paire nue](/blog/naked-pairs/)** (Naked Pair) | Deux cases d’une unité ont les deux mêmes candidats et rien d’autre. Ces deux chiffres leur appartiennent : retirez-les du reste de l’unité. |
| **[Paire cachée](/blog/hidden-pairs/)** (Hidden Pair) | Deux chiffres ne peuvent aller que dans les deux mêmes cases d’une unité. Tous les autres candidats de ces cases disparaissent. |
| **[Paire / Triplet pointant](/blog/pointing-pairs/)** (Pointing Pair) | Dans un carré, un chiffre est limité à une ligne ou une colonne. Il ne peut pas apparaître dans cette ligne ou colonne hors du carré. |
| **[Réduction carré/ligne](/blog/pointing-pairs/)** (Box/Line Reduction) | L’inverse : dans une ligne ou une colonne, un chiffre est limité à un carré. Il ne peut pas apparaître ailleurs dans ce carré. |
| **Triplet nu** (Naked Triple) | Trois cases d’une unité se partagent trois candidats. Ces chiffres sont pris : retirez-les du reste de l’unité. |
| **Triplet caché** (Hidden Triple) | Trois chiffres ne tiennent que dans les trois mêmes cases d’une unité. Retirez tout le reste de ces cases. |

Chaque grille Difficile en exige au moins une, et aucune plus dure. Apprenez d’abord les paires et la paire pointante ; elles reviennent bien plus souvent que les triplets.

**Vous êtes prêt à passer au niveau suivant quand** vous terminez Difficile en moins de 15 minutes.

## Étape 5 : Expert — poissons et ailes

Les grilles Expert exigent au moins un motif qui couvre plusieurs unités à la fois.

| Technique | L’idée |
|---|---|
| **[X-Wing](/blog/x-wing/)** | Un chiffre tient dans exactement deux cases de chacune de deux lignes, et ces cases sont alignées sur les deux mêmes colonnes. On peut retirer ce chiffre du reste de ces colonnes. (Ça marche aussi en inversant lignes et colonnes.) |
| **[Swordfish](/blog/swordfish/)** | La même logique étendue à trois lignes et trois colonnes. |
| **[XY-Wing](/blog/xy-wing/)** | Trois cases à deux candidats s’enchaînent de sorte que, quelle que soit la valeur de la case pivot, un chiffre est exclu de toute case qui voit les deux extrémités. |

C’est l’ensemble complet. Le niveau Expert de One Sudoku s’arrête au XY-Wing : avec ces onze techniques, vous avez tout ce que n’importe quelle grille de l’app vous demandera.

**L’objectif :** Expert en moins de 20 minutes, sans indice. Un vrai bon score.

(Les pages dédiées à chaque technique sont pour l’instant en anglais.)

## Comment l’app vous aide à apprendre

Certaines choses dans One Sudoku sont pensées exactement pour cette progression :

- **Des notes qui se rangent toutes seules.** Activez le mode Notes pour noter les candidats. Quand vous placez un chiffre, il disparaît automatiquement des notes de toutes les cases de sa ligne, sa colonne et son carré : vos notes restent justes sans effort.
- **Des indices qui enseignent.** Vous en avez trois par partie. Un indice corrige d’abord une erreur de saisie, car une seule erreur bloque silencieusement toutes les techniques. Ensuite il montre un Singleton nu s’il y en a un, sinon un Singleton caché : l’étape suivante, pas une case au hasard.
- **Pas de limite d’erreurs.** Les erreurs sont comptées mais ne terminent jamais la partie. L’annulation est illimitée. Les techniques s’ancrent en expérimentant, et expérimenter ne coûte rien.
- **Un Défi du jour.** Une grille par jour, la même pour tous, avec une série qui vous fait revenir. La régularité fait plus progresser que les longues sessions.

## Votre liste de progression

| Niveau | Techniques exigées | Temps cible |
|---|---|---|
| **Facile** | Singleton nu | 5 min |
| **Moyen** | + Singleton caché | 10 min |
| **Difficile** | + Paires, Triplets, Pointage, Réduction carré/ligne | 15 min |
| **Expert** | + X-Wing, Swordfish, XY-Wing | 20 min |

Un dernier conseil : jouez un niveau au-dessus de votre zone de confort. Si vous ne bloquez jamais, vous n’apprenez rien de nouveau. Si vous bloquez à chaque coup, redescendez d’un niveau. Bloquer deux ou trois fois par grille, c’est le bon dosage.
