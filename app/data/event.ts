// app/data/quests.ts
import { Location } from "@/app/enum/location";
import { Club } from "../enum/club";

export type Quest = {
  id: string;
  title: string;
  date: string;
  club: Club;
  location: string;
  playedAs: string;
  genres: string[];
  setLink?: string;
};

export const events: Quest[] = [
  {
    id: "1",
    title: "Outcast - first edition",
    date: "13.07.2024",
    club: Club.Secret,
    location: Location.Bizert,
    playedAs: "Neon Tetra",
    genres: ["Dub Techno", "Hypnotic Techno"],
  },
  {
    id: "2",
    title: "Outcast 2",
    date: "30.08.2024",
    club: Club.BSMNT,
    location: Location.Gammarth,
    playedAs: "Neon Tetra",
    genres: ["Raw Techno", "Hypnotic Techno"],
  },
  {
    id: "3",
    title: "Outcast 3",
    date: "27.09.2024",
    club: Club.BSMNT,
    location: Location.Gammarth,
    playedAs: "Neon Tetra",
    genres: ["Dub Techno", "Industrial Techno"],
  },
  {
    id: "4",
    title: "Outcast x Rave Roulette",
    date: "01.11.2024",
    club: Club.Cercle,
    location: Location.Gammarth,
    playedAs: "Neon Tetra",
    genres: ["Hypnotic Techno", "Raw Techno"],
  },
  {
    id: "5",
    title: "Outcast 4",
    date: "21.02.2025",
    club: Club.BSMNT,
    location: Location.Gammarth,
    playedAs: "Neon Tetra",
    genres: ["Dub Techno", "Hypnotic Techno"],
  },
  {
    id: "6",
    title: "Outcast 5",
    date: "09.05.2025",
    club: Club.B52,
    location: Location.Tunis,
    playedAs: "Neon Tetra",
    genres: ["Hard Techno", "Raw Techno"],
  },
  {
    id: "7",
    title: "Outcast 6 Face2Face",
    date: "14.06.2025",
    club: Club.BSMNT,
    location: Location.Gammarth,
    playedAs: "Neon Tetra",
    genres: ["Hypnotic Techno", "Dub Techno"],
  },
  {
    id: "8",
    title: "Outcast x 90Dance",
    date: "21.06.2025",
    club: Club.BSMNT,
    location: Location.Gammarth,
    playedAs: "Neon Tetra",
    genres: ["90s Techno", "Hard Groove"],
  },
  {
    id: "9",
    title: "Outcast 1st Anniversary",
    date: "26.07.2025",
    club: Club.Secret,
    location: Location.Bizert,
    playedAs: "Neon Tetra",
    genres: ["Dub Techno", "Hypnotic Techno", "Raw Techno"],
  },
  {
    id: "10",
    title: "Outcast x Fremd Face2Face",
    date: "16.08.2025",
    club: Club.BSMNT,
    location: Location.Gammarth,
    playedAs: "Neon Tetra",
    genres: ["Industrial Techno", "Raw Techno"],
  },
  {
    id: "11",
    title: "Outcast 7",
    date: "23.08.2025",
    club: Club.B52,
    location: Location.Tunis,
    playedAs: "Neon Tetra",
    genres: ["Hard Techno", "Hypnotic Techno"],
  },
];
