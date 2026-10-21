/**
 * Landing page copy, per language. `HomePage.astro` renders it and builds the
 * structured data from it, so the FAQ a reader sees and the FAQPage schema a
 * crawler gets can never diverge.
 *
 * Mode and level names follow the localized store listings in the app repo
 * (store-assets/app-store/localized). Premium prices are quoted only in
 * English, where they are US prices; elsewhere the store shows the local one.
 *
 * `howTo.rules` is HTML (it carries <strong>); everything else is plain text.
 */
import type { Lang } from './ui';

interface HomeCopy {
  meta: { title: string; description: string };
  hero: { badge: string; headline: string; headlineAccent: string; body: string };
  screenshotAlt: string;
  schema: { description: string; features: string[] };
  trust: { label: string; sub: string }[];
  manor: { badge: string; title: string; body: string; points: string[]; link: string; gridLabel: string };
  features: { title: string; sub: string; items: { title: string; body: string }[] };
  inside: { title: string; sub: string; points: { title: string; body: string }[] };
  howTo: { eyebrow: string; title: string; body: string; rules: string[]; link: string };
  faq: { title: string; sub: string; items: { q: string; a: string }[] };
  finalCta: { title: string; body: string };
}

const strong = (s: string) => `<strong class="text-green-950 font-semibold">${s}</strong>`;

