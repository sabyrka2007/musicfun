import { API_KEY } from '../env'
import type { TrackDetailsResource, TrackListItemResource } from '../types'

export const getTrack = () => {
  const promise: Promise<{
    data: TrackListItemResource[]
  }> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
    headers: {
      'api-key': API_KEY,
    },
  }).then(res => res.json())

  return promise
}

export const getPlaylist = (trackId: string) => {
  const promise: Promise<{
    data: TrackDetailsResource
  }> = fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`, {
    headers: {
      'api-key': API_KEY,
    },
  }).then(res => res.json())

  return promise
}
