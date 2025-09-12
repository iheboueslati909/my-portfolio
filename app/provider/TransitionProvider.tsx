"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

interface TransitionContextType {
  navigateWithFade: (path: string) => void;
}

const TransitionContext = createContext<TransitionContextType>({
  navigateWithFade: () => {},
});

export const useFadeNav = () => useContext(TransitionContext);

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [isFading, setIsFading] = useState(false);
  const router = useRouter();

  const navigateWithFade = useCallback(
    (path: string) => {
      setIsFading(true);
      setTimeout(() => {
        router.push(path);
        setIsFading(false);
      }, 800);
    },
    [router]
  );

 

  return (
    <TransitionContext.Provider value={{ navigateWithFade }}>
      {children}
      {isFading && <div className="fade-overlay" />}
      <style jsx global>{`
        .fade-overlay {
          position: fixed;
          inset: 0;
          background: black;
          z-index: 9999;
          animation: retro-fade 0.6s forwards;
        }

        @keyframes retro-fade {
          0% {
            clip-path: circle(150% at center);
            opacity: 1;
          }
          100% {
            clip-path: circle(0% at center);
            opacity: 1;
          }
        }
      `}</style>
    </TransitionContext.Provider>
  );
}