export const home: Record<Lang, HomeCopy> = {
  en: {
    meta: {
      title: 'One Sudoku — Offline Sudoku App for iPhone & Android',
      description:
        'One Sudoku is a free sudoku app for iPhone, iPad, and Android. Play offline with no Wi‑Fi: Classic, Killer, and Rescue sudoku, one new puzzle a day, and dark mode. No account needed, ad-free with Premium.',
    },
    hero: {
      badge: 'Free on the App Store & Google Play',
      headline: 'The sudoku app.',
      headlineAccent: 'Pure and simple.',
      body: 'A free, offline sudoku app for iPhone, iPad, and Android: a few quiet minutes with one puzzle and nothing else competing for your attention. Classic, Killer, and Rescue sudoku, a daily challenge, and unlimited puzzles with no Wi‑Fi — no account and no clutter.',
    },
    screenshotAlt:
      'The One Sudoku home screen on iPhone in dark mode, showing the Haunted Manor puzzle, the Daily Challenge with a 7-day streak, and the Classic and Killer play modes.',
    schema: {
      description:
        'A clean, free offline sudoku app for iPhone, iPad, and Android with Classic, Killer, and Rescue modes, the Haunted Manor Halloween puzzle, a daily challenge, smart notes, and unlimited offline puzzles.',
      features: [
        'Classic sudoku with four difficulty levels (Easy, Medium, Hard, Expert)',
        'Killer sudoku and Rescue mode',
        'Haunted Manor, a Halloween ghost-placing logic puzzle',
        'Daily challenge with streaks',
        'Unlimited offline puzzles',
        'Candidate notes, unlimited undo, auto-save',
        'Optional cloud sync with Google, Apple, or email sign-in',
        'Free to play, light and dark themes',
      ],
    },
    // Every claim here is one a visitor can verify from the store listing or by
    // opening the app — no invented ratings or download counts, which would also
    // put the structured data at risk.
    trust: [
      { label: 'Free to play', sub: 'Optional ad-free Premium' },
      { label: 'No account needed', sub: 'Open it and start solving' },
      { label: 'Works fully offline', sub: 'Puzzles made on your device' },
      { label: 'iPhone, iPad & Android', sub: 'Same app on every screen' },
    ],
    manor: {
      badge: 'New for Halloween',
      title: 'Haunted Manor',
      body: 'A spooky logic puzzle that lives right next to your sudoku. Hide one ghost on every floor, in every hall and in every room — and no two ghosts may touch, not even diagonally.',
      points: [
        'Three sizes: Cottage, Manor, and Castle',
        'Solvable by logic alone, never by guessing',
        'No timer, no rush — hints point to your next step',
      ],
      link: 'How to solve Haunted Manor',
      gridLabel: 'A solved 6×6 Haunted Manor: six coloured rooms, each holding one ghost.',
    },
    features: {
      title: 'Built for sudoku lovers',
      sub: 'Every detail is designed to keep you focused on what matters — solving the puzzle.',
      items: [
        { title: 'Classic, Killer & Rescue sudoku', body: 'Classic 9×9 from Easy to Expert, Killer’s sum cages, and Rescue, where you take over a badly solved puzzle and save it.' },
        { title: 'One sudoku a day', body: 'The Daily Challenge: a fresh puzzle every day, the same for every player worldwide. Build your streak one solve at a time.' },
        { title: 'Clean design, dark mode', body: 'Light or dark, following your phone, and ad placement that stays out of your way — no pop-ups, no forced sign-ups.' },
        { title: 'Play offline, no Wi‑Fi needed', body: 'Puzzles are generated on your device. Play anywhere — on a plane, underground, or off the grid — no connection needed.' },
        { title: 'Smart solving tools', body: 'Candidate notes, unlimited undo, and auto-save. Every tool you need, and nothing you don’t.' },
        { title: 'Track your progress', body: 'Best times, win rate, and streaks across every difficulty. Sign in with Google, Apple, or email if you want it synced across your devices — entirely optional.' },
      ],
    },
    inside: {
      title: 'A look inside',
      sub: 'The same clean interface on iPhone, iPad, and Android.',
      points: [
        { title: 'Three ways to play', body: 'Classic from Easy to Expert, Killer with its sum cages, and Rescue, where you save a puzzle someone else got wrong.' },
        { title: 'Pick up where you left off', body: 'Every puzzle auto-saves, so a game survives the phone going in your pocket.' },
        { title: 'A daily challenge', body: 'One shared puzzle a day, with a streak that only grows if you keep showing up.' },
        { title: 'Nothing you did not ask for', body: 'No pop-ups, no forced sign-up, no feed to scroll. Just the grid.' },
      ],
    },
    howTo: {
      eyebrow: 'How to play',
      title: 'The rules of sudoku, in one minute',
      body: 'Sudoku is a logic puzzle played on a 9×9 grid divided into nine 3×3 boxes. Some numbers are filled in to start — your job is to complete the rest using reasoning alone. No math required.',
      rules: [
        `Fill every ${strong('row')} with the numbers 1 to 9 — each used exactly once.`,
        `Fill every ${strong('column')} with 1 to 9 — no number may repeat.`,
        `Fill every ${strong('3×3 box')} with 1 to 9, again with no repeats.`,
        `When the whole grid is filled with no conflicts, the puzzle is solved. Use ${strong('notes')} to track candidates as you go.`,
      ],
      link: 'Learn the techniques, from Easy to Expert',
    },
    faq: {
      title: 'Frequently asked questions',
      sub: 'Everything you might want to know before you download.',
      items: [
        { q: 'Is One Sudoku free?', a: 'Yes. One Sudoku is free to download and play with minimal, non-intrusive ads. No account required.' },
        { q: 'Can I play sudoku offline, without Wi‑Fi?', a: 'Completely. Puzzles are generated on your device, so you can play anywhere — on a plane, on the subway, or with no signal at all. No internet connection is ever needed.' },
        { q: 'What game modes are there?', a: 'Three kinds of sudoku: Classic, Killer, where cages with sums replace the given numbers, and Rescue, where you take over a badly solved puzzle and fix it. Alongside them is Haunted Manor, a Halloween logic puzzle in which you hide one ghost on every floor, in every hall and in every room, with no two ghosts touching.' },
        { q: 'What difficulty levels are there?', a: 'Classic has four difficulty levels — Easy, Medium, Hard, and Expert — so it works for both newcomers and experienced solvers. Killer and Rescue have their own levels, and Haunted Manor comes in three sizes: Cottage, Manor, and Castle.' },
        { q: 'What is the Daily Challenge?', a: 'Every day there is one fresh puzzle that is the same for every player worldwide. Solve it each day to build and keep your streak.' },
        { q: 'Can I play One Sudoku without ads?', a: 'Yes, with Premium. The free version shows minimal banner ads to keep the app free, and you can watch optional video ads to earn extra hints. If you would rather play ad-free, the optional Premium removes every ad for $0.99 a month, $9.99 a year, or $29.99 once.' },
        { q: 'Is One Sudoku available on Android?', a: 'Yes. One Sudoku is available on the App Store for iPhone and iPad, and on Google Play for Android phones and tablets.' },
        { q: 'Does One Sudoku have a dark mode?', a: 'Yes. One Sudoku follows your phone’s light or dark appearance, and you can pin either one in Settings.' },
        { q: 'Do I need an account?', a: 'No. You can play everything as a guest, and your progress is saved on your device. Signing in with Google, Apple, or an email address is optional — it syncs your progress and streaks across your devices so nothing is lost when you switch phones.' },
      ],
    },
    finalCta: { title: 'Get the sudoku app', body: 'Download One Sudoku free for iPhone, iPad, or Android and start solving today — offline, no account required, no catch.' },
  },

  tr: {
    meta: {
      title: 'One Sudoku — İnternetsiz Sudoku Uygulaması, iPhone ve Android',
      description:
        'One Sudoku; iPhone, iPad ve Android için ücretsiz bir sudoku uygulaması. İnternetsiz, Wi‑Fi olmadan oyna: Klasik Sudoku, Killer Sudoku, Sudoku Kurtarma, her gün yeni bir Günlük Bulmaca ve koyu tema. Hesap gerekmez, Premium ile reklamsız.',
    },
    hero: {
      badge: 'App Store ve Google Play’de',
      headline: 'Sudoku uygulaması.',
      headlineAccent: 'Sade ve yalın.',
      body: 'Birkaç sakin dakika, tek bir bulmaca ve dikkatini dağıtacak başka hiçbir şey. Klasik, Killer ve Kurtarma modları, her gün yeni bir bulmaca ve sınırsız internetsiz oyun. Ücretsiz, hesapsız, karmaşasız.',
    },
    screenshotAlt:
      'iPhone’da koyu temada One Sudoku ana ekranı: Hayaletli Konak bulmacası, 7 günlük seriyle Günlük Bulmaca, Klasik ve Killer modları.',
    schema: {
      description:
        'iPhone, iPad ve Android için sade ve ücretsiz bir sudoku oyunu: Klasik, Killer ve Kurtarma modları, Hayaletli Konak bulmacası, Günlük Bulmaca, akıllı notlar ve sınırsız internetsiz bulmaca.',
      features: [
        'Dört zorluk seviyeli klasik sudoku (Kolay, Orta, Zor, Uzman)',
        'Killer Sudoku ve Sudoku Kurtarma modu',
        'Hayaletli Konak: hayalet yerleştirmeli bir mantık bulmacası',
        'Seri tutan Günlük Bulmaca',
        'Sınırsız internetsiz bulmaca',
        'Kalem notları, sınırsız geri alma, otomatik kayıt',
        'Google, Apple veya e-posta ile isteğe bağlı eşitleme',
        'Ücretsiz, açık ve koyu tema',
      ],
    },
    trust: [
      { label: 'Ücretsiz', sub: 'İsteğe bağlı reklamsız Premium' },
      { label: 'Hesap gerekmez', sub: 'Aç ve çözmeye başla' },
      { label: 'Tamamen internetsiz', sub: 'Bulmacalar cihazında üretilir' },
      { label: 'iPhone, iPad ve Android', sub: 'Her ekranda aynı uygulama' },
    ],
    manor: {
      badge: 'Cadılar Bayramı’na özel',
      title: 'Hayaletli Konak',
      body: 'Sudoku’nun hemen yanında duran ürkütücü bir mantık bulmacası. Her kata, her koridora ve her odaya bir hayalet sakla. İki hayalet asla birbirine değmesin, çapraz bile.',
      points: [
        'Üç boyut: Cottage, Manor ve Castle',
        'Sadece mantıkla çözülür, tahmin gerekmez',
        'Zamanlayıcı yok, acele yok; ipuçları bir sonraki adımı gösterir',
      ],
      link: 'Hayaletli Konak nasıl çözülür',
      gridLabel: 'Çözülmüş 6×6 bir Hayaletli Konak: altı renkli oda, her birinde bir hayalet.',
    },
    features: {
      title: 'Sudoku sevenler için',
      sub: 'Her ayrıntı, dikkatini asıl önemli olana vermen için tasarlandı: bulmacayı çözmek.',
      items: [
        { title: 'Klasik, Killer ve Kurtarma', body: 'Kolay’dan Uzman’a klasik 9×9, toplam kafesli Killer ve kötü çözülmüş bir bulmacayı devralıp kurtardığın Kurtarma modu.' },
        { title: 'Günlük Bulmaca', body: 'Her gün, dünyadaki tüm oyuncular için aynı olan yeni bir bulmaca. Serini her gün bir çözümle büyüt.' },
        { title: 'Sade, minimal tasarım', body: 'Yolundan çekilen reklamlar: açılır pencere yok, zorunlu kayıt yok.' },
        { title: 'Sınırsız internetsiz oyun', body: 'Bulmacalar cihazında üretilir. Uçakta, metroda ya da çekmeyen bir yerde, bağlantı olmadan oyna.' },
        { title: 'Akıllı çözüm araçları', body: 'Kalem notları, sınırsız geri alma ve otomatik kayıt. İhtiyacın olan her şey, fazlası değil.' },
        { title: 'Gelişimini takip et', body: 'Her zorlukta en iyi süreler, kazanma oranı ve seriler. İstersen Google, Apple veya e-posta ile giriş yapıp cihazların arasında eşitle; tamamen isteğe bağlı.' },
      ],
    },
    inside: {
      title: 'İçeriden bir bakış',
      sub: 'iPhone, iPad ve Android’de aynı sade arayüz.',
      points: [
        { title: 'Üç oyun türü', body: 'Kolay’dan Uzman’a Klasik, toplam kafesli Killer ve başkasının yanlış çözdüğü bir bulmacayı kurtardığın Kurtarma.' },
        { title: 'Kaldığın yerden devam et', body: 'Her bulmaca otomatik kaydedilir; telefon cebe girse de oyun kaybolmaz.' },
        { title: 'Günlük bulmaca', body: 'Günde bir ortak bulmaca ve sadece her gün geldiğinde büyüyen bir seri.' },
        { title: 'İstemediğin hiçbir şey yok', body: 'Açılır pencere yok, zorunlu kayıt yok, kaydırılacak bir akış yok. Sadece tahta.' },
      ],
    },
    howTo: {
      eyebrow: 'Nasıl oynanır',
      title: 'Bir dakikada sudoku kuralları',
      body: 'Sudoku, dokuz adet 3×3 kutuya bölünmüş 9×9’luk bir tahtada oynanan bir mantık bulmacasıdır. Bazı sayılar baştan verilir; senin işin kalanı sadece akıl yürüterek tamamlamak. Matematik gerekmez.',
      rules: [
        `Her ${strong('satırı')} 1’den 9’a kadar sayılarla doldur; her sayı tam bir kez.`,
        `Her ${strong('sütunu')} 1’den 9’a kadar doldur; hiçbir sayı tekrar etmesin.`,
        `Her ${strong('3×3 kutuyu')} 1’den 9’a kadar doldur; yine tekrar yok.`,
        `Tahta çakışmasız dolduğunda bulmaca çözülmüştür. Olasılıkları takip etmek için ${strong('notları')} kullan.`,
      ],
      link: 'Kolay’dan Uzman’a teknikleri öğren',
    },
    faq: {
      title: 'Sıkça sorulan sorular',
      sub: 'İndirmeden önce bilmek isteyebileceğin her şey.',
      items: [
        { q: 'One Sudoku ücretsiz mi?', a: 'Evet. One Sudoku’yu indirmek ve oynamak ücretsiz; az ve rahatsız etmeyen reklamlar var. Hesap gerekmez.' },
        { q: 'Uygulama Türkçe mi?', a: 'Hayır, uygulamanın dili İngilizce. Ama sudoku sayılarla oynanır ve kurallar her dilde aynıdır; bu sitedeki Türkçe rehberler başlaman için yeterli.' },
        { q: 'İnternetsiz çalışır mı?', a: 'Tamamen. Bulmacalar cihazında üretilir; uçakta, metroda ya da hiç çekmeyen bir yerde oynayabilirsin. İnternet bağlantısı hiç gerekmez.' },
        { q: 'Hangi oyun modları var?', a: 'Üç tür sudoku: Klasik; verilen sayılar yerine toplamlı kafeslerin olduğu Killer; ve kötü çözülmüş bir bulmacayı devralıp düzelttiğin Kurtarma (uygulamada “Rescue”). Yanlarında bir de Hayaletli Konak (“Haunted Manor”) var: her kata, her koridora ve her odaya bir hayalet sakladığın, iki hayaletin birbirine değmediği bir mantık bulmacası.' },
        { q: 'Hangi zorluk seviyeleri var?', a: 'Klasik’te dört seviye var: Kolay, Orta, Zor ve Uzman. Yeni başlayanlara da deneyimlilere de uygun. Killer ve Kurtarma’nın kendi seviyeleri var; Hayaletli Konak ise üç boyutta: Cottage, Manor ve Castle.' },
        { q: 'Günlük Bulmaca nedir?', a: 'Her gün, dünyadaki tüm oyuncular için aynı olan yeni bir bulmaca. Serini korumak için her gün çöz.' },
        { q: 'Reklam veya uygulama içi satın alma var mı?', a: 'One Sudoku uygulamayı ücretsiz tutmak için az sayıda banner reklam gösterir; ekstra ipucu için isteğe bağlı video reklam izleyebilirsin. Reklamsız oynamak istersen isteğe bağlı Premium tüm reklamları kaldırır: aylık, yıllık ya da tek seferlik. Bölgendeki fiyat satın almadan önce uygulamada gösterilir.' },
        { q: 'Android’de var mı?', a: 'Evet. One Sudoku iPhone ve iPad için App Store’da, Android telefon ve tabletler için Google Play’de.' },
        { q: 'Hesap gerekiyor mu?', a: 'Hayır. Her şeyi misafir olarak oynayabilirsin; ilerlemen cihazında saklanır. Google, Apple veya e-posta ile giriş isteğe bağlıdır; ilerlemeni ve serini cihazların arasında eşitler, telefon değiştirdiğinde hiçbir şey kaybolmaz.' },
      ],
    },
    finalCta: { title: 'Oynamaya hazır mısın?', body: 'One Sudoku’yu ücretsiz indir ve bugün çözmeye başla. Hesap gerekmez, sürpriz yok.' },
  },

  es: {
    meta: {
      title: 'One Sudoku — App de Sudoku sin Conexión para iPhone y Android',
      description:
        'One Sudoku es una app de sudoku gratis para iPhone, iPad y Android. Juega sin conexión y sin wifi: sudoku clásico, Killer Sudoku, Rescate de Sudoku, un Reto Diario y modo oscuro. Sin cuenta y sin anuncios con Premium.',
    },
    hero: {
      badge: 'Disponible en el App Store y Google Play',
      headline: 'La app de sudoku.',
      headlineAccent: 'Simple y sin más.',
      body: 'Unos minutos tranquilos con un solo puzle y nada más que te distraiga. Sudoku clásico, Killer y Rescate, un Reto Diario y puzles ilimitados sin conexión. Gratis, sin cuenta y sin ruido.',
    },
    screenshotAlt:
      'La pantalla de inicio de One Sudoku en iPhone en modo oscuro, con la Mansión Encantada, el Reto Diario con una racha de 7 días y los modos Clásico y Killer.',
    schema: {
      description:
        'Un juego de sudoku limpio y gratuito para iPhone, iPad y Android, con modos Clásico, Killer y Rescate, la Mansión Encantada, un Reto Diario, notas inteligentes y puzles ilimitados sin conexión.',
      features: [
        'Sudoku clásico con cuatro niveles (Fácil, Medio, Difícil, Experto)',
        'Killer Sudoku y modo Rescate',
        'La Mansión Encantada, un rompecabezas de lógica con fantasmas',
        'Reto Diario con rachas',
        'Puzles ilimitados sin conexión',
        'Notas de candidatos, deshacer ilimitado, guardado automático',
        'Sincronización opcional con Google, Apple o correo',
        'Gratis, con tema claro y oscuro',
      ],
    },
    trust: [
      { label: 'Gratis', sub: 'Premium sin anuncios opcional' },
      { label: 'Sin cuenta', sub: 'Ábrela y empieza a jugar' },
      { label: 'Totalmente sin conexión', sub: 'Puzles creados en tu dispositivo' },
      { label: 'iPhone, iPad y Android', sub: 'La misma app en cada pantalla' },
    ],
    manor: {
      badge: 'Novedad para Halloween',
      title: 'La Mansión Encantada',
      body: 'Un rompecabezas de lógica un poco espeluznante, justo al lado de tu sudoku. Esconde un fantasma en cada planta, en cada pasillo y en cada habitación, y que nunca se toquen dos fantasmas, ni siquiera en diagonal.',
      points: [
        'Tres tamaños: Cottage, Manor y Castle',
        'Se resuelve solo con lógica, sin adivinar',
        'Sin cronómetro ni prisas: las pistas señalan el siguiente paso',
      ],
      link: 'Cómo resolver la Mansión Encantada',
      gridLabel: 'Una Mansión Encantada de 6×6 resuelta: seis habitaciones de colores, cada una con un fantasma.',
    },
    features: {
      title: 'Hecho para amantes del sudoku',
      sub: 'Cada detalle está pensado para que te centres en lo importante: resolver el puzle.',
      items: [
        { title: 'Clásico, Killer y Rescate', body: 'Sudoku clásico de 9×9 de Fácil a Experto, las jaulas con sumas del Killer y Rescate, donde recoges un puzle mal resuelto y lo salvas.' },
        { title: 'Reto Diario', body: 'Un puzle nuevo cada día, el mismo para todos los jugadores del mundo. Construye tu racha día a día.' },
        { title: 'Diseño limpio y minimalista', body: 'Anuncios que no estorban: sin ventanas emergentes ni registros obligatorios.' },
        { title: 'Juego ilimitado sin conexión', body: 'Los puzles se generan en tu dispositivo. Juega donde sea, en un avión, en el metro o sin cobertura.' },
        { title: 'Herramientas inteligentes', body: 'Notas de candidatos, deshacer ilimitado y guardado automático. Todo lo que necesitas y nada más.' },
        { title: 'Sigue tu progreso', body: 'Mejores tiempos, porcentaje de victorias y rachas en cada nivel. Inicia sesión con Google, Apple o correo si quieres sincronizarlo entre dispositivos; es totalmente opcional.' },
      ],
    },
    inside: {
      title: 'Un vistazo por dentro',
      sub: 'La misma interfaz limpia en iPhone, iPad y Android.',
      points: [
        { title: 'Tres formas de jugar', body: 'Clásico de Fácil a Experto, Killer con sus jaulas de sumas y Rescate, donde salvas un puzle que otro resolvió mal.' },
        { title: 'Sigue donde lo dejaste', body: 'Cada partida se guarda sola, así que sobrevive aunque guardes el móvil en el bolsillo.' },
        { title: 'Un reto diario', body: 'Un puzle compartido al día, con una racha que solo crece si vuelves cada día.' },
        { title: 'Nada que no hayas pedido', body: 'Sin ventanas emergentes, sin registro obligatorio, sin feed infinito. Solo el tablero.' },
      ],
    },
    howTo: {
      eyebrow: 'Cómo jugar',
      title: 'Las reglas del sudoku en un minuto',
      body: 'El sudoku es un rompecabezas de lógica que se juega en una cuadrícula de 9×9 dividida en nueve cajas de 3×3. Algunos números vienen dados; tu tarea es completar el resto solo con razonamiento. No hace falta saber matemáticas.',
      rules: [
        `Rellena cada ${strong('fila')} con los números del 1 al 9, cada uno una sola vez.`,
        `Rellena cada ${strong('columna')} del 1 al 9, sin repetir ningún número.`,
        `Rellena cada ${strong('caja de 3×3')} del 1 al 9, de nuevo sin repeticiones.`,
        `Cuando toda la cuadrícula está llena sin conflictos, el puzle está resuelto. Usa las ${strong('notas')} para apuntar candidatos.`,
      ],
      link: 'Aprende las técnicas, de Fácil a Experto',
    },
    faq: {
      title: 'Preguntas frecuentes',
      sub: 'Todo lo que quizá quieras saber antes de descargarla.',
      items: [
        { q: '¿One Sudoku es gratis?', a: 'Sí. Descargar y jugar a One Sudoku es gratis, con pocos anuncios y nada intrusivos. No necesitas cuenta.' },
        { q: '¿La app está en español?', a: 'No, la app está en inglés. Pero el sudoku se juega con números y las reglas son las mismas en cualquier idioma; las guías en español de esta web bastan para empezar.' },
        { q: '¿Funciona sin conexión?', a: 'Por completo. Los puzles se generan en tu dispositivo, así que puedes jugar en cualquier parte: en un avión, en el metro o sin cobertura. Nunca necesitas internet.' },
        { q: '¿Qué modos de juego hay?', a: 'Tres tipos de sudoku: Clásico; Killer, donde jaulas con sumas sustituyen a los números dados; y Rescate (“Rescue” en la app), donde recoges un puzle mal resuelto y lo arreglas. Junto a ellos está la Mansión Encantada (“Haunted Manor”), un rompecabezas de lógica en el que escondes un fantasma en cada planta, cada pasillo y cada habitación, sin que se toquen dos fantasmas.' },
        { q: '¿Qué niveles de dificultad hay?', a: 'El Clásico tiene cuatro niveles: Fácil, Medio, Difícil y Experto, así que sirve tanto para principiantes como para expertos. Killer y Rescate tienen sus propios niveles, y la Mansión Encantada tiene tres tamaños: Cottage, Manor y Castle.' },
        { q: '¿Qué es el Reto Diario?', a: 'Cada día hay un puzle nuevo que es el mismo para todos los jugadores del mundo. Resuélvelo cada día para construir y mantener tu racha.' },
        { q: '¿Tiene anuncios o compras dentro de la app?', a: 'One Sudoku muestra pocos anuncios de banner para seguir siendo gratis, y puedes ver vídeos opcionales para conseguir pistas extra. Si prefieres jugar sin anuncios, el Premium opcional los quita todos: mensual, anual o pago único. El precio de tu región aparece en la app antes de comprar.' },
        { q: '¿Está disponible en Android?', a: 'Sí. One Sudoku está en el App Store para iPhone y iPad, y en Google Play para móviles y tabletas Android.' },
        { q: '¿Necesito una cuenta?', a: 'No. Puedes jugar a todo como invitado y tu progreso se guarda en tu dispositivo. Iniciar sesión con Google, Apple o correo es opcional: sincroniza tu progreso y tus rachas entre dispositivos para no perder nada al cambiar de móvil.' },
      ],
    },
    finalCta: { title: '¿Listo para jugar?', body: 'Descarga One Sudoku gratis y empieza hoy. Sin cuenta y sin trampas.' },
  },

  de: {
    meta: {
      title: 'One Sudoku — Offline Sudoku-App für iPhone & Android',
      description:
        'One Sudoku ist eine kostenlose Sudoku-App für iPhone, iPad und Android. Offline spielen, ohne Internet: klassisches Sudoku, Killer-Sudoku, Sudoku-Rettung, eine tägliche Herausforderung und Dunkelmodus. Ohne Konto, ohne Werbung mit Premium.',
    },
    hero: {
      badge: 'Im App Store und bei Google Play',
      headline: 'Die Sudoku-App.',
      headlineAccent: 'Klar und einfach.',
      body: 'Ein paar ruhige Minuten mit einem Rätsel und nichts, was dich ablenkt. Klassisches Sudoku, Killer und Rettung, eine tägliche Herausforderung und unbegrenzt Rätsel offline. Kostenlos, ohne Konto, ohne Schnickschnack.',
    },
    screenshotAlt:
      'Der Startbildschirm von One Sudoku auf dem iPhone im Dunkelmodus mit dem Spukhaus, der täglichen Herausforderung mit einer 7-Tage-Serie und den Modi Classic und Killer.',
    schema: {
      description:
        'Ein klares, kostenloses Sudoku-Spiel für iPhone, iPad und Android mit den Modi Klassisch, Killer und Rettung, dem Spukhaus, einer täglichen Herausforderung, smarten Notizen und unbegrenzt Rätseln offline.',
      features: [
        'Klassisches Sudoku in vier Stufen (Leicht, Mittel, Schwer, Experte)',
        'Killer-Sudoku und Sudoku-Rettung',
        'Das Spukhaus, ein Logikrätsel mit Geistern',
        'Tägliche Herausforderung mit Serien',
        'Unbegrenzt Rätsel offline',
        'Kandidaten-Notizen, unbegrenztes Rückgängig, automatisches Speichern',
        'Optionale Synchronisierung mit Google, Apple oder E-Mail',
        'Kostenlos, helles und dunkles Design',
      ],
    },
    trust: [
      { label: 'Kostenlos', sub: 'Optional werbefrei mit Premium' },
      { label: 'Kein Konto nötig', sub: 'Öffnen und loslegen' },
      { label: 'Komplett offline', sub: 'Rätsel entstehen auf deinem Gerät' },
      { label: 'iPhone, iPad & Android', sub: 'Dieselbe App auf jedem Gerät' },
    ],
    manor: {
      badge: 'Neu zu Halloween',
      title: 'Das Spukhaus',
      body: 'Ein schaurig-schönes Logikrätsel direkt neben deinem Sudoku. Versteck auf jeder Etage, in jedem Flur und in jedem Raum genau einen Geist, und kein Geist darf einen anderen berühren, auch nicht diagonal.',
      points: [
        'Drei Größen: Cottage, Manor und Castle',
        'Allein mit Logik lösbar, nie durch Raten',
        'Kein Timer, keine Eile: Tipps zeigen dir den nächsten Schritt',
      ],
      link: 'So löst du das Spukhaus',
      gridLabel: 'Ein gelöstes 6×6-Spukhaus: sechs farbige Räume mit je einem Geist.',
    },
    features: {
      title: 'Für Sudoku-Fans gemacht',
      sub: 'Jedes Detail soll dich bei dem halten, worum es geht: beim Lösen.',
      items: [
        { title: 'Klassisch, Killer & Rettung', body: 'Klassisches 9×9 von Leicht bis Experte, Killer mit Summenkäfigen und die Rettung, bei der du ein schlecht gelöstes Rätsel übernimmst und rettest.' },
        { title: 'Tägliche Herausforderung', body: 'Jeden Tag ein neues Rätsel, für alle Spieler weltweit dasselbe. Bau deine Serie Tag für Tag aus.' },
        { title: 'Klares, minimalistisches Design', body: 'Werbung, die nicht im Weg ist: keine Pop-ups, keine Pflicht-Anmeldung.' },
        { title: 'Unbegrenzt offline spielen', body: 'Die Rätsel entstehen auf deinem Gerät. Spiel überall, im Flugzeug, in der U-Bahn oder im Funkloch.' },
        { title: 'Smarte Werkzeuge', body: 'Kandidaten-Notizen, unbegrenztes Rückgängig und automatisches Speichern. Alles, was du brauchst, und nichts darüber hinaus.' },
        { title: 'Verfolge deinen Fortschritt', body: 'Bestzeiten, Gewinnquote und Serien für jede Stufe. Melde dich mit Google, Apple oder E-Mail an, wenn du alles zwischen Geräten synchronisieren willst; ganz freiwillig.' },
      ],
    },
    inside: {
      title: 'Ein Blick hinein',
      sub: 'Dieselbe klare Oberfläche auf iPhone, iPad und Android.',
      points: [
        { title: 'Drei Spielarten', body: 'Klassisch von Leicht bis Experte, Killer mit Summenkäfigen und die Rettung, bei der du ein falsch gelöstes Rätsel rettest.' },
        { title: 'Weiter, wo du aufgehört hast', body: 'Jedes Rätsel wird automatisch gespeichert, auch wenn das Handy in der Tasche verschwindet.' },
        { title: 'Eine tägliche Herausforderung', body: 'Ein gemeinsames Rätsel pro Tag und eine Serie, die nur wächst, wenn du dranbleibst.' },
        { title: 'Nichts, worum du nicht gebeten hast', body: 'Keine Pop-ups, keine Pflicht-Anmeldung, kein Feed zum Scrollen. Nur das Gitter.' },
      ],
    },
    howTo: {
      eyebrow: 'Spielregeln',
      title: 'Die Sudoku-Regeln in einer Minute',
      body: 'Sudoku ist ein Logikrätsel auf einem 9×9-Gitter, das in neun 3×3-Blöcke unterteilt ist. Einige Zahlen sind vorgegeben, den Rest füllst du allein durch logisches Denken. Rechnen musst du nicht.',
      rules: [
        `Fülle jede ${strong('Zeile')} mit den Zahlen 1 bis 9, jede genau einmal.`,
        `Fülle jede ${strong('Spalte')} mit 1 bis 9, ohne Wiederholung.`,
        `Fülle jeden ${strong('3×3-Block')} mit 1 bis 9, ebenfalls ohne Wiederholung.`,
        `Ist das ganze Gitter ohne Konflikte gefüllt, ist das Rätsel gelöst. Mit ${strong('Notizen')} behältst du die Kandidaten im Blick.`,
      ],
      link: 'Die Techniken lernen, von Leicht bis Experte',
    },
    faq: {
      title: 'Häufige Fragen',
      sub: 'Alles, was du vor dem Download wissen möchtest.',
      items: [
        { q: 'Ist One Sudoku kostenlos?', a: 'Ja. One Sudoku ist kostenlos zum Laden und Spielen, mit wenig und unaufdringlicher Werbung. Ein Konto brauchst du nicht.' },
        { q: 'Gibt es die App auf Deutsch?', a: 'Nein, die App ist auf Englisch. Sudoku spielt man aber mit Zahlen, und die Regeln sind in jeder Sprache gleich; die deutschen Anleitungen auf dieser Seite reichen für den Einstieg.' },
        { q: 'Funktioniert die App offline?', a: 'Vollständig. Die Rätsel entstehen auf deinem Gerät, du kannst also überall spielen: im Flugzeug, in der U-Bahn oder ganz ohne Empfang. Eine Internetverbindung ist nie nötig.' },
        { q: 'Welche Spielmodi gibt es?', a: 'Drei Arten Sudoku: Klassisch; Killer, bei dem Käfige mit Summen die Vorgaben ersetzen; und die Rettung („Rescue“ in der App), bei der du ein schlecht gelöstes Rätsel übernimmst und reparierst. Dazu kommt das Spukhaus („Haunted Manor“), ein Logikrätsel, bei dem du auf jeder Etage, in jedem Flur und in jedem Raum einen Geist versteckst, ohne dass sich zwei Geister berühren.' },
        { q: 'Welche Schwierigkeitsstufen gibt es?', a: 'Klassisch hat vier Stufen: Leicht, Mittel, Schwer und Experte, für Einsteiger wie für erfahrene Rätsler. Killer und Rettung haben eigene Stufen, und das Spukhaus gibt es in drei Größen: Cottage, Manor und Castle.' },
        { q: 'Was ist die tägliche Herausforderung?', a: 'Jeden Tag gibt es ein neues Rätsel, das für alle Spieler weltweit gleich ist. Löse es täglich, um deine Serie aufzubauen und zu halten.' },
        { q: 'Gibt es Werbung oder In-App-Käufe?', a: 'One Sudoku zeigt wenige Banner, damit die App kostenlos bleibt, und du kannst freiwillig Videos ansehen, um zusätzliche Tipps zu bekommen. Wer lieber werbefrei spielt, entfernt mit dem optionalen Premium alle Anzeigen: monatlich, jährlich oder einmalig. Den Preis für deine Region zeigt die App vor dem Kauf.' },
        { q: 'Gibt es One Sudoku für Android?', a: 'Ja. One Sudoku gibt es im App Store für iPhone und iPad und bei Google Play für Android-Smartphones und -Tablets.' },
        { q: 'Brauche ich ein Konto?', a: 'Nein. Du kannst alles als Gast spielen, dein Fortschritt wird auf dem Gerät gespeichert. Die Anmeldung mit Google, Apple oder E-Mail ist freiwillig: Sie synchronisiert Fortschritt und Serien zwischen deinen Geräten, damit beim Handywechsel nichts verloren geht.' },
      ],
    },
    finalCta: { title: 'Bereit zum Spielen?', body: 'Lade One Sudoku kostenlos und leg heute los. Ohne Konto, ohne Haken.' },
  },

  fr: {
    meta: {
      title: 'One Sudoku — Application Sudoku Hors Ligne, iPhone et Android',
      description:
        'One Sudoku est une application de sudoku gratuite pour iPhone, iPad et Android. Jouez hors ligne, sans Wi‑Fi : sudoku classique, Killer Sudoku, Sauvetage de Sudoku, un Défi du jour et un mode sombre. Sans compte, sans pub avec Premium.',
    },
    hero: {
      badge: 'Disponible sur l’App Store et Google Play',
      headline: 'L’appli de sudoku.',
      headlineAccent: 'Simple et épurée.',
      body: 'Quelques minutes de calme avec une seule grille et rien d’autre pour vous distraire. Sudoku classique, Killer et Sauvetage, un Défi du jour et des grilles illimitées hors ligne. Gratuit, sans compte, sans encombrement.',
    },
    screenshotAlt:
      'L’écran d’accueil de One Sudoku sur iPhone en mode sombre, avec le Manoir hanté, le Défi du jour et sa série de 7 jours, et les modes Classic et Killer.',
    schema: {
      description:
        'Un jeu de sudoku épuré et gratuit pour iPhone, iPad et Android, avec les modes Classique, Killer et Sauvetage, le Manoir hanté, un Défi du jour, des notes intelligentes et des grilles illimitées hors ligne.',
      features: [
        'Sudoku classique en quatre niveaux (Facile, Moyen, Difficile, Expert)',
        'Killer Sudoku et Sauvetage de Sudoku',
        'Le Manoir hanté, un casse-tête de logique avec des fantômes',
        'Défi du jour avec séries',
        'Grilles illimitées hors ligne',
        'Notes de candidats, annulation illimitée, sauvegarde automatique',
        'Synchronisation facultative avec Google, Apple ou e-mail',
        'Gratuit, thèmes clair et sombre',
      ],
    },
    trust: [
      { label: 'Gratuit', sub: 'Premium sans pub en option' },
      { label: 'Sans compte', sub: 'Ouvrez et jouez' },
      { label: 'Entièrement hors ligne', sub: 'Grilles créées sur l’appareil' },
      { label: 'iPhone, iPad et Android', sub: 'La même app sur chaque écran' },
    ],
    manor: {
      badge: 'Nouveau pour Halloween',
      title: 'Le Manoir hanté',
      body: 'Un casse-tête de logique un brin effrayant, juste à côté de votre sudoku. Cachez un fantôme à chaque étage, dans chaque couloir et dans chaque pièce, sans que deux fantômes se touchent, même en diagonale.',
      points: [
        'Trois tailles : Cottage, Manor et Castle',
        'Se résout par la logique seule, jamais au hasard',
        'Pas de chrono, pas de stress : les indices montrent l’étape suivante',
      ],
      link: 'Comment résoudre le Manoir hanté',
      gridLabel: 'Un Manoir hanté 6×6 résolu : six pièces colorées, chacune avec un fantôme.',
    },
    features: {
      title: 'Pensé pour les amateurs de sudoku',
      sub: 'Chaque détail vous garde concentré sur l’essentiel : résoudre la grille.',
      items: [
        { title: 'Classique, Killer et Sauvetage', body: 'Le 9×9 classique de Facile à Expert, les cages à somme du Killer, et le Sauvetage, où vous reprenez une grille mal résolue pour la sauver.' },
        { title: 'Défi du jour', body: 'Une nouvelle grille chaque jour, la même pour tous les joueurs du monde. Construisez votre série, un jour après l’autre.' },
        { title: 'Design épuré', body: 'Des publicités discrètes : pas de pop-up, pas d’inscription forcée.' },
        { title: 'Jeu illimité hors ligne', body: 'Les grilles sont générées sur votre appareil. Jouez partout, en avion, dans le métro ou sans réseau.' },
        { title: 'Outils de résolution', body: 'Notes de candidats, annulation illimitée et sauvegarde automatique. Tout ce qu’il faut, rien de plus.' },
        { title: 'Suivez vos progrès', body: 'Meilleurs temps, taux de victoire et séries à chaque niveau. Connectez-vous avec Google, Apple ou un e-mail pour synchroniser vos appareils ; c’est entièrement facultatif.' },
      ],
    },
    inside: {
      title: 'Un aperçu',
      sub: 'La même interface épurée sur iPhone, iPad et Android.',
      points: [
        { title: 'Trois façons de jouer', body: 'Classique de Facile à Expert, Killer et ses cages à somme, et Sauvetage, où vous réparez une grille que quelqu’un d’autre a ratée.' },
        { title: 'Reprenez où vous en étiez', body: 'Chaque grille est sauvegardée automatiquement, même quand le téléphone retourne dans la poche.' },
        { title: 'Un défi quotidien', body: 'Une grille partagée par jour, avec une série qui ne grandit que si vous revenez.' },
        { title: 'Rien que vous n’ayez demandé', body: 'Pas de pop-up, pas d’inscription forcée, pas de fil à faire défiler. Juste la grille.' },
      ],
    },
    howTo: {
      eyebrow: 'Règles',
      title: 'Les règles du sudoku en une minute',
      body: 'Le sudoku est un casse-tête de logique sur une grille de 9×9 divisée en neuf carrés de 3×3. Certains chiffres sont donnés au départ ; à vous de compléter le reste par le seul raisonnement. Aucun calcul nécessaire.',
      rules: [
        `Remplissez chaque ${strong('ligne')} avec les chiffres de 1 à 9, chacun une seule fois.`,
        `Remplissez chaque ${strong('colonne')} de 1 à 9, sans répétition.`,
        `Remplissez chaque ${strong('carré de 3×3')} de 1 à 9, toujours sans répétition.`,
        `Quand toute la grille est remplie sans conflit, le sudoku est résolu. Utilisez les ${strong('notes')} pour suivre les candidats.`,
      ],
      link: 'Apprendre les techniques, de Facile à Expert',
    },
    faq: {
      title: 'Questions fréquentes',
      sub: 'Tout ce que vous voulez savoir avant de télécharger.',
      items: [
        { q: 'One Sudoku est-il gratuit ?', a: 'Oui. One Sudoku se télécharge et se joue gratuitement, avec peu de publicités et aucune intrusive. Aucun compte n’est nécessaire.' },
        { q: 'L’app est-elle en français ?', a: 'Non, l’app est en anglais. Mais le sudoku se joue avec des chiffres et les règles sont les mêmes dans toutes les langues ; les guides en français de ce site suffisent pour bien démarrer.' },
        { q: 'Fonctionne-t-elle hors ligne ?', a: 'Entièrement. Les grilles sont générées sur votre appareil : vous pouvez jouer partout, en avion, dans le métro ou sans réseau. Aucune connexion n’est jamais nécessaire.' },
        { q: 'Quels sont les modes de jeu ?', a: 'Trois types de sudoku : Classique ; Killer, où des cages à somme remplacent les chiffres donnés ; et Sauvetage (« Rescue » dans l’app), où vous reprenez une grille mal résolue pour la corriger. À côté, le Manoir hanté (« Haunted Manor ») est un casse-tête de logique où vous cachez un fantôme à chaque étage, dans chaque couloir et dans chaque pièce, sans que deux fantômes se touchent.' },
        { q: 'Quels niveaux de difficulté ?', a: 'Le mode Classique a quatre niveaux : Facile, Moyen, Difficile et Expert, pour les débutants comme pour les joueurs aguerris. Killer et Sauvetage ont leurs propres niveaux, et le Manoir hanté existe en trois tailles : Cottage, Manor et Castle.' },
        { q: 'Qu’est-ce que le Défi du jour ?', a: 'Chaque jour, une nouvelle grille, la même pour tous les joueurs du monde. Résolvez-la chaque jour pour construire et garder votre série.' },
        { q: 'Y a-t-il des publicités ou des achats intégrés ?', a: 'One Sudoku affiche quelques bannières pour rester gratuit, et vous pouvez regarder des vidéos facultatives pour gagner des indices. Si vous préférez jouer sans publicité, le Premium facultatif les supprime toutes : au mois, à l’année ou en achat unique. Le prix pour votre région s’affiche dans l’app avant l’achat.' },
        { q: 'One Sudoku est-il disponible sur Android ?', a: 'Oui. One Sudoku est sur l’App Store pour iPhone et iPad, et sur Google Play pour les téléphones et tablettes Android.' },
        { q: 'Faut-il un compte ?', a: 'Non. Vous pouvez tout jouer en invité, et votre progression est enregistrée sur l’appareil. La connexion avec Google, Apple ou un e-mail est facultative : elle synchronise progression et séries entre vos appareils pour ne rien perdre en changeant de téléphone.' },
      ],
    },
    finalCta: { title: 'Prêt à jouer ?', body: 'Téléchargez One Sudoku gratuitement et commencez dès aujourd’hui. Sans compte, sans piège.' },
  },
};
