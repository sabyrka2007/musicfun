import { useState } from 'react'

const tracks = [
  {
    id: 1,
    title: 'MusicFun Soundtrack',
    url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3',
  },

  {
    id: 2,
    title: 'MusicFun Soundtrack – Instrumental',
    url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3',
  },
]

export const App = () => {
  const [selectedTrackId, setSelectedTrackId] = useState<number | null>(null)

  return (
    <>
      <h1>MusicFun Player</h1>

      {tracks === null && <p>Loading...</p>}

      {tracks.length === 0 && <p>No tracks</p>}

      <button
        type="button"
        onClick={() => setSelectedTrackId(null)}
      >Reset selection
      </button>

      <ul>
        {tracks.map((track) => (
          <li
            key={track.id}
            style={{ border: `1px solid ${track.id === selectedTrackId ? 'orange' : 'transparent'}` }}
            onClick={() => setSelectedTrackId(track.id)}
          >
            <div>{track.title}</div>
            <audio
              src={track.url}
              controls
            ></audio>
          </li>
        ))}
      </ul>
    </>
  )
}
