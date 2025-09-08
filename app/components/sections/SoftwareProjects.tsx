"use client";

import { useState } from "react";

type Project = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    id: "1",
    name: "Portfolio Website",
    description: "A personal portfolio built with Next.js and Tailwind CSS.",
    technologies: ["Next.js", "Tailwind", "TypeScript", "123", "qsdqsd", "454"],
  },
  {
    id: "2",
    name: "Task Manager App",
    description: "Full-stack task manager using Node.js, Express, MongoDB.",
    technologies: ["Node.js", "Express", "MongoDB", "TypeScript"],
  },
  {
    id: "3",
    name: "Music Streaming App",
    description: "React-based streaming platform with Spotify API integration.",
    technologies: ["React", "TypeScript", "Spotify API", "Tailwind"],
  },
];

export default function SoftwareProjects() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const allTechnologies = Array.from(
    new Set(projects.flatMap((p) => p.technologies))
  );

  const toggleFilter = (tech: string) => {
    setSelectedFilters((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const filteredProjects = projects.filter(
    (p) =>
      (selectedFilters.length === 0 ||
        p.technologies.some((tech) => selectedFilters.includes(tech))) &&
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="nes-container with-title" style={{ padding: "1rem" }}>
      <h2 className="title" style={{ textAlign: "center" }}>
        Projects
      </h2>

      {/* Controls */}
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem", alignItems: "flex-start" }}>
        {/* Search */}
        <div style={{ flex: 1 }}>
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="nes-input"
            style={{ width: "100%" }}
          />
        </div>

        {/* Clear + Technologies */}
        <div style={{ width: "60rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          <button
            className="nes-btn is-error"
            onClick={() => {
              setSelectedFilters([]);
              setSearchQuery("");
            }}
          >
            Clear All Filters
          </button>

          {allTechnologies.map((tech) => (
            <button
              key={tech}
              className={`nes-btn ${selectedFilters.includes(tech) ? "is-primary" : ""}`}
              onClick={() => toggleFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* Projects List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {filteredProjects.length === 0 && <p>No projects match the current filters.</p>}

        {filteredProjects.map((project) => (
          <div key={project.id} className="nes-container is-rounded" style={{ padding: "0.5rem" }}>
            <h3 style={{ margin: 0 }}>{project.name}</h3>
            <p style={{ margin: "0.25rem 0" }}>{project.description}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem" }}>
              {project.technologies.map((tech) => (
                <span key={tech} className="nes-badge">
                  <span className="is-primary">{tech}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
