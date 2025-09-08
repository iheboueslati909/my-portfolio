"use client";

import Image from "next/image";
import { useCharacter } from "../context/CharacterContext";
import { useRouter } from "next/navigation";

export default function CharacterSelect() {
  const { setCharacter } = useCharacter();
  const router = useRouter();

  const selectCharacter = (character: string) => {
    setCharacter(character);
    router.push("/");
  };

  const characters = [
    { id: "software", label: "Software Engineer", image: "/avatars/engineer-avatar.png", unlocked: true },
    { id: "dj", label: "DJ / Producer", image: "/avatars/engineer-avatar.png", unlocked: true },
    { id: "designer", label: "Designer", image: "/avatars/engineer-avatar.png", unlocked: true },
    { id: "locked", label: "Locked Character", image: "/avatars/locked-character.png", unlocked: false },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="nes-container with-title is-rounded">
        <h1 className="title text-lg">Select Your Character</h1>

        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem" }}
        >
          {characters.map((character) => (
            <div
              key={character.id}
              className={`nes-container is-rounded flex flex-col items-center justify-between p-2 w-32 h-48 ${
                !character.unlocked ? "opacity-50" : ""
              }`}
            >
              <Image
                src={character.image}
                alt={character.label}
                width={60}
                height={60}
                className="object-contain mb-2"
              />
              <h2 className="text-xs text-center mb-2">{character.label}</h2>

              {character.unlocked ? (
                <button
                  className="nes-btn is-primary mt-auto text-xs px-2 py-1"
                  onClick={() => selectCharacter(character.id)}
                >
                  Select
                </button>
              ) : (
                <button className="nes-btn is-disabled mt-auto text-xs px-2 py-1" disabled>
                  Locked
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
