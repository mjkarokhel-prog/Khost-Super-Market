import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaChevronUp } from "react-icons/fa6";

export default function BackToTop() {
  const btn = useRef(null);

  useEffect(() => {
    const el = btn.current;
    // autoAlpha also toggles visibility, so the hidden button can't be clicked
    gsap.set(el, { autoAlpha: 0, y: 40 });

    let visible = false;
    const onScroll = () => {
      const shouldShow = window.scrollY > 300;
      if (shouldShow === visible) return; // only animate when the state changes
      visible = shouldShow;
      gsap.to(el, {
        autoAlpha: shouldShow ? 1 : 0,
        y: shouldShow ? 0 : 10,
        duration: 0.4,
        overwrite: true,
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      gsap.killTweensOf(el);
    };
  }, []);

  return (
    <button
      ref={btn}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 bg-amber-700 hover:bg-amber-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-colors"
    >
      <FaChevronUp />
    </button>
  );
}
