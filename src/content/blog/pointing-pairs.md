---
title: "Pointing Pairs and Box/Line Reduction in Sudoku"
description: "When a digit inside a box is stuck on one line, it rules that digit out of the rest of the line, and the reverse works too. Two quick eliminations, explained with examples."
pubDate: 2026-10-20
readingTime: 4
category: "Technique"
---

These two techniques are a matched set. Both come from the same observation: **a box and a line (row or column) overlap in three cells**. If a digit's options in one of them all fall inside that overlap, the digit is locked there, and it can't appear in the rest of the other.

## Pointing Pairs (and Triples)

Look inside a box. If every cell where a digit can go lies in the **same row**, then that digit's place in the box is somewhere on that row. And since the row can only hold the digit once, **it can be removed from the rest of the row outside the box**.

The same holds for columns.

### Example

In the top-left box, 6 can only go in two cells, and both are on row 2. Those two cells "point" along row 2. Whichever one ends up holding the 6, row 2 has its 6 inside this box. Cross 6 out of every other cell of row 2, in the middle and right boxes.

If the digit has three possible cells, all on one line, it's a **Pointing Triple**, and the elimination is the same.

## Box/Line Reduction

This is the reverse. Look along a **row**. If every cell where a digit can go lies inside the **same box**, then the row's copy of that digit is in that box. The box can only hold the digit once, so **it can be removed from the other cells of the box**, the ones off this row.

### Example

On row 5, 2 can only go in columns 7 and 9. Both cells are in the middle-right box. So the middle-right box's 2 is on row 5, and 2 can be crossed out of the box's cells on rows 4 and 6.

## How to find them

- **Pointing:** go box by box. For each digit, check whether all its candidates in the box line up.
- **Box/Line:** go row by row and column by column. For each digit, check whether all its candidates sit inside one box.

Both are fast once your notes are in, and they show up often. In practice they're among the most common eliminations in Hard puzzles.

## Where they sit

Pointing Pairs and Box/Line Reduction are part of the Hard tier in One Sudoku, with [Naked Pairs](/blog/naked-pairs/) and [Hidden Pairs](/blog/hidden-pairs/). Once those feel natural, the next step up is the [X-Wing](/blog/x-wing/), which applies the same "locked on a line" logic across two rows at once.
