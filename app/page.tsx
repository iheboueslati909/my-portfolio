"use client";

import { useState, useEffect } from "react";
import { useCharacter } from "./context/CharacterContext";
import { useRouter } from "next/navigation";

import TopBar from "./components/Topbar";
import Sidebar from "./components/Sidebar";

// Sections
import SoftwareExperience from "./components/sections/SoftwareExperience";
import SoftwareResume from "./components/sections/SoftwareResume";
import SoftwareEngineerAboutMe from "./components/sections/SoftwareEngineerAboutMe";
import DJSoundcloud from "./components/sections/DJSoundcloud";
import DesignerAboutMe from "./components/sections/DesignerAboutMe";
import DesignerPortfolio from "./components/sections/DesignerPortfolio";
import DesignerBehance from "./components/sections/DesignerBehance";
import SoftwareProjects from "./components/sections/SoftwareProjects";
import SoftwareStack from "./components/sections/SoftwareStack";
import DJSoundcloudTracks from "./components/sections/DJSoundcloudTracks";
import DJAboutMe from "./components/sections/DJAboutMe";
import DJEvents from "./components/sections/DJEvents";
import NPCDialogueBar from "./components/NPCDialogueBar";

export default function MainPage() {
  const { character, setCharacter, showContact, setShowContact } = useCharacter();
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
      if (!section || section === "about") return <SoftwareEngineerAboutMe />;
      if (section === "experience") return <SoftwareExperience />;
      if (section === "resume") return <SoftwareResume />;
      if (section === "stack") return <SoftwareStack />;
      if (section === "projects") return <SoftwareProjects />;
    }
    if (character === "dj") {
      if (!section || section === "about") return <DJAboutMe />;
      if (section === "soundcloud") return <DJSoundcloud />;
      if (section === "soundcloudTracks") return <DJSoundcloudTracks />;
      if (section === "events") return <DJEvents />;
    }
    if (character === "designer") {
      if (!section || section === "about") return <DesignerAboutMe />;
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
    <div style={{ padding: "0.5rem" }}>
      <TopBar onBack={handleBackToSelection} />

      <div style={{ display: "flex", padding: "1rem" }}>
        {/* Sidebar */}
        <div>
          <Sidebar onSelect={setSection} activeSection={section} setShowContact={setShowContact} showContact={showContact} />
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, paddingLeft: "1rem" }}>
          {renderContent()}
        </div>
      </div>

      {/* NPC Dialogue Overlay */}
      {showContact && (
        <div
          style={{
            position: "fixed",
            bottom: "0",
            right: "0",
            width: "25%",
            zIndex: 1000,
            padding: "0.25rem",
          }}
        >
          <div style={{ position: "relative" /* reserve space for button */ }}>
            {/* Close button */}
            <button
              onClick={() => setShowContact(false)}
              style={{
                position: "absolute",
                top: "-0.75rem",
                right: "0rem",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                cursor: "pointer",
                fontWeight: "bold",
                lineHeight: "18px",
                textAlign: "center",
                padding: 0,
                zIndex: 2000,
              }}
            >
              ×
            </button>

            <NPCDialogueBar character={character} />
          </div>
        </div>
      )}

    </div>
  );
}
