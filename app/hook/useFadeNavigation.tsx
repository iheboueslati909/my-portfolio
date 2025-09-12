"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function useFadeNavigation() {
  const [isFading, setIsFading] = useState(false);
  const router = useRouter();

  function navigateWithFade(path: string) {
    setIsFading(true);
    setTimeout(() => {
      router.push(path);
    }, 600); // match transition duration
  }

  return { isFading, navigateWithFade };
}
