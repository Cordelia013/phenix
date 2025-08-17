'use client'

import { useState } from 'react'

export default function Playlist() {
  const [currentTrack, setCurrentTrack] = useState<number | null>(null)
  
  const tracks = [
    { title: "OPENING THEME", artist: "HUNTR/X" },
    { title: "DEMON SLAYER", artist: "HUNTR/X" },
    { title: "NEON NIGHTS", artist: "HUNTR/X" },
    { title: "SEOUL CITY LIGHTS", artist: "HUNTR/X" },
    { title: "BATTLE ROYALE", artist: "HUNTR/X" },
    { title: "SHADOW DANCE", artist: "HUNTR/X" },
    { title: "ELECTRIC DREAMS", artist: "HUNTR/X" },
    { title: "FINAL SHOWDOWN", artist: "HUNTR/X" },
    { title: "VICTORY LAP", artist: "HUNTR/X" },
    { title: "ENCORE", artist: "HUNTR/X" },
    { title: "CREDITS ROLL", artist: "HUNTR/X" },
    { title: "BONUS TRACK", artist: "HUNTR/X" }
  ]

  return (
    <div className="min-h-dvh bg-[#0d0d0d] text-[#f2f2f2] flex flex-col pb-10 ">
      {/* Header */}
      <header className="flex justify-center px-4 pt-10">
        <h1 className="font-nevan font-normal text-center bg-gradient-to-b from-[#38548E] to-[#537DC3] bg-clip-text text-transparent"
            style={{ fontSize: '150px', lineHeight: '80%', letterSpacing: '0%' }}>
          HUNTR/X
        </h1>
      </header>

      {/* Contenu avec vinyles */}
      <div className="flex-1 grid grid-cols-[350px_1fr_350px] relative overflow-hidden" style={{ marginTop: '2%' }}>
        {/* Vinyle gauche - Colonne 1 */}
        <aside className="flex items-center justify-start h-full relative">
          <div className={`w-[570px] h-[570px] rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-2xl relative -ml-[285px] transition-all duration-500 ${currentTrack !== null ? 'animate-spin-slow' : ''}`}>
            {/* Reflet de lumière */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-60"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-conic from-transparent via-white/20 to-transparent opacity-30 blur-sm"></div>
            
            <div className="absolute inset-12 rounded-full bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 shadow-2xl shadow-orange-500/70"></div>
            <div className="absolute inset-24 rounded-full bg-gray-900">
              {/* Sillons du vinyle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
            </div>
            <div className="absolute inset-[50%] -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gray-700 border border-gray-600"></div>
            
            {/* Éclat lumineux qui tourne */}
            {currentTrack !== null && (
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent top-1/2 animate-pulse"></div>
              </div>
            )}
          </div>
        </aside>

        {/* Contenu principal - Colonne centrale */}
        <main className="flex items-center px-8">
          <section className="w-full max-w-4xl mx-auto">
            {/* Séparateur de pastilles */}
            <div className="flex justify-center mb-12">
              <div className="flex gap-3" aria-hidden="true">
                {[...Array(26)].map((_, i) => (
                  <span key={i} className="w-2.5 h-2.5 rounded-full bg-[#f2f2f2]/90"></span>
                ))}
              </div>
            </div>

            {/* Grille album + tracklist */}
            <div className="grid grid-cols-[320px_1fr] gap-8">
              {/* Card Album */}
              <article>
                <div className="relative group">
                  <img 
                    src="/photo3.jpg" 
                    alt="K-POP DEMON HUNTERS – Bande originale Netflix"
                    className="w-full rounded-[20px] shadow-xl"
                  />
                </div>
              </article>

              {/* Tracklist */}
              <div className="h-[320px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#d6d6d6]/30 scrollbar-track-transparent">
                <ul className="space-y-0 pr-2">
                  {tracks.map((track, index) => (
                    <li 
                      key={index} 
                      className="flex items-center gap-4 py-3 border-b border-[#d6d6d6]/20"
                    >
                      <button 
                        className={`w-6 h-6 rounded-full grid place-items-center flex-shrink-0 transition-colors ${
                          currentTrack === index 
                            ? 'bg-green-500 text-white' 
                            : 'bg-[#d6d6d6] text-[#0d0d0d] hover:bg-[#f2f2f2]'
                        }`}
                        onClick={() => setCurrentTrack(currentTrack === index ? null : index)}
                        aria-label={`${currentTrack === index ? 'Pause' : 'Lire'} ${track.title} de ${track.artist}`}
                      >
                        {currentTrack === index ? (
                          <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                          </svg>
                        ) : (
                          <svg className="w-3 h-3 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        )}
                      </button>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[#f2f2f2] font-bold uppercase text-sm">{track.title}</span>
                        <span className="text-[#d6d6d6] text-xs uppercase tracking-wider">{track.artist}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </main>

        {/* Vinyle droit - Colonne 3 */}
        <aside className="flex items-center justify-end h-full relative">
          <div className={`w-[570px] h-[570px] rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-2xl relative -mr-[285px] transition-all duration-500 ${currentTrack !== null ? 'animate-spin-slow' : ''}`} style={{ animationDirection: 'reverse' }}>
            {/* Reflet de lumière */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-60"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-conic from-transparent via-white/20 to-transparent opacity-30 blur-sm"></div>
            
            <div className="absolute inset-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg shadow-blue-500/50"></div>
            <div className="absolute inset-24 rounded-full bg-gray-900">
              {/* Sillons du vinyle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
            </div>
            <div className="absolute inset-[50%] -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gray-700 border border-gray-600"></div>
            
            {/* Éclat lumineux qui tourne */}
            {currentTrack !== null && (
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent top-1/2 animate-pulse"></div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  )
}