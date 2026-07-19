import { renderHook } from 'test/test-util'
import conference from 'config/conference'
import { SessionGroupWithIds } from './useSessionGroups'
import { useSessionGroups } from './useSessionGroups'

describe('useSessionGroups', () => {
  const originalSessionGroups = conference.SessionGroups

  afterEach(() => {
    conference.SessionGroups = originalSessionGroups
  })

  test('supports conferences without configured session groups', () => {
    conference.SessionGroups = []

    const { result } = renderHook(() => useSessionGroups([]))

    expect(result.current).toEqual({ allSessionGroups: [] })
  })

  test('maps configured session groups to matching sessions', () => {
    const sessionGroup: SessionGroupWithIds = {
      sessions: ['session-1'],
      timeStart: conference.Date,
      timeEnd: conference.EndDate,
      type: 'SessionIds',
    }
    conference.SessionGroups = [sessionGroup]

    const { result } = renderHook(() =>
      useSessionGroups([
        {
          Abstract: 'A session abstract',
          Format: 'Talk',
          Id: 'session-1',
          Level: 'Intermediate',
          Presenters: [],
          Tags: [],
          Title: 'A session title',
        },
      ]),
    )

    expect(result.current.allSessionGroups).toHaveLength(1)
    expect(result.current.allSessionGroups[0].sessions[0]).toHaveLength(1)
  })
})
