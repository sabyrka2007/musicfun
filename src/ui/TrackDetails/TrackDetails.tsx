import styles from './TrackDetails.module.scss'
import type { TrackDetailsResource } from '../../types'

interface Props {
  trackId: string | null
  track: TrackDetailsResource | null
}

export const TrackDetails = ({ trackId, track }: Props) => {
  return (
    <section className={styles.details}>
      <h2 className={styles.title}>Track details</h2>

      {trackId === null && (
        <p className={styles.state}>Track is not selected</p>
      )}

      {trackId !== null && (!track || track.id !== trackId) && (
        <p className={styles.state}>Loading...</p>
      )}

      {track && trackId !== null && track.id === trackId && (
        <div className={styles.content}>
          <h3 className={styles.trackTitle}>
            {track.attributes.title}
          </h3>

          <div className={styles.lyrics}>
            <h4 className={styles.subtitle}>Lyrics</h4>

            {track.attributes.lyrics ? (
              <p className={styles.text}>
                {track.attributes.lyrics}
              </p>
            ) : (
              <p className={styles.empty}>No lyrics</p>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
