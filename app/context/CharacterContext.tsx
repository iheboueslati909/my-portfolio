// app/context/CharacterContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CharacterType } from '../types/Character';

interface CharacterContextType {
  character: CharacterType;
  setCharacter: (character: CharacterType) => void;
  showContact: boolean;
  setShowContact: (show: boolean) => void;
}

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

export function CharacterProvider({ children }: { children: ReactNode }) {
  const [character, setCharacter] = useState<CharacterType>(null);
  const [showContact, setShowContact] = useState(false);


  return (
    <CharacterContext.Provider value={{ character, setCharacter, showContact, setShowContact }}>
      {children}
    </CharacterContext.Provider>
  );
}

export function useCharacter() {
  const context = useContext(CharacterContext);
  if (context === undefined) {
    throw new Error('useCharacter must be used within a CharacterProvider');
  }
  return context;
}