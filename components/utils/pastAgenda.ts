import { Presenter, Session } from '../../config/types'

export function adaptSessionizeSessions(sessionizeAgenda): Session[] {
  const presentersById = {}
  sessionizeAgenda.speakers.forEach((p) => {
    presentersById[p.id] = {
      Id: p.id,
      Name: p.fullName,
      Tagline: p.tagLine,
      Bio: p.bio,
      ProfilePhotoUrl: p.profilePicture,
    } as Presenter
  })

  const formatsById = {}
  sessionizeAgenda.categories.forEach(c => {
    if (c.title === 'Session format') {
      c.items.forEach(f => {
        formatsById[f.id] = f.name
      })
    }
  })

  const levelsById = {}
  sessionizeAgenda.categories.forEach(c => {
    if (c.title === 'Level') {
      c.items.forEach(l => {
        levelsById[l.id] = l.name
      })
    }
  })

  const tagsById = {}
  sessionizeAgenda.categories.forEach(c => {
    if (c.title === 'Tags') {
      c.items.forEach(t => {
        tagsById[t.id] = t.name
      })
    }
  })

  return sessionizeAgenda.sessions.map((s) => {
    let format = ''
    let level = ''
    let tags = []
    s.categoryItems.forEach(c => {
      if (c in formatsById) {
        format = formatsById[c]
      }
      if (c in levelsById) {
        level = levelsById[c]
      }
      if (c in tagsById) {
        tags.push(tagsById[c])
      }
    })
    return {
      Id: s.id,
      ExternalId: s.id,
      Title: s.title,
      Abstract: s.description,
      Presenters: s.speakers.map(speakerId => presentersById[speakerId]),
      Format: format,
      Level: level,
      Tags: tags,
    } as Session
  })
}