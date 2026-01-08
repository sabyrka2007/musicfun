import styles from './Track.module.scss'
import type { TrackListItemResource } from '../../types'
import clsx from 'clsx'

interface Props {
  track: TrackListItemResource
  trackId: string | null
  setTrackId: (id: string | null) => void
}

export const Track = ({ track, trackId, setTrackId }: Props) => {
  const isActive = track.id === trackId

  return (
    <li
      onClick={() => setTrackId(track.id)}
      className={clsx(styles.track, isActive && styles.active)}
    >
      <div className={styles.header}>
        <span className={styles.title}>{track.attributes.title}</span>
      </div>

      <audio
        className={styles.audio}
        src={track.attributes.attachments[0].url}
        controls
        onClick={(e) => e.stopPropagation()}
      />
    </li>
  )
}
