---
title: "Killer Sudoku Kuralları ve Nasıl Başlanır"
description: "Killer Sudoku verilen sayıların yerine toplamlı kafesler koyar. Kurallar, 45 kuralı ve ilk tahtana adım adım nasıl gireceğin."
pubDate: 2026-10-20
readingTime: 6
category: "Killer"
translationKey: "killer-sudoku-rules"
---

Killer Sudoku, birinin doldurmayı unuttuğu sıradan bir sudokuya benzer. Verilen sayı çok azdır ya da hiç yoktur. Onun yerine tahta, köşesinde küçük bir sayı olan kesikli çizgili alanlarla, yani **kafeslerle** kaplıdır. Çözümü o sayı ve biraz toplama üzerinden yaparsın.

Klasik sudokuyu biliyorsan yolun çoğunu zaten yürüdün. Bilmiyorsan önce [Sudoku nasıl oynanır?](/tr/blog/sudoku-nasil-oynanir/) yazısını oku; Killer o kuralların hepsini korur.

## Kurallar

1. **Klasik kurallar geçerli.** Her satır, her sütun ve her 3×3 kutu 1’den 9’a kadar sayıları tam birer kez içerir.
2. **Her kafes kendi toplamını verir.** Kesikli bir kafesin içindeki sayıların toplamı köşedeki küçük sayıya eşittir.
3. **Bir kafeste aynı sayı tekrar etmez.** Toplamı 4 olan iki hücreli bir kafes sadece 1 ve 3 olabilir, asla 2 ve 2 değil.

Kuralların tamamı bu. Tek çözümlü her Killer bulmacası bunlardan, tahmin etmeden çözülebilir.

## İlk hamlelerin: kolay kafesler

Bazı kafesler sadece tek bir şekilde oluşabilir. Önce onları bul.

- Toplamı **3 olan iki hücreli kafes** her zaman 1 ve 2’dir. Toplamı 17 olan her zaman 8 ve 9.
- Toplamı **6 olan üç hücreli kafes** her zaman 1, 2 ve 3’tür. Toplamı 24 olan her zaman 7, 8 ve 9.
- **Tek hücreli kafes** aslında verilen bir sayıdır: toplamı, hücrenin sayısıdır.

Bu kafesler içlerinde hangi sayıların olduğunu söyler ama sırasını söylemez. İkisini ya da üçünü aday olarak not et; etraflarındaki satır, sütun ve kutular sırayı çözer.

[Killer Sudoku kombinasyon tablosu](/tr/blog/killer-sudoku-kombinasyonlari/) her kafes boyutunu ve toplamını, tek cevaplı kafesler işaretli şekilde listeliyor.

## 45 kuralı

Killer’ı kendine özgü bir oyun yapan teknik bu.

1’den 9’a kadar sayıların toplamı **45**’tir. Yani her satırın, her sütunun ve her kutunun toplamı 45’tir. Bir kutunun büyük kısmının toplamını biliyorsan geri kalanını da bilirsin.

**Örnek.** Bir kutu, tamamen içinde kalan ve toplamı 38 olan üç kafesle, bir de dışarıdan uzanan bir kafese ait tek bir hücreyle kaplı. O yalnız hücre 45 − 38 = **7** olmak zorunda.

İki yönde çalışır:

- **İçeridekiler.** Kafesler bir satırı, sütunu ya da kutuyu, dışarı taşan kafeslere ait birkaç hücre dışında doldurur. Kalan hücrelerin toplamı, 45 eksi içeride kalan kafeslerin toplamıdır.
- **Dışarıdakiler.** Bir kafes kutudan bir iki hücre taşar. Kutuya değen her kafesin toplamını al ve 45 çıkar; kalan, dışarı taşan hücrelerin toplamıdır.

İki hücrenin toplamının, diyelim, 4 olduğunu bildiğinde tanıdık bir yere dönersin: 1 ve 3.

Kural büyür de. Yan yana iki satırın toplamı 90, üç satırın 135’tir. Daha zor bulmacalar bunları kullanmanı ister.

## İşe yarayan bir rutin

1. Tek cevaplı bütün kafesleri işaretle.
2. 45 kuralını önce her kutuda, sonra her satır ve sütunda uygula; bir iki hücre artıyor mu bak.
3. Yerleştirdiklerinde sıradan sudoku mantığını kullan: önce tekliler, sonra çiftler.
4. Bir kafesin hâlâ birkaç kombinasyonu varsa, **hepsinde** bulunan bir sayı ara. O sayı kesinlikle kafestedir; kafesin tamamen içinde olduğu satır, sütun ya da kutunun başka bir yerinde olamaz.
5. 2. adıma dön. Yerleştirdiğin her sayı yeni bir 45 hesabını mümkün kılar.

## One Sudoku’da Killer

Uygulamada üç Killer seviyesi var ve her biri belirli fikirler ister:

| Seviye | Başlangıçta ne var | Senden ne istiyor |
|---|---|---|
| **Kolay** | 2–3 hücrelik küçük kafesler ve birkaç hazır sayı | Kafes toplamları ve tekliler |
| **Orta** | Sadece toplamlar, 2–4 hücrelik kafesler | Ek olarak bir satır, sütun ya da kutuda 45 kuralı |
| **Zor** | Sadece toplamlar, 3–5 hücrelik kafesler | Ek olarak iki satır ya da sütunda 45 kuralı, çıplak çiftler ve işaretleme |

Her tahta, insan gibi çözen bir çözücüyle kontrol edilir; yani her zaman mantıklı bir sonraki adım vardır ve asla tahmin etmen gerekmez. Klasik’te Zor’a kadar geldiysen Killer’a Kolay’dan başla: toplama birkaç oyunda otomatikleşir, sonrası hızlı gider.
