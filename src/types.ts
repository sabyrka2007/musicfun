export interface TrackAttachment {
  url: string
}

export interface TrackListItemAttributes {
  title: string
  attachments: TrackAttachment[]
}

export interface TrackListItemResource {
  id: string
  attributes: TrackListItemAttributes
}
