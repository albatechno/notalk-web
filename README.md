# NoTalk — Official Website

Artist website for **NoTalk**, a techno DJ/producer duo (Alba + Die Hexe) based in Colombia. Dark, minimal, underground.

## Stack

- **Next.js 16** — App Router, static export
- **Tailwind CSS v4** — CSS-based theme config
- **Lenis** — smooth scroll
- **next/font** — Bebas Neue, Syne, Space Grotesk

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content updates

All links, member data, shows, and video sets are managed from a single file:

```
lib/config.ts
```

- Add upcoming shows → `SHOWS` array
- Update social links → `LINKS` object
- Add YouTube embed IDs → `VIDEO_SETS` array
- Member individual links → inside each entry in `MEMBERS`

## Replacing placeholder images

Drop `.webp` files in `/public` and pass `src="/your-image.webp"` to any `<ImagePlaceholder>` or `<Image>` component. Member photos reference `member.image` in config.

## Deploy

```bash
npm run build
```

Deploys as a static site. Recommended: Vercel.
