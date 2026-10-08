import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Steam from "./Steam";
import FloatingBeans from "./FloatingBeans";

export default function Hero() {
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.from("h2", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });
      gsap.from("p", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });
      gsap.from(".hero-image", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.7,
        ease: "power3.out",
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id="home"
      className="coffee-bg bg-cover bg-center bg-fixed min-h-screen flex items-center justify-center text-white pt-20"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
          <h2 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Khost Super <br />
            <span className="text-amber-300">Store</span>
          </h2>
          <p className="text-xl mb-8 max-w-lg mx-auto md:mx-0">
            Since 2011, the Khost Super Store have been roasting the world's
            finest Marketing to create unforgettable experiences Marketing
            World.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-amber-500 hover:bg-amber-400 text-amber-900 font-bold py-3 px-8 rounded-full transition-all hover:scale-105">
              Explore Our Menu
            </button>
            <button className="border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full transition-all">
              Find a Location
            </button>
          </div>
        </div>

        <div className="md:w-1/2 relative flex justify-center">
          {/* GSAP animates this wrapper; the CSS float animation stays on the img,
              so the two no longer fight over the same transform. */}
          <div className="hero-image relative">
            <img
              src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Specialty Coffee"
              className="rounded-2xl shadow-2xl animate-floating max-w-md w-full"
            />
            <Steam />
          </div>
          <FloatingBeans />
        </div>
      </div>
    </section>
  );
}
