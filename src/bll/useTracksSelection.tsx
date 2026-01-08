import { useEffect, useState } from 'react'
import type { TrackDetailsResource, TrackListItemResource } from '../types'
import { getPlaylist, getTrack } from '../dal/api'

export const useTracksSelection = () => {
  const [tracks, setTracks] = useState<TrackListItemResource[] | null>(null)
  const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResource | null>(null)
  const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null)

  useEffect(() => {
    getTrack().then(json => setTracks(json.data))
  }, [])

  useEffect(() => {
    if (!selectedTrackId) return

    getPlaylist(selectedTrackId).then(json => setSelectedTrack(json.data))
  }, [selectedTrackId])

  const handleResetSelection = () => {
    setSelectedTrack(null)
    setSelectedTrackId(null)
  }

  return { tracks, selectedTrack, selectedTrackId, setSelectedTrackId, handleResetSelection }
}
