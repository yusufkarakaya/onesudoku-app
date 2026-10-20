---
title: "Killer-Sudoku Kombinationen: Alle Käfigsummen für 2 bis 9 Felder"
description: "Die vollständige Kombinationstabelle für Killer-Sudoku: jede Zahlengruppe, die jede Summe ergibt, für Käfige mit zwei bis neun Feldern, eindeutige Käfige markiert."
pubDate: 2026-10-20
readingTime: 4
category: "Killer"
translationKey: "killer-sudoku-combinations"
---

Im Killer-Sudoku wiederholen sich die Zahlen eines Käfigs nie, also lässt sich jede Summe nur auf wenige Arten bilden. Diese Arten zu kennen ist schon der halbe Weg. Diese Seite listet jede Kombination für jede Käfiggröße auf, erzeugt durch Prüfen aller 511 Gruppen verschiedener Zahlen von 1 bis 9.

Neu bei Killer? Lies zuerst [Killer-Sudoku Regeln und der richtige Einstieg](/de/blog/killer-sudoku-regeln/) und komm dann hierher zurück.

## So benutzt du die Tabelle

Such die Käfiggröße, dann die Summe. Die rechte Spalte zeigt jede passende Zahlengruppe. Eine Kombination sagt dir, **welche** Zahlen im Käfig sind, nie **wo**: Die Reihenfolge im Käfig entscheiden die Zeilen-, Spalten- und Blockregeln.

**Fett** gedruckt sind Käfige mit nur einer möglichen Kombination. Nach ihnen suchst du in jedem Killer zuerst, denn sie sagen dir genau, mit welchen Zahlen du es zu tun hast.

## Die, die sich zu merken lohnen

Du brauchst nicht die ganze Tabelle im Kopf. Diese kommen ständig vor und decken die meisten Eröffnungen ab:

| Käfig | Summe | Einzig mögliche Zahlen |
|---|---|---|
| 2 Felder | 3 | 1 2 |
| 2 Felder | 4 | 1 3 |
| 2 Felder | 16 | 7 9 |
| 2 Felder | 17 | 8 9 |
| 3 Felder | 6 | 1 2 3 |
| 3 Felder | 7 | 1 2 4 |
| 3 Felder | 23 | 6 8 9 |
| 3 Felder | 24 | 7 8 9 |
| 4 Felder | 10 | 1 2 3 4 |
| 4 Felder | 11 | 1 2 3 5 |
| 4 Felder | 29 | 5 7 8 9 |
| 4 Felder | 30 | 6 7 8 9 |

Das Muster lässt sich leicht rekonstruieren: Für jede Größe haben die kleinste und die größte Summe genau eine Kombination, ebenso die Summe einen Schritt weiter innen von jedem Ende.

Zwei weitere Abkürzungen:

- **Große Käfige liest du am besten über das, was fehlt.** Ein Siebenerkäfig mit Summe 40 nutzt alle Zahlen außer zwei, die zusammen 5 ergeben (45 − 40): Es fehlen 1 und 4 oder 2 und 3. Einem Achterkäfig fehlt genau eine Zahl: 45 minus die Summe.
- **Gemeinsame Zahlen.** In einem Zweierkäfig mit Summe 10 besteht jede Kombination aus zwei verschiedenen Zahlen mit Summe 10, also ist die 5 nie dabei. Ein Dreierkäfig mit Summe 8 ist 1 2 5 oder 1 3 4, enthält also immer eine 1.

## Die vollständige Tabelle

### 2 Zellen

| Summe | Kombinationen |
|---|---|
| 3 | **12** |
| 4 | **13** |
| 5 | 14 · 23 |
| 6 | 15 · 24 |
| 7 | 16 · 25 · 34 |
| 8 | 17 · 26 · 35 |
| 9 | 18 · 27 · 36 · 45 |
| 10 | 19 · 28 · 37 · 46 |
| 11 | 29 · 38 · 47 · 56 |
| 12 | 39 · 48 · 57 |
| 13 | 49 · 58 · 67 |
| 14 | 59 · 68 |
| 15 | 69 · 78 |
| 16 | **79** |
| 17 | **89** |

### 3 Zellen

