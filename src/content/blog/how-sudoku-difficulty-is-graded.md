---
title: "How Sudoku Difficulty Is Graded (and Why Clue Count Misleads)"
description: "Why the number of given digits is a poor guide to how hard a sudoku is, and how One Sudoku grades every puzzle by the hardest technique a person needs to solve it."
pubDate: 2026-10-20
readingTime: 5
category: "Guide"
---

Most people assume a sudoku is harder when it has fewer numbers printed in it. That's roughly true on average, but it's a poor guide to any single puzzle. A grid with 25 clues can fall apart in five minutes, and one with 32 can stop an experienced solver cold.

What actually makes a puzzle hard is **the hardest step you're forced to take**.

## Why clue count misleads

Clues matter less than where they are. Twenty-five well-placed clues can leave a chain of easy singles from start to finish. Thirty clues bunched into a few boxes can leave the rest of the grid with nothing to grip, and you'll need pairs or an X-Wing to break in.

So the count tells you something about how long a puzzle takes to fill in, and very little about whether you'll be able to finish it.

## Grading by technique

The better approach is to solve the puzzle the way a person would and note what it took:

1. Try the simplest technique. If it makes progress, apply it and start again from the top.
2. If not, try the next one up, and so on.
3. Record the **hardest technique the solve ever needed**. That decides the level.

Because the grader always reaches for the easiest move first, it only climbs to a harder technique when nothing simpler works. That's exactly the experience of a solver getting stuck.

If the grader runs out of techniques before the grid is full, the puzzle would need guessing. One Sudoku throws those puzzles away. Every puzzle it gives you can be finished by logic.

## One Sudoku's levels

Each level is a band of techniques. A puzzle must **need** at least one technique from its band and **nothing** from a harder one, which is what keeps the levels genuinely different from each other.

| Level | Must use | Never needs more than | Typical clues | Target time |
|---|---|---|---|---|
| **Easy** | Naked Single | Naked Single | about 38–43 | 5 min |
| **Medium** | Hidden Single | Hidden Single | about 32–37 | 10 min |
| **Hard** | A pair, triple or pointing move | Hidden Triple | about 27–31 | 15 min |
| **Expert** | X-Wing, Swordfish or XY-Wing | XY-Wing | about 23–26 | 20 min |

The clue counts are there because fewer clues do tend to go with harder logic, but the technique is what decides. The target times feed the star rating you get when you finish.

## The eleven techniques

In the order the grader tries them:

1. Naked Single
2. Hidden Single
3. [Naked Pair](/blog/naked-pairs/)
4. [Hidden Pair](/blog/hidden-pairs/)
5. [Pointing Pair](/blog/pointing-pairs/)
6. [Box/Line Reduction](/blog/pointing-pairs/)
7. Naked Triple
8. Hidden Triple
9. [X-Wing](/blog/x-wing/)
10. [Swordfish](/blog/swordfish/)
11. [XY-Wing](/blog/xy-wing/)

Know these eleven and you can solve every classic puzzle in the app without a hint. [Learn Sudoku](/blog/learn-sudoku/) walks through them level by level.

## Killer and Haunted Manor

The same principle grades the other modes. [Killer Sudoku](/blog/killer-sudoku-rules/) boards are graded by whether they need only cage sums and singles, the rule of 45, or the rule of 45 across two lines plus pairs. [Haunted Manor](/blog/haunted-manor-ghost-puzzle/) boards are proven to have one answer reachable by reasoning before they ship.
