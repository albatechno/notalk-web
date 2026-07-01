import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Syne, Space_Grotesk } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Intro from "@/components/Intro";
import CustomCursor from "@/components/CustomCursor";
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
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
        <Intro />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
