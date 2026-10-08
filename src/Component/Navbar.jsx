import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaBars, FaMugSaucer, FaXmark } from "react-icons/fa6";
import { navLinks } from "../data/content";

export default function Navbar() {
  const navRef = useRef(null);
  const [open, setOpen] = useState(false);

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center mr-3">
            <FaMugSaucer className="text-amber-100 text-lg" />
          </div>
          <h1 className="font-heading text-2xl font-bold text-amber-900">
            Khost Super Store
          </h1>
        </div>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-amber-900 font-medium hover:text-amber-700 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button className="bg-amber-800 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors font-medium">
            Order Online
          </button>
          <button
            className="md:hidden text-amber-900"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? (
              <FaXmark className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu (the original hamburger button did nothing) */}
      {open && (
        <div className="md:hidden border-t border-amber-100 bg-white px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-amber-900 font-medium hover:text-amber-700 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
