"use client";
import { useState } from "react";

function MiniContactForm({ onBack }: { onBack: () => void }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const res = await fetch("https://formspree.io/f/xeolvyzn", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("success");
      e.currentTarget?.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0.4rem",
        }}
      >
        {/* Left column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", marginRight: "0.5rem" }}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="nes-input"
            required
            style={{ fontSize: "0.75rem", padding: "0.25rem" }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="nes-input"
            required
            style={{ fontSize: "0.75rem", padding: "0.25rem" }}
          />
        </div>

        {/* Right column */}
        <div style={{ display: "flex" }}>
          <textarea
            name="message"
            placeholder="Message"
            className="nes-textarea"
            required
            style={{ height: "80px", fontSize: "0.75rem", width: "100%" }}
          />
        </div>
      </div>

      {/* Buttons Row */}
      <div style={{ justifyContent: "space-between", marginTop: "0.2rem", display: "flex" }}>
        <button
          type="submit"
          className="nes-btn is-primary"
          style={{ fontSize: "0.75rem", padding: "0.25rem 0.5rem" }}
        >
          Send
        </button>
        <button
          type="button"
          className="nes-btn"
          style={{ fontSize: "0.75rem", padding: "0.25rem 0.5rem" }}
          onClick={onBack}
        >
          ⬅ Back
        </button>
      </div>

      {/* Status messages */}
      {status === "sending" && <p style={{ fontSize: "0.7rem", textAlign: "center" }}>Sending...</p>}
      {status === "success" && <p style={{ fontSize: "0.7rem", color: "green", textAlign: "center" }}>✅ Sent!</p>}
      {status === "error" && <p style={{ fontSize: "0.7rem", color: "red", textAlign: "center" }}>❌ Error</p>}
    </form>
  );
}


type Character = "software" | "dj" | "designer" |string;

const buttonConfig: Record<Character, { label: string; url?: string; style: string }[]> = {
  software: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/iheboueslati", style: "is-success" },
    { label: "GitHub", url: "https://github.com/iheboueslati909", style: "is-warning" },
    { label: "Open Form", style: "is-primary" },
  ],
  dj: [
    { label: "Instagram", url: "https://instagram.com/iheboueslati_", style: "is-error" },
    { label: "SoundCloud", url: "https://soundcloud.com/pope_me", style: "is-warning" },
    { label: "Open Form", style: "is-primary" },
  ],
  designer: [
    { label: "Behance", url: "https://behance.net/iheboueslati909", style: "is-success" },
    { label: "Open Form", style: "is-primary" },
  ],
};

export default function NPCDialogueBar({ character }: { character: Character }) {
  const [mode, setMode] = useState<"menu" | "form">("menu");

  const buttons = buttonConfig[character];

  return (
    <>
      {mode && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: "25vh",
            background: "#fff",
            borderTop: "4px solid black",
            boxShadow: "0 -4px 8px rgba(0,0,0,0.2)",
            display: "flex",
            padding: "0.5rem",
            fontSize: "0.85rem",
            zIndex: 50,
          }}
        >
          {/* Portrait */}
          <div
            style={{
              width: "64px",
              height: "64px",
              marginRight: "0.5rem",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={`/npc-${character}.png`}
              alt={`${character} NPC`}
              style={{
                width: "64px",
                height: "64px",
                objectFit: "contain",
                imageRendering: "pixelated",
              }}
            />
          </div>

          {/* Dialogue Area */}
          <div style={{ flex: 1, overflow: "hidden" }}>
            {mode === "menu" && (
              <div
                className="nes-container is-dark with-title"
                style={{ padding: "0.5rem", textAlign: "center", height: "100%" }}
              >
                <p style={{ marginBottom: "0.5rem" }}>Greetings traveler, choose your path:</p>
                <div
                  style={{
                    display: "flex",
                    gap: "0.25rem",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  {buttons.map((btn, i) =>
                    btn.url ? (
                      <a
                        key={i}
                        href={btn.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`nes-btn ${btn.style}`}
                        style={{ fontSize: "0.8rem", padding: "0.25rem" }}
                      >
                        {btn.label}
                      </a>
                    ) : (
                      <button
                        key={i}
                        className={`nes-btn ${btn.style}`}
                        style={{ fontSize: "0.8rem", padding: "0.25rem" }}
                        onClick={() => setMode("form")}
                      >
                        {btn.label}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}

            {mode === "form" && <MiniContactForm onBack={() => setMode("menu")} />}
          </div>
        </div>
      )}
    </>
  );
}
