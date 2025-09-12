"use client";

export default function DJAboutMe() {
  return (
    <section className="nes-container with-title" style={{ padding: "1rem" }}>
      <h2 className="title" style={{ textAlign: "center" }}>About Me</h2>

      {/* One-liner philosophy */}
      <p
        style={{
          textAlign: "center",
          fontStyle: "italic",
          marginBottom: "2rem",
        }}
      >
        “Shaping hypnotic journeys through sound”
      </p>

      <div
        className="nes-container is-rounded"
        style={{
          display: "flex",
          gap: "2rem",
          padding: "1rem",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        {/* Left: Character Sheet */}
        <div style={{ flex: 1 }}>
          <h3 style={{ textAlign: "center" }}>🎶 Character Sheet</h3>
          <ul className="nes-list is-disc">
            <li><strong>Name:</strong> Neon Tetra</li>
            <li><strong>Previous Alias:</strong> Pope</li>
            <li>
              <strong>Collectives:</strong>{" "}
              <a
                href="https://www.instagram.com/outcast__series/"
                target="_blank"
                rel="noopener noreferrer"
                className="nes-text is-primary"
              >
                Outcast 
              </a> (Member) (Resident)
                            <a
                href="https://www.instagram.com/ear__gasm/"
                target="_blank"
                rel="noopener noreferrer"
                className="nes-text is-primary"
              >
                 - Eargasm
              </a> (Member) (Resident)
            </li>
            <li><strong>Genres:</strong> Dub Techno, Melodic Techno, Hypnotic Techno, Ambient, Raw Techno</li>
          </ul>

        </div>

        {/* Right: Pixel-style avatar */}
        <div style={{ flex: "0 0 200px", textAlign: "center" }}>
          <img
            src="/characters/dj.png"
            alt="Neon Tetra pixel art"
            style={{
              width: "100%",
              imageRendering: "pixelated",
              borderRadius: "0.5rem",
            }}
          />
        </div>
      </div>
    </section>
  );
}
