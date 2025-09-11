"use client";
import { useState, useEffect } from "react";
import { MiniContactForm } from "./MiniContactForm";

interface NPCDialogueBarProps {
  character: "software" | "dj" | "designer";
}

export default function NPCDialogueBar({ character }: NPCDialogueBarProps) {
  const [mode, setMode] = useState<"menu" | "form">("menu");

  // Define buttons per character
  const characterButtons = {
    software: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/iheboueslati", type: "link", style: "is-success" },
      { label: "GitHub", url: "https://github.com/ihebouesalti909", type: "link", style: "is-warning" },
      { label: "Contact Form", type: "button", action: () => setMode("form"), style: "is-primary" },
    ],
    dj: [
      { label: "Instagram", url: "https://instagram.com/iheboeuslati_", type: "link", style: "is-error" },
      { label: "SoundCloud", url: "https://soundcloud.com/me_pope", type: "link", style: "is-warning" },
      { label: "Contact Form", type: "button", action: () => setMode("form"), style: "is-primary" },
    ],
    designer: [
      { label: "Behance", url: "https://www.behance.net/your-profile", type: "link", style: "is-success" },
      { label: "Contact Form", type: "button", action: () => setMode("form"), style: "is-primary" },
    ],
  };

  // Typewriter text animation class
  const [displayText, setDisplayText] = useState("");
  const fullText = "Greetings traveler, choose your path:";

  useEffect(() => {
    let i = 0;
    setDisplayText("");
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [mode]);

  return (
    <div
      className="npc-dialogue"
      style={{
        background: "#222",
        color: "#fff",
        padding: "0.5rem",
        border: "2px solid #fff",
        borderRadius: "8px",
        animation: "fadeIn 0.4s ease-out",
        position: "relative",
        height: "100%", // fixed height for dialogue bar
      }}
    >
      {/* Dialogue Text */}
      {mode === "menu" && (
        <>
          <p
            style={{
              overflow: "hidden",
              borderRight: "2px solid #fff",
              width: "100%",
              fontSize: "0.85rem",
              lineHeight: "1.2rem",
              whiteSpace: "initial"
            }}
          >
            {displayText}
          </p>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: "0.25rem",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "0.5rem",
            }}
          >
            {characterButtons[character].map((btn) =>
              btn.type === "link" ? (
                <a
                  key={btn.label}
                  href={btn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`nes-btn ${btn.style} nes-btn-rpg`}
                  style={{ fontSize: "0.8rem", padding: "0.25rem" }}
                >
                  {btn.label}
                </a>
              ) : (
                <button
                  key={btn.label}
                  className={`nes-btn ${btn.style} nes-btn-rpg`}
                  style={{ fontSize: "0.8rem", padding: "0.25rem" }}
                  onClick={btn.action}
                >
                  {btn.label}
                </button>
              )
            )}
          </div>
        </>
      )}

      {/* Contact Form */}
      {mode === "form" && <MiniContactForm onBack={() => setMode("menu")} />}
    </div>
  );
}
