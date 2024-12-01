import React from 'react'
import { CurrentAgenda } from 'components/currentAgenda'
import { Sponsors } from 'components/Sponsors/sponsors'
import { fetchSessions } from 'components/utils/useSessions'
import Conference from 'config/conference'
import { Session } from 'config/types'
import { Main } from 'layouts/agendaWide'
import { NextPage } from 'next'
import { useConfig } from 'Context/Config'
import { formatInTimeZone } from 'date-fns-tz'
import AllAgendas from '../components/allAgendas'

interface AgendaPageProps {
  sessions?: Session[]
  sessionId?: string
}

const AgendaPage: NextPage<AgendaPageProps> = ({ sessions, sessionId }) => {
  const { conference, dates } = useConfig()
  if (!sessionId && typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search)
    sessionId = urlParams.get('sessionId')
  }

  return (
    <Main title="Agenda" description={conference.Name + ' agenda.'}>
      <div className="container">
        <h1>{dates.IsComplete && conference.Instance} Agenda</h1>

        {!dates.AgendaPublished && (
          <p>
            The agenda has not yet been finalised; please come back on{' '}
            {formatInTimeZone(conference.AgendaPublishedFrom, conference.TimeZone, dates.DateDisplayFormat)}{' '}
            {formatInTimeZone(conference.AgendaPublishedFrom, conference.TimeZone, dates.TimeDisplayFormat)}. In the
            meantime, check out our previous agendas below.
            <AllAgendas dates={dates} conference={conference} conferenceInstance={conference.Instance} />
          </p>
        )}
        {dates.AgendaPublished && (
          <CurrentAgenda
            date={Conference.Date}
            sessions={sessions}
            sponsors={conference.Sponsors}
            acceptingFeedback={dates.AcceptingFeedback}
            feedbackLink={conference.SessionFeedbackLink}
            selectedSessionId={sessionId}
          />
        )}
        <Sponsors
          show={!conference.HideSponsors}
          hideUpsell={conference.HideSponsorshipUpsell}
          sponsors={conference.Sponsors}
        />
      </div>
    </Main>
  )
}

export const getStaticProps = async () => {
  const sessions = await fetchSessions(process.env.NEXT_PUBLIC_GET_AGENDA_URL)

  return {
    props: {
      ...(sessions ? { sessions } : {}),
    },
  }
}

export default AgendaPage