| Summe | Kombinationen |
|---|---|
| 6 | **123** |
| 7 | **124** |
| 8 | 125 · 134 |
| 9 | 126 · 135 · 234 |
| 10 | 127 · 136 · 145 · 235 |
| 11 | 128 · 137 · 146 · 236 · 245 |
| 12 | 129 · 138 · 147 · 156 · 237 · 246 · 345 |
| 13 | 139 · 148 · 157 · 238 · 247 · 256 · 346 |
| 14 | 149 · 158 · 167 · 239 · 248 · 257 · 347 · 356 |
| 15 | 159 · 168 · 249 · 258 · 267 · 348 · 357 · 456 |
| 16 | 169 · 178 · 259 · 268 · 349 · 358 · 367 · 457 |
| 17 | 179 · 269 · 278 · 359 · 368 · 458 · 467 |
| 18 | 189 · 279 · 369 · 378 · 459 · 468 · 567 |
| 19 | 289 · 379 · 469 · 478 · 568 |
| 20 | 389 · 479 · 569 · 578 |
| 21 | 489 · 579 · 678 |
| 22 | 589 · 679 |
| 23 | **689** |
| 24 | **789** |

### 4 Zellen

| Summe | Kombinationen |
|---|---|
| 10 | **1234** |
| 11 | **1235** |
| 12 | 1236 · 1245 |
| 13 | 1237 · 1246 · 1345 |
| 14 | 1238 · 1247 · 1256 · 1346 · 2345 |
| 15 | 1239 · 1248 · 1257 · 1347 · 1356 · 2346 |
| 16 | 1249 · 1258 · 1267 · 1348 · 1357 · 1456 · 2347 · 2356 |
| 17 | 1259 · 1268 · 1349 · 1358 · 1367 · 1457 · 2348 · 2357 · 2456 |
| 18 | 1269 · 1278 · 1359 · 1368 · 1458 · 1467 · 2349 · 2358 · 2367 · 2457 · 3456 |
| 19 | 1279 · 1369 · 1378 · 1459 · 1468 · 1567 · 2359 · 2368 · 2458 · 2467 · 3457 |
| 20 | 1289 · 1379 · 1469 · 1478 · 1568 · 2369 · 2378 · 2459 · 2468 · 2567 · 3458 · 3467 |
| 21 | 1389 · 1479 · 1569 · 1578 · 2379 · 2469 · 2478 · 2568 · 3459 · 3468 · 3567 |
| 22 | 1489 · 1579 · 1678 · 2389 · 2479 · 2569 · 2578 · 3469 · 3478 · 3568 · 4567 |
| 23 | 1589 · 1679 · 2489 · 2579 · 2678 · 3479 · 3569 · 3578 · 4568 |
| 24 | 1689 · 2589 · 2679 · 3489 · 3579 · 3678 · 4569 · 4578 |
| 25 | 1789 · 2689 · 3589 · 3679 · 4579 · 4678 |
| 26 | 2789 · 3689 · 4589 · 4679 · 5678 |
| 27 | 3789 · 4689 · 5679 |
| 28 | 4789 · 5689 |
| 29 | **5789** |
| 30 | **6789** |

### 5 Zellen

| Summe | Kombinationen |
|---|---|
| 15 | **12345** |
| 16 | **12346** |
| 17 | 12347 · 12356 |
| 18 | 12348 · 12357 · 12456 |
| 19 | 12349 · 12358 · 12367 · 12457 · 13456 |
| 20 | 12359 · 12368 · 12458 · 12467 · 13457 · 23456 |
| 21 | 12369 · 12378 · 12459 · 12468 · 12567 · 13458 · 13467 · 23457 |
| 22 | 12379 · 12469 · 12478 · 12568 · 13459 · 13468 · 13567 · 23458 · 23467 |
| 23 | 12389 · 12479 · 12569 · 12578 · 13469 · 13478 · 13568 · 14567 · 23459 · 23468 · 23567 |
| 24 | 12489 · 12579 · 12678 · 13479 · 13569 · 13578 · 14568 · 23469 · 23478 · 23568 · 24567 |
| 25 | 12589 · 12679 · 13489 · 13579 · 13678 · 14569 · 14578 · 23479 · 23569 · 23578 · 24568 · 34567 |
| 26 | 12689 · 13589 · 13679 · 14579 · 14678 · 23489 · 23579 · 23678 · 24569 · 24578 · 34568 |
| 27 | 12789 · 13689 · 14589 · 14679 · 15678 · 23589 · 23679 · 24579 · 24678 · 34569 · 34578 |
| 28 | 13789 · 14689 · 15679 · 23689 · 24589 · 24679 · 25678 · 34579 · 34678 |
| 29 | 14789 · 15689 · 23789 · 24689 · 25679 · 34589 · 34679 · 35678 |
| 30 | 15789 · 24789 · 25689 · 34689 · 35679 · 45678 |
| 31 | 16789 · 25789 · 34789 · 35689 · 45679 |
| 32 | 26789 · 35789 · 45689 |
| 33 | 36789 · 45789 |
| 34 | **46789** |
| 35 | **56789** |

