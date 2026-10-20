---
title: "Killer Sudoku Rules and How to Start"
description: "Killer Sudoku swaps the printed numbers for cages with sums. Here are the rules, the rule of 45, and a step-by-step way into your first grid."
pubDate: 2026-10-20
readingTime: 6
category: "Killer"
heroImage: ../../assets/blog/killer-sudoku-rules-hero.jpg
heroAlt: "Scattered paper cutouts of black numbers on a white background"
heroCredit: "Cooper Hofmann on Unsplash"
heroCreditUrl: "https://unsplash.com/photos/OBgh6h_2yL0"
---

Killer Sudoku looks like a regular sudoku that someone forgot to fill in. There are few given numbers or none at all. Instead the grid is covered in dashed outlines called **cages**, each with a small number in its corner. That number, and a little arithmetic, is what you solve from.

If you already know classic sudoku, you're most of the way there. If you don't, read [How to Play Sudoku](/blog/how-to-play-sudoku/) first; Killer keeps every one of those rules.

## The rules

1. **Classic rules still apply.** Every row, every column and every 3×3 box contains the digits 1 to 9 exactly once.
2. **Each cage adds up to its sum.** The digits inside a dashed cage must total the small number in its corner.
3. **No digit repeats inside a cage.** A two-cell cage of 4 can only be 1 and 3, never 2 and 2.

That's the full rule set. Every Killer puzzle with a single solution can be solved from it without guessing.

## Your first moves: the easy cages

Some cages can only be made one way. Find those first.

- A **two-cell cage of 3** is always 1 and 2. A cage of 17 is always 8 and 9.
- A **three-cell cage of 6** is always 1, 2 and 3. A cage of 24 is always 7, 8 and 9.
- A **one-cell cage** is simply a given: its sum is the digit.

These cages tell you which digits are inside them but not in which order. Pencil both or all three in as candidates; the rows, columns and boxes around them will sort the order out.

The [Killer Sudoku combinations chart](/blog/killer-sudoku-combinations/) lists every cage size and sum, with the single-answer cages marked.

## The rule of 45

This is the technique that makes Killer its own game.

The digits 1 to 9 add up to **45**. So every row, every column and every box adds up to 45. If you know the total of most of a box, you know the rest.

**Example.** A box is covered by three cages that sit entirely inside it, adding up to 38, plus one cell that belongs to a cage poking in from outside. That lone cell must be 45 − 38 = **7**.

It works in two directions:

- **Innies.** Cages fill a row, column or box except for a few cells that belong to cages sticking out. Those leftover cells add up to 45 minus the cages that fit inside.
- **Outies.** A cage pokes out of a box by a cell or two. Add up every cage that touches the box and subtract 45; what's left is the total of the cells sticking out.

Once you know two cells add up to, say, 4, you're back in familiar territory: they're 1 and 3.

The rule scales up, too. Two neighbouring rows add up to 90, and three add up to 135. Harder puzzles ask you to use those.

## A routine that works

1. Mark every single-answer cage.
2. Run the rule of 45 over each box, then each row and column, looking for one or two leftover cells.
3. Use ordinary sudoku logic on what you've placed: singles, then pairs.
4. When a cage still has several combinations, look for a digit that's in **every** one of them. That digit is definitely in the cage, so it can't appear anywhere else in a row, column or box the cage sits entirely inside.
5. Go back to step 2. Each digit you place makes another 45 count possible.

## Killer in One Sudoku

The app has three Killer levels, and each one asks for a specific set of ideas:

| Level | What you start with | What it asks of you |
|---|---|---|
| **Easy** | Small cages of 2 to 3 cells, plus a few filled-in digits | Cage sums and singles |
| **Medium** | Sums only, cages of 2 to 4 cells | Adds the rule of 45 on a row, column or box |
| **Hard** | Sums only, cages of 3 to 5 cells | Adds the rule of 45 over two rows or columns, naked pairs and pointing |

Every board is checked by a solver that works the way a person does, so there is always a logical next step and you never have to guess. If you've played Classic up to Hard, start Killer on Easy: the arithmetic takes a few games to become automatic, and after that the levels go quickly.
