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

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Members />
      <Gallery />
      <Shows />
      <SoundLinks />
      <VideoSets />
      <IdentityBlocks />
      <Contact />
      <Footer />
    </main>
  );
}
