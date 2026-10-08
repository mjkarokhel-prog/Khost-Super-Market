import { useEffect, useRef } from "react";
import mojs from "@mojs/core";

// The two decorative circles + the mo.js burst that plays on the first one
export default function FloatingBeans() {
  const firstBean = useRef(null);

  useEffect(() => {
    const burst = new mojs.Burst({
      parent: firstBean.current,
      radius: { 0: 30 },
      count: 5,
      children: {
        shape: "circle",
        fill: ["#8B4513", "#D2691E", "#F4A460"],
        radius: 5,
        duration: 2000,
        easing: "quint.inout",
      },
    });

    // Play once after 1s, then replay every 8s
    const timeout = setTimeout(() => burst.play(), 1000);
    const interval = setInterval(() => burst.replay(), 8000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
      burst.stop();
      burst.el?.remove();
    };
  }, []);

  return (
    <>
      <div
        ref={firstBean}
        aria-hidden="true"
        className="absolute -top-10 -left-10 w-20 h-20 bg-amber-200/30 rounded-full animate-bean"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-5 -right-5 w-16 h-16 bg-amber-300/40 rounded-full animate-bean [animation-duration:15s] [animation-direction:reverse]"
      />
    </>
  );
}
