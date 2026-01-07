import { useEffect, useState } from 'react'
import type { TrackDetailsResource, TrackListItemResource } from './types'

export const App = () => {
  const API_KEY = import.meta.env.VITE_API_KEY

  const [tracks, setTracks] = useState<TrackListItemResource[] | null>(null)
  const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResource | null>(null)
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
      headers: {
        'api-key': API_KEY,
      },
    }).then(res => res.json())
      .then(json => setTracks(json.data))
  }, [])

  useEffect(() => {
    if (!selectedTrackId) return

    fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${selectedTrackId}`, {
      headers: {
        'api-key': API_KEY,
      },
    }).then(res => res.json())
      .then(json => setSelectedTrack(json.data))
  }, [selectedTrackId])

  return (
    <>
      <h1>MusicFun Player</h1>

      {tracks === null && <p>Loading...</p>}

      {tracks?.length === 0 && <p>No tracks</p>}

      {tracks && (
        <>
          <button
            type="button"
            onClick={() => {
              setSelectedTrack(null)
              setSelectedTrackId(null)
            }}
          >Reset selection
          </button>

          <div style={{ display: 'flex', columnGap: '30px' }}>
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
            <div>
              <h2>Track details</h2>

              {selectedTrackId === null && <p>Track is not selected</p>}

              {selectedTrackId !== null &&
                (!selectedTrack || selectedTrack.id !== selectedTrackId) && (
                  <p>Loading...</p>
                )}

              {selectedTrack &&
                selectedTrackId !== null &&
                selectedTrack.id === selectedTrackId && (
                  <div>
                    <h3>{selectedTrack.attributes.title}</h3>

                    <div>
                      <h4>Lyrics</h4>
                      {selectedTrack.attributes.lyrics ? (
                        <p>{selectedTrack.attributes.lyrics}</p>
                      ) : (
                        <p>No lyrics</p>
                      )}
                    </div>
                  </div>
                )}
            </div>
          </div>
        </>
      )}
    </>
  )
}
