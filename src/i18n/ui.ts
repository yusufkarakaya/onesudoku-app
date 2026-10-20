/**
 * Languages the site is published in, and the interface strings every page
 * shares (header, footer, blog chrome, the store buttons).
 *
 * English lives at the root, every other language under `/<lang>/`. Page copy
 * that only one page uses lives beside that page (see `home.ts`); blog posts
 * are translated as separate Markdown files under `src/content/blog/<lang>/`.
 *
 * The app itself is English-only, so every translated page says so: a visitor
 * who downloads from a Turkish page should not be surprised by an English app.
 */
import { PLAY_STORE_URL } from '../consts';

export const LANGS = ['en', 'tr', 'es', 'de', 'fr'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'en';

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && (LANGS as readonly string[]).includes(value);
}

/** Every language but English, for `getStaticPaths` under `src/pages/[lang]/`. */
export const PREFIXED_LANGS = LANGS.filter((l) => l !== DEFAULT_LANG);

export const LANG_META: Record<Lang, { name: string; ogLocale: string; dateLocale: string }> = {
  en: { name: 'English', ogLocale: 'en_US', dateLocale: 'en-US' },
  tr: { name: 'Türkçe', ogLocale: 'tr_TR', dateLocale: 'tr-TR' },
  es: { name: 'Español', ogLocale: 'es_ES', dateLocale: 'es-ES' },
  de: { name: 'Deutsch', ogLocale: 'de_DE', dateLocale: 'de-DE' },
  fr: { name: 'Français', ogLocale: 'fr_FR', dateLocale: 'fr-FR' },
};

/** '/blog/' → '/tr/blog/' for Turkish; English paths are returned unchanged. */
export function localizePath(path: string, lang: Lang): string {
  return lang === DEFAULT_LANG ? path : `/${lang}${path}`;
}

/**
 * The Play listing in the visitor's language. Play honours `hl`; the App Store
 * picks the storefront from the device, so its link stays as it is.
 */
export function playStoreUrl(lang: Lang): string {
  return lang === DEFAULT_LANG ? PLAY_STORE_URL : `${PLAY_STORE_URL}&hl=${lang}`;
}

/** One version of a page in one language, for hreflang and the language menu. */
export interface Alternate {
  lang: Lang;
  path: string;
}

