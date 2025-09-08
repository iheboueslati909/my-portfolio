// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useCharacter } from "./context/CharacterContext";
import Sidebar from "./components/Sidebar";
import { useRouter } from "next/navigation";

// Import sections
import SoftwareProjects from "./components/sections/SoftwareProjects";
import SoftwareResume from "./components/sections/SoftwareResume";
import DJSoundcloud from "./components/sections/DJSoundcloud";
import DJInstagram from "./components/sections/DJInstagram";
import DesignerBehance from "./components/sections/DesignerBehance";
import DesignerPortfolio from "./components/sections/DesignerPortfolio";
import TopBar from "./components/Topbar";
import SoftwareEngineerAboutMe from "./components/sections/SoftwareEngineerAboutMe";
import DJInstagramAboutMe from "./components/sections/DJInstagramAboutMe";
import DesignerAboutMe from "./components/sections/DesignerAboutMe";

export default function MainPage() {
  const { character, setCharacter } = useCharacter();
  const [section, setSection] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!character) {
      router.push("/character-select");
    }
    if (!section) {
      setSection("about"); // Default to "About Me" or equivalent
    }
  }, [section, character, router]);

  if (!character) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="nes-container is-rounded with-title">
          <h2 className="title">No character selected</h2>
          <p>Redirecting to character selection...</p>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    if (character === "software") {
      if(!section) return <SoftwareEngineerAboutMe />;
      if (section === "projects") return <SoftwareProjects />;
      if (section === "resume") return <SoftwareResume />;
      if (section === "experience") return (
        <div className="nes-container with-title">
          <p className="title">Experience</p>
          <p>Experience content here</p>
        </div>
      );
    }
    if (character === "dj") {
      if (!section) return <DJInstagramAboutMe />;
      if (section === "soundcloud") return <DJSoundcloud />;
      if (section === "instagram") return <DJInstagram />;
    }
    if (character === "designer") {
      if (!section) return <DesignerAboutMe />;
      if (section === "behance") return <DesignerBehance />;
      if (section === "portfolio") return <DesignerPortfolio />;
    }
    return (
      <div className="nes-container with-title">
        <p className="title">Welcome!</p>
        <p className="nes-text is-disabled">Select a section from the menu!</p>
      </div>
    );
  };

  const handleBackToSelection = () => {
    setCharacter(null);
    router.push("/character-select");
  };

  return (
    <div className="flex flex-col">
      {/* Top Bar */}
      <TopBar onBack={handleBackToSelection} />

      {/* Sidebar + Content */}
      <div className="flex">
        {/* Sidebar with fixed width and padding */}
        <div className="bg-white border-r-6">
          <Sidebar onSelect={setSection} activeSection={section} />
        </div>

        {/* Main Content with proper spacing */}
        <div className="flex-1 ">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}