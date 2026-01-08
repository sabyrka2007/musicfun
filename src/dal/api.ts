import { API_KEY } from '../env'
import type {
  TrackDetailsResource,
  TrackListItemResource,
} from '../types'

const BASE_URL = 'https://musicfun.it-incubator.app/api/1.0'

export const getTracks = async (): Promise<{
  data: TrackListItemResource[]
}> => {
  const res = await fetch(
    `${BASE_URL}/playlists/tracks?apiKey=${API_KEY}`,
  )
  if (!res.ok) {
    throw new Error(`Failed to load tracks: ${res.status}`)
  }
  return await res.json()
}

export const getPlaylist = async (
  trackId: string,
): Promise<{
  data: TrackDetailsResource
}> => {
  const res = await fetch(
    `${BASE_URL}/playlists/tracks/${trackId}?apiKey=${API_KEY}`,
  )
  if (!res.ok) {
    throw new Error(`Failed to load playlist: ${res.status}`)
  }
  return await res.json()
}
