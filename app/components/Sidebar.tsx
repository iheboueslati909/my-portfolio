"use client";

import { useCharacter } from "../context/CharacterContext";

interface SidebarProps {
  onSelect: (section: string) => void;
  activeSection: string | null;
  setShowContact?: (show: boolean) => void;
  showContact?: boolean;
}

export default function Sidebar({ onSelect, activeSection, setShowContact, showContact }: SidebarProps) {
  const character = useCharacter().character;

  const menuItems =
    character === "software"
      ? [
        { id: "about", label: "About Me" },
        { id: "projects", label: "Projects" },
        { id: "stack", label: "stack" },
        { id: "contact", label: "Contact" },
        { id: "experience", label: "experience" },
      ]
      : character === "dj"
        ? [
          { id: "about", label: "About Me" },
          { id: "soundcloud", label: "Sets" },
          { id: "soundcloudTracks", label: "Tracks" },
          { id: "events", label: "Events" },
          { id: "contact", label: "Contact" },
        ]
        : character === "designer"
          ? [
            { id: "about", label: "About Me" },
            { id: "portfolio", label: "Portfolio" },
            { id: "services", label: "Services" },
            { id: "contact", label: "Contact" },
          ]
          : [];

  return (
    <div className="nes-container with-title p-4">
      <p className="title">Menu</p>
      <div className="flex flex-col space-y-3">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`nes-btn w-full ${activeSection === item.id ? "is-success" : "is-primary"
              }`}
            onClick={() => {
              if (item.id === "contact" && setShowContact) {
                setShowContact(!showContact);
              } else {
                setShowContact && setShowContact(false)
                onSelect(item.id)
              }
            }
            }
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
