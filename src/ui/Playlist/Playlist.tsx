import styles from './Playlist.module.scss'
import { Track } from '../Track'
import type { TrackListItemResource } from '../../types'

interface Props {
  tracks: TrackListItemResource[]
  trackId: string | null
  setTrackId: (id: string | null) => void
}

export const Playlist = ({ tracks, trackId, setTrackId }: Props) => {
  return (
    <ul className={styles.playlist}>
      {tracks.map((track) => (
        <Track
          key={track.id}
          track={track}
          trackId={trackId}
          setTrackId={setTrackId}
        />
      ))}
    </ul>
  )
}
