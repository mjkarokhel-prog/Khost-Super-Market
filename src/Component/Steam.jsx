import { useEffect, useState } from "react";

const initial = [
  { id: "s0", left: "40%", delay: "0s" },
  { id: "s1", left: "50%", delay: "1s" },
  { id: "s2", left: "60%", delay: "2s" },
];

// Three fixed puffs + a new random puff every 800ms that removes itself after 4s
export default function Steam() {
  const [puffs, setPuffs] = useState(initial);

  useEffect(() => {
    const timeouts = new Set();
    const interval = setInterval(() => {
      const id = crypto.randomUUID();
      const puff = {
        id,
        left: `${40 + Math.random() * 20}%`,
        delay: `${Math.random() * 2}s`,
      };
      setPuffs((p) => [...p, puff]);

      const t = setTimeout(() => {
        setPuffs((p) => p.filter((x) => x.id !== id));
        timeouts.delete(t);
      }, 4000);
      timeouts.add(t);
    }, 800);

    return () => {
      clearInterval(interval);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-10 pointer-events-none"
    >
      {puffs.map((p) => (
        <div
          key={p.id}
          className="absolute w-2 h-10 rounded-lg bg-white/60 blur-[4px] animate-steam"
          style={{ left: p.left, animationDelay: p.delay }}
        />
      ))}
    </div>
  );
}
