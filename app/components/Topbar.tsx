"use client";

interface TopBarProps {
  onBack?: () => void;
}

export default function TopBar({ onBack }: TopBarProps) {
  return (
    <header className="relative flex justify-between items-center overflow-hidden"
      style={{
        height: '80px',
        border: '4px solid #212529',
        boxShadow: '0 4px 0 0 #212529',
      }}
    >
      {/* Background animated webp */}
      <img
        src="/topbar-bg-gif.gif"
        alt="Topbar Background"
        className="absolute w-full h-full object-cover"
      />

      {/* Dark overlay to maintain NES.css dark theme */}
      {/* <div className="absolute inset-0 bg-black opacity-50 z-0"></div> */}

      {/* Topbar content - centered vertically */}
      <div className="relative flex justify-between w-full items-center " style={{ padding: '0 1rem'}}>
        <h1 className="nes-text is-primary text-xl ">My Retro Portfolio</h1>
        <button className="nes-btn is-error py-2" onClick={onBack}>
          Change Character
        </button>
      </div>
    </header>
  );
}