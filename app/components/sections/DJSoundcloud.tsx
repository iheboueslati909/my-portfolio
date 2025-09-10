import { useState, useEffect } from "react";
import AudioPlayer from "@/lib/AudioPlayer";
import { Genre } from "@/app/enum/genre";
import { PerformancePlace } from "@/app/enum/performancePlace";
import Badge from "../ui-components/Badge";

type DJSet = { title: string; cover: string; url: string; genres: string[], places: string[] };

const sets: DJSet[] = [
  {
    title: "Neon tetra — INHALE Podcast 002",
    cover: "/sets-covers/inhale.jpg",
    url: "https://soundcloud.com/inhale-records/neon-tetra-1",
    genres: [Genre.Hypnotic_Techno],
    places: [PerformancePlace.Bedroom]
  },
  {
    title: "NEON TETRA @RadioCarro podcast 001",
    cover: "/sets-covers/radio-carro.jpg",
    url: "https://soundcloud.com/radiocarro_eargasm/radio",
    genres: [Genre.Hypnotic_Techno, Genre.Melodic_Techno],
    places: [PerformancePlace.Bedroom]

  },
];

export default function DJSoundcloud() {
  const [progresses, setProgresses] = useState<number[]>(sets.map(() => 0));
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const togglePlay = async (index: number, trackUrl: string) => {
    const res = await fetch(`/api/soundcloud?url=${encodeURIComponent(trackUrl)}`);
    const data = await res.json();
    if (!data.streamUrl) return;

    setCurrentIndex(index);

    AudioPlayer.play(index.toString(), data.streamUrl, (p) => {
      setProgresses((prev) => {
        const next = [...prev];
        next[index] = p;
        return next;
      });
    });
  };

  const handleSeek = (index: number, value: number) => {
    if (currentIndex === index) {
      AudioPlayer.seek(value);
      setProgresses((prev) => {
        const next = [...prev];
        next[index] = value;
        return next;
      });
    }
  };

  // Pause audio on unmount
  useEffect(() => {
    return () => AudioPlayer.pause();
  }, []);

  return(
      <div className="flex flex-col gap-4 ">
        {sets.map((set, i) => (
          <div key={i} className="nes-container is-rounded flex items-center gap-4">
            <div className="flex-shrink-0">
              <img
                src={set.cover}
                className="object-cover border-4 border-black rounded"
                style={{ width: '100px', height: '100px', marginRight: '1rem' }}
                alt={`Cover for ${set.title}`}
              />
            </div>
  
            <div className="flex flex-col flex-1 ">
              <h3>{set.title}</h3>
              <div className="flex flex-wrap gap-2" style={{ padding: "0.25rem" }}>
                {set.genres.map((b) => (
                  <Badge key={b} text={b} variant="primary" />
                ))}
                                {set.places.map((b) => (
                  <Badge key={b} text={b} variant="dark" />
                ))}
              </div>
  
              <div className="flex gap-4 mt-2 "  style={{ marginRight: '1rem', marginTop: '0.5rem' }}>
                <button className="nes-btn is-success" style={{ width: '100px' }} onClick={() => togglePlay(i, set.url)}>
                  {currentIndex === i && AudioPlayer.getAudio() && !AudioPlayer.getAudio()!.paused
                    ? "⏸ Pause"
                    : "▶ Play"}
                </button>
  
                <div className="flex flex-col flex-1 justify-center" style={{ marginLeft: '0.25rem' }}>
                  <div className="flex flex-col" >
                    <progress
                      className="nes-progress is-primary w-full"
                      value={progresses[i]}
                      max={100}
                    />
                  </div>
  
  
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="0.1"
                    value={progresses[i]}
                    onChange={(e) => handleSeek(i, parseFloat(e.target.value))}
                    className="w-full mt-2 appearance-none h-4 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
}
