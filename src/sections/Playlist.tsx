import React from 'react'
import Image from 'next/image'

function Playlist() {
  const playlists = [
    {
      title: 'HUNTR/X',
      album: 'Dark Rhythms',
      image: '/image 51.jpg',
      tracks: [
        { name: 'Shadow Dance', duration: '3:45' },
        { name: 'Demon\'s Lullaby', duration: '4:12' },
        { name: 'Neon Exorcism', duration: '3:28' },
        { name: 'Midnight Hunt', duration: '3:56' },
      ]
    },
    {
      title: 'SAJA BOYS',
      album: 'Spirit Warriors',
      image: '/image 52.jpg',
      tracks: [
        { name: 'Guardian Anthem', duration: '3:32' },
        { name: 'Crystal Heart', duration: '4:05' },
        { name: 'Dimension Break', duration: '3:18' },
        { name: 'Unity Rise', duration: '3:44' },
      ]
    }
  ]

  return (
    <section id="playlist" className="py-20 bg-kpop-dark">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {playlists.map((playlist) => (
            <div key={playlist.title} className="space-y-6">
              {/* Album Cover and Title */}
              <div className="text-center">
                <div className="relative h-[300px] rounded-3xl mb-4 overflow-hidden">
                  <Image
                    src={playlist.image}
                    alt={`${playlist.title} Album Cover`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div>
                      <h3 className="text-4xl font-bold text-white mb-2">{playlist.title}</h3>
                      <p className="text-white/80">{playlist.album}</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{playlist.title}</h3>
              </div>

              {/* Audio Player Visual */}
              <div className="bg-gray-900 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                      <span className="text-gray-900">▶</span>
                    </button>
                    <div>
                      <p className="text-white font-semibold">Now Playing</p>
                      <p className="text-gray-400 text-sm">{playlist.tracks[0].name}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2 h-8 bg-blue-400 rounded"></div>
                    <div className="w-2 h-12 bg-purple-400 rounded"></div>
                    <div className="w-2 h-6 bg-pink-400 rounded"></div>
                    <div className="w-2 h-10 bg-blue-400 rounded"></div>
                    <div className="w-2 h-4 bg-purple-400 rounded"></div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="bg-gray-800 h-1 rounded-full mb-2">
                  <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-1 rounded-full w-1/3"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>1:23</span>
                  <span>{playlist.tracks[0].duration}</span>
                </div>
              </div>

              {/* Track List */}
              <div className="bg-gray-900/50 rounded-xl p-4">
                {playlist.tracks.map((track, index) => (
                  <div key={track.name} className="flex items-center justify-between py-2 px-3 hover:bg-gray-800/50 rounded transition">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400 text-sm w-6">{index + 1}</span>
                      <span className="text-white">{track.name}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{track.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Playlist