### 6 Zellen

| Summe | Kombinationen |
|---|---|
| 21 | **123456** |
| 22 | **123457** |
| 23 | 123458 · 123467 |
| 24 | 123459 · 123468 · 123567 |
| 25 | 123469 · 123478 · 123568 · 124567 |
| 26 | 123479 · 123569 · 123578 · 124568 · 134567 |
| 27 | 123489 · 123579 · 123678 · 124569 · 124578 · 134568 · 234567 |
| 28 | 123589 · 123679 · 124579 · 124678 · 134569 · 134578 · 234568 |
| 29 | 123689 · 124589 · 124679 · 125678 · 134579 · 134678 · 234569 · 234578 |
| 30 | 123789 · 124689 · 125679 · 134589 · 134679 · 135678 · 234579 · 234678 |
| 31 | 124789 · 125689 · 134689 · 135679 · 145678 · 234589 · 234679 · 235678 |
| 32 | 125789 · 134789 · 135689 · 145679 · 234689 · 235679 · 245678 |
| 33 | 126789 · 135789 · 145689 · 234789 · 235689 · 245679 · 345678 |
| 34 | 136789 · 145789 · 235789 · 245689 · 345679 |
| 35 | 146789 · 236789 · 245789 · 345689 |
| 36 | 156789 · 246789 · 345789 |
| 37 | 256789 · 346789 |
| 38 | **356789** |
| 39 | **456789** |

### 7 Zellen

| Summe | Kombinationen |
|---|---|
| 28 | **1234567** |
| 29 | **1234568** |
| 30 | 1234569 · 1234578 |
| 31 | 1234579 · 1234678 |
| 32 | 1234589 · 1234679 · 1235678 |
| 33 | 1234689 · 1235679 · 1245678 |
| 34 | 1234789 · 1235689 · 1245679 · 1345678 |
| 35 | 1235789 · 1245689 · 1345679 · 2345678 |
| 36 | 1236789 · 1245789 · 1345689 · 2345679 |
| 37 | 1246789 · 1345789 · 2345689 |
| 38 | 1256789 · 1346789 · 2345789 |
| 39 | 1356789 · 2346789 |
| 40 | 1456789 · 2356789 |
| 41 | **2456789** |
| 42 | **3456789** |

### 8 Zellen

| Summe | Kombinationen |
|---|---|
| 36 | **12345678** |
| 37 | **12345679** |
| 38 | **12345689** |
| 39 | **12345789** |
| 40 | **12346789** |
| 41 | **12356789** |
| 42 | **12456789** |
| 43 | **13456789** |
| 44 | **23456789** |

### 9 Zellen

| Summe | Kombinationen |
|---|---|
| 45 | **123456789** |

## Wo die Tabelle nicht mehr weiterhilft

Die Tabelle grenzt jeden Käfig auf eine Zahlengruppe ein. Um die Zahlen zu platzieren, kombinierst du sie mit den normalen Sudoku-Regeln und der **45er-Regel**: Jede Zeile, Spalte und jeder Block ergibt 45. Decken Käfige also einen Block bis auf ein Feld ab, ist dieses Feld 45 minus die Summe der Käfige. [Killer-Sudoku Regeln und der richtige Einstieg](/de/blog/killer-sudoku-regeln/) erklärt das mit Beispielen.

Der Killer-Modus von One Sudoku hat drei Stufen. Leicht nutzt kleine Käfige mit zwei oder drei Feldern und ein paar eingetragene Zahlen zum Start. Mittel und Schwer zeigen nur Summen, mit Käfigen bis zu vier und fünf Feldern. Jedes Gitter lässt sich mit Logik beenden, ohne Raten.
