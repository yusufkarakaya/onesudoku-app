---
title: "Reglas del Killer Sudoku y cómo empezar"
description: "El Killer Sudoku cambia los números dados por jaulas con sumas. Aquí tienes las reglas, la regla del 45 y una forma paso a paso de entrar en tu primer tablero."
pubDate: 2026-10-20
readingTime: 6
category: "Killer"
translationKey: "killer-sudoku-rules"
heroImage: ../../../assets/blog/killer-sudoku-rules-hero.jpg
heroAlt: "Recortes de papel con números negros esparcidos sobre fondo blanco"
heroCredit: "Cooper Hofmann on Unsplash"
heroCreditUrl: "https://unsplash.com/photos/OBgh6h_2yL0"
---

Un Killer Sudoku parece un sudoku normal que alguien se olvidó de rellenar. Hay pocas pistas o ninguna. En su lugar, la cuadrícula está cubierta de contornos punteados llamados **jaulas**, cada una con un número pequeño en la esquina. Ese número, y un poco de aritmética, es lo que usas para resolver.

Si ya sabes jugar al sudoku clásico, tienes casi todo hecho. Si no, lee primero [Cómo jugar al sudoku](/es/blog/como-jugar-sudoku/); el Killer mantiene todas esas reglas.

## Las reglas

1. **Las reglas clásicas siguen valiendo.** Cada fila, cada columna y cada caja de 3×3 contiene los números del 1 al 9 una sola vez.
2. **Cada jaula suma su número.** Los números de dentro de una jaula punteada deben sumar la cifra pequeña de su esquina.
3. **No se repiten números dentro de una jaula.** Una jaula de dos casillas que suma 4 solo puede ser 1 y 3, nunca 2 y 2.

Ese es el reglamento completo. Todo Killer con solución única se puede resolver con él sin adivinar.

## Primeras jugadas: las jaulas fáciles

Algunas jaulas solo se pueden formar de una manera. Búscalas primero.

- Una **jaula de dos casillas que suma 3** siempre es 1 y 2. Una que suma 17 siempre es 8 y 9.
- Una **jaula de tres casillas que suma 6** siempre es 1, 2 y 3. Una que suma 24 siempre es 7, 8 y 9.
- Una **jaula de una casilla** es simplemente una pista: su suma es el número.

Estas jaulas te dicen qué números contienen, pero no en qué orden. Anota los dos o tres como candidatos; las filas, columnas y cajas de alrededor decidirán el orden.

La [tabla de combinaciones del Killer Sudoku](/es/blog/combinaciones-killer-sudoku/) recoge cada tamaño de jaula y cada suma, con las jaulas de respuesta única marcadas.

## La regla del 45

Es la técnica que convierte el Killer en un juego propio.

Los números del 1 al 9 suman **45**. Por tanto, cada fila, cada columna y cada caja suma 45. Si conoces el total de casi toda una caja, conoces el resto.

**Ejemplo.** Una caja está cubierta por tres jaulas que quedan enteras dentro de ella y suman 38, más una casilla que pertenece a una jaula que entra desde fuera. Esa casilla suelta tiene que ser 45 − 38 = **7**.

Funciona en las dos direcciones:

- **Las de dentro.** Las jaulas llenan una fila, columna o caja salvo unas pocas casillas que pertenecen a jaulas que sobresalen. Esas casillas sobrantes suman 45 menos las jaulas que caben dentro.
- **Las de fuera.** Una jaula sobresale de una caja una o dos casillas. Suma todas las jaulas que tocan la caja y resta 45: lo que queda es el total de las casillas que sobresalen.

En cuanto sabes que dos casillas suman, por ejemplo, 4, vuelves a terreno conocido: son 1 y 3.

La regla también crece. Dos filas vecinas suman 90 y tres suman 135. Los tableros más difíciles te piden usarlo.

## Una rutina que funciona

1. Marca todas las jaulas de respuesta única.
2. Aplica la regla del 45 a cada caja, y luego a cada fila y columna, buscando una o dos casillas sobrantes.
3. Usa la lógica normal del sudoku con lo que hayas colocado: primero únicos, luego parejas.
4. Si una jaula todavía admite varias combinaciones, busca un número que esté en **todas**. Ese número está seguro en la jaula, así que no puede aparecer en ningún otro sitio de una fila, columna o caja que contenga la jaula entera.
5. Vuelve al paso 2. Cada número que colocas hace posible otra cuenta del 45.

## El Killer en One Sudoku

La app tiene tres niveles de Killer, y cada uno pide un conjunto concreto de ideas:

| Nivel | Con qué empiezas | Qué te pide |
|---|---|---|
| **Fácil** | Jaulas pequeñas de 2 a 3 casillas y algunos números ya puestos | Sumas de jaulas y únicos |
| **Medio** | Solo sumas, jaulas de 2 a 4 casillas | Añade la regla del 45 en una fila, columna o caja |
| **Difícil** | Solo sumas, jaulas de 3 a 5 casillas | Añade la regla del 45 en dos filas o columnas, parejas desnudas y señalamiento |

Cada tablero se comprueba con un resolutor que razona como una persona, así que siempre hay un siguiente paso lógico y nunca tienes que adivinar. Si en el Clásico has llegado a Difícil, empieza el Killer en Fácil: las sumas tardan unas partidas en salir solas, y después los niveles van rápido.
