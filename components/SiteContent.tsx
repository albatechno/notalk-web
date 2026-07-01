"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { dictionaries } from "@/dictionaries";
import { setLocaleCookie, type Locale } from "@/lib/i18n";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Shows from "@/components/Shows";
import SoundLinks from "@/components/SoundLinks";
import VideoSets from "@/components/VideoSets";
import IdentityBlocks from "@/components/IdentityBlocks";
import Members from "@/components/Members";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Half-cycle of the blur transition (blur-out, then blur-in) in ms.
const BLUR_MS = 200;

export default function SiteContent({ initialLang }: { initialLang: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLang);
  const [swapping, setSwapping] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const dict = dictionaries[locale];

  // Keep <html lang> and the document title in sync with the client-side locale.
  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = dict.metadata.title;
  }, [locale, dict]);

  useEffect(() => {
    const t = timers.current;
    return () => t.forEach(clearTimeout);
  }, []);

  const switchLocale = useCallback(
    (next: Locale) => {
      if (swapping || next === locale) return;
      setLocaleCookie(next);
      // Blur fully out, swap the text at peak blur (change hidden), then blur
      // back in — no navigation, so the Hero background keeps playing.
      setSwapping(true);
      timers.current.push(
        setTimeout(() => {
          setLocale(next);
          const rest = window.location.pathname.replace(/^\/(en|es|de)/, "");
          window.history.replaceState(null, "", `/${next}${rest}`);
          timers.current.push(setTimeout(() => setSwapping(false), 30));
        }, BLUR_MS)
      );
    },
    [locale, swapping]
  );

  const swapStyle: React.CSSProperties = {
    filter: swapping ? "blur(6px)" : "blur(0px)",
    opacity: swapping ? 0.4 : 1,
    transition: `filter ${BLUR_MS}ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${BLUR_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`,
    willChange: swapping ? "filter, opacity" : "auto",
  };

  return (
    <>
      <Nav
        dict={dict.nav}
        locale={locale}
        onSwitchLocale={switchLocale}
        swapping={swapping}
      />
      <main style={swapStyle}>
        <Hero dict={dict.hero} />
        <About dict={dict.about} />
        <Members dict={dict.members} />
        <Gallery dict={dict.gallery} />
        <Shows dict={dict.shows} />
        <SoundLinks dict={dict.sound} />
        <VideoSets dict={dict.videoSets} />
        <IdentityBlocks dict={dict.identity} />
        <Contact dict={dict.contact} />
        <Footer />
      </main>
    </>
  );
}
