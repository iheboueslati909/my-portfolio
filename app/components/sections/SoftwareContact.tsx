// components/ContactSection.tsx
"use client";
import { useRef } from "react";
import ContactForm from "../ContactForm";

export default function SoftwareContact() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    const formElement = dialogRef.current?.querySelector("form");
    formElement?.reset();
    dialogRef.current?.close();
  };

  return (
    <section className="nes-container with-title" style={{ padding: "1rem", marginTop: "2rem" }}>
      <h2 className="title" style={{ textAlign: "center" }}>Contact Me</h2>

      {/* NPC Dialogue Box */}
      <div
        className="nes-container is-rounded"
        style={{
          padding: "1rem",
          textAlign: "center",
          fontSize: "1rem",
          lineHeight: "1.5",
        }}
      >
        <p>🧙 A wild recruiter appears! Do you want to:</p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "1rem",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={openDialog}
            className="nes-btn is-primary"
            style={{ minWidth: "120px" }}
          >
            Hire Iheb
          </button>

          <a
            href="https://www.linkedin.com/in/iheboueslati"
            target="_blank"
            rel="noopener noreferrer"
            className="nes-btn is-success"
            style={{ minWidth: "120px" }}
          >
            Connect
          </a>
{/* 
          <a
            href="https://github.com/iheb-oueslati"
            target="_blank"
            rel="noopener noreferrer"
            className="nes-btn is-warning"
            style={{ minWidth: "120px" }}
          >
            Send Quest Scroll
          </a> */}
        </div>
      </div>

      {/* NES.css Dialog */}
      <dialog className="nes-dialog is-rounded" style={{marginBottom: "4rem"}} ref={dialogRef}>
        {/* Only one form inside the dialog */}
        <ContactForm />

        {/* Close button */}
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <button type="button" className="nes-btn" onClick={closeDialog}>
            Close
          </button>
        </div>
      </dialog>
    </section>
  );
}
