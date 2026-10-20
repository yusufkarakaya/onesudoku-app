---
title: "Naked Pairs and Triples in Sudoku, Explained"
description: "When two cells in a row, column or box share the same two candidates, those digits are spoken for. How to spot a Naked Pair, what it removes, and how it stretches to triples."
pubDate: 2026-10-20
readingTime: 4
category: "Technique"
---

Singles place digits. A Naked Pair doesn't place anything. Instead it **removes candidates**, and removing the right candidates is what uncovers the next single. It's usually the first technique you need once puzzles reach Hard.

You'll need notes for this one: pencil the candidates into every empty cell of the house you're looking at.

## The idea

Find two cells in the same house (row, column or box) that hold **exactly the same two candidates and nothing else**, say {3, 7}.

One of those cells will be 3 and the other 7. You don't know which way round yet, but it doesn't matter: between them they use up the 3 and the 7 for that house. So **3 and 7 can be crossed out of every other cell in the house**.

## An example

A row has five empty cells with these candidates:

| Cell | A | B | C | D | E |
|---|---|---|---|---|---|
| Candidates | 3 7 | 1 3 5 | 3 7 | 1 5 7 | 1 5 8 |

Cells A and C are a Naked Pair on {3, 7}. Remove 3 and 7 from B, D and E:

| Cell | A | B | C | D | E |
|---|---|---|---|---|---|
| Candidates | 3 7 | 1 5 | 3 7 | 1 5 | 1 5 8 |

Now B and D are a Naked Pair on {1, 5}, which strips 1 and 5 from E, leaving E as **8**. One pair led to another, and the second led to a placement. That chain reaction is typical.

## Pairs in two houses at once

If the two cells share a box as well as a row (or column), the pair works in both houses. Clear the two digits from the rest of the row **and** the rest of the box.

## Naked Triples

The same logic stretches to three cells. If three cells in a house contain, between them, only three different candidates, those three digits belong to those three cells. Clear them from the rest of the house.

The catch is that each cell doesn't need all three candidates. {2, 4}, {4, 9} and {2, 9} is a perfectly good triple on {2, 4, 9}, and it's much easier to miss than a pair.

## How to find them

- Scan for cells with just **two** candidates. They're the only possible members of a Naked Pair, and they stand out once your notes are in.
- When you find one, look along its row, column and box for a twin.
- If a house has lots of crowded cells, count the distinct candidates in any three of them. Three is a triple.

## Where it sits

Naked Pairs belong to the Hard tier of [the techniques One Sudoku uses](/blog/learn-sudoku/), alongside [Hidden Pairs](/blog/hidden-pairs/) and [Pointing Pairs](/blog/pointing-pairs/). Every Hard puzzle in the app needs at least one of them and nothing harder. Of the three, Naked Pairs are the most common, so they're the one to learn first.
