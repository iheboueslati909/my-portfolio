"use client";

import { useCharacter } from "../context/CharacterContext";
import { useFadeNav } from "../provider/TransitionProvider";

interface TopBarProps {
  onBack?: () => void; // still optional, but we won’t need router.push here
}

export default function TopBar({ onBack }: TopBarProps) {
  const { character } = useCharacter();
  const { navigateWithFade } = useFadeNav();

  const thumbnails: Record<string, { normal: string; blink: string }> = {
    software: {
      normal: "/characters/software-head.png",
      blink: "/characters/software-head-blinking.png",
    },
    dj: {
      normal: "/characters/dj-head.png",
      blink: "/characters/dj-head-blinking.png",
    },
    designer: {
      normal: "/characters/designer-head.png",
      blink: "/characters/designer-head-blinking.png",
    },
  };

  const handleBack = () => {
    if (onBack) {
      onBack(); // still let parent clear character
    }
    navigateWithFade("/character-select"); // fade out, then go to selection
  };

  return (
    <header
      className="nes-container is-dark relative flex justify-between items-center overflow-hidden"
      style={{
        height: "80px",
        border: "4px solid #212529",
        boxShadow: "0 4px 0 0 #212529",
      }}
    >
      <div
        className="relative flex justify-between w-full items-center"
        style={{ padding: "0 1rem" }}
      >
        <h1 className="nes-text text-xl retro-gradient" style={{ color: "white" }}>
          My Retro Portfolio
        </h1>

        <div className="flex items-center space-x-4">
          {character && thumbnails[character] && (
            <div
              className="relative w-12 h-12"
              style={{ imageRendering: "pixelated" }}
            >
              {/* Normal image */}
              <img
                src={thumbnails[character].normal}
                alt={`${character} normal`}
                className="absolute inset-0 w-full h-full"
              />
              {/* Blink overlay */}
              <img
                src={thumbnails[character].blink}
                alt={`${character} blink`}
                className="inset-0 w-full h-full pixel-blink"
              />
            </div>
          )}

          <button
            className="nes-btn is-error shine-effect-container"
            onClick={handleBack}
          >
            Change character
          </button>
        </div>
      </div>
    </header>
  );
}
