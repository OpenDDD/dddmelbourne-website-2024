import { orderBy } from 'components/utils/arraySort'
import SponsorData from 'config/sponsors'
import {
  Conference as IConference,
  TicketNumberWhileVoting,
  TicketPurchasingOptions,
  TicketsProvider,
  ImportantDate,
  Venue,
} from './types'
import { zonedTimeToUtc } from 'date-fns-tz'
import { add, set } from 'date-fns'
import { MelbourneTownHall } from './venues/melbourne-town-hall'

const name = 'DDD Melbourne'
const tagLine = `${name} is an inclusive non-profit conference for the Melbourne software community`

const tz = 'Australia/Melbourne'
const hideDate = false
const ticketPurchasingOptions = TicketPurchasingOptions.OnSale
const staticDate = '2026-02-21T09:00'
const date = zonedTimeToUtc(staticDate, tz)
const endDate = add(date, { hours: 12 })
const currentInstance = 2026
const firstInstance = 2024
const registrationOpenFrom = zonedTimeToUtc('2025-07-15T11:00:00', tz)
const registrationOpenWave2From = zonedTimeToUtc('2025-10-01T11:00:00', tz)
const registrationOpenUntil = null
const presentationSubmissionsOpenFrom = zonedTimeToUtc('2025-07-30T12:00:00', tz)
const presentationSubmissionsOpenUntil = zonedTimeToUtc('2025-09-30T23:59:59', tz)
const votingOpenFrom = zonedTimeToUtc('2025-10-06T00:00:00', tz)
const votingOpenUntil = zonedTimeToUtc('2025-10-20T23:59:59', tz)
const agendaPublishedFrom = zonedTimeToUtc('2025-11-05T12:00:00', tz)
const feedbackOpenFrom = zonedTimeToUtc('9999-11-08T00:00:00', tz)
const feedbackOpenUntil = endDate
const importantDates: ImportantDate[] = [
  {
    Date: presentationSubmissionsOpenFrom,
    Description: 'Call for presentations open',
    Type: 'content',
  },
  {
    Date: presentationSubmissionsOpenUntil,
    Description: 'Call for presentations close',
    Type: 'content',
  },
  {
    Date: registrationOpenFrom,
    Description: 'Ticket sales open',
    Type: 'tickets',
  },
  { Description: 'Voting open', Date: votingOpenFrom, Type: 'voting' },
  { Description: 'Voting close', Date: votingOpenUntil, Type: 'voting' },
  {
    Date: agendaPublishedFrom,
    Description: 'Agenda published',
    Type: 'agenda',
  },
]

if (registrationOpenUntil !== null && Number(ticketPurchasingOptions) === Number(TicketPurchasingOptions.OnSale)) {
  importantDates.push({
    Date: registrationOpenUntil,
    Description: 'Ticket sales close',
    Type: 'tickets',
  })
}

if (!hideDate) {
  importantDates.push({
    Date: date,
    Description: 'Conference day',
    Type: 'conference',
  })
}

const venue: Venue | null = MelbourneTownHall

