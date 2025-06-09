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
import { Presenter, Session } from '../../config/types'
import { agenda } from './agenda2025'
import { Main } from 'layouts/main'
import conference from '../../config/conference'

interface AgendaPageProps {
  selectedSessionId?: string
}

const AgendaPage: NextPage = ({
                                selectedSessionId,
                              }: AgendaPageProps) => {
  const date = zonedTimeToUtc('2024-03-16T09:00', 'Australia/Melbourne')
  const presentersById = {}
  agenda.speakers.forEach((p) => {
    presentersById[p.id] = {
      Id: p.id,
      Name: p.fullName,
      Tagline: p.tagLine,
      Bio: p.bio,
      ProfilePhotoUrl: p.profilePicture,
    } as Presenter
  })

  const formatsById = {}
  agenda.categories.forEach(c => {
    if (c.title === 'Session format') {
      c.items.forEach(f => {
        formatsById[f.id] = f.name
      })
    }
  })

  const levelsById = {}
  agenda.categories.forEach(c => {
    if (c.title === 'Level') {
      c.items.forEach(l => {
        levelsById[l.id] = l.name
      })
    }
  })

  const tagsById = {}
  agenda.categories.forEach(c => {
    if (c.title === 'Tags') {
      c.items.forEach(t => {
        tagsById[t.id] = t.name
      })
    }
  })

  const agendaSessions = agenda.sessions.map((s) => {
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
                      sessionId="852916"
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
                    <AgendaSession room={0} sessionId="774291" />
                    <AgendaSession room={1} sessionId="775614" />
                    <AgendaSession room={2} sessionId="776269" />
                    <AgendaSession room={3} sessionId="776112" />
                    <AgendaSession room={4} sessionId="774369" />
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(date, { hours: 11, minutes: 0 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Changeover</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(date, { hours: 11, minutes: 15 })} duration={45} />
                    <AgendaSession room={0} sessionId="744515" />
                    <AgendaSession room={1} sessionId="747576" />
                    <AgendaSession room={2} sessionId="745344" />
                    <AgendaSession room={3} sessionId="775599" />
                    <AgendaSession room={4} sessionId="774369" />
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(date, { hours: 12, minutes: 0 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Changeover</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow tracks={4}>
                    <AgendaTime time={set(date, { hours: 12, minutes: 15 })} duration={20} />
                    <AgendaSession room={0} sessionId="776199" />
                    <AgendaSession room={1} sessionId="750339" />
                    <AgendaSession room={2} sessionId="774545" />
                    <AgendaSession room={3} sessionId="774347" />
                    <AgendaSession>
                      <StyledTrackHeader />
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(date, { hours: 12, minutes: 35 })} />
                    <AgendaSession room="" alwaysShowRoom fullWidth>
                      <StyledTrackHeader>Lunch</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(date, { hours: 13, minutes: 30 })} duration={45} />
                    <AgendaSession room={0} sessionId="774981" />
                    <AgendaSession room={1} sessionId="773735" />
                    <AgendaSession room={2} sessionId="750368" />
                    <AgendaSession room={3} sessionId="768907" />
                    <AgendaSession room={4} sessionId="769785" />
                  </StyledAgendaRow>

                  <StyledAgendaRow>
                    <AgendaTime time={set(date, { hours: 14, minutes: 15 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Changeover</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(date, { hours: 14, minutes: 30 })} duration={45} />
                    <AgendaSession room={0} sessionId="744998" />
                    <AgendaSession room={1} sessionId="761847" />
                    <AgendaSession room={2} sessionId="774675" />
                    <AgendaSession room={3} sessionId="760229" />
                    <AgendaSession room={4} sessionId="769785" />
                  </StyledAgendaRow>

                  <StyledAgendaRow>
                    <AgendaTime time={set(date, { hours: 15, minutes: 15 })} />
                    <AgendaSession fullWidth>
                      <StyledTrackHeader>Afternoon Tea</StyledTrackHeader>
                    </AgendaSession>
                  </StyledAgendaRow>
                  <StyledAgendaRow>
                    <AgendaTime time={set(date, { hours: 15, minutes: 45 })} duration={45} />
                    <AgendaSession room={0} sessionId="775123" />
                    <AgendaSession room={1} sessionId="775610" />
                    <AgendaSession room={2} sessionId="775770" />
                    <AgendaSession room={3} sessionId="774651" />
                    <AgendaSession>
                      <StyledTrackHeader />
                    </AgendaSession>
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
                      sessionId="835658"
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
