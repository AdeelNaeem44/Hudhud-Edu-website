import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Features from "./sections/Features.jsx";
import Screenshots from "./sections/previews.jsx";
import Pricing from "./sections/Pricing.jsx";
import FAQ from "./sections/FAQ.jsx";
import Contact from "./sections/Contact.jsx";
import Reveal from "../components/Reveal.jsx";

export default function Home() {
  return (
    <>
      {/* Hero animates in immediately on load, not on scroll - see global.css */}
      <Hero />

      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Features />
      </Reveal>
      <Reveal>
        <Screenshots />
      </Reveal>
      <Reveal>
        <Pricing />
      </Reveal>
      <Reveal>
        <FAQ />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </>
  );
}