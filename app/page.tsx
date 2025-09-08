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

export default function MainPage() {
  const { character, setCharacter } = useCharacter();
  const [section, setSection] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!character) {
      router.push("/character-select");
    }
  }, [character, router]);

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
      if (section === "soundcloud") return <DJSoundcloud />;
      if (section === "instagram") return <DJInstagram />;
    }
    if (character === "designer") {
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
    <div className="flex flex-col h-screen space-y-4">
      {/* Top Bar */}
      <TopBar onBack={handleBackToSelection} />
      
      {/* Sidebar + Content */}
      <div className="flex flex-1 overflow-hidden pt-6">
        {/* Sidebar with fixed width and padding */}
        <div className="w-64 bg-white border-r-4 border-gray-300 p-4">
<Sidebar onSelect={setSection} activeSection={section} />
        </div>
        
        {/* Main Content with proper spacing */}
        <div className="nes-container flex-1 p-6 pl-8 overflow-y-auto">
            {renderContent()}
        </div>
      </div>
    </div>
  );
}