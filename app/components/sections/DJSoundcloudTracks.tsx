import { useState, useEffect } from "react";
import AudioPlayer from "@/lib/AudioPlayer";

type DJSet = { title: string; cover: string; url: string; badges: string[] };

const sets: DJSet[] = [
  {
    title: "Neon Tetra — Fata Morgana",
    cover: "/tracks-covers/fata-morgana.jpg",
    url: "https://soundcloud.com/radiocarro_eargasm/neon-tetra-fata-morgana",
    badges: ["Bedroom", "Techno", "Podcast"],
  },
  {
    title: "NEON TETRA @RadioCarro Podcast 001",
    cover: "/tracks-covers/revery.jpg",
    url: "https://soundcloud.com/pope_me/neon-tetra-revery",
    badges: ["Club", "House", "RadioCarro"],
  },
];

export default function DJSoundcloudTracks() {
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

  return (
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
            <div className="flex gap-2">
              {set.badges.map((b) => (
                <span key={b} className="nes-badge"><span className="is-primary">{b}</span></span>
              ))}
            </div>

            <div className="flex gap-4 mt-2 " >
              <button className="nes-btn is-success" onClick={() => togglePlay(i, set.url)}>
                {currentIndex === i && AudioPlayer.getAudio() && !AudioPlayer.getAudio()!.paused
                  ? "⏸ Pause"
                  : "▶ Play"}
              </button>

  <div className="flex flex-col flex-1 justify-center">

                <div className="flex flex-col w-full">
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
