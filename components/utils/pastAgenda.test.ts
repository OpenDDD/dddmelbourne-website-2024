import { adaptSessionizeSessions } from './pastAgenda'
import { Session } from '../../config/types'

describe('adaptSessionizeSessions', () => {
  it('should transform empty sessionize agenda into empty array', () => {
    const emptyAgenda = {
      speakers: [],
      categories: [],
      sessions: []
    }

    const result = adaptSessionizeSessions(emptyAgenda)
    expect(result).toEqual([])
  })

  it('should correctly transform a complete sessionize agenda', () => {
    const mockAgenda = {
      speakers: [{
        id: 'speaker1',
        fullName: 'John Doe',
        tagLine: 'Software Engineer',
        bio: 'Experienced developer',
        profilePicture: 'http://example.com/photo.jpg'
      }],
      categories: [
        {
          title: 'Session format',
          items: [{ id: 'format1', name: 'Workshop' }]
        },
        {
          title: 'Level',
          items: [{ id: 'level1', name: 'Intermediate' }]
        },
        {
          title: 'Tags',
          items: [
            { id: 'tag1', name: 'JavaScript' },
            { id: 'tag2', name: 'Testing' }
          ]
        }
      ],
      sessions: [{
        id: 'session1',
        title: 'Test Session',
        description: 'Session description',
        speakers: ['speaker1'],
        categoryItems: ['format1', 'level1', 'tag1', 'tag2']
      }]
    }

    const expected: Session[] = [{
      Id: 'session1',
      ExternalId: 'session1',
      Title: 'Test Session',
      Abstract: 'Session description',
      Presenters: [{
        Id: 'speaker1',
        Name: 'John Doe',
        Tagline: 'Software Engineer',
        Bio: 'Experienced developer',
        ProfilePhotoUrl: 'http://example.com/photo.jpg'
      }],
      Format: 'Workshop',
      Level: 'Intermediate',
      Tags: ['JavaScript', 'Testing']
    }]

    const result = adaptSessionizeSessions(mockAgenda)
    expect(result).toEqual(expected)
  })

  it('should handle sessions without optional fields', () => {
    const mockAgenda = {
      speakers: [{
        id: 'speaker1',
        fullName: 'John Doe',
        tagLine: '',
        bio: '',
        profilePicture: ''
      }],
      categories: [],
      sessions: [{
        id: 'session1',
        title: 'Test Session',
        description: '',
        speakers: ['speaker1'],
        categoryItems: []
      }]
    }

    const expected: Session[] = [{
      Id: 'session1',
      ExternalId: 'session1',
      Title: 'Test Session',
      Abstract: '',
      Presenters: [{
        Id: 'speaker1',
        Name: 'John Doe',
        Tagline: '',
        Bio: '',
        ProfilePhotoUrl: ''
      }],
      Format: '',
      Level: '',
      Tags: []
    }]

    const result = adaptSessionizeSessions(mockAgenda)
    expect(result).toEqual(expected)
  })

  it('should handle multiple speakers per session', () => {
    const mockAgenda = {
      speakers: [
        {
          id: 'speaker1',
          fullName: 'John Doe',
          tagLine: 'Developer',
          bio: 'Bio 1',
          profilePicture: 'photo1.jpg'
        },
        {
          id: 'speaker2',
          fullName: 'Jane Smith',
          tagLine: 'Architect',
          bio: 'Bio 2',
          profilePicture: 'photo2.jpg'
        }
      ],
      categories: [],
      sessions: [{
        id: 'session1',
        title: 'Pair Programming',
        description: 'Description',
        speakers: ['speaker1', 'speaker2'],
        categoryItems: []
      }]
    }

    const result = adaptSessionizeSessions(mockAgenda)

    expect(result[0].Presenters).toHaveLength(2)
    expect(result[0].Presenters[0].Name).toBe('John Doe')
    expect(result[0].Presenters[1].Name).toBe('Jane Smith')
  })

  it('should handle unknown category items gracefully', () => {
    const mockAgenda = {
      speakers: [],
      categories: [
        {
          title: 'Session format',
          items: [{ id: 'format1', name: 'Workshop' }]
        }
      ],
      sessions: [{
        id: 'session1',
        title: 'Test Session',
        description: 'Description',
        speakers: [],
        categoryItems: ['unknown1', 'unknown2']
      }]
    }

    const result = adaptSessionizeSessions(mockAgenda)

    expect(result[0].Format).toBe('')
    expect(result[0].Level).toBe('')
    expect(result[0].Tags).toEqual([])
  })
})