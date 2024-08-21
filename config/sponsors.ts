import { Sponsor, SponsorType } from './types'

const diamondSponsors: Sponsor[] = [
  // {
  //   id: '2024-liberty',
  //   imageUrl: '/static/images/sponsors/2024-liberty.png',
  //   name: 'Liberty',
  //   type: SponsorType.Diamond,
  //   url: 'https://www.liberty.com.au/',
  // },
]

const platinumSponsors: Sponsor[] = [
  {
    id: '2024-Microsoft',
    imageUrl: '/static/images/sponsors/2025-microsoft.png',
    name: 'Microsoft',
    type: SponsorType.Platinum,
    url: 'https://developer.microsoft.com/en-us/advocates/index.html',
  },
  {
    id: '2024-OctopusDeploy',
    imageUrl: '/static/images/sponsors/2025-octopus-deploy.png',
    name: 'Octopus Deploy',
    type: SponsorType.Platinum,
    url: 'https://octopus.com/',
  },
]

const goldSponsors: Sponsor[] = [
  {
    id: 'starrez',
    imageUrl: '/static/images/sponsors/2025-starrez.png',
    name: 'StarRez',
    type: SponsorType.Gold,
    url: 'https://www.starrez.com/',
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
]

const coffeeCartSponsors: Sponsor[] = [
  // {
  //   id: 'kodez',
  //   imageUrl: '/static/images/sponsors/2024-kodez-3.png',
  //   name: 'Kodez',
  //   type: SponsorType.CoffeeCart,
  //   url: 'https://kodez.com.au',
  // },
  // {
  //   id: 'justdigitalpeople',
  //   imageUrl: '/static/images/sponsors/2024-justdigitalpeople.png',
  //   name: 'Just Digital People',
  //   type: SponsorType.CoffeeCart,
  //   url: 'http://www.justdigitalpeople.com.au/',
  // },
]

const serviceSponsors: Sponsor[] = [
  // {
  //   id: '2024-ssw',
  //   imageUrl: '/static/images/sponsors/2024-ssw.png',
  //   name: 'SSW',
  //   type: SponsorType.Service,
  //   serviceProvided: 'Childcare',
  //   url: 'https://www.ssw.com.au/',
  //   logoSize: '58',
  // },
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
