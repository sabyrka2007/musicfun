import { ResetButton } from '../ResetButton'
import { Playlist } from '../Playlist'
import { TrackDetails } from '../TrackDetails'
import { useEffect, useState } from 'react'
import type { TrackDetailsResource, TrackListItemResource } from '../types'
import { API_KEY } from '../env'

export const MainContent = () => {
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

  const handleResetSelection = () => {
    setSelectedTrack(null)
    setSelectedTrackId(null)
  }

  return (
    <section>
      {tracks === null && <p>Loading...</p>}

      {tracks?.length === 0 && <p>No tracks</p>}

      {tracks && (
        <>
          <ResetButton onResetSelection={handleResetSelection} />

          <div style={{ display: 'flex', columnGap: '30px' }}>
            <Playlist tracks={tracks} trackId={selectedTrackId} setTrackId={setSelectedTrackId} />
            <TrackDetails track={selectedTrack} trackId={selectedTrackId} />
          </div>
        </>
      )}
    </section>
  )
}