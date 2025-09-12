"use client";

export default function DesignerAboutMe() {
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
        “one frame at a time”
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
          <h3 style={{ textAlign: "center" }}>🎨 Character Sheet</h3>
          <ul className="nes-list is-disc">
            <li><strong>Name:</strong> Pixel Crafter</li>
            <li><strong>Specialties:</strong> Motion Graphics, 3D Flyers, Visual Identities</li>
            <li>
              <strong>Tools of Choice:</strong> Blender, After Effects, Photoshop
            </li>
            <li>
              <strong>Focus:</strong> Visuals for Music & Techno Events  
            </li>
            <li>
              <strong>Style:</strong> Futuristic, Minimal, Industrial, Sci-fi
            </li>
          </ul>
        </div>

        {/* Right: Pixel-style avatar */}
        <div style={{ flex: "0 0 200px", textAlign: "center" }}>
          <img
            src="/characters/designer.png"
            alt="Pixel Crafter pixel art"
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
