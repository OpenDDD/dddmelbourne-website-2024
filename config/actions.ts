import { Action, Conference, Dates } from './types'

export default function getConferenceActions(conference: Conference, dates: Dates): Action[] {
  const actions: Action[] = []

  if (dates.AcceptingPresentations) {
    actions.push({
      Category: 'content',
      Title: 'Submit presentation',
      Url: '/cfp',
    })
  }

  if (dates.RegistrationOpen) {
    actions.push({
      Category: 'tickets',
      Title: 'Purchase a ticket',
      Url: '/tickets',
    })
  }

  if (dates.RegistrationClosed) {
    actions.push({
      Category: 'swag',
      Title: 'Get Swag',
      Url: conference.Socials.RedBubble,
    })
  }

  if (dates.AgendaPublished) {
    let agendaTitle = 'View the agenda'
    if (dates.IsComplete) {
      agendaTitle = `${conference.Instance} agenda`
    }
    actions.push({
      Category: 'agenda',
      Title: agendaTitle,
      Url: '/agenda',
    })
  }

  if (dates.VotingOpen) {
    actions.push({
      Category: 'voting',
      Title: 'Vote for agenda',
      Url: '/vote',
    })
  }

  if (dates.RegistrationOpen) {
    actions.push({
      Category: 'training',
      Title: 'Speaker Training',
      Url: `mailto:${conference.MentoringEmail}`,
    })
  }

  if (dates.AcceptingFeedback) {
    actions.push({
      Category: 'conference',
      Title: 'Give feedback',
      Url: conference.ConferenceFeedbackLink,
    })
  }

  if (dates.WeekBefore) {
    actions.push({
      Category: 'conference',
      Title: 'Conference Day Info',
      Url: '/conference-day',
    })
  }

  if (conference.Handbook) {
    // actions.push({
    //   Category: 'conference',
    //   Title: 'Download handbook',
    //   Url: '/static/docs/' + conference.Handbook,
    // })
  }

  return actions
}
