import { Sponsor, SponsorType } from './types'

const platinumSponsors: Sponsor[] = [
  {
    id: '2024-liberty',
    imageUrl: '/static/images/sponsors/2024-liberty.png',
    name: 'Liberty',
    type: SponsorType.Platinum,
    url: 'https://www.liberty.com.au/',
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
    imageUrl: '/static/images/sponsors/2024-netwealth.png',
    name: 'Netwealth',
    type: SponsorType.Gold,
    url: 'https://netwealth.com.au',
  },
]

const silverSponsors: Sponsor[] = []

const coffeeCartSponsors: Sponsor[] = [
  {
    id: 'kodez',
    imageUrl: '/static/images/sponsors/2024-kodez.png',
    name: 'Kodez',
    type: SponsorType.CoffeeCart,
    url: 'https://kodez.com.au',
  },
]

const serviceSponsors: Sponsor[] = [
  {
    id: '2022-luminary',
    imageUrl: '/static/images/sponsors/2024-luminary.png',
    name: 'Luminary',
    type: SponsorType.Service,
    serviceProvided: 'Wi-Fi',
    url: 'https://luminary.com/',
  },
]

const communityPartners: Sponsor[] = []

const Sponsors: Sponsor[] = [
  ...platinumSponsors,
  ...goldSponsors,
  ...silverSponsors,
  ...coffeeCartSponsors,
  ...serviceSponsors,
  ...communityPartners,
]

export default Sponsors
