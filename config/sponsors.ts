import { Sponsor } from './types'

const diamondSponsors: Sponsor[] = [
  // {
  //   id: '2025-pinch',
  //   imageUrl: '/static/images/sponsors/2025-pinch.png',
  //   name: 'Pinch',
  //   type: SponsorType.Diamond,
  //   url: 'https://getpinch.com.au/',
  // },
]

const platinumSponsors: Sponsor[] = [
  // {
  //   id: '2024-Microsoft',
  //   imageUrl: '/static/images/sponsors/2025-microsoft.png',
  //   name: 'Microsoft',
  //   type: SponsorType.Platinum,
  //   url: 'https://developer.microsoft.com/en-us/advocates/index.html',
  // },
  // {
  //   id: '2024-OctopusDeploy',
  //   imageUrl: '/static/images/sponsors/2025-octopus-deploy.png',
  //   name: 'Octopus Deploy',
  //   type: SponsorType.Platinum,
  //   url: 'https://octopus.com/',
  // },
]

const goldSponsors: Sponsor[] = [
  // {
  //   id: 'starrez',
  //   imageUrl: '/static/images/sponsors/2025-starrez.png',
  //   name: 'StarRez',
  //   type: SponsorType.Gold,
  //   url: 'https://www.starrez.com/',
  // },
  // {
  //   id: 'webjet',
  //   imageUrl: '/static/images/sponsors/2024-webjet.png',
  //   name: 'Webjet',
  //   type: SponsorType.Gold,
  //   url: 'https://www.webjet.com.au/',
  // },
  // {
  //   id: 'netwealth',
  //   imageUrl: '/static/images/sponsors/2024-netwealth.jpg',
  //   name: 'Netwealth',
  //   type: SponsorType.Gold,
  //   url: 'https://www.netwealth.com.au/',
  // },
  // {
  //   id: 'ndcmelb',
  //   imageUrl: '/static/images/sponsors/2025-ndcmelb.png',
  //   name: 'NDC Melbourne',
  //   type: SponsorType.Gold,
  //   url: 'https://ndcmelbourne.com/',
  // },
  // {
  //   id: 'datastax',
  //   imageUrl: '/static/images/sponsors/2025-datastax.png',
  //   name: 'Datastax',
  //   type: SponsorType.Gold,
  //   url: 'https://www.datastax.com/',
  //   logoSize: '20',
  // },
  // {
  //   id: 'clicksend',
  //   imageUrl: '/static/images/sponsors/2025-clicksend.png',
  //   name: 'Clicksend',
  //   type: SponsorType.Gold,
  //   url: 'https://www.clicksend.com',
  //   logoSize: '40',
  // },
]

const silverSponsors: Sponsor[] = [
  // {
  //   id: 'qoria',
  //   imageUrl: '/static/images/sponsors/2024-qoria.png',
  //   name: 'Qoria',
  //   type: SponsorType.Silver,
  //   url: 'https://qoria.com/',
  // },
  // {
  //   id: 'kodez',
  //   imageUrl: '/static/images/sponsors/2024-kodez-3.png',
  //   name: 'Kodez',
  //   type: SponsorType.Silver,
  //   url: 'https://kodez.com.au',
  // },
  // {
  //   id: 'insight',
  //   imageUrl: '/static/images/sponsors/2025-insight.jpg',
  //   name: 'Insight',
  //   type: SponsorType.Silver,
  //   url: 'https://au.insight.com/',
  //   logoSize: '35',
  // },
]

const coffeeCartSponsors: Sponsor[] = [
  // {
  //   id: 'datastax',
  //   imageUrl: '/static/images/sponsors/2025-datastax.png',
  //   name: 'Datastax',
  //   type: SponsorType.CoffeeCart,
  //   url: 'https://www.datastax.com/',
  //   logoSize: '20',
  // },
  // {
  //   id: 'rea',
  //   imageUrl: '/static/images/sponsors/2025-rea.png',
  //   name: 'REAGroup',
  //   type: SponsorType.CoffeeCart,
  //   url: 'https://www.realestate.com.au/',
  //   logoSize: '60',
  // },
]

const serviceSponsors: Sponsor[] = [
  // {
  //   id: '2024-luminary',
  //   imageUrl: '/static/images/sponsors/2024-luminary.png',
  //   name: 'Luminary',
  //   type: SponsorType.Service,
  //   serviceProvided: 'Wi-Fi',
  //   url: 'https://luminary.com/',
  //   logoSize: '40',
  // },
]

const communityPartners: Sponsor[] = []

const Sponsors: Sponsor[] = [
  ...diamondSponsors,
  ...platinumSponsors,
  ...goldSponsors,
  ...silverSponsors,
  ...coffeeCartSponsors,
  ...serviceSponsors,
  ...communityPartners,
]

export default Sponsors
