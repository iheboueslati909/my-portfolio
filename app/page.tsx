"use client";

import { useState, useEffect } from "react";
import { useCharacter } from "./context/CharacterContext";
import { useRouter } from "next/navigation";

import TopBar from "./components/Topbar";
import Sidebar from "./components/Sidebar";

// Sections
import SoftwareProjects from "./components/sections/SoftwareProjects";
import SoftwareResume from "./components/sections/SoftwareResume";
import SoftwareEngineerAboutMe from "./components/sections/SoftwareEngineerAboutMe";
import DJInstagramAboutMe from "./components/sections/DJInstagramAboutMe";
import DJSoundcloud from "./components/sections/DJSoundcloud";
import DJInstagram from "./components/sections/DJInstagram";
import DesignerAboutMe from "./components/sections/DesignerAboutMe";
import DesignerPortfolio from "./components/sections/DesignerPortfolio";
import DesignerBehance from "./components/sections/DesignerBehance";

export default function MainPage() {
  const { character, setCharacter } = useCharacter();
  const [section, setSection] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!character) router.push("/character-select");
    if (!section) setSection("about");
  }, [character, section, router]);

  if (!character) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
        <div className="nes-container is-rounded with-title">
          <h2 className="title">No character selected</h2>
          <p>Redirecting to character selection...</p>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    if (character === "software") {
      if (!section) return <SoftwareEngineerAboutMe />;
      if (section === "projects") return <SoftwareProjects />;
      if (section === "resume") return <SoftwareResume />;
    }
    if (character === "dj") {
      if (!section) return <DJInstagramAboutMe />;
      if (section === "soundcloud") return <DJSoundcloud />;
      if (section === "instagram") return <DJInstagram />;
    }
    if (character === "designer") {
      if (!section) return <DesignerAboutMe />;
      if (section === "portfolio") return <DesignerPortfolio />;
      if (section === "behance") return <DesignerBehance />;
    }
    return (
      <div className="nes-container with-title">
        <p className="title">Welcome!</p>
        <p>Select a section from the menu!</p>
      </div>
    );
  };

  const handleBackToSelection = () => {
    setCharacter(null);
    router.push("/character-select");
  };

  return (
    <div>
      <TopBar onBack={handleBackToSelection} />

      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <div>
          <Sidebar onSelect={setSection} activeSection={section} />
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: "1rem" }}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
