import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SoundLinks from "@/components/SoundLinks";
import VideoSets from "@/components/VideoSets";
import IdentityBlocks from "@/components/IdentityBlocks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <SoundLinks />
      <VideoSets />
      <IdentityBlocks />
      <Contact />
      <Footer />
    </main>
  );
}
