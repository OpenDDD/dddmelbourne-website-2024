import { add } from 'date-fns'
import getConferenceDates from './dates'
import conference from './conference'
import Menu from './menu'

describe('Menu', () => {
  test('shows past agendas before the current agenda is published', () => {
    const dates = getConferenceDates(conference, {
      Value: add(conference.PresentationSubmissionsOpenUntil, { minutes: 1 }),
    })

    expect(Menu(conference, dates).Top).toContainEqual({
      href: '/agenda',
      name: 'Past Agendas',
    })
  })
})
