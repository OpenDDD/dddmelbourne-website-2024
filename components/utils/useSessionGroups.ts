import React from 'react'
import Conference from 'config/conference'
import getConferenceDates from 'config/dates'
import { Session } from 'config/types'
import dateTimeProvider from './dateTimeProvider'
import { isWithinInterval, isAfter } from 'date-fns'

type SessionId = string // UUID

export interface SessionGroupBase {
  timeStart: Date
  timeEnd: Date
}

export interface SessionGroup extends SessionGroupBase {
  type: 'Sessions'
  sessions: Array<Session | Session[]>
}

export interface SessionGroupWithIds extends SessionGroupBase {
  type: 'SessionIds'
  sessions: Array<string | string[]> // ['1','2', ['3', '4'], '5']
}

interface SessionGroups {
  allSessionGroups: SessionGroup[]
  currentSessionGroup?: SessionGroup
  previousSessionGroup?: SessionGroup
  nextSessionGroup?: SessionGroup
  pastSessionGroups?: SessionGroup[]
  futureSessionGroups?: SessionGroup[]
}

function getSessionById(sessions: Session[], ids: SessionId[]) {
  return sessions
    .filter((session) => ids.includes(session.Id) || ids.includes(session.ExternalId))
    .sort((sessionA, sessionB) => {
      const aIndex = ids.findIndex((id) => sessionA.Id === id || sessionA.ExternalId === id)
      const bIndex = ids.findIndex((id) => sessionB.Id === id || sessionB.ExternalId === id)

      if (aIndex < bIndex) {
        return -1
      } else if (aIndex > bIndex) {
        return 1
      } else {
        return 0
      }
    })
}

// so manual - ideally there would be a better way to achieve this or expand it to handle the agenda too
// e.g. on the agenda page show next sessions up top then the whole list
export function useSessionGroups(sessions: Session[]): SessionGroups {
  const allSessionGroups: SessionGroup[] = React.useMemo(
    () =>
      Conference.SessionGroups.map((sessionGroup) => ({
        ...sessionGroup,
        sessions: sessionGroup.sessions.map((id) =>
          typeof id === 'string' ? getSessionById(sessions, [id]) : getSessionById(sessions, id),
        ),
        type: 'Sessions',
      })),
    // Using the session length as the dependency - there was a reason at the time
    [Conference.Date.toString(), sessions.length],
  )
  const { IsInProgress } = getConferenceDates(Conference, dateTimeProvider.now())

  let currentSessionIndex = -1
  let previousSessionIndex = -1

  // Once we are past the end of the last session group there are no next or future sessions
  if (isAfter(dateTimeProvider.now().Value, allSessionGroups[allSessionGroups.length - 1].timeEnd)) {
    currentSessionIndex = allSessionGroups.length
    // Once we are past the first session group we start showing times
  } else if (isAfter(dateTimeProvider.now().Value, allSessionGroups[0].timeEnd)) {
    currentSessionIndex = allSessionGroups.findIndex((g) =>
      isWithinInterval(dateTimeProvider.now().Value, {
        start: g.timeStart,
        end: g.timeEnd,
      }),
    )
  }
  // If we aren't currently in a session, calculate the session that just finished
  if (currentSessionIndex === -1) {
    const finishedSessionGroups = allSessionGroups.filter((g) => isAfter(dateTimeProvider.now().Value, g.timeEnd))
    previousSessionIndex = finishedSessionGroups.length - 1
  }

  // Calculate all of the indexes based on the ones we just calculated
  previousSessionIndex = currentSessionIndex === -1 ? previousSessionIndex : currentSessionIndex - 1
  const pastSessionsIndex = previousSessionIndex - 1
  let nextSessionIndex = currentSessionIndex === -1 ? previousSessionIndex + 1 : currentSessionIndex + 1
  let futureSessionIndex = nextSessionIndex + 1
  // Protect the indexes from growing past the bounds of the number of session groups
  if (currentSessionIndex >= allSessionGroups.length) {
    currentSessionIndex = -1
  }
  if (nextSessionIndex >= allSessionGroups.length) {
    nextSessionIndex = -1
  }
  if (futureSessionIndex >= allSessionGroups.length) {
    futureSessionIndex = -1
  }

  const calculatedSessionGroups = React.useMemo<Omit<SessionGroups, 'allSessionGroups'>>(
    () => ({
      ...(pastSessionsIndex >= 0 ? { pastSessionGroups: allSessionGroups.slice(0, pastSessionsIndex + 1) } : {}),
      ...(previousSessionIndex >= 0 ? { previousSessionGroup: allSessionGroups[previousSessionIndex] } : {}),
      ...(currentSessionIndex >= 0 ? { currentSessionGroup: allSessionGroups[currentSessionIndex] } : {}),
      ...(nextSessionIndex >= 0 ? { nextSessionGroup: allSessionGroups[nextSessionIndex] } : {}),
      ...(futureSessionIndex >= 0 ? { futureSessionGroups: allSessionGroups.slice(futureSessionIndex) } : {}),
    }),
    // TODO: Investigate allSessionGroups as dep
    [
      pastSessionsIndex,
      previousSessionIndex,
      nextSessionIndex,
      currentSessionIndex,
      futureSessionIndex,
      sessions.length,
    ],
  )

  if (!IsInProgress) {
    return {
      allSessionGroups,
    }
  }

  return {
    ...calculatedSessionGroups,
    allSessionGroups,
  }
}
