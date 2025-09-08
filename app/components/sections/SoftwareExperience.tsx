// components/ExperienceSection.tsx
"use client";

import { useState, useMemo } from "react";
import { EXPERIENCE, ExperienceItem } from "../data/experience";

function formatDuration(startDate: string, endDate?: string) {
  const start = new Date(startDate);
  const end = endDate && endDate !== "present" ? new Date(endDate) : new Date();

  if (isNaN(start.getTime())) return "";

  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  return `${years > 0 ? years + "y " : ""}${
    remainingMonths > 0 ? remainingMonths + "m" : ""
  }`.trim();
}

export default function ExperienceSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const allTechnologies = Array.from(
    new Set(EXPERIENCE.flatMap((e) => e.tech ?? []))
  );

  const toggleFilter = (tech: string) => {
    setSelectedFilters((prev) =>
      prev.includes(tech)
        ? prev.filter((t) => t !== tech)
        : [...prev, tech]
    );
  };

  const clearAll = () => {
    setSearchQuery("");
    setSelectedFilters([]);
  };

  const filteredExperience = useMemo(() => {
    return EXPERIENCE.filter((exp) => {
      const matchesSearch =
        exp.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exp.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        exp.bullets.some((b) =>
          b.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesTech =
        selectedFilters.length === 0 ||
        (exp.tech ?? []).some((t) => selectedFilters.includes(t));

      return matchesSearch && matchesTech;
    });
  }, [searchQuery, selectedFilters]);

  return (
    <section className="nes-container with-title" style={{ padding: "1rem" }}>
      <h2 className="title" style={{ textAlign: "center" }}>Experience</h2>

      {/* Filter controls */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        {/* Search bar */}
        <div style={{ flex: 1 }}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by company, role, or task..."
            className="nes-input"
            style={{ width: "100%" }}
          />
        </div>

        {/* Tech filters */}
       <div style={{ width: "60rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          <button className="nes-btn is-error" onClick={clearAll}>
            Clear All Filters
          </button>
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => toggleFilter(tech)}
              className={`nes-btn ${
                selectedFilters.includes(tech) ? "is-primary" : ""
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* Experience list */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {filteredExperience.map((exp: ExperienceItem) => {
          const tenure = formatDuration(exp.startDate, exp.endDate);

          return (
            <div
              key={exp.id}
              className="nes-container is-rounded"
              style={{ padding: "0.75rem" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <strong>{exp.role}</strong>{" "}
                  <span style={{ color: "#7f8c8d" }}>@ {exp.company}</span>

                  <div style={{ fontSize: "0.8rem", color: "#95a5a6" }}>
                    {exp.location}
                    {exp.isRemote && (
                      <span
                        style={{
                          marginLeft: "0.5rem",
                          fontSize: "0.7rem",
                          padding: "2px 6px",
                          borderRadius: "6px",
                          background: "#222",
                          color: "#0ff",
                        }}
                      >
                        Remote
                      </span>
                    )}
                    {exp.isFreelance && (
                      <span
                        style={{
                          marginLeft: "0.5rem",
                          fontSize: "0.7rem",
                          padding: "2px 6px",
                          borderRadius: "6px",
                          background: "#ffcc00",
                          color: "#000",
                          fontWeight: "bold",
                        }}
                      >
                        Freelance
                      </span>
                    )}
                  </div>

                  <div style={{ fontSize: "0.8rem", color: "#95a5a6" }}>
                    {exp.startDate} — {exp.endDate ?? "Present"}{" "}
                    {tenure && <span>({tenure})</span>}
                  </div>
                </div>
              </div>

              {/* Tech badges */}
              {exp.tech && exp.tech.length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem" }}>
                  {exp.tech.map((t) => (
                    <span key={t} className="nes-badge">
                      <span className="is-primary">{t}</span>
                    </span>
                  ))}
                </div>
              )}

              {/* Bullets with trophy icons */}
              <ul
                className="nes-list"
                style={{ marginTop: "0.75rem", listStyleType: "none", padding: 0 }}
              >
                {exp.bullets.map((b, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                    <i className="nes-icon trophy is-small" style={{ marginRight: "0.5rem" }}></i>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        {filteredExperience.length === 0 && (
          <p style={{ textAlign: "center", marginTop: "1rem" }}>
            No experience matches the current filters.
          </p>
        )}
      </div>
    </section>
  );
}
