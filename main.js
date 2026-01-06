const tracks = [
  {
    title: 'MusicFun Soundtrack',
    url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3',
  },

  {
    title: 'MusicFun Soundtrack – Instrumental',
    url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3',
  },
]

const rootElement = document.getElementById('root')

const pageTitleElement = document.createElement('h1')
const trackListElement = document.createElement('ul')

pageTitleElement.textContent = 'MusicFun Player'

tracks.forEach((track) => {
  const trackItemElement = document.createElement('li')
  const trackItemLabelElement = document.createElement('div')
  const trackItemAudioControlElement = document.createElement('audio')

  trackItemLabelElement.textContent = track.title

  trackItemAudioControlElement.controls = true
  trackItemAudioControlElement.src = track.url

  trackItemElement.append(trackItemLabelElement, trackItemAudioControlElement)

  trackListElement.append(trackItemElement)
})

rootElement.append(pageTitleElement, trackListElement)
