---
title: "Killer-Sudoku Regeln und der richtige Einstieg"
description: "Killer-Sudoku ersetzt die Vorgaben durch Käfige mit Summen. Hier sind die Regeln, die 45er-Regel und ein Weg Schritt für Schritt in dein erstes Gitter."
pubDate: 2026-10-20
readingTime: 6
category: "Killer"
translationKey: "killer-sudoku-rules"
---

Ein Killer-Sudoku sieht aus wie ein normales Sudoku, das jemand vergessen hat auszufüllen. Es gibt kaum Vorgaben oder gar keine. Stattdessen ist das Gitter mit gestrichelten Umrissen bedeckt, den **Käfigen**, jeder mit einer kleinen Zahl in der Ecke. Diese Zahl und ein bisschen Rechnen sind das, womit du löst.

Wenn du klassisches Sudoku kannst, hast du den größten Teil schon geschafft. Falls nicht, lies zuerst die [Sudoku Regeln](/de/blog/sudoku-regeln/); Killer behält jede davon.

## Die Regeln

1. **Die klassischen Regeln gelten weiter.** Jede Zeile, jede Spalte und jeder 3×3-Block enthält die Zahlen 1 bis 9 genau einmal.
2. **Jeder Käfig ergibt seine Summe.** Die Zahlen in einem gestrichelten Käfig müssen zusammen die kleine Zahl in seiner Ecke ergeben.
3. **Im Käfig wiederholt sich keine Zahl.** Ein Käfig aus zwei Feldern mit Summe 4 kann nur 1 und 3 sein, nie 2 und 2.

Das ist das ganze Regelwerk. Jedes Killer-Sudoku mit eindeutiger Lösung lässt sich damit ohne Raten lösen.

## Die ersten Züge: die leichten Käfige

Manche Käfige lassen sich nur auf eine Weise bilden. Such zuerst diese.

- Ein **Zweierkäfig mit Summe 3** ist immer 1 und 2. Einer mit 17 ist immer 8 und 9.
- Ein **Dreierkäfig mit Summe 6** ist immer 1, 2 und 3. Einer mit 24 ist immer 7, 8 und 9.
- Ein **Käfig aus einem Feld** ist einfach eine Vorgabe: Seine Summe ist die Zahl.

Diese Käfige verraten, welche Zahlen drin sind, aber nicht in welcher Reihenfolge. Notier beide oder alle drei als Kandidaten; die Zeilen, Spalten und Blöcke drumherum klären die Reihenfolge.

Die [Killer-Sudoku-Kombinationstabelle](/de/blog/killer-sudoku-kombinationen/) listet jede Käfiggröße und Summe auf, die eindeutigen Käfige sind markiert.

## Die 45er-Regel

Das ist die Technik, die Killer zu einem eigenen Spiel macht.

Die Zahlen 1 bis 9 ergeben zusammen **45**. Also ergibt jede Zeile, jede Spalte und jeder Block 45. Kennst du die Summe fast eines ganzen Blocks, kennst du auch den Rest.

**Beispiel.** Ein Block ist von drei Käfigen bedeckt, die ganz in ihm liegen und zusammen 38 ergeben, plus ein Feld, das zu einem von außen hereinragenden Käfig gehört. Dieses einzelne Feld muss 45 − 38 = **7** sein.

Das funktioniert in beide Richtungen:

- **Innies.** Käfige füllen eine Zeile, Spalte oder einen Block bis auf ein paar Felder, die zu herausragenden Käfigen gehören. Diese übrigen Felder ergeben 45 minus die Käfige, die ganz drinliegen.
- **Outies.** Ein Käfig ragt um ein oder zwei Felder aus einem Block heraus. Addiere alle Käfige, die den Block berühren, und zieh 45 ab: Der Rest ist die Summe der herausragenden Felder.

Weißt du erst einmal, dass zwei Felder zusammen zum Beispiel 4 ergeben, bist du wieder auf vertrautem Terrain: 1 und 3.

Die Regel lässt sich auch erweitern. Zwei benachbarte Zeilen ergeben 90, drei ergeben 135. Schwerere Rätsel verlangen, dass du das nutzt.

## Eine Routine, die funktioniert

1. Markiere alle eindeutigen Käfige.
2. Wende die 45er-Regel auf jeden Block an, dann auf jede Zeile und Spalte, und such nach ein oder zwei übrigen Feldern.
3. Nutze normale Sudoku-Logik für das, was du eingetragen hast: erst Singles, dann Paare.
4. Hat ein Käfig noch mehrere Kombinationen, such eine Zahl, die in **allen** vorkommt. Diese Zahl ist sicher im Käfig und kann deshalb nirgends sonst in einer Zeile, Spalte oder einem Block stehen, in dem der ganze Käfig liegt.
5. Zurück zu Schritt 2. Jede eingetragene Zahl macht eine weitere 45er-Rechnung möglich.

## Killer in One Sudoku

Die App hat drei Killer-Stufen, und jede verlangt bestimmte Ideen:

| Stufe | Womit du startest | Was sie verlangt |
|---|---|---|
| **Leicht** | Kleine Käfige mit 2 bis 3 Feldern und ein paar eingetragene Zahlen | Käfigsummen und Singles |
| **Mittel** | Nur Summen, Käfige mit 2 bis 4 Feldern | Zusätzlich die 45er-Regel auf einer Zeile, Spalte oder einem Block |
| **Schwer** | Nur Summen, Käfige mit 3 bis 5 Feldern | Zusätzlich die 45er-Regel über zwei Zeilen oder Spalten, Nackte Paare und Zeiger |

Jedes Gitter wird von einem Löser geprüft, der wie ein Mensch vorgeht. Es gibt also immer einen logischen nächsten Schritt, und du musst nie raten. Wenn du im klassischen Modus bis Schwer gekommen bist, fang Killer auf Leicht an: Das Rechnen braucht ein paar Spiele, bis es automatisch geht, danach geht es mit den Stufen schnell.
