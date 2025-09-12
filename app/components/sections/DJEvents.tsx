"use client";

import { events } from "../../data/event";
import Badge from "../ui-components/Badge";

export default function DJQuestLog() {
  return (
    <section className="nes-container with-title" style={{ padding: "1rem" }}>
      <h2 className="title text-center">Quest Log</h2>

      <div className="flex flex-col gap-4 mt-4">
        {events.map((q) => (
          <div key={q.id} className="nes-container is-rounded p-3">
            {/* Title + Date */}
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-bold">{q.title}</h3>
              <span className="text-xs">{q.date}</span>
            </div>

            {/* Club + Location */}
            <p className="text-xs mb-1">
              <strong>Club:</strong> {q.club} — {q.location}
            </p>

            {/* Played As */}
            <p className="text-xs mb-2">
              <strong>Played as:</strong> {q.playedAs}
            </p>

            {/* Genres */}
            <div className="flex flex-wrap gap-2 mb-2" style={{  gap: "0.5rem" }}>
              {q.genres.map((g) => (
                <Badge key={g} text={g} variant="primary" />
              ))}
            </div>

            {/* Set Link (if any) */}
            {q.setLink && (
              <a
                href={q.setLink}
                target="_blank"
                rel="noopener noreferrer"
                className="nes-btn is-success text-xs"
              >
                🎧 Listen Set
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
