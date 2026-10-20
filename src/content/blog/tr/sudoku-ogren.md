---
title: "Sudoku Öğren: Kolay’dan Uzman’a Net Bir Yol"
description: "One Sudoku’daki her seviye belirli tekniklerin üzerine kurulu. Her birinin senden ne istediğini sırayla ve takılmadan nasıl ilerleyeceğini anlatıyoruz."
pubDate: 2026-10-20
readingTime: 6
category: "Guide"
translationKey: "learn-sudoku"
heroImage: ../../../assets/blog/learn-sudoku-hero.jpg
heroAlt: "Sudoku bulmaca kitabının üzerinde kalem tutan bir el, bir tahta çoktan doldurulmuş"
heroCredit: "Richard Bell on Unsplash"
heroCreditUrl: "https://unsplash.com/photos/xFGRrdyd92E"
---

Çoğu sudoku uygulaması bulmacalarını kaç sayının eksik olduğuna bakarak Kolay ya da Zor diye etiketler. Bu en iyi ihtimalle kaba bir ölçü. Az ipuçlu bir tahta basit olabilir, bol ipuçlu bir tahta seni olduğun yerde durdurabilir.

One Sudoku her bulmacayı farklı derecelendirir. Bulmaca sana ulaşmadan önce bir derecelendirici onu bir insanın çözeceği gibi çözer: önce en basit teknikleri dener ve gerçekten ihtiyaç duyduğu en zor tekniği kaydeder. Seviyeyi o teknik belirler. Bu aynı zamanda **hiçbir bulmacanın tahmin gerektirmediği** anlamına gelir: derecelendirici bir tahtayı mantıkla bitiremezse o tahta atılır.

Sonuç: her seviye sana belirli bir şey öğretir. Sırayla ilerlersen sudokuyu düzgünce, her seferinde bir fikirle öğrenirsin.

## 1. Adım: Kurallar

9×9’luk tahtayı her satırda, her sütunda ve her 3×3 kutuda 1’den 9’a kadar sayılar tam birer kez olacak şekilde doldur. ([Sudoku nasıl oynanır?](/tr/blog/sudoku-nasil-oynanir/) kuralları daha ayrıntılı anlatıyor.) Bu kadar. İşin içinde hesap yok; sayıların yerinde harfler ya da renkler de olabilirdi.

Bilmen gereken tek diğer kelime **aday**: boş bir hücreye kuralları bozmadan hâlâ yazılabilecek sayı. Aşağıdaki her teknik, tek aday kalana kadar adayları azaltmanın bir yolu.

## 2. Adım: Kolay — Çıplak Tekli

| Teknik | Fikir |
|---|---|
| **Çıplak Tekli** (Naked Single) | Boş bir hücreye bak. Satırında, sütununda ve kutusunda zaten olan her sayıyı çiz. Tek bir sayı kaldıysa cevap odur. |

One Sudoku’daki Kolay bulmacalar başka hiçbir şey istemez. Her hamle tek bir hücreye bakarak bulunabilir; bu da Kolay’ı tahtaya alışmak ve ritim kazanmak için ideal yer yapar.

**Bir sonraki seviyeye hazırsın, eğer** Kolay’ı ipucu almadan 5 dakikanın altında bitirebiliyorsan.

## 3. Adım: Orta — Gizli Tekli

| Teknik | Fikir |
|---|---|
| **Gizli Tekli** (Hidden Single) | Bir sayı ve bir satır, sütun ya da kutu seç. O sayı orada sadece tek bir hücreye sığıyorsa oraya gider, o hücrede başka adaylar olsa bile. |

Yeni başlayanların çoğunun hissettiği sıçrama bu. Her Orta bulmaca en az bir Gizli Tekli ister; hücre hücre kontrol bir noktada tıkanır. Çözüm, soruyu “bu hücreye ne gelir?”den “bu kutudaki 7 nereye gider?”e çevirmek ve sayıları 1’den 9’a tek tek taramak.

**Bir sonraki seviyeye hazırsın, eğer** Orta 10 dakikanın altında sürüyorsa.

## 4. Adım: Zor — çiftler, üçlüler ve işaretleme

Zor’da notlar artık isteğe bağlı değil. Bu teknikler doğrudan sayı yerleştirmez; **aday siler** ve sonunda bir sonraki tekliyi ortaya çıkaran şey budur.

