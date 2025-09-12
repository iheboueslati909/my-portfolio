"use client";

type MuseumCardProps = {
  title: string;
  src: string; // image preview
  rarity: "legendary" | "rare";
};

export default function MuseumCard({ title, src, rarity }: MuseumCardProps) {
  const rarityStyles = {
    legendary: "border-4 border-yellow-500 shadow-lg",
    rare: "border-4 border-gray-400 shadow-md",
  };

  return (
    <div
      className={`nes-container is-rounded flex flex-col items-center  ${rarityStyles[rarity]}`}
      style={{ maxWidth: "250px", position: "relative" }}
    >
      {/* Preview image */}
      <img
        src={src}
        alt={title}
        className="w-full mb-2"
        style={{ borderRadius: "0.5rem",paddingBottom: "0.5rem" }}
      />

      {/* Title */}
      <h3 className="text-sm font-bold text-center">{title}</h3>

      {/* Animated plaque */}
      <p className="text-xs text-center available-text">
        Available for Commission
      </p>

      <style jsx>{`
        .available-text {
          font-style: italic;
          animation: flicker 1.5s infinite alternate;
        }

        @keyframes flicker {
          0% {
            opacity: 1;
            color: #fff;
          }
          50% {
            opacity: 0.6;
            color: #ffcc00;
          }
          100% {
            opacity: 1;
            color: #ff006e;
          }
        }
      `}</style>
    </div>
  );
}
