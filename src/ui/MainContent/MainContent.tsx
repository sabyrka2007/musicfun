import { ResetButton } from '../ResetButton'
import { Playlist } from '../Playlist'
import { TrackDetails } from '../TrackDetails'
import { useTracksSelection } from '../../bll/useTracksSelection'

export const MainContent = () => {
  const { tracks, selectedTrack, selectedTrackId, setSelectedTrackId, handleResetSelection } = useTracksSelection()

  return (
    <section>
      {tracks === null && <p>Loading...</p>}

      {tracks?.length === 0 && <p>No tracks</p>}

      {tracks && (
        <>
          <ResetButton onResetSelection={handleResetSelection} />

          <div style={{ display: 'flex', columnGap: '30px' }}>
            <Playlist
              tracks={tracks}
              trackId={selectedTrackId}
              setTrackId={setSelectedTrackId}
            />
            <TrackDetails
              track={selectedTrack}
              trackId={selectedTrackId}
            />
          </div>
        </>
      )}
    </section>
  )
}