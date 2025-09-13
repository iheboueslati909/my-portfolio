"use client";
import MuseumCard from "../ui-components/MeseumCard";

export default function DesignerServices() {
  const exhibits = [
    {
      id: "motion",
      title: "Motion Graphic Reel",
      src: "/services/video-service.png",
      rarity: "legendary" as const,
    },
    {
      id: "flyer",
      title: "3D / 2D Poster Design",
      src: "/services/image-service.png",
      rarity: "rare" as const,
    },
  ];

  return (
   <section className="nes-container with-title" style={{ padding: "1rem" }} >
  <h2 className="title text-center retro-title-green"> Pixel Portfolio Museum</h2>

 <div className="flex flex-wrap justify-center" style={{ gap: '1rem' }}>
  {exhibits.map((ex) => (
    <MuseumCard key={ex.id} {...ex} />
  ))}
</div>

</section>

  );
}
