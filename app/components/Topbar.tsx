// app/components/Topbar.tsx
"use client";

interface TopBarProps {
  onBack?: () => void;
}

export default function TopBar({ onBack }: TopBarProps) {
  return (
<header className="nes-container is-dark flex justify-between items-center px-4 py-2 mb-12">
  <h1 className="nes-text is-primary">My Retro Portfolio</h1>
  <button className="nes-btn is-error" onClick={onBack}>
    Change Character
  </button>
</header>

  );
}