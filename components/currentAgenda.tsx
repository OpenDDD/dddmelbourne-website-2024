import React, { Fragment } from 'react'
import Conference from 'config/conference'
import { Session, Sponsor } from 'config/types'
import { ActionButton } from 'components/actionButton'
import { Agenda } from 'components/Agenda/Agenda'
import {
  StyledAgendaRow,
  StyledAgendaRowList,
  StyledFeedbackActions,
  StyledTrackHeader,
  StyledUpNext,
  StyledAgendaContainer,
} from 'components/Agenda/Agenda.styled'
import { AgendaProvider } from 'components/Agenda/AgendaContext'
import { AgendaSession } from 'components/Agenda/AgendaSession'
import { AgendaTime } from 'components/Agenda/AgendaTime'
import { set } from 'date-fns'
import { StyledAgendaPresenter } from './Agenda/AgendaSession.styled'

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
            action={{ Title: 'Conference Feedback', Url: Conference.ConferenceFeedbackLink, Category: 'conference' }}
          />
          <ActionButton
            action={{ Title: 'Session feedback', Url: Conference.SessionFeedbackLink, Category: 'conference' }}
          />
        </StyledFeedbackActions>
      )}
      <span></span>

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
                  <StyledAgendaRow>
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
                  </StyledAgendaRow>
                </StyledUpNext>
              )}
              <StyledAgendaContainer>
                <StyledAgendaRowList>
                  <li>Time</li>
                  {Conference.RoomNames.map((name) => (
                    <li key={name}>{name}</li>
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
                  <AgendaSession room={1} sessionId="566636" />
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
                  <AgendaSession room={3} />
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
    </Fragment>
  )
}

CurrentAgenda.displayName = 'CurrentAgenda'
