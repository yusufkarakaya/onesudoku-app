---
title: "The X-Wing Sudoku Technique, Explained Simply"
description: "Two rows, two columns, one digit locked into a rectangle. What an X-Wing is, why it works, how to spot one and what it lets you remove."
pubDate: 2026-10-20
readingTime: 5
category: "Technique"
---

The X-Wing is the first technique most players learn that looks at **two rows at once**. It sounds advanced, but the logic is the same as a [Pointing Pair](/blog/pointing-pairs/): a digit is locked into certain lines, so it can't go anywhere else on them.

In One Sudoku, every Expert puzzle needs at least one X-Wing, Swordfish or XY-Wing.

## The pattern

Pick one digit, say 5, and look at it alone.

Find **two rows** where 5 has **exactly two** possible cells, and where those cells sit in the **same two columns**. Together they form the four corners of a rectangle.

```
        col 2      col 7
row 3     5    ·  ·  5
row 8     5    ·  ·  5
```

## Why it works

Row 3 needs a 5, and it can only be in column 2 or column 7. Row 8 is the same.

- If row 3's 5 is in column 2, row 8's can't also be in column 2, so it's in column 7.
- If row 3's 5 is in column 7, row 8's is in column 2.

Either way, one 5 lands in column 2 and the other in column 7, both on rows 3 and 8. So **those two columns already have their 5**, and 5 can be crossed out of **every other cell in columns 2 and 7**.

The two possibilities form the diagonals of the rectangle, an X, which is where the name comes from.

## The flipped version

It works with rows and columns swapped. If 5 has exactly two spots in each of two **columns**, and those spots share the same two **rows**, remove 5 from the rest of those two rows.

## How to spot one

1. Fill in your notes completely. An X-Wing hides in incomplete notes.
2. Pick a digit that appears a lot on the board but has few candidates left.
3. Go row by row and list the rows where that digit has exactly two spots.
4. Look for two rows whose spots share the same columns.
5. Check there's actually something to remove. An X-Wing that eliminates nothing is real but useless.

Then repeat for columns. It's methodical rather than clever: most missed X-Wings are missed because nobody looked, not because they were hard to see.

## Common mistakes

- **More than two spots in a row.** If 5 has three possible cells in row 3, it's not an X-Wing (though it might be part of a [Swordfish](/blog/swordfish/)).
- **Removing from the wrong lines.** If the pattern was found in rows, you remove from the **columns**, and vice versa.
- **Removing from the corners.** The four corner cells keep their candidate. Only the other cells on those lines lose it.

## Where it sits

X-Wing is the first of the three Expert techniques in [One Sudoku's learning path](/blog/learn-sudoku/). The [Swordfish](/blog/swordfish/) stretches it to three rows, and the [XY-Wing](/blog/xy-wing/) uses a different idea altogether.
