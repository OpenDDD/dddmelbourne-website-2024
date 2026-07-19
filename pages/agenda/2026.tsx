import React from 'react'
import { NextPage } from 'next'
import { set } from 'date-fns'
import { zonedTimeToUtc } from 'date-fns-tz'
import { Agenda } from '../../components/Agenda/Agenda'
import { AgendaProvider } from '../../components/Agenda/AgendaContext'
import { AgendaSession } from '../../components/Agenda/AgendaSession'
import { AgendaTime } from '../../components/Agenda/AgendaTime'
import { StyledAgendaContainer, StyledAgendaTimeRoomCell, StyledTrackHeader } from '../../components/Agenda/Agenda.styled'
import { StyledAgendaPresenter, StyledAgendaTitle } from '../../components/Agenda/AgendaSession.styled'
import { sessions } from '../../config/past-agendas/2026'
import { Main } from 'layouts/main'

interface AgendaPageProps {
  selectedSessionId?: string
}

const roomNames = ['Main hall', 'Swanston room', 'Supper room', 'Yarra room', 'Hoddle room']

const roomColors = {
  'Main hall': '#c6effc',
  'Supper room': '#d8edd6',
  'Yarra room': '#f8d3d0',
  'Hoddle room': '#ffe2cc',
  'Swanston room': '#fff5cc',
}

const livestreams = [
  'https://youtu.be/ovEA5PaOdWo?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
  'https://youtu.be/8mq3bCMrmbE?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
  'https://youtu.be/DsFlSkTPH-Y?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
  'https://youtu.be/pqRQ4rN6adg?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
  'https://youtu.be/ox6ixHfs4xM?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
  'https://youtu.be/2KjEBFAVgoU?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
  'https://youtu.be/Plo8dSxAjHw?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
  'https://youtu.be/EU-VeLYi8LM?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
  'https://youtu.be/LQ5vtriC_bI?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
]

