import { useState } from "react";

export function MiniContactForm({ onBack }: { onBack: () => void }) {
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
   <form onSubmit={handleSubmit} style={{ height: "100%", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "0.25rem",
      flex: 1,
      minHeight: 0, // allow children to shrink properly
    }}
  >
    {/* Left column */}
    <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
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
      <button
        type="submit"
        className="nes-btn is-primary"
        style={{ fontSize: "0.75rem", padding: "0.25rem", marginTop: "0.25rem" }}
      >
        Send
      </button>
      <button
        type="button"
        className="nes-btn"
        style={{ fontSize: "0.75rem", padding: "0.25rem" }}
        onClick={onBack}
      >
        ⬅ Back
      </button>
    </div>

    {/* Right column */}
    <div style={{ display: "flex", flexDirection: "column", minHeight: 0 }}>
      <textarea
        name="message"
        placeholder="Message"
        className="nes-textarea"
        required
        style={{
          fontSize: "0.75rem",
          flex: 1,            // fill available space
          resize: "none",     // optional: prevent manual resize
          minHeight: 0,       // important for flex to work
          overflowWrap: "break-word", // wrap text
          whiteSpace: "pre-wrap",    // preserve line breaks
        }}
      />
    </div>
  </div>

  {/* Status messages */}
  {status === "sending" && <p style={{ fontSize: "0.7rem", textAlign: "center" }}>Sending...</p>}
  {status === "success" && <p style={{ fontSize: "0.7rem", color: "green", textAlign: "center" }}>✅ Sent!</p>}
  {status === "error" && <p style={{ fontSize: "0.7rem", color: "red", textAlign: "center" }}>❌ Error</p>}
</form>

  );
}

