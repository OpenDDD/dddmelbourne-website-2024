import React, { Fragment } from 'react'
import { useAgendaContext } from './AgendaContext'
import {
  StyledAgendaButton,
  StyledAgendaPresenter,
  StyledAgendaTitle,
  StyledRoom,
  StyledSection,
  StyledSponsor,
} from './AgendaSession.styled'
import Conference from 'config/conference'

interface AgendaSessionProps {
  sessionId?: string
  children?: React.ReactNode
  room?: number | string
  alwaysShowRoom?: boolean
  sponsorId?: string
  fullWidth?: boolean
  excludeWorkshopTrack?: boolean,
  isKeynote?: boolean
  isWorkshop?: boolean
  isWorkshopContinuation?: boolean
  renderTitle?: (title: string) => React.ReactNode
  renderPresenters?: (presenters: string) => React.ReactNode
}

export const AgendaSession = ({
  sessionId,
  children,
  room,
  alwaysShowRoom,
  sponsorId,
  fullWidth,
  excludeWorkshopTrack,
  isKeynote,
  isWorkshop,
  isWorkshopContinuation,
  renderTitle,
  renderPresenters,
}: AgendaSessionProps) => {
  const { onSelect, getSession, getSponsor, getRoom, getLivestream } = useAgendaContext()
  const session = sessionId ? getSession(sessionId) : false
  const sponsor = sponsorId ? getSponsor(sponsorId) : undefined
  const presenters = session ? session.Presenters.map((p) => p.Name).join(', ') : ''

  return (
    <StyledSection 
      fullWidth={fullWidth} 
      session={session !== false} 
      isWorkshop={isWorkshop} 
      isWorkshopContinuation={isWorkshopContinuation}
      excludeWorkshopTrack={excludeWorkshopTrack}>
      {!session && !children && <StyledAgendaPresenter>Loading&hellip;</StyledAgendaPresenter>}
      {session && (
        <StyledAgendaButton
          type="button"
          isKeynote={isKeynote}
          onClick={() => onSelect(session, sponsor, getLivestream(room))}
          color={Conference.RoomColors[getRoom(room)]}
        >
          {renderPresenters ? (
            renderPresenters(presenters)
          ) : (
            <StyledAgendaPresenter isKeynote={isKeynote}>{presenters}</StyledAgendaPresenter>
          )}
          {renderTitle ? (
            renderTitle(session.Title)
          ) : (
            <StyledAgendaTitle isKeynote={isKeynote}>{session.Title}</StyledAgendaTitle>
          )}
          {sponsor && <StyledSponsor>Sponsored by: {sponsor.shortName || sponsor.name}</StyledSponsor>}
          {typeof room !== 'undefined' && <StyledRoom showOnMobile={!alwaysShowRoom}>{getRoom(room)}</StyledRoom>}
        </StyledAgendaButton>
      )}
      {children && (
        <Fragment>
          {children}
          {typeof room !== 'undefined' && (
            <StyledRoom showOnMobile={session !== false && !alwaysShowRoom}>{getRoom(room)}</StyledRoom>
          )}
        </Fragment>
      )}
    </StyledSection>
  )
}

AgendaSession.displayName = 'AgendaSession'
