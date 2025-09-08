// app/layout.tsx
import type { Metadata } from "next";
import "nes.css/css/nes.min.css";
import "./globals.css";
import { CharacterProvider } from "./context/CharacterContext";

export const metadata: Metadata = {
  title: "My Retro Portfolio",
  description: "Choose your character and explore my work!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CharacterProvider>{children}</CharacterProvider>
      </body>
    </html>
  );
}