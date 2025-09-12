"use client";

import { useEffect, useState } from "react";

interface FadeProps {
  show: boolean;
  children: React.ReactNode;
  duration?: number; // ms
  onExited?: () => void;
}

export default function Fade({ show, children, duration = 1000, onExited }: FadeProps) {
  const [render, setRender] = useState(show);

  useEffect(() => {
    if (show) {
      setRender(true);
    } else {
      const timeout = setTimeout(() => {
        setRender(false);
        onExited?.();
      }, duration);
      return () => clearTimeout(timeout);
    }
  }, [show, duration, onExited]);

  if (!render) return null;

  return (
    <div className={show ? "fade-in" : "fade-out"}>
      {children}
    </div>
  );
}