const Conference: IConference = {
  Name: name,
  Instance: currentInstance.toString(),
  PreviousInstance: (currentInstance - 1).toString(),
  PreviousInstances: [...Array(currentInstance - firstInstance).keys()].map((_, i) => (firstInstance + i).toString()),
  Organiser: {
    Name: 'OZ Dev Inc.',
    Url: 'https://medium.com/ddd-melbourne/the-ddd-melbourne-crew-5f0dd3da09df',
    ShirtColour: 'bright blue',
  },
  TagLine: tagLine,
  SiteDescription: `${tagLine}.`,
  Goal: "Our goal is to create an approachable event that appeals to the whole community, especially people that don't normally get to attend or speak at conferences.",
  GoogleAnalyticsId: 'G-E5CD021NB4',
  TicketPrice: 'TBC',
  ChildcarePrice: 'free',
  ChildcareRegistrationLink: 'https://ti.to/ddd-melbourne/ddd-2026-childcare',
  TicketsProviderId: TicketsProvider.Tito,
  TicketsProviderAccountId: 'ddd-melbourne',
  TicketsProviderEventId: 'ddd-2026',
  TicketsProviderFinancialAssistanceCode: 'financialassistance',
  TicketPurchasingOptions: ticketPurchasingOptions,
  HashTag: 'DDDMelb',
  SellingPoints: ['One day', 'Fully catered', 'Inclusive atmosphere', 'Interesting presentations', 'Awesome people'],
  Handbook: '',
  SessionizeUrl: 'https://sessionize.com/ddd-melbourne-2026/',
  SessionizeEditUrl: 'https://sessionize.com/app/speaker/',
  PreviouslySubmittedTopics:
    'Agile, building great teams, UI design, UX, software testing, virtual reality, women in tech, web accessibility, open source software, workplace culture, mental health, unconscious bias, building engaged teams, self-employment tips, mentoring, Scrum, pair programming, bots, IoT, machine learning, neural networks, quantum encryption, security, reverse engineering, blockchain, Assembly language, automated deployments, mobile development, mobile test automation, Domain Driven Design, cloud native, architecture, microservices, serverless, service meshes, stream programming and Rx, APIs, GraphQL, actors, JavaScript, SPAs, TypeScript, authentication, React, UWP, Elm, HTML, HTTP protocol, Git, Docker and pointers',

  ContactEmail: 'info@dddmelbourne.com',
  SponsorshipEmail: 'sponsorship@dddmelbourne.com',
  MentoringEmail: 'speakers@dddmelbourne.com',
  EmergencyContactName: 'Bron Thulke',
  EmergencyContactPhoneNumber: '0414 431 474',
  MediaOfficerName: 'Alicia Cheah',

  AnonymousReportFormUrl: 'https://forms.office.com/r/adraBbhH8T',

  AnonymousVoting: true,
  PreferentialVoting: true,
  TicketNumberWhileVoting: TicketNumberWhileVoting.Required,
  MinVotes: 6,
  MaxVotes: 6,
  WaitingListCanVoteWithEmail: true,

  TimeZone: tz,
  StaticDate: new Date(staticDate),
  Date: date,
  EndDate: endDate,
  DoorsOpenTime: '8:00am',
  FinishTime: '5:30pm',
  RegistrationOpenFrom: registrationOpenFrom,
  Wave2RegistrationOpenFrom: registrationOpenWave2From,
  RegistrationOpenUntil: registrationOpenUntil,
  PresentationSubmissionsOpenFrom: presentationSubmissionsOpenFrom,
  PresentationSubmissionsOpenUntil: presentationSubmissionsOpenUntil,
  VotingOpenFrom: votingOpenFrom,
  VotingOpenUntil: votingOpenUntil,
  AgendaPublishedFrom: agendaPublishedFrom,
  FeedbackOpenFrom: feedbackOpenFrom,
  FeedbackOpenUntil: feedbackOpenUntil,

  ConferenceFeedbackLink: '/conference-feedback',
  SessionFeedbackLink: '/feedback',

  HideDate: hideDate,
  HideSponsors: false,
  HideSponsorshipUpsell: true,
  HideVenue: venue === null,
  HasAfterParty: false,
  HideAfterpartyVenue: venue === null || venue.Afterparty === null,
  ShowNextSessions: false,

  Venue: venue,

  Socials: {
    Twitter: {
      Id: '971044039',
      Name: 'DDDMelb',
    },
    Flickr: 'https://www.flickr.com/photos/135717775@N07/albums',
    Youtube: 'https://www.youtube.com/@dddmelb',
    Email: 'info@dddmelbourne.com',
    GitHub: 'OpenDDD',
    Instagram: 'dddmelb',
    RedBubble: 'https://www.redbubble.com/people/DDDMelbourne/shop?asc=u',
    Linkedin: 'dddmelbourne',
    Bluesky: {
      Id: '3lcw5viisjg22',
      Name: 'dddmelbourne.bsky.social',
    },
  },

  ImportantContacts: {
    Police: {
      Details: 'Melbourne West Police Station, 313 Spencer St, Docklands VIC 3008',
      Phone: null,
      MapUrl:
        'https://www.google.com/maps/place/Melbourne+West+Police+Station/@-37.813749,144.9488465,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad65d4f44719edf:0xc5a10f192bea4367!8m2!3d-37.8137533!4d144.9510352',
    },
    CentreAgainstSexualAssault: {
      Details: '24 hour line',
      Phone: '1800 806 292',
    },
    EmergencyMedical: {
      Details: 'Royal Melbourne Hospital, 300 Grattan St, Melbourne VIC 3000',
      MapUrl:
        'https://www.google.com/maps/place/The+Royal+Melbourne+Hospital/@-37.7990618,144.9538002,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad65d2e7f540971:0x9d8b2b9975e322e7!8m2!3d-37.7990618!4d144.9559889',
    },
    NonEmergencyMedical: {
      Details: 'Swanston Street Medical Centre, Level 3, 255 Bourke St, Melbourne VIC 3000',
      Phone: null,
      MapUrl:
        'https://www.google.com/maps/place/Swanston+Street+Medical+Centre/@-37.8135749,144.9639683,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad642cb0cd76b79:0xd7d3d0b9719c23c0!8m2!3d-37.8135749!4d144.966157',
    },
  },

  ImportantDates: orderBy(importantDates, (i) => i.Date),

  Sponsors: SponsorData,

  Keynotes: [],

  RoomNames: ['Main hall', 'Swanston room', 'Supper room', 'Yarra room', 'Hoddle room'],
  RoomColors: {
    'Main hall': '#c6effc',
    'Supper room': '#d8edd6',
    'Yarra room': '#f8d3d0',
    'Hoddle room': '#ffe2cc',
    'Swanston room': '#fff5cc',
  },

  Livestreams: [
    'https://youtu.be/ovEA5PaOdWo?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
    'https://youtu.be/8mq3bCMrmbE?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
    'https://youtu.be/DsFlSkTPH-Y?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
    'https://youtu.be/pqRQ4rN6adg?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
    'https://youtu.be/ox6ixHfs4xM?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
    'https://youtu.be/2KjEBFAVgoU?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
    'https://youtu.be/Plo8dSxAjHw?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
    'https://youtu.be/EU-VeLYi8LM?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
    'https://youtu.be/LQ5vtriC_bI?list=PLkLJSte3oodSYGOtIq-4ntOD5CH8b-lkx',
  ],

  SessionGroups: [
    {
      sessions: ['337380'],
      timeStart: set(date, { hours: 9, minutes: 10 }),
      timeEnd: set(date, { hours: 10, minutes: 0 }),
      type: 'SessionIds',
    },
    {
      sessions: ['344274', '343408', '344367', '344044', '344101', '343942', '342543', '334148', '344023'],
      timeStart: set(date, { hours: 10, minutes: 10 }),
      timeEnd: set(date, { hours: 10, minutes: 55 }),
      type: 'SessionIds',
    },
    {
      sessions: ['333791', '344494', '338797', '344002', '344418', '343628', '338125', '343620', '339320'],
      timeStart: set(date, { hours: 11, minutes: 25 }),
      timeEnd: set(date, { hours: 12, minutes: 10 }),
      type: 'SessionIds',
    },
    {
      sessions: ['333736', '343984', '340959', '344464', '343953', '341816', '344501', '344419', '342452'],
      timeStart: set(date, { hours: 12, minutes: 20 }),
      timeEnd: set(date, { hours: 12, minutes: 40 }),
      type: 'SessionIds',
    },
    {
      sessions: ['337322', '344493', '343385', '343105', '336320', '343968', '339597', '344431', '341472'],
      timeStart: set(date, { hours: 12, minutes: 50 }),
      timeEnd: set(date, { hours: 13, minutes: 35 }),
      type: 'SessionIds',
    },
    {
      sessions: ['379497', '379496'],
      timeStart: set(date, { hours: 14, minutes: 35 }),
      timeEnd: set(date, { hours: 15, minutes: 5 }),
      type: 'SessionIds',
    },
    {
      sessions: ['343399', '343561', '341315', '340848', '343948', '339017', '343697', ['343793', '344491'], '344427'],
      timeStart: set(date, { hours: 15, minutes: 15 }),
      timeEnd: set(date, { hours: 15, minutes: 35 }),
      type: 'SessionIds',
    },
    {
      sessions: ['383016'],
      timeStart: set(date, { hours: 16, minutes: 5 }),
      timeEnd: set(date, { hours: 16, minutes: 55 }),
      type: 'SessionIds',
    },
  ],

  VolunteerSubmissionFormId: '9c302d13-e580-4edf-ba13-5bc27eb7b97f',
}

export default Conference
