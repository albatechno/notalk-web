export const locales = ["en", "es", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const LOCALE_COOKIE = "NEXT_LOCALE";

export function setLocaleCookie(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000`;
}

export type Dictionary = {
  nav: {
    sound: string;
    video: string;
    booking: string;
    listen: string;
    openMenu: string;
    closeMenu: string;
    listenOnSoundcloud: string;
  };
  hero: {
    eyebrow: string;
    tagline: string;
    subtext: string;
    listenOnSoundcloud: string;
    watchVideoSets: string;
    booking: string;
  };
  about: {
    label: string;
    title1: string;
    title2: string;
    paragraph1: string;
    paragraph2: string;
  };
  members: {
    label: string;
    soundcloud: string;
    instagram: string;
    bios: Record<"alba" | "die-hexe", { role: string; bio: string }>;
  };
  shows: {
    title: string;
    upcoming: string;
    noUpcomingShows: string;
    tickets: string;
    free: string;
  };
  gallery: {
    label: string;
  };
  sound: {
    label: string;
    title: string;
    description: string;
    streaming: string;
    soundcloudTitle: string;
    soundcloudDescription: string;
    openSoundcloud: string;
    mixes: string;
    mixcloudTitle: string;
    mixcloudDescription: string;
    openMixcloud: string;
  };
  videoSets: {
    label: string;
    title: string;
    description: string;
    setPrefix: string;
    comingSoon: string;
    soon: string;
    videoUnavailable: string;
    watch: string;
    watchMore: string;
    items: Record<"set-01" | "set-02" | "set-03" | "set-04", { title: string; description: string }>;
  };
  identity: {
    label: string;
    blocks: { title: string; description: string }[];
  };
  contact: {
    label: string;
    title1: string;
    title2: string;
    description: string;
    scheduleCall: string;
    linksLabel: string;
  };
  comingSoon: {
    eyebrow: string;
    title1: string;
    title2: string;
    description: string;
    backToSite: string;
  };
  metadata: {
    title: string;
    description: string;
    ogDescription: string;
  };
};

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("@/dictionaries/en").then((m) => m.default),
  es: () => import("@/dictionaries/es").then((m) => m.default),
  de: () => import("@/dictionaries/de").then((m) => m.default),
};

export const getDictionary = (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]();
