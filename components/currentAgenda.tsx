import { Fragment } from 'react'
import Conference from 'config/conference'
import { Session, Sponsor } from 'config/types'
import { ActionButton } from 'components/actionButton'
import { Agenda } from 'components/Agenda/Agenda'
import {
  StyledAgendaTimeRoomCell,
  StyledFeedbackActions,
  StyledTrackHeader,
  StyledUpNext,
  StyledAgendaContainer,
} from 'components/Agenda/Agenda.styled'
import { AgendaProvider } from 'components/Agenda/AgendaContext'
import { AgendaSession } from 'components/Agenda/AgendaSession'
import { AgendaTime } from 'components/Agenda/AgendaTime'
import { set } from 'date-fns'
import { StyledAgendaPresenter, StyledAgendaTitle } from './Agenda/AgendaSession.styled'

interface CurrentAgendaProps {
  date: Date
  sessions?: Session[]
  sponsors: Sponsor[]
  acceptingFeedback: boolean
  feedbackLink?: string
  selectedSessionId?: string
}

export const CurrentAgenda = ({
  date,
  sessions = [],
  sponsors,
  acceptingFeedback,
  feedbackLink,
  selectedSessionId,
}: CurrentAgendaProps) => {
  return (
    <Fragment>
      <p>Select a session to see more details&hellip;</p>

      {acceptingFeedback && (
        <StyledFeedbackActions>
          <ActionButton
            action={{ Title: 'Conference Feedback', Url: Conference.ConferenceFeedbackLink, Category: 'conference', OpenInNewTab: true }}
          />
        </StyledFeedbackActions>
      )}

      <Agenda
        sessions={sessions}
        acceptingFeedback={acceptingFeedback}
        feedbackLink={feedbackLink}
        selectedSessionId={selectedSessionId}
        render={(agendaSessions, nextSessionGroup, onSelect) => {
          return (
            <AgendaProvider
              onSelect={onSelect}
              getSession={(id) => sessions.find((session) => session.ExternalId === id)}
              sessions={agendaSessions}
              sponsors={sponsors}
              rooms={Conference.RoomNames}
              livestreams={Conference.Livestreams}
            >
              {Conference.ShowNextSessions && nextSessionGroup && nextSessionGroup.sessions.length > 0 && (
                <StyledUpNext>
                  <h2>Up next</h2>
                  <StyledAgendaContainer talkTracks={4} workshopTracks={1}>
                    <AgendaTime time={nextSessionGroup.timeStart} />
                    {nextSessionGroup.sessions.map((session, index) =>
                      Array.isArray(session) ? (
                        <Fragment key={index}>
                          {session.map((sess) => (
                            <AgendaSession
                              key={sess.Id}
                              sessionId={sess.ExternalId}
                              fullWidth={nextSessionGroup.sessions.length === 1}
                              room={index}
                              alwaysShowRoom={true}
                            />
                          ))}
                        </Fragment>
                      ) : (
                        <AgendaSession
                          key={session.Id}
                          sessionId={session.ExternalId}
                          fullWidth={nextSessionGroup.sessions.length === 1}
                          room={index}
                          alwaysShowRoom={true}
                        />
                      ),
                    )}
                  </StyledAgendaContainer>
                </StyledUpNext>
              )}
              <StyledAgendaContainer talkTracks={4} workshopTracks={1}>
                  <StyledAgendaTimeRoomCell>Time</StyledAgendaTimeRoomCell>
                  {Conference.RoomNames.map((name) => (
                    <StyledAgendaTimeRoomCell room={Conference.RoomColors[name]} key={name}>
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
                    sessionId="2cc6efd3-a178-479d-b3e7-5580b9c474e2"
                    room={0}
                    renderPresenters={(presenters) => (
                      <StyledAgendaPresenter isKeynote>{presenters ? `Keynote: ${presenters}` : 'Keynote'}</StyledAgendaPresenter>
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
                  <AgendaSession room={1} sessionId="1296693" />
                  <AgendaSession room={2} sessionId="1346316" />
                  <AgendaSession room={3} sessionId="1325453" />
                  <AgendaSession
                    room={4}
                    isWorkshop
                    sessionId="1646dec1-ebd3-43f5-8721-4ba8c3ed6f38"
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
                  <AgendaSession room={1} sessionId="1341792" />
                  <AgendaSession room={2} sessionId="1306511" />
                  <AgendaSession room={3} sessionId="1295904" />
                  <AgendaSession
                    room={4}
                    isWorkshop
                    isWorkshopContinuation
                    sessionId="1646dec1-ebd3-43f5-8721-4ba8c3ed6f38"
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
                  <AgendaSession room={1} sessionId="1346577" />
                  <AgendaSession room={2} sessionId="1346491" />
                  <AgendaSession room={3} sessionId="1327312" />
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
                  <AgendaSession room={1} sessionId="1346029" />
                  <AgendaSession room={2} sessionId="1295817" />
                  <AgendaSession room={3} sessionId="1346683" />
                  <AgendaSession
                    room={4}
                    isWorkshop
                    sessionId="cfeb88e1-7d98-49c0-8c4c-a25e03ce5807"
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
                  <AgendaSession room={1} sessionId="1339380" />
                  <AgendaSession room={2} sessionId="1323579" />
                  <AgendaSession room={3} sessionId="1346532" />
                  <AgendaSession
                    room={4}
                    isWorkshop
                    isWorkshopContinuation
                    sessionId="cfeb88e1-7d98-49c0-8c4c-a25e03ce5807"
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
                  <AgendaSession room={1} sessionId="1344898" />
                  <AgendaSession room={2} sessionId="1346724" />
                  <AgendaSession room={3} sessionId="1294975" />
                  <AgendaSession>
                    <StyledTrackHeader />
                  </AgendaSession>
                  <AgendaTime time={set(date, { hours: 16, minutes: 30 })} />
                  <AgendaSession fullWidth>
                    <StyledTrackHeader>Changeover</StyledTrackHeader>
                  </AgendaSession>
                  <AgendaTime time={set(date, { hours: 16, minutes: 45 })} duration={60} />
                  <AgendaSession
                    sessionId="1345985"
                    room={0}
                    renderPresenters={(presenters) => (
                      <StyledAgendaPresenter isKeynote>Locknote: {presenters}</StyledAgendaPresenter>
                    )}
                    fullWidth
                    isKeynote
                    alwaysShowRoom
                  />
                  <AgendaTime time={set(date, { hours: 17, minutes: 45 })} />
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
    </Fragment>
  )
}

CurrentAgenda.displayName = 'CurrentAgenda'
