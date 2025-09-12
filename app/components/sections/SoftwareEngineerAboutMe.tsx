// components/SoftwareEngineerAboutMe.tsx
"use client";

export default function SoftwareEngineerAboutMe() {
  return (
    <section className="nes-container with-title" style={{ padding: "1rem" }}>
      <h2 className="title retro-title-red" style={{ textAlign: "center" }}>About Me</h2>

      {/* One-liner philosophy */}
      <p
        style={{
          textAlign: "center",
          fontStyle: "italic",
          marginBottom: "2rem",
        }}
      >
        “I build reliable systems that scale.”
      </p>

      {/* Character inspection container */}
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
        {/* Left: Level & Abilities */}
        <div style={{ flex: 1 }}>
          <h3 style={{ textAlign: "center" }}>🎮 Character Sheet</h3>
          <ul className="nes-list is-disc">
            <li><strong>Name:</strong> Iheb Oueslati</li>
            <li><strong>Class:</strong> Software Engineer</li>
            <li><strong>Level:</strong> 2+ years of professional experience</li>
          </ul>

          <h4 style={{ textAlign: "center", marginTop: "1rem" }}>⚔️ Abilities</h4>
          <ul className="nes-list is-disc">
            <li><strong>Front End:</strong> Building responsive and interactive UIs</li>
            <li><strong>Backend:</strong> Designing scalable APIs and services</li>
            <li><strong>DevOps:</strong> CI/CD pipelines, Docker, Azure deployments</li>
            <li><strong>System Design:</strong> Scalable architectures & microservices</li>
            <li><strong>Database Mastery:</strong> SQL & NoSQL, data modeling</li>
            <li><strong>Problem Solving:</strong> Debugging and algorithmic thinking</li>
            <li><strong>Creativity:</strong> Side projects</li>
          </ul>
        </div>

        {/* Right: Pixelated full-body image */}
        <div style={{ flex: "0 0 200px", textAlign: "center" }}>
          <img
            src="/characters/software.png"
            alt="Iheb Oueslati pixel art"
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