/** The same path in every language: the home page and the blog index. */
export function everyLanguage(path: string): Alternate[] {
  return LANGS.map((lang) => ({ lang, path: localizePath(path, lang) }));
}

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(LANG_META[lang].dateLocale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

/** Blog post categories are stored as these keys and shown translated. */
export type Category = 'Guide' | 'Technique' | 'Killer';

interface UiStrings {
  nav: { howToPlay: string; blog: string; faq: string; language: string };
  footer: { privacy: string; deleteAccount: string; support: string; rights: string };
  store: {
    appStoreAria: string;
    playAria: string;
    downloadOnThe: string;
    getItOn: string;
    free: string;
    download: string;
  };
  /** Shown on every page that isn't in English. Empty for English. */
  appLanguageNote: string;
  cta: { badge: string; title: string; body: string };
  categories: Record<Category, string>;
  blog: {
    title: string;
    description: string;
    badge: string;
    headline: string;
    headlineAccent: string;
    rss: string;
    noPosts: string;
    sections: { start: string; techniques: string; killer: string; more: string };
    readPost: string;
    minRead: (minutes: number) => string;
    updated: string;
    sharePrompt: string;
    share: string;
    copyLink: string;
    copied: string;
    copyFailed: string;
    shareOnX: string;
    keepReading: string;
    allPosts: string;
    photo: string;
    breadcrumb: string;
  };
}

export const ui: Record<Lang, UiStrings> = {
  en: {
    nav: { howToPlay: 'How to play', blog: 'Blog', faq: 'FAQ', language: 'Language' },
    footer: { privacy: 'Privacy Policy', deleteAccount: 'Delete Account', support: 'Support', rights: 'All rights reserved.' },
    store: {
      appStoreAria: 'Download One Sudoku on the App Store',
      playAria: 'Get One Sudoku on Google Play',
      downloadOnThe: 'Download on the',
      getItOn: 'Get it on',
      free: 'Free · No account required',
      download: 'Download',
    },
    appLanguageNote: '',
    cta: {
      badge: 'Put it into practice',
      title: 'Play your first puzzle',
      body: 'One Sudoku is free on iPhone, iPad and Android. No account, works offline. Start on Easy and move up whenever you’re ready.',
    },
    categories: { Guide: 'Guide', Technique: 'Technique', Killer: 'Killer' },
    blog: {
      title: 'Blog — One Sudoku',
      description:
        'Writing about sudoku: how the puzzle works, the techniques worth learning, and what a daily solve is actually good for.',
      badge: 'The One Sudoku blog',
      headline: 'Get better at sudoku,',
      headlineAccent: 'one grid at a time.',
      rss: 'RSS feed',
      noPosts: 'No posts yet — check back soon.',
      sections: { start: 'Start here', techniques: 'Solving techniques', killer: 'Killer Sudoku', more: 'More posts' },
      readPost: 'Read the post',
      minRead: (m) => `${m} min read`,
      updated: 'Updated',
      sharePrompt: 'Found this useful? Pass it on.',
      share: 'Share',
      copyLink: 'Copy link',
      copied: 'Copied!',
      copyFailed: 'Copy failed',
      shareOnX: 'Share on X',
      keepReading: 'Keep reading',
      allPosts: 'All posts →',
      photo: 'Photo:',
      breadcrumb: 'Blog',
    },
  },
  tr: {
    nav: { howToPlay: 'Nasıl oynanır', blog: 'Blog', faq: 'SSS', language: 'Dil' },
    footer: { privacy: 'Gizlilik Politikası', deleteAccount: 'Hesabı Sil', support: 'Destek', rights: 'Tüm hakları saklıdır.' },
    store: {
      appStoreAria: 'One Sudoku’yu App Store’dan indir',
      playAria: 'One Sudoku’yu Google Play’den indir',
      downloadOnThe: 'İndir:',
      getItOn: 'Edinin:',
      free: 'Ücretsiz · Hesap gerekmez',
      download: 'İndir',
    },
    appLanguageNote: 'Uygulamanın dili İngilizcedir.',
    cta: {
      badge: 'Şimdi uygula',
      title: 'İlk bulmacanı çöz',
      body: 'One Sudoku iPhone, iPad ve Android’de ücretsiz. Hesap gerekmez, internetsiz çalışır. Kolay’dan başla, hazır olduğunda bir üst seviyeye geç.',
    },
    categories: { Guide: 'Rehber', Technique: 'Teknik', Killer: 'Killer' },
    blog: {
      title: 'Blog — One Sudoku',
      description: 'Sudoku üzerine yazılar: bulmaca nasıl işler, hangi teknikler öğrenmeye değer ve daha iyi bir çözücü olmanın yolu.',
      badge: 'One Sudoku blogu',
      headline: 'Sudoku’da ustalaş,',
      headlineAccent: 'her seferinde bir tahta.',
      rss: 'RSS',
      noPosts: 'Henüz yazı yok, yakında tekrar uğra.',
      sections: { start: 'Buradan başla', techniques: 'Çözüm teknikleri', killer: 'Killer Sudoku', more: 'Diğer yazılar' },
      readPost: 'Yazıyı oku',
      minRead: (m) => `${m} dk okuma`,
      updated: 'Güncellendi',
      sharePrompt: 'İşine yaradı mı? Paylaş.',
      share: 'Paylaş',
      copyLink: 'Linki kopyala',
      copied: 'Kopyalandı!',
      copyFailed: 'Kopyalanamadı',
      shareOnX: 'X’te paylaş',
      keepReading: 'Okumaya devam et',
      allPosts: 'Tüm yazılar →',
      photo: 'Fotoğraf:',
      breadcrumb: 'Blog',
    },
  },
  es: {
    nav: { howToPlay: 'Cómo jugar', blog: 'Blog', faq: 'Preguntas', language: 'Idioma' },
    footer: { privacy: 'Política de privacidad', deleteAccount: 'Eliminar cuenta', support: 'Soporte', rights: 'Todos los derechos reservados.' },
    store: {
      appStoreAria: 'Descarga One Sudoku en el App Store',
      playAria: 'Consigue One Sudoku en Google Play',
      downloadOnThe: 'Descárgalo en el',
      getItOn: 'Disponible en',
      free: 'Gratis · Sin cuenta',
      download: 'Descargar',
    },
    appLanguageNote: 'La app está en inglés.',
    cta: {
      badge: 'Ponlo en práctica',
      title: 'Juega tu primer sudoku',
      body: 'One Sudoku es gratis en iPhone, iPad y Android. Sin cuenta y sin conexión. Empieza en Fácil y sube de nivel cuando quieras.',
    },
    categories: { Guide: 'Guía', Technique: 'Técnica', Killer: 'Killer' },
    blog: {
      title: 'Blog — One Sudoku',
      description: 'Artículos sobre sudoku: cómo funciona el juego, qué técnicas merece la pena aprender y cómo mejorar partida a partida.',
      badge: 'El blog de One Sudoku',
      headline: 'Mejora en el sudoku,',
      headlineAccent: 'tablero a tablero.',
      rss: 'RSS',
      noPosts: 'Aún no hay artículos. Vuelve pronto.',
      sections: { start: 'Empieza aquí', techniques: 'Técnicas', killer: 'Killer Sudoku', more: 'Más artículos' },
      readPost: 'Leer el artículo',
      minRead: (m) => `${m} min de lectura`,
      updated: 'Actualizado',
      sharePrompt: '¿Te ha sido útil? Compártelo.',
      share: 'Compartir',
      copyLink: 'Copiar enlace',
      copied: '¡Copiado!',
      copyFailed: 'No se pudo copiar',
      shareOnX: 'Compartir en X',
      keepReading: 'Sigue leyendo',
      allPosts: 'Todos los artículos →',
      photo: 'Foto:',
      breadcrumb: 'Blog',
    },
  },
  de: {
    nav: { howToPlay: 'Spielregeln', blog: 'Blog', faq: 'FAQ', language: 'Sprache' },
    footer: { privacy: 'Datenschutz', deleteAccount: 'Konto löschen', support: 'Support', rights: 'Alle Rechte vorbehalten.' },
    store: {
      appStoreAria: 'One Sudoku im App Store laden',
      playAria: 'One Sudoku bei Google Play holen',
      downloadOnThe: 'Laden im',
      getItOn: 'Jetzt bei',
      free: 'Kostenlos · Ohne Konto',
      download: 'Laden',
    },
    appLanguageNote: 'Die App ist auf Englisch.',
    cta: {
      badge: 'Jetzt ausprobieren',
      title: 'Löse dein erstes Rätsel',
      body: 'One Sudoku ist kostenlos für iPhone, iPad und Android. Ohne Konto, funktioniert offline. Fang bei Leicht an und steig auf, wann du willst.',
    },
    categories: { Guide: 'Anleitung', Technique: 'Technik', Killer: 'Killer' },
    blog: {
      title: 'Blog — One Sudoku',
      description: 'Artikel rund um Sudoku: wie das Rätsel funktioniert, welche Techniken sich lohnen und wie du Schritt für Schritt besser wirst.',
      badge: 'Der One Sudoku Blog',
      headline: 'Besser im Sudoku,',
      headlineAccent: 'Rätsel für Rätsel.',
      rss: 'RSS-Feed',
      noPosts: 'Noch keine Artikel. Schau bald wieder vorbei.',
      sections: { start: 'Hier anfangen', techniques: 'Lösungstechniken', killer: 'Killer-Sudoku', more: 'Weitere Artikel' },
      readPost: 'Artikel lesen',
      minRead: (m) => `${m} Min. Lesezeit`,
      updated: 'Aktualisiert',
      sharePrompt: 'Hilfreich? Teile es weiter.',
      share: 'Teilen',
      copyLink: 'Link kopieren',
      copied: 'Kopiert!',
      copyFailed: 'Kopieren fehlgeschlagen',
      shareOnX: 'Auf X teilen',
      keepReading: 'Weiterlesen',
      allPosts: 'Alle Artikel →',
      photo: 'Foto:',
      breadcrumb: 'Blog',
    },
  },
  fr: {
    nav: { howToPlay: 'Règles', blog: 'Blog', faq: 'FAQ', language: 'Langue' },
    footer: { privacy: 'Confidentialité', deleteAccount: 'Supprimer le compte', support: 'Assistance', rights: 'Tous droits réservés.' },
    store: {
      appStoreAria: 'Télécharger One Sudoku dans l’App Store',
      playAria: 'Disponible sur Google Play',
      downloadOnThe: 'Télécharger dans l’',
      getItOn: 'Disponible sur',
      free: 'Gratuit · Sans compte',
      download: 'Télécharger',
    },
    appLanguageNote: 'L’app est en anglais.',
    cta: {
      badge: 'Passez à la pratique',
      title: 'Jouez votre première grille',
      body: 'One Sudoku est gratuit sur iPhone, iPad et Android. Sans compte, fonctionne hors ligne. Commencez en Facile et montez quand vous êtes prêt.',
    },
    categories: { Guide: 'Guide', Technique: 'Technique', Killer: 'Killer' },
    blog: {
      title: 'Blog — One Sudoku',
      description: 'Des articles sur le sudoku : comment fonctionne la grille, quelles techniques apprendre et comment progresser.',
      badge: 'Le blog One Sudoku',
      headline: 'Progressez au sudoku,',
      headlineAccent: 'une grille à la fois.',
      rss: 'Flux RSS',
      noPosts: 'Pas encore d’articles. Revenez bientôt.',
      sections: { start: 'Commencer ici', techniques: 'Techniques de résolution', killer: 'Killer Sudoku', more: 'Autres articles' },
      readPost: 'Lire l’article',
      minRead: (m) => `${m} min de lecture`,
      updated: 'Mis à jour',
      sharePrompt: 'Utile ? Faites passer.',
      share: 'Partager',
      copyLink: 'Copier le lien',
      copied: 'Copié !',
      copyFailed: 'Échec de la copie',
      shareOnX: 'Partager sur X',
      keepReading: 'À lire aussi',
      allPosts: 'Tous les articles →',
      photo: 'Photo :',
      breadcrumb: 'Blog',
    },
  },
};

export function t(lang: Lang): UiStrings {
  return ui[lang];
}

/** The category chip's label, or the raw value for a category not in the list. */
export function categoryLabel(category: string, lang: Lang): string {
  return ui[lang].categories[category as Category] ?? category;
}
