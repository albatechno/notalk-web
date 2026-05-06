import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Syne, Space_Grotesk } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const SITE_URL = "https://notalk.co";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NoTalk — Techno Duo",
    template: "%s — NoTalk",
  },
  description:
    "NoTalk is a DJ and producer duo exploring mental, hypnotic and fast techno through dense rhythms, ambient pressure and immersive sonic structures.",
  keywords: [
    "NoTalk", "techno", "DJ", "producer", "hypnotic techno", "mental techno",
    "Alba", "Die Hexe", "techno duo", "Colombia", "underground techno",
    "techno DJ", "electronic music",
  ],
  authors: [{ name: "NoTalk" }],
  creator: "NoTalk",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "NoTalk — Techno Duo",
    description:
      "Mental, hypnotic and fast techno shaped through atmosphere, texture and repetition.",
    url: SITE_URL,
    siteName: "NoTalk",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NoTalk — Techno Duo",
    description:
      "Mental, hypnotic and fast techno shaped through atmosphere, texture and repetition.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${syne.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
