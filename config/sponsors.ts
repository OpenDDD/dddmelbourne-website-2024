import {Sponsor, SponsorType} from './types'

const diamondSponsors: Sponsor[] = [
  {
    id: '2027-pinch',
    imageUrl: '/static/images/sponsors/2026-pinch.png',
    name: 'Pinch',
    type: SponsorType.Diamond,
    url: 'https://getpinch.com.au/',
  },
]
const platinumSponsors: Sponsor[] = [
  {
    id: '2027-OctopusDeploy',
    imageUrl: '/static/images/sponsors/2026-octopus-deploy.png',
    name: 'Octopus Deploy',
    type: SponsorType.Platinum,
    url: 'https://octopus.com/',
  },
  {
    id: '2027-netwealth',
    imageUrl: '/static/images/sponsors/2026-netwealth.png',
    name: 'Netwealth',
    type: SponsorType.Platinum,
    url: 'https://www.netwealth.com.au/',
  },
]
const goldSponsors: Sponsor[] = []
const silverSponsors: Sponsor[] = []
const coffeeCartSponsors: Sponsor[] = [
  {
    id: '2027-rea',
    imageUrl: '/static/images/sponsors/2026-rea.png',
    name: 'REAGroup',
    type: SponsorType.CoffeeCart,
    url: 'https://www.realestate.com.au/',
    logoSize: '60',
  },
  {
    id: '2027-aiea',
    imageUrl: '/static/images/sponsors/2027-aiei.png',
    name: 'AI Engineering Melbourne',
    type: SponsorType.CoffeeCart,
    url: 'https://webdirections.org/',
  },
]
const serviceSponsors: Sponsor[] = []
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
