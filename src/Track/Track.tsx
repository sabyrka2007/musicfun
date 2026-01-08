import type { TrackListItemResource } from '../types'

interface Props {
  track: TrackListItemResource
  trackId: string | null
  setTrackId: (id: string | null) => void
}

export const Track = ({ track, trackId, setTrackId }: Props) => {
  return (
    <li
      style={{ border: `1px solid ${track.id === trackId ? 'orange' : 'transparent'}` }}
      onClick={() => setTrackId(track.id)}
    >
      <div>{track.attributes.title}</div>
      <audio
        src={track.attributes.attachments[0].url}
        controls
      ></audio>
    </li>
  )
}