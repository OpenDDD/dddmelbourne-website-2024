import { Sponsor, SponsorType } from './types'

const diamondSponsors: Sponsor[] = [
  {
    id: '2024-liberty',
    imageUrl: '/static/images/sponsors/2024-liberty.png',
    name: 'Liberty',
    type: SponsorType.Diamond,
    url: 'https://www.liberty.com.au/',
  },
]

const platinumSponsors: Sponsor[] = [
  {
    id: '2024-DevExpress',
    imageUrl: '/static/images/sponsors/2024-devexpress.png',
    name: 'DevExpress',
    type: SponsorType.Platinum,
    url: 'https://www.devexpress.com/',
  },
  {
    id: '2024-OctopusDeploy',
    imageUrl: '/static/images/sponsors/2024-octopus-deploy.png',
    name: 'DevExpress',
    type: SponsorType.Platinum,
    url: 'https://octopus.com/',
  },
]

const goldSponsors: Sponsor[] = [
  {
    id: 'webjet',
    imageUrl: '/static/images/sponsors/2024-webjet.png',
    name: 'MakerX',
    type: SponsorType.Gold,
    url: 'https://webjet.com.au',
  },
  {
    id: 'netwealth',
    imageUrl: '/static/images/sponsors/2024-netwealth.jpg',
    name: 'Netwealth',
    type: SponsorType.Gold,
    url: 'https://netwealth.com.au',
  },
]

const silverSponsors: Sponsor[] = [
  {
    id: 'qoria',
    imageUrl: '/static/images/sponsors/2024-qoria.png',
    name: 'Qoria',
    type: SponsorType.Silver,
    url: 'https://qoria.com/',
  },
  {
    id: 'sizzle',
    imageUrl: '/static/images/sponsors/2024-sizzle.png',
    name: 'The Sizzle',
    type: SponsorType.Silver,
    url: 'https://thesizzle.com.au/',
  },
]

const coffeeCartSponsors: Sponsor[] = [
  {
    id: 'kodez',
    imageUrl: '/static/images/sponsors/2024-kodez-3.png',
    name: 'Kodez',
    type: SponsorType.CoffeeCart,
    url: 'https://kodez.com.au',
  },
]

const serviceSponsors: Sponsor[] = [
  {
    id: '2024-luminary',
    imageUrl: '/static/images/sponsors/2024-luminary.png',
    name: 'Luminary',
    type: SponsorType.Service,
    serviceProvided: 'Wi-Fi',
    url: 'https://luminary.com/',
  },
  {
    id: '2024-ssw',
    imageUrl: '/static/images/sponsors/2024-ssw.png',
    name: 'SSW',
    type: SponsorType.Service,
    serviceProvided: 'Childcare',
    url: 'https://www.ssw.com.au/',
  },
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
