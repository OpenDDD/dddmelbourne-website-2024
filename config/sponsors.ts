import { Sponsor, SponsorType } from './types'

const diamondSponsors: Sponsor[] = [
  {
    id: '2026-pinch',
    imageUrl: '/static/images/sponsors/2026-pinch.png',
    name: 'Pinch',
    type: SponsorType.Diamond,
    url: 'https://getpinch.com.au/',
  },
]

const platinumSponsors: Sponsor[] = [
  {
    id: '2026-OctopusDeploy',
    imageUrl: '/static/images/sponsors/2026-octopus-deploy.png',
    name: 'Octopus Deploy',
    type: SponsorType.Platinum,
    url: 'https://octopus.com/',
  },
  {
    id: '2026-netwealth',
    imageUrl: '/static/images/sponsors/2026-netwealth.png',
    name: 'Netwealth',
    type: SponsorType.Platinum,
    url: 'https://www.netwealth.com.au/',
  },
]

const goldSponsors: Sponsor[] = [
  {
    id: '2026-Microsoft',
    imageUrl: '/static/images/sponsors/2026-microsoft.png',
    name: 'Microsoft',
    type: SponsorType.Gold,
    url: 'https://developer.microsoft.com/en-us/advocates/index.html',
  },
  {
    id: '2026-umbraco',
    imageUrl: '/static/images/sponsors/2026-umbraco.png',
    name: 'Umbraco',
    type: SponsorType.Gold,
    url: 'https://umbraco.com/',
  },
  {
    id: '2026-twilio',
    imageUrl: '/static/images/sponsors/2026-twilio.png',
    name: 'Twilio',
    type: SponsorType.Gold,
    url: 'https://www.twilio.com/',
  },
]

const silverSponsors: Sponsor[] = [
  {
    id: '2026-stile',
    imageUrl: '/static/images/sponsors/2026-stile.png',
    name: 'Stile Education',
    type: SponsorType.Silver,
    url: 'https://stileeducation.com/',
  },
]

const coffeeCartSponsors: Sponsor[] = [
  // {
  //   id: '2026-drawboard',
  //   imageUrl: '/static/images/sponsors/2025-drawboard.png',
  //   name: 'Drawboard',
  //   type: SponsorType.CoffeeCart,
  //   url: 'https://www.drawboard.com/',
  //   logoSize: '60',
  // },
  {
    id: '2026-rea',
    imageUrl: '/static/images/sponsors/2026-rea.png',
    name: 'REAGroup',
    type: SponsorType.CoffeeCart,
    url: 'https://www.realestate.com.au/',
    logoSize: '60',
  },
]

const serviceSponsors: Sponsor[] = [
  {
    id: '2026-luminary',
    imageUrl: '/static/images/sponsors/2026-luminary.png',
    name: 'Luminary',
    type: SponsorType.Service,
    serviceProvided: 'Wi-Fi',
    url: 'https://luminary.com/',
    logoSize: '40',
  },
  {
    id: '2026-kaleida',
    imageUrl: '/static/images/sponsors/2026-kaleida.png',
    name: 'Luminary',
    type: SponsorType.Service,
    serviceProvided: 'Networking Breakfast',
    url: 'https://www.kaleida.team/',
    logoSize: '40',
  },
  // {
  //   id: '2026-nonzerosum',
  //   imageUrl: '/static/images/sponsors/2026-nonzerosum.png',
  //   name: 'Non Zero Sum',
  //   type: SponsorType.Service,
  //   serviceProvided: 'Childcare',
  //   url: 'https://nonzerosum.au/',
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
