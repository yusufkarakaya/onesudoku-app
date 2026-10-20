---
title: "Hayaletli Konak: Hayalet Mantık Bulmacası Nasıl Çözülür"
description: "Her katta, her koridorda ve her odada bir hayalet; iki hayalet asla birbirine değmez. One Sudoku’nun Cadılar Bayramı bulmacasının kuralları ve her tahtayı çözen birkaç fikir."
pubDate: 2026-10-20
readingTime: 5
category: "Guide"
translationKey: "haunted-manor-ghost-puzzle"
---

Hayaletli Konak (uygulamada “Haunted Manor”), One Sudoku’da sudoku modlarının yanında duran Cadılar Bayramı bulmacası. Öğrenmesi sudokudan bile kolay: sayı yok, sadece hayaletler var ve sadece üç kural. Daha önce Queens tarzı ya da Star Battle bulmacası oynadıysan bir dakikada kendini evinde hissedersin.

Uygulamadaki her bulmaca gibi her konak da sadece mantıkla çözülebilir. Asla tahmin etmen gerekmez.

## Kurallar

Konak, renkli odalara bölünmüş kare bir tahtadır. Hayaletleri öyle sakla ki:

1. **Her katta** (satır) tam bir hayalet olsun.
2. **Her koridorda** (sütun) tam bir hayalet olsun.
3. **Her odada** (renkli bölge) tam bir hayalet olsun.

Bir kural daha: **iki hayalet birbirine değemez**, çapraz bile. Her hayaletin etrafındaki sekiz hücre ona aittir.

Altı satırlı bir tahtada altı sütun ve altı oda vardır; yani toplam altı hayalet saklarsın.

## Çoğunu çözen alışkanlık: çiz

Her hayalet yerleştirdiğinde üç hücre grubu birden elenir:

- satırının geri kalanı,
- sütununun geri kalanı,
- etrafındaki sekiz hücre.

Bunları işaretle. Bir konakta işin çoğu hayalet bulmak değil, hayaletin olamayacağı hücreleri silmektir. Bir satırda, sütunda ya da odada tek bir açık hücre kaldığında hayalet oradadır.

## Bilmeye değer beş fikir

### 1. Önce küçük odalar

Tek hücreli bir oda bedava bir hayalettir. İki ya da üç hücrelik bir oda da neredeyse o kadar iyidir, çünkü seçenekleri hızla daraltır. Her konağa en küçük odalara bakarak başla.

### 2. Tek satıra sıkışan oda o satırı alır

Bir odanın bütün açık hücreleri aynı satırdaysa, o odanın hayaleti o satırdadır. Yani satırın hayaleti belli; satırın oda dışındaki diğer hücreleri çizilebilir. Sütunlar için de aynısı geçerli.

### 3. Odaları satırlara karşı say

İkinci fikir büyür. İki oda da aynı iki satıra sıkışmışsa, o iki satır o iki odaya aittir. Bu satırlarda başka bir odaya ait her hücre çizilebilir. Üç satırda üç oda da aynı şekilde çalışır.

Tersten de çalışır: iki satır sadece aynı iki odanın hücrelerinden doldurulabiliyorsa, o odaların hayaletleri o satırlardadır ve odaların geri kalanı çizilebilir.

### 4. Bütün bir odaya değen hücreler

Küçük bir odaya bak ve sor: odanın her açık hücresine değen bir dış hücre var mı? Varsa, oraya konan bir hayalet odayı gidecek yersiz bırakır; o hücre çizilir. 2×2’lik bir kareye sığan bir oda bu yolla şaşırtıcı sayıda komşuyu eler.

### 5. Tahtada değil, kafanda dene

Bir satırda iki hücre kaldığında hayaleti birine koyduğunu düşün ve bir iki hamle boyunca çizilenleri takip et. Bir oda hiç açık hücresiz kalıyorsa hayalet diğer hücreye aittir. Bu tahmin değil, mantıktır: bir seçeneğin imkânsız olduğunu kanıtladın.

## Üç boyut

Konak üç boyutta gelir:

| Boyut | Tahta | Hayalet |
|---|---|---|
| **Cottage** | 6×6 | 6 |
| **Manor** | 8×8 | 8 |
| **Castle** | 9×9 | 9 |

Büyük tahtalar daha çok oda ve daha uzun akıl yürütme zincirleri demek, ama yukarıdaki fikirler hepsi için yeterli. Kuralları parmaklarına oturtmak için Cottage ile başla.

## Takıldığında

Zamanlayıcı yok, acele yok. Takılırsan ipucu hayaleti senin yerine koymak yerine bir sonraki adımını gösterir; böylece sadece geçip gitmez, hamleyi öğrenirsin.

Hayaletli Konak uygulamada Klasik, Killer ve Kurtarma sudokusunun yanında. Sudoku tarafını da denemek istersen [Sudoku Öğren: Kolay’dan Uzman’a](/tr/blog/sudoku-ogren/) uygulamanın istediği her tekniği sırayla anlatıyor.
