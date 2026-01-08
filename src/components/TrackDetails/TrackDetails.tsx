import type { TrackDetailsResource } from '../../types'

interface Props {
  trackId: string | null
  track: TrackDetailsResource | null
}

export const TrackDetails = ({ trackId, track }: Props) => {
  return (
    <section>
      <h2>Track details</h2>

      {trackId === null && <p>Track is not selected</p>}

      {trackId !== null &&
        (!track || track.id !== trackId) && (
          <p>Loading...</p>
        )}

      {track &&
        trackId !== null &&
        track.id === trackId && (
          <div>
            <h3>{track.attributes.title}</h3>

            <div>
              <h4>Lyrics</h4>
              {track.attributes.lyrics ? (
                <p>{track.attributes.lyrics}</p>
              ) : (
                <p>No lyrics</p>
              )}
            </div>
          </div>
        )}
    </section>
  )
}