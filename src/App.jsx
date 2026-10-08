import Navbar from "./Component/Navbar"
import Hero from "./Component/Hero";
import About from "./Component/About";
import Menu from "./Component/Menu";
import Locations from "./Component/Locations";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import BackToTop from "./Component/BackToTop";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function App() {
  const main = useRef(null);

  // Fade/slide every <section> in as it scrolls into view
  useGSAP(
    () => {
      gsap.utils.toArray("section").forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: main },
  );

  return (
    <>
      <Navbar/>
      <main ref={main}>
        <Hero />
        <About />
        <Menu />
        <Locations />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
