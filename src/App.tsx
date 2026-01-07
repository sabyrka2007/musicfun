const tracks = [
  {
    id: 1,
    title: 'MusicFun Soundtrack',
    url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3',
  },

  {
    id: 2,
    title: 'MusicFun Soundtrack – Instrumental',
    url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3',
  },
]

const selectedTrackId = null

export const App = () => {
  return (
    <>
      <h1>MusicFun Player</h1>
      {tracks === null && <p>Loading...</p>}
      {tracks.length === 0 && <p>No tracks</p>}
      <ul>
        {tracks.map((track) => (
          <li
            key={track.id}
            style={{ border: `1px solid ${track.id === selectedTrackId ? 'orange' : 'transparent'}` }}
          >
            <div>{track.title}</div>
            <audio
              src={track.url}
              controls
            ></audio>
          </li>
        ))}
      </ul>
    </>
  )
}
