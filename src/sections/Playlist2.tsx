'use client'

import { useState, useRef, useEffect } from 'react'
import AnimBounce from '@/components/animBounce'

export default function Playlist() {
  const [currentTrack, setCurrentTrack] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  
  const tracks = [
    { title: "OPENING THEME", artist: "HUNTR/X", audio: "/song/How Its Done Demon Hunters.mp3" },
    { title: "DEMON SLAYER", artist: "HUNTR/X", audio: "/song/Dévoile  KPop Demon Hunters.mp3" },
    { title: "NEON NIGHTS", artist: "HUNTR/X", audio: "/song/Neon Nights.mp3", disabled: true },
    { title: "SEOUL CITY LIGHTS", artist: "HUNTR/X", audio: "/song/Seoul City Lights.mp3", disabled: true },
    { title: "BATTLE ROYALE", artist: "HUNTR/X", audio: "/song/Battle Royale.mp3", disabled: true },
    { title: "SHADOW DANCE", artist: "HUNTR/X", audio: "/song/Shadow Dance.mp3", disabled: true },
    { title: "ELECTRIC DREAMS", artist: "HUNTR/X", audio: "/song/Electric Dreams.mp3", disabled: true },
    { title: "FINAL SHOWDOWN", artist: "HUNTR/X", audio: "/song/Final Showdown.mp3", disabled: true },
    { title: "VICTORY LAP", artist: "HUNTR/X", audio: "/song/Victory Lap.mp3", disabled: true },
    { title: "ENCORE", artist: "HUNTR/X", audio: "/song/Encore.mp3", disabled: true },
    { title: "CREDITS ROLL", artist: "HUNTR/X", audio: "/song/Credits Roll.mp3", disabled: true },
    { title: "BONUS TRACK", artist: "HUNTR/X", audio: "/song/Bonus Track.mp3", disabled: true }
  ]

  useEffect(() => {
    if (audioRef.current) {
      if (currentTrack !== null && tracks[currentTrack].audio) {
        audioRef.current.src = tracks[currentTrack].audio
        if (isPlaying) {
          audioRef.current.play()
        }
      } else {
        audioRef.current.pause()
      }
    }
  }, [currentTrack, isPlaying])

  const handlePlayPause = (index: number) => {
    if (tracks[index].disabled) return
    
    if (currentTrack === index) {
      setIsPlaying(!isPlaying)
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause()
        } else {
          audioRef.current.play()
        }
      }
    } else {
      setCurrentTrack(index)
      setIsPlaying(true)
    }
  }

  return (
    <div className="min-h-[105vh] bg-[#0d0d0d] text-[#f2f2f2] overflow-hidden relative">
      {/* Container avec header et vinyles */}
      <div className="relative">
        {/* Header */}
        <header className="flex justify-center px-4 pt-10">
          <h1 className="font-nevan font-normal text-center bg-gradient-to-b from-[#38548E] to-[#537DC3] bg-clip-text text-transparent"
              style={{ fontSize: '130px', lineHeight: '80%', letterSpacing: '0%' }}>
            HUNTR/X
          </h1>
        </header>

        {/* Contenu avec vinyles - positionnement absolu pour chevaucher */}
        <div className="absolute top-0 left-0 right-0 flex justify-between items-center h-[700px] pointer-events-none overflow-hidden">
          {/* Vinyle gauche */}
          <aside className="flex items-center h-full relative pointer-events-auto" style={{ transform: 'translateX(-50%)' }}>
            <AnimBounce isPlaying={isPlaying}>
              <div className={`w-[531px] h-[531px] rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-2xl relative transition-all duration-500 ${currentTrack !== null && isPlaying ? 'animate-spin-slow' : ''}`}>
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
              {currentTrack !== null && isPlaying && (
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent top-1/2 animate-pulse"></div>
                </div>
              )}
            </div>
          </AnimBounce>
          </aside>

          {/* Vinyle droit */}
          <aside className="flex items-center h-full relative pointer-events-auto" style={{ transform: 'translateX(50%)' }}>
            <AnimBounce isPlaying={isPlaying}>
              <div className={`w-[531px] h-[531px] rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-2xl relative transition-all duration-500 ${currentTrack !== null && isPlaying ? 'animate-spin-slow' : ''}`} style={{ animationDirection: 'reverse' }}>
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
                {currentTrack !== null && isPlaying && (
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent top-1/2 animate-pulse"></div>
                  </div>
                )}
              </div>
            </AnimBounce>
          </aside>
        </div>

        {/* Contenu principal - maintenant en dessous */}
        <main className="flex items-center px-8 mt-8">
          <section className="w-full max-w-4xl mx-auto">
            {/* Séparateur de pastilles */}
            <div className="flex justify-center mb-12 mt-2">
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
                    className="w-full h-[320px] object-cover rounded-[20px] shadow-xl"
                  />
                </div>
              </article>

              {/* Tracklist */}
              <div className="h-[320px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#d6d6d6]/30 scrollbar-track-transparent">
                <ul className="space-y-0 pr-2">
                  {tracks.map((track, index) => (
                    <li 
                      key={index} 
                      className={`flex items-center gap-4 py-3 border-b border-[#d6d6d6]/20 ${track.disabled ? 'opacity-40' : ''}`}
                    >
                      <button 
                        className={`w-6 h-6 rounded-full grid place-items-center flex-shrink-0 transition-colors ${
                          track.disabled 
                            ? 'bg-[#d6d6d6]/30 text-[#d6d6d6]/50 cursor-not-allowed' 
                            : currentTrack === index 
                            ? 'bg-green-500 text-white' 
                            : 'bg-[#d6d6d6] text-[#0d0d0d] hover:bg-[#f2f2f2]'
                        }`}
                        onClick={() => handlePlayPause(index)}
                        disabled={track.disabled}
                        aria-label={`${currentTrack === index ? 'Pause' : 'Lire'} ${track.title} de ${track.artist}`}
                      >
                        {currentTrack === index && isPlaying ? (
                          <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                          </svg>
                        ) : (
                          <svg className="w-3 h-3 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        )}
                      </button>
                      <div className="flex flex-col gap-0.5 flex-1">
                        <span className={`font-bold uppercase text-sm ${track.disabled ? 'text-[#f2f2f2]/40' : 'text-[#f2f2f2]'}`}>{track.title}</span>
                        <span className={`text-xs uppercase tracking-wider ${track.disabled ? 'text-[#d6d6d6]/40' : 'text-[#d6d6d6]'}`}>{track.artist}</span>
                      </div>
                      {track.disabled && (
                        <span className="text-xs text-[#d6d6d6]/30 uppercase">Non disponible</span>
                      )}
                    </li>

                  ))}
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
      <audio ref={audioRef} />
    </div>
  )
}