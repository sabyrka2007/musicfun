interface TrackAttachment {
  url: string
}

interface TrackListItemAttributes {
  title: string
  attachments: TrackAttachment[]
}

export interface TrackListItemResource {
  id: string
  attributes: TrackListItemAttributes
}

interface TrackDetailsAttributes {
  title: string
  lyrics: string | null
}

export interface TrackDetailsResource {
  id: string
  attributes: TrackDetailsAttributes
}
