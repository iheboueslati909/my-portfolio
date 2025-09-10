"use client";

type Quest = {
  id: string;
  title: string;
  date: string;
  club: string;
  location: string;
  playedAs: string;
  genres: string[];
  setLink?: string;
};

const quests: Quest[] = [
  {
    id: "1",
    title: "Outcast @ BSMNT",
    date: "16-08-2025 | 18h → 04h",
    club: "BSMNT Club",
    location: "Gammarth",
    playedAs: "Neon Tetra",
    genres: ["Dub Techno", "Hypnotic Techno", "Raw Techno"],
    setLink: "https://soundcloud.com/inhale-records/neon-tetra-1",
  },
  {
    id: "2",
    title: "RadioCarro Podcast",
    date: "05-06-2025",
    club: "RadioCarro",
    location: "Tunis",
    playedAs: "Neon Tetra",
    genres: ["Melodic Techno", "Ambient"],
    setLink: "https://soundcloud.com/radiocarro_eargasm/radio",
  },
  {
    id: "3",
    title: "Trust Gym Session",
    date: "12-03-2025",
    club: "Trust Gym",
    location: "La Marsa",
    playedAs: "Pope",
    genres: ["Dub Techno", "Experimental"],
  },
];

export default function DJQuestLog() {
  return (
    <section className="nes-container with-title" style={{ padding: "1rem" }}>
      <h2 className="title text-center">Quest Log</h2>

      <div className="flex flex-col gap-4 mt-4">
        {quests.map((q) => (
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
            <div className="flex flex-wrap gap-2 mb-2">
              {q.genres.map((g) => (
                <span key={g} className="nes-badge">
                  <span className="is-primary">{g}</span>
                </span>
              ))}
            </div>

            {/* Set Link */}
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
