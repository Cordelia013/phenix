"use client";

import React from "react";

// Exemple : import d'un provider de thème shadcn/ui
// import { ThemeProvider } from "next-themes";

// Exemple : import d'un provider audio personnalisé
// import { AudioProvider } from "@/hooks/useAudioPlayer";

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <>
      {/* Ajoute ici tous les contextes globaux */}
      {/* <ThemeProvider attribute="class" defaultTheme="dark"> */}
      {/* <AudioProvider> */}
      {children}
      {/* </AudioProvider> */}
      {/* </ThemeProvider> */}
    </>
  );
}
