import { useEffect, useState } from 'react'
import type { TrackListItemResource } from './types'

export const App = () => {
  const API_KEY = import.meta.env.VITE_API_KEY

  const [tracks, setTracks] = useState<TrackListItemResource[] | null>(null)
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
      headers: {
        'api-key': API_KEY,
      },
    }).then(res => res.json())
      .then(json => setTracks(json.data))
  }, [])

  return (
    <>
      <h1>MusicFun Player</h1>

      {tracks === null && <p>Loading...</p>}

      {tracks?.length === 0 && <p>No tracks</p>}

      <button
        type="button"
        onClick={() => setSelectedTrackId(null)}
      >Reset selection
      </button>

      <ul>
        {tracks?.map((track) => (
          <li
            key={track.id}
            style={{ border: `1px solid ${track.id === selectedTrackId ? 'orange' : 'transparent'}` }}
            onClick={() => setSelectedTrackId(track.id)}
          >
            <div>{track.attributes.title}</div>
            <audio
              src={track.attributes.attachments[0].url}
              controls
            ></audio>
          </li>
        ))}
      </ul>
    </>
  )
}
