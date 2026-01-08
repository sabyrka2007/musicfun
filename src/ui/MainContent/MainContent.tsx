import styles from './MainContent.module.scss'
import { ResetButton } from '../ResetButton'
import { Playlist } from '../Playlist'
import { TrackDetails } from '../TrackDetails'
import { useTracksSelection } from '../../bll/useTracksSelection'

export const MainContent = () => {
  const {
    tracks,
    selectedTrack,
    selectedTrackId,
    setSelectedTrackId,
    handleResetSelection,
  } = useTracksSelection()

  return (
    <section className={styles.mainContent}>
      {tracks === null && (
        <p className={styles.state}>Loading...</p>
      )}

      {tracks?.length === 0 && (
        <p className={styles.state}>No tracks</p>
      )}

      {tracks && (
        <>
          <div className={styles.header}>
            <ResetButton onResetSelection={handleResetSelection} />
          </div>

          <div className={styles.wrapper}>
            <div className={styles.playlist}>
              <Playlist
                tracks={tracks}
                trackId={selectedTrackId}
                setTrackId={setSelectedTrackId}
              />
            </div>

            <div className={styles.details}>
              <TrackDetails
                track={selectedTrack}
                trackId={selectedTrackId}
              />
            </div>
          </div>
        </>
      )}
    </section>
  )
}
