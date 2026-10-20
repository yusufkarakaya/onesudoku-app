---
title: "Hidden Pairs and Triples in Sudoku, Explained"
description: "Two digits that can only go in the same two cells of a house claim those cells. How to find a Hidden Pair under the clutter of notes, and what it lets you clear."
pubDate: 2026-10-20
readingTime: 4
category: "Technique"
---

A Hidden Pair is the mirror image of a [Naked Pair](/blog/naked-pairs/). A Naked Pair is two cells that can only hold two digits. A Hidden Pair is **two digits that can only go in two cells**. The pair is "hidden" because those cells usually have other candidates too, which makes it easy to look straight past.

## The idea

Pick a house (row, column or box) and two digits, say 4 and 8. If, in that house, 4 can only go in cells X and Y, and 8 can also only go in cells X and Y, then X and Y must be 4 and 8 between them.

Nothing else can fit in those two cells. So **every other candidate in X and Y can be removed**. The Hidden Pair turns into a Naked Pair, and from there the usual eliminations follow.

## An example

A box is missing six digits, 1, 2, 3, 4, 6 and 8, and its empty cells have these candidates:

| Cell | P | Q | R | S | T | U |
|---|---|---|---|---|---|---|
| Candidates | 1 2 4 8 | 1 2 3 6 | 2 4 6 8 | 1 3 6 | 2 3 | 1 3 6 |

Look at where each digit can go in the box:

- 4 fits only in P and R.
- 8 fits only in P and R.

That's a Hidden Pair on {4, 8} in P and R. Strip everything else from them:

| Cell | P | Q | R | S | T | U |
|---|---|---|---|---|---|---|
| Candidates | 4 8 | 1 2 3 6 | 4 8 | 1 3 6 | 2 3 | 1 3 6 |

P and R are now an ordinary Naked Pair, and the 1, 2 and 6 they gave up are no longer cluttering the box. Now 2 fits only in Q and T, which is the kind of narrowing that sets up the next move once the row and column around them are checked.

## How to find them

Cell-by-cell scanning won't show a Hidden Pair; you have to scan **by digit**.

1. Choose a house with plenty of notes.
2. For each digit 1 to 9, note how many cells in the house can hold it.
3. Any digit with exactly two spots is a possible member. If another digit has the **same** two spots, you've found the pair.

It's slower than spotting a Naked Pair, which is why most players check for naked pairs first.

## Hidden Triples

Three digits confined to the same three cells of a house work the same way: those cells hold those digits, so every other candidate in them can go. As with Naked Triples, each digit doesn't have to appear in all three cells, only somewhere within them.

## Where it sits

Hidden Pairs and Hidden Triples are part of the Hard tier in One Sudoku, together with Naked Pairs and Triples, [Pointing Pairs](/blog/pointing-pairs/) and Box/Line Reduction. [Learn Sudoku](/blog/learn-sudoku/) shows how the tiers fit together.
