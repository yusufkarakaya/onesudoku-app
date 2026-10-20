---
title: "The XY-Wing Sudoku Technique, Step by Step"
description: "Three cells with two candidates each, linked so that one digit is ruled out wherever both ends can see. How the XY-Wing works and how to find a pivot and its pincers."
pubDate: 2026-10-20
readingTime: 5
category: "Technique"
---

The XY-Wing (sometimes called the Y-Wing) is a different kind of pattern from the [X-Wing](/blog/x-wing/). Instead of tracking one digit across rows, it chains together **three cells that each have exactly two candidates**.

## The pattern

You need:

- A **pivot** cell with two candidates, say **{X, Y}**.
- A **pincer** that the pivot can see (same row, column or box) with candidates **{X, Z}**.
- A second **pincer** that the pivot can also see, with candidates **{Y, Z}**.

The two pincers share the digit **Z**. The pivot doesn't have Z at all.

## Why it works

The pivot is either X or Y.

- If the pivot is **X**, the first pincer, which sees it, can't be X, so it's **Z**.
- If the pivot is **Y**, the second pincer can't be Y, so it's **Z**.

Whichever way the pivot goes, one of the two pincers is Z. So any cell that can see **both** pincers can't be Z. Cross Z out of it.

## An example

| Cell | Candidates | Role |
|---|---|---|
| Row 2, column 2 | 3 7 | Pivot {X=3, Y=7} |
| Row 2, column 8 | 3 9 | Pincer {X=3, Z=9}, same row as the pivot |
| Row 3, column 1 | 7 9 | Pincer {Y=7, Z=9}, same box as the pivot |

Z is 9. Which cells see both pincers? The cells in row 3, columns 7, 8 and 9 do: they share row 3 with the second pincer and the top-right box with the first. Remove 9 from any of them that have it as a candidate. (Row 2, columns 1 and 3 qualify too: they share the top-left box with one pincer and row 2 with the other.)

## How to find one

1. Fill in your notes. You need complete candidates to trust the pattern.
2. List the cells with exactly two candidates. Only these can be in an XY-Wing.
3. Treat each one as a possible pivot {X, Y}. Look among the cells it sees for one with {X, something} and one with {Y, the same something}.
4. When you find them, look for cells that see both pincers and have that shared digit.

Step 3 sounds slow, but on a hard board there are usually only a handful of two-candidate cells, and they're easy to scan.

## Where it sits

XY-Wing is the hardest technique One Sudoku ever asks for. Its Expert level is built from the [X-Wing](/blog/x-wing/), [Swordfish](/blog/swordfish/) and XY-Wing, so with these three plus the Hard-tier techniques you have everything any puzzle in the app needs. [Learn Sudoku](/blog/learn-sudoku/) puts the full set in order.
