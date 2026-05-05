export const LINKS = {
  youtube: "https://www.youtube.com/@notalk8",
  soundcloud: "https://soundcloud.com/timeless-879656477/seduceme",
  bandcamp: "/coming-soon",
  instagram: "https://www.instagram.com/notalk_musik",
  bookingEmail: "notalkcol@gmail.com",
  calendly: "https://calendly.com/notalk",
};

export const MEMBERS = [
  {
    id: "alba",
    name: "Alba",
    role: "DJ / Producer",
    bio: "Rooted in hypnotic and mental techno, Alba builds sets defined by tension, layered textures and a relentless forward drive. Her selections move between raw intensity and atmospheric depth.",
    imageSeed: "alba01",
    image: "/alba.png",
    links: {
      soundcloud: "https://soundcloud.com/santiago-beltran-alba",
      instagram: "https://www.instagram.com/albassntg",
    },
  },
  {
    id: "die-hexe",
    name: "Die Hexe",
    role: "DJ / Producer",
    bio: "Die Hexe explores the darker, more hypnotic end of the spectrum — long-form journeys built from dense ambient layers, fast rhythmic structures and a deep sense of sonic ritual.",
    imageSeed: "hexe01",
    image: "/diehexe.jpeg",
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
  title: string;
  description: string;
  embedId: string;
  comingSoon?: boolean;
};

export const VIDEO_SETS: VideoSet[] = [
  {
    id: "set-01",
    title: "Die Hexe — Set",
    description: "Mental techno. Long form immersive journey.",
    embedId: "3tYhN4-B96I",
  },
  {
    id: "set-02",
    title: "Alba — Set 01",
    description: "Extended live session. Dense rhythms, hypnotic movement.",
    embedId: "RdfWIx_d1gA",
  },
  {
    id: "set-03",
    title: "Alba — Set 02",
    description: "Fast and textural. Continuous pressure from start to end.",
    embedId: "_2oETBnhJXY",
  },
];