const AgendaPage: NextPage<AgendaPageProps> = ({ selectedSessionId }) => {
  const date = zonedTimeToUtc('2026-02-21T09:00', 'Australia/Melbourne')

  return (
    <Main title="2026 Agenda" description="DDD Melbourne 2026 agenda.">
      <div className="container">
        <h1>2026 Agenda</h1>

        <Agenda
          sessions={sessions}
          acceptingFeedback={false}
          feedbackLink={null}
          selectedSessionId={selectedSessionId}
          render={(agendaSessions, _, onSelect) => {
            return (
              <AgendaProvider
                onSelect={onSelect}
                getSession={(id) => agendaSessions.find((session) => session.ExternalId === id)}
                sessions={agendaSessions}
                sponsors={[]}
                rooms={roomNames}
                livestreams={livestreams}
              >
              <StyledAgendaContainer talkTracks={4} workshopTracks={1}>
                  <StyledAgendaTimeRoomCell>Time</StyledAgendaTimeRoomCell>
                  {roomNames.map((name) => (
                    <StyledAgendaTimeRoomCell room={roomColors[name]} key={name}>
                      {name}
                    </StyledAgendaTimeRoomCell>
                  ))}
                  <AgendaTime time={set(date, { hours: 8, minutes: 0 })} />
                  <AgendaSession room="" alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Registration</StyledTrackHeader>
                  </AgendaSession>
                  <AgendaTime time={set(date, { hours: 8, minutes: 45 })} />
                  <AgendaSession room={0} alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Welcome and Housekeeping</StyledTrackHeader>
                  </AgendaSession>
                  <AgendaTime time={set(date, { hours: 9, minutes: 0 })} duration={45} />
                  <AgendaSession
                    sessionId="1039434"
                    room={0}
                    renderPresenters={(presenters) => (
                      <StyledAgendaPresenter isKeynote>Keynote: {presenters}</StyledAgendaPresenter>
                    )}
                    fullWidth
                    isKeynote
                    alwaysShowRoom
                  />
                  <AgendaTime time={set(date, { hours: 9, minutes: 45 })} />
                  <AgendaSession fullWidth>
                    <StyledTrackHeader>Morning Tea</StyledTrackHeader>
                  </AgendaSession>
                  <AgendaTime time={set(date, { hours: 10, minutes: 15 })} duration={45} />
                  <AgendaSession
                    room={0}
                    alwaysShowRoom>
                      <StyledTrackHeader>Sponsor Hall + Networking</StyledTrackHeader>
                  </AgendaSession>
                  <AgendaSession room={1} sessionId="1015549" />
                  <AgendaSession room={2} sessionId="992525" />
                  <AgendaSession room={3} sessionId="1027254" />
                  <AgendaSession
                    room={4}
                    isWorkshop
                    sessionId="988090"
                    renderTitle={(title) => (
                      <StyledAgendaTitle>{title}</StyledAgendaTitle>
                    )}
                  />
                  <AgendaTime time={set(date, { hours: 11, minutes: 0 })} />
                  <AgendaSession fullWidth excludeWorkshopTrack>
                    <StyledTrackHeader>Changeover</StyledTrackHeader>
                  </AgendaSession>
                  <AgendaTime time={set(date, { hours: 11, minutes: 15 })} duration={45} />
                  <AgendaSession
                    room={0}
                    alwaysShowRoom>
                      <StyledTrackHeader>Sponsor Hall + Networking</StyledTrackHeader>
                  </AgendaSession>
                  <AgendaSession room={1} sessionId="1037768" />
                  <AgendaSession room={2} sessionId="988022" />
                  <AgendaSession room={3} sessionId="990488" />
                  <AgendaSession
                    room={4}
                    isWorkshop
                    isWorkshopContinuation
                    sessionId="988090"
                    renderTitle={(title) => (
                      <StyledAgendaTitle>{title}<br />(continued)</StyledAgendaTitle>
                    )}
                  />
                  <AgendaTime time={set(date, { hours: 12, minutes: 0 })} />
                  <AgendaSession fullWidth>
                    <StyledTrackHeader>Changeover</StyledTrackHeader>
                  </AgendaSession>
                  <AgendaTime time={set(date, { hours: 12, minutes: 15 })} duration={20} />
                  <AgendaSession
                    room={0}
                    alwaysShowRoom>
                      <StyledTrackHeader>Sponsor Hall + Networking</StyledTrackHeader>
                  </AgendaSession>
                  <AgendaSession room={1} sessionId="1043927" />
                  <AgendaSession room={2} sessionId="990436" />
                  <AgendaSession room={3} sessionId="1045189" />
                  <AgendaSession>
                    <StyledTrackHeader />
                  </AgendaSession>
                  <AgendaTime time={set(date, { hours: 12, minutes: 35 })} />
                  <AgendaSession room="" alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Lunch</StyledTrackHeader>
                  </AgendaSession>
                  <AgendaTime time={set(date, { hours: 13, minutes: 30 })} duration={45} />
                  <AgendaSession
                    room={0}
                    alwaysShowRoom>
                      <StyledTrackHeader>Sponsor Hall + Networking</StyledTrackHeader>
                  </AgendaSession>
                  <AgendaSession room={1} sessionId="1038310" />
                  <AgendaSession room={2} sessionId="1041475" />
                  <AgendaSession room={3} sessionId="1002367" />
                  <AgendaSession
                    room={4}
                    isWorkshop
                    sessionId="1045279"
                    renderTitle={(title) => (
                      <StyledAgendaTitle>{title}</StyledAgendaTitle>
                    )}
                  />
                  <AgendaTime time={set(date, { hours: 14, minutes: 15 })} />
                  <AgendaSession fullWidth excludeWorkshopTrack>
                    <StyledTrackHeader>Changeover</StyledTrackHeader>
                  </AgendaSession>
                  <AgendaTime time={set(date, { hours: 14, minutes: 30 })} duration={45} />
                  <AgendaSession
                    room={0}
                    alwaysShowRoom>
                      <StyledTrackHeader>Sponsor Hall + Networking</StyledTrackHeader>
                  </AgendaSession>
                  <AgendaSession room={1} sessionId="1041341" />
                  <AgendaSession room={2} sessionId="1029734" />
                  <AgendaSession room={3} sessionId="1043437" />
                  <AgendaSession
                    room={4}
                    isWorkshop
                    isWorkshopContinuation
                    sessionId="1045279"
                    renderTitle={(title) => (
                      <StyledAgendaTitle>{title}<br />(continued)</StyledAgendaTitle>
                    )}
                  />
                  <AgendaTime time={set(date, { hours: 15, minutes: 15 })} />
                  <AgendaSession fullWidth>
                    <StyledTrackHeader>Afternoon Tea</StyledTrackHeader>
                  </AgendaSession>
                  <AgendaTime time={set(date, { hours: 15, minutes: 45 })} duration={45} />
                  <AgendaSession
                    room={0}
                    alwaysShowRoom>
                      <StyledTrackHeader>Sponsor Hall + Networking</StyledTrackHeader>
                  </AgendaSession>
                  <AgendaSession room={1} sessionId="1029050" />
                  <AgendaSession room={2} sessionId="1014469" />
                  <AgendaSession room={3} sessionId="1003005" />
                  <AgendaSession>
                    <StyledTrackHeader />
                  </AgendaSession>
                  <AgendaTime time={set(date, { hours: 16, minutes: 30 })} />
                  <AgendaSession fullWidth>
                    <StyledTrackHeader>Changeover</StyledTrackHeader>
                  </AgendaSession>
                  <AgendaTime time={set(date, { hours: 16, minutes: 45 })} duration={45} />
                  <AgendaSession
                    sessionId="988046"
                    room={0}
                    renderPresenters={(presenters) => (
                      <StyledAgendaPresenter isKeynote>Locknote: {presenters}</StyledAgendaPresenter>
                    )}
                    fullWidth
                    isKeynote
                    alwaysShowRoom
                  />
                  <AgendaTime time={set(date, { hours: 17, minutes: 30 })} />
                  <AgendaSession room={0} alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Closing</StyledTrackHeader>
                  </AgendaSession>
                  <AgendaTime
                    time={set(date, { hours: 18, minutes: 0 })}
                    endTime={set(date, { hours: 20, minutes: 30 })}
                  />
                  <AgendaSession room="Beer Deluxe, Federation Square" alwaysShowRoom fullWidth>
                    <StyledTrackHeader>Afterparty</StyledTrackHeader>
                  </AgendaSession>
              </StyledAgendaContainer>
              </AgendaProvider>
            )
          }}
        />
      </div>
    </Main>
  )
}

export default AgendaPage
