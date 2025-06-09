import React from 'react'
import { NextPage } from 'next'
import { AgendaProvider } from '../../components/Agenda/AgendaContext'
import Conference from '../../config/conference'
import {
  StyledAgendaContainer,
  StyledAgendaRow, StyledAgendaRowList, StyledTrackHeader,
} from '../../components/Agenda/Agenda.styled'
import { AgendaTime } from '../../components/Agenda/AgendaTime'
import { AgendaSession } from '../../components/Agenda/AgendaSession'
import { set } from 'date-fns'
import { StyledAgendaPresenter } from '../../components/Agenda/AgendaSession.styled'
import { Agenda } from '../../components/Agenda/Agenda'
import { zonedTimeToUtc } from 'date-fns-tz'
import { agenda } from '../../config/past-agendas/2024'
import { Main } from 'layouts/main'
import conference from '../../config/conference'
import { adaptSessionizeSessions } from '../../components/utils/pastAgenda'

interface AgendaPageProps {
  selectedSessionId?: string
}

const AgendaPage: NextPage = ({
                                selectedSessionId,
                              }: AgendaPageProps) => {
  const date = zonedTimeToUtc('2024-03-16T09:00', 'Australia/Melbourne')

  const agendaSessions = adaptSessionizeSessions(agenda)
  const roomNames = agenda.rooms.map(r => r.name)

  return (
    <Main title="Agenda" description={conference.Name + ' agenda.'}>
      <div className="container">
        <h1>2024 Agenda</h1>

        <Agenda
          sessions={agendaSessions}
          acceptingFeedback={false}
          feedbackLink={null}
          selectedSessionId={selectedSessionId}
          render={(agendaSessions, _, onSelect) => {
            return (
              <AgendaProvider
                onSelect={onSelect}
                getSession={(id) => agendaSessions.find((session) => session.Id === id)}
                sessions={agendaSessions}
                sponsors={[]}
                rooms={roomNames}
                livestreams={[]}
              >
                <StyledAgendaContainer>
                  <StyledAgendaRowList>
                    <li>Time</li>
                    {Conference.RoomNames.map((name) => (
                      <li style={{ backgroundColor: `${Conference.RoomColors[name]}`, color: 'inherit' }} key={name}>
                        {name}
                      </li>
                    ))}
                  </StyledAgendaRowList>
                  <StyledAgendaRow>
                    <AgendaTime time={set(date, { hours: 8, minutes: 0 })} />
                    <AgendaSession room="" alwaysShowRoom fullWidth>
                      <StyledTrackHeader>Registration</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(date, { hours: 8, minutes: 45 })} />
                    <AgendaSession room={0} alwaysShowRoom fullWidth>
                      <StyledTrackHeader>Welcome and Housekeeping</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(date, { hours: 9, minutes: 0 })} duration={45} />
                    <AgendaSession
                      sessionId="581840"
                      room={0}
                      renderPresenters={(presenters) => (
                        <StyledAgendaPresenter isKeynote>Keynote: {presenters}</StyledAgendaPresenter>
                      )}
                      fullWidth
                      isKeynote
                      alwaysShowRoom
                    />
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(date, { hours: 9, minutes: 45 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Morning Tea</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(date, { hours: 10, minutes: 15 })} duration={45} />
                    <AgendaSession room={0} sessionId="564855" />
                    <AgendaSession room={1} sessionId="566071" />
                    <AgendaSession room={2} sessionId="537623" />
                    <AgendaSession room={3} sessionId="567126" />
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(date, { hours: 11, minutes: 0 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Changeover</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(date, { hours: 11, minutes: 15 })} duration={45} />
                    <AgendaSession room={0} sessionId="559141" />
                    <AgendaSession room={1} sessionId="555691" />
                    <AgendaSession room={2} sessionId="537420" />
                    <AgendaSession room={3} sessionId="554319" />
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(date, { hours: 12, minutes: 0 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Changeover</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(date, { hours: 12, minutes: 15 })} duration={20} />
                    <AgendaSession room={0} sessionId="564304" />
                    <AgendaSession room={1} sessionId="542320" />
                    <AgendaSession room={2} sessionId="547679" />
                    <AgendaSession room={3} sessionId="563680" />
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(date, { hours: 12, minutes: 35 })} />
                    <AgendaSession room="" alwaysShowRoom fullWidth>
                      <StyledTrackHeader>Lunch</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(date, { hours: 13, minutes: 30 })} duration={45} />
                    <AgendaSession room={0} sessionId="537416" />
                    <AgendaSession room={1} sessionId="540385" />
                    <AgendaSession room={2} sessionId="541314" />
                    <AgendaSession room={3} sessionId="553231" />
                  </StyledAgendaRow>

                  <StyledAgendaRow>
                    <AgendaTime time={set(date, { hours: 14, minutes: 15 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Changeover</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(date, { hours: 14, minutes: 30 })} duration={45} />
                    <AgendaSession room={0} sessionId="551733" />
                    <AgendaSession room={1} sessionId="553280" />
                    <AgendaSession room={2} sessionId="543657" />
                    <AgendaSession room={3} sessionId="564745" />
                  </StyledAgendaRow>

                  <StyledAgendaRow>
                    <AgendaTime time={set(date, { hours: 15, minutes: 15 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Afternoon Tea</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(date, { hours: 15, minutes: 45 })} duration={45} />
                    <AgendaSession room={0} sessionId="539719" />
                    <AgendaSession room={1} sessionId="556264" />
                    <AgendaSession room={2} sessionId="553864" />
                    <AgendaSession room={3} sessionId="539213" />
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(date, { hours: 16, minutes: 30 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Changeover</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(date, { hours: 16, minutes: 45 })} duration={30} />
                    <AgendaSession
                      sessionId="547732"
                      room={0}
                      renderPresenters={(presenters) => (
                        <StyledAgendaPresenter isKeynote>Locknote: {presenters}</StyledAgendaPresenter>
                      )}
                      fullWidth
                      isKeynote
                      alwaysShowRoom
                    />
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(date, { hours: 17, minutes: 15 })} />
                    <AgendaSession room={0} alwaysShowRoom fullWidth>
                      <StyledTrackHeader>Closing</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime
                      time={set(date, { hours: 18, minutes: 0 })}
                      endTime={set(date, { hours: 20, minutes: 30 })}
                    />
                    <AgendaSession room="Beer Deluxe, Federation Square" alwaysShowRoom fullWidth>
                      <StyledTrackHeader>Afterparty</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
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
