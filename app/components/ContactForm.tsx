// components/ContactForm.tsx
"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const res = await fetch("https://formspree.io/f/xeolvyzn", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setStatus("success");
      //reset form fields
      e.currentTarget?.reset();
    } else {
      setStatus("error");
    }
  };

  const resetForm = () => {
    setStatus("idle");
  }

  return (
    <div style={{ padding: "1rem", maxWidth: "400px", margin: "0 auto" }}>
      <h3 style={{ textAlign: "center", marginBottom:"1rem" }}>📜 Send a Quest Scroll</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" name="name" className="nes-input" required />

        <label htmlFor="email" style={{ marginTop: "0.5rem" }}>Your Email</label>
        <input type="email" id="email" name="email" className="nes-input" required />

        <label htmlFor="message" style={{ marginTop: "0.5rem" }}>Message</label>
        <textarea id="message" name="message" className="nes-textarea" required />

        <button type="submit" className="nes-btn is-primary" style={{ marginTop: "1rem", width: "100%" }}>
          Send Quest Scroll
        </button>
      </form>

      {status === "sending" && <p style={{ textAlign: "center", marginTop:"1rem" }}>Sending...</p>}
      {status === "success" && <p style={{ textAlign: "center", color: "green" , marginTop:"1rem"}}>Message sent successfully! ✅</p>}
      {status === "error" && <p style={{ textAlign: "center", color: "red" , marginTop:"1rem"}}>Error sending message. ❌</p>}
    </div>
  );
}
