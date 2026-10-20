---
title: "The Swordfish Sudoku Technique: An X-Wing in Three Rows"
description: "A Swordfish is the X-Wing stretched across three rows and three columns. How the pattern works, how to find it, and why it's easier than it sounds."
pubDate: 2026-10-20
readingTime: 4
category: "Technique"
---

If you know the [X-Wing](/blog/x-wing/), you already know the Swordfish. It's the same idea with one more row and one more column.

## The pattern

Pick one digit. Find **three rows** where that digit has only **two or three** possible cells, and where all of those cells fall within the **same three columns**.

Then the three rows' copies of the digit must land in those three columns, one in each. So **those three columns already have their copy**, and the digit can be removed from every other cell in them.

As with the X-Wing, it also works the other way round: three columns whose candidates fall in the same three rows let you clear those rows.

## An example

Say we're tracking 4. Its candidates in three rows are:

| | Col 1 | Col 5 | Col 8 |
|---|---|---|---|
| **Row 2** | 4 | | 4 |
| **Row 6** | 4 | 4 | |
| **Row 9** | | 4 | 4 |

Every 4 in those rows is in columns 1, 5 or 8, and each row needs one. Three rows, three columns: each column gets exactly one of them. Cross 4 out of the rest of columns 1, 5 and 8.

Notice that no row has all three columns. That's normal. A Swordfish doesn't need a full 3×3 pattern of candidates; it only needs the rows' candidates to stay inside three columns between them.

## How to find one

1. Pick a digit and go row by row, listing the rows where it has two or three candidates.
2. Look for three of those rows whose candidates, combined, cover only three columns.
3. Check the rest of those columns for the digit. If it isn't there, there's nothing to remove.

Then try the same with columns.

## Is it worth learning?

Swordfish patterns turn up less often than X-Wings, and some players solve for years without one. But when an Expert puzzle stalls and the X-Wing search comes up empty, a Swordfish is often what's left. In One Sudoku it sits in the Expert tier with the X-Wing and the [XY-Wing](/blog/xy-wing/), and no puzzle in the app needs anything beyond those three.
