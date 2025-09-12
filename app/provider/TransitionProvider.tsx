"use client";

import { createContext, useContext, useState, useCallback } from "react";
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
      }, 2000); // match animation duration
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
          animation: fade-in-out 2s forwards;
        }

        @keyframes fade-in-out {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </TransitionContext.Provider>
  );
}