| Teknik | Fikir |
|---|---|
| **[Çıplak Çift](/blog/naked-pairs/)** (Naked Pair) | Bir birimdeki iki hücrede aynı iki aday var, başka hiçbir şey yok. Bu iki sayı bu iki hücrenin; birimin geri kalanından sil. |
| **[Gizli Çift](/blog/hidden-pairs/)** (Hidden Pair) | İki sayı bir birimde sadece aynı iki hücreye gidebiliyor. O hücrelerdeki diğer tüm adaylar silinebilir. |
| **[İşaret Eden Çift / Üçlü](/blog/pointing-pairs/)** (Pointing Pair) | Bir kutunun içinde bir sayı tek bir satır ya da sütuna sıkışmış. O satır ya da sütunda kutunun dışında olamaz. |
| **[Kutu/Çizgi Azaltma](/blog/pointing-pairs/)** (Box/Line Reduction) | Tersi: bir satır ya da sütunda bir sayı tek bir kutuya sıkışmış. O kutunun başka bir yerinde olamaz. |
| **Çıplak Üçlü** (Naked Triple) | Bir birimdeki üç hücre aralarında sadece üç aday paylaşıyor. Bu sayılar alınmış; birimin geri kalanından temizle. |
| **Gizli Üçlü** (Hidden Triple) | Üç sayı bir birimde sadece aynı üç hücreye sığıyor. O hücrelerden diğer her şeyi sil. |

Her Zor bulmaca bunlardan en az birini ister ve hiçbiri daha zorunu istemez. Önce çiftleri ve işaret eden çifti öğren; üçlülerden çok daha sık karşına çıkarlar.

**Bir sonraki seviyeye hazırsın, eğer** Zor’u 15 dakikanın altında bitirebiliyorsan.

## 5. Adım: Uzman — balıklar ve kanatlar

Uzman bulmacalar aynı anda birden fazla birime yayılan en az bir desen ister.

| Teknik | Fikir |
|---|---|
| **[X-Wing](/blog/x-wing/)** | Bir sayı iki satırın her birinde tam iki hücreye sığıyor ve bu hücreler aynı iki sütunda hizalı. Sayı o sütunların geri kalanından silinebilir. (Satır ve sütun yer değiştirince de çalışır.) |
| **[Swordfish](/blog/swordfish/)** | Aynı mantık, üç satır ve üç sütuna yayılmış hâli. |
| **[XY-Wing](/blog/xy-wing/)** | İki adaylı üç hücre öyle bağlanır ki, merkez hücre hangi yöne giderse gitsin, iki ucu da gören her hücreden bir sayı elenir. |

Tam set bu. One Sudoku’nun Uzman seviyesi XY-Wing’de durur; bu on bir tekniği biliyorsan uygulamadaki her bulmacanın isteyeceği her şeye sahipsin.

**Hedef:** ipucusuz, 20 dakikanın altında Uzman. Gerçekten iyi bir derece.

(Teknik sayfaları şimdilik İngilizce.)

## Uygulama öğrenmene nasıl yardım ediyor

One Sudoku’daki bazı şeyler özellikle bu ilerleme için tasarlandı:

- **Kendini toparlayan notlar.** Aday yazmak için Notes modunu aç. Bir sayı yerleştirdiğinde o sayı aynı satır, sütun ve kutudaki her hücrenin notlarından otomatik silinir; notların uğraşmadan doğru kalır.
- **Öğreten ipuçları.** Oyun başına üç ipucun var. İpucu önce yanlış girilmiş bir sayıyı düzeltir, çünkü tek bir hata her tekniği sessizce tıkar. Sonra varsa bir Çıplak Tekliyi, yoksa bir Gizli Tekliyi gösterir; yani rastgele bir kare değil, bir sonraki adımı.
- **Hata sınırı yok.** Yanlış girişler sayılır ama oyunu bitirmez. Geri alma sınırsız. Teknikler deneyerek oturur ve denemenin cezası yok.
- **Günlük Bulmaca.** Günde bir bulmaca, herkes için aynı, seni geri getiren bir seriyle. Düzenli oynamak uzun oturumlardan daha çok geliştirir.

## İlerleme listen

| Seviye | İstediği teknikler | Hedef süre |
|---|---|---|
| **Kolay** | Çıplak Tekli | 5 dk |
| **Orta** | + Gizli Tekli | 10 dk |
| **Zor** | + Çiftler, Üçlüler, İşaret Eden Çift, Kutu/Çizgi Azaltma | 15 dk |
| **Uzman** | + X-Wing, Swordfish, XY-Wing | 20 dk |

Son bir tavsiye: rahat olduğun seviyenin bir üstünde oyna. Hiç takılmıyorsan yeni bir şey öğrenmiyorsun. Her hamlede takılıyorsan bir seviye in. Bulmaca başına birkaç kez takılmak tam kıvamı.
