export const LINKS = {
  youtube: "https://www.youtube.com/@notalk8",
  soundcloud: "https://soundcloud.com/santiago-beltran-alba/tracks",
  mixcloud: "https://www.mixcloud.com/notalkmusik/",
  bandcamp: "/coming-soon",
  instagram: "https://www.instagram.com/notalk_musik",
  bookingEmail: "notalkcol@gmail.com",
  calendly: "https://calendly.com/notalk",
};

export type Member = {
  id: "alba" | "die-hexe";
  name: string;
  imageSeed: string;
  image: string;
  links: {
    soundcloud?: string;
    instagram?: string;
  };
};

export const MEMBERS: Member[] = [
  {
    id: "alba",
    name: "Alba",
    imageSeed: "alba01",
    image: "/alba.webp",
    links: {
      soundcloud: "https://soundcloud.com/santiago-beltran-alba",
      instagram: "https://www.instagram.com/albassntg",
    },
  },
  {
    id: "die-hexe",
    name: "Die Hexe",
    imageSeed: "hexe01",
    image: "/diehexe.webp",
    links: {
      soundcloud: "https://soundcloud.com/die_hexe",
      instagram: "https://www.instagram.com/die.hexe",
    },
  },
];

export type Show = {
  date: string;
  name: string;
  venue: string;
  city: string;
  country: string;
  ticketUrl?: string;
};

export const SHOWS: Show[] = [];

export type VideoSet = {
  id: string;
  embedId: string;
  comingSoon?: boolean;
};

// Newest sets are added to the top of this array; older sets keep their
// original relative order behind them. The first entry is featured by default.
// Titles/descriptions live in dictionaries/*.ts, keyed by `id`.
export const VIDEO_SETS: VideoSet[] = [
  { id: "set-04", embedId: "eC8GKlLyKwQ" },
  { id: "set-01", embedId: "3tYhN4-B96I" },
  { id: "set-02", embedId: "RdfWIx_d1gA" },
  { id: "set-03", embedId: "_2oETBnhJXY" },
];
