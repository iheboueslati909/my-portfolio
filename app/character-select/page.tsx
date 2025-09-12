"use client";

import Image from "next/image";
import { useCharacter } from "../context/CharacterContext";
import { useEffect, useState } from "react";
import { CharacterType } from "../types/Character";
import { useFadeNav } from "../provider/TransitionProvider";
import Fade from "../components/ui-components/Fade";

export default function CharacterSelect() {
  const { setCharacter, setShowContact,character } = useCharacter();
  const { navigateWithFade } = useFadeNav();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setShowContact(false);
  }, [setShowContact]);

  const selectCharacter = (character: CharacterType) => {
    setCharacter(character);
    navigateWithFade("/"); // fade out, then go to main page
  };

  const characters = [
    {
      id: "software",
      label: "Software Engineer",
      image: "/characters/software-head.png",
      unlocked: true,
    },
    {
      id: "dj",
      label: "DJ / Producer",
      image: "/characters/dj-head.png",
      unlocked: true,
    },
    {
      id: "designer",
      label: "Graphic Designer",
      image: "/characters/designer-head.png",
      unlocked: true,
    },
    {
      id: "locked",
      label: "Locked Character",
      image: "/avatars/ascii.png",
      unlocked: false,
    },
  ];

  return (
    <Fade show={!character}>
  <div
    className="grid"
    style={{
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: "1rem",
    }}
  ></div>
    <div className="flex justify-center items-center min-h-screen">
      <div className="nes-container with-title is-rounded">
        <h1
          className="title text-lg retro-gradient"
          style={{ marginTop: "0.25rem" }}
        >
          Select Your Character
        </h1>

        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1rem",
          }}
        >
          {characters.map((character) => (
            <div
              key={character.id}
              className={`character-card nes-container is-rounded flex flex-col items-center justify-between p-2 w-32 h-48 relative overflow-hidden
                         ${
                           !character.unlocked
                             ? "opacity-50 pointer-events-none"
                             : "cursor-pointer"
                         }`}
            >
              {character.unlocked && (
                <div className="character-card-hover-effect"></div>
              )}

              <Image
                src={character.image}
                alt={character.label}
                width={60}
                height={60}
                className="object-contain mb-2 z-10"
              />

              <h2 className="text-xs text-center mb-2 z-10">
                {character.label}
              </h2>

              {character.unlocked ? (
                <button
                  className="nes-btn is-primary mt-auto text-xs px-2 py-1 z-10"
                  onClick={() =>
                    selectCharacter(character.id as CharacterType)
                  }
                >
                  Select
                </button>
              ) : (
                <button
                  className="nes-btn is-disabled mt-auto text-xs px-2 py-1"
                  disabled
                >
                  Locked
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </Fade>

  );
}
