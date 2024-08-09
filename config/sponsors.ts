import { Sponsor } from './types'

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
  // {
  //   id: '2024-DevExpress',
  //   imageUrl: '/static/images/sponsors/2024-devexpress.png',
  //   name: 'DevExpress',
  //   type: SponsorType.Platinum,
  //   url: 'https://www.devexpress.com/',
  // },
  // {
  //   id: '2024-OctopusDeploy',
  //   imageUrl: '/static/images/sponsors/2024-octopus-deploy.png',
  //   name: 'Octopus Deploy',
  //   type: SponsorType.Platinum,
  //   url: 'https://octopus.com/',
  // },
]

const goldSponsors: Sponsor[] = [
  // {
  //   id: 'webjet',
  //   imageUrl: '/static/images/sponsors/2024-webjet.png',
  //   name: 'MakerX',
  //   type: SponsorType.Gold,
  //   url: 'https://webjet.com.au',
  // },
  // {
  //   id: 'insight',
  //   imageUrl: '/static/images/sponsors/2024-insight.jpg',
  //   name: 'Insight',
  //   type: SponsorType.Gold,
  //   url: 'https://au.insight.com/',
  // },
  // {
  //   id: 'netwealth',
  //   imageUrl: '/static/images/sponsors/2024-netwealth.jpg',
  //   name: 'Netwealth',
  //   type: SponsorType.Gold,
  //   url: 'https://netwealth.com.au',
  // },
  // {
  //   id: 'github',
  //   imageUrl: '/static/images/sponsors/2024-github.png',
  //   name: 'GitHub',
  //   type: SponsorType.Gold,
  //   url: 'https://github.com',
  //   logoSize: '50',
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
  //   id: 'sizzle',
  //   imageUrl: '/static/images/sponsors/2024-sizzle.png',
  //   name: 'The Sizzle',
  //   type: SponsorType.Silver,
  //   url: 'https://thesizzle.com.au/',
  // },
  // {
  //   id: 'kaleida',
  //   imageUrl: '/static/images/sponsors/2024-kaleida.png',
  //   name: 'Kaleida',
  //   type: SponsorType.Silver,
  //   url: 'https://www.kaleida.team/',
  //   logoSize: '60',
  // },
  // {
  //   id: 'umbraco',
  //   imageUrl: '/static/images/sponsors/2024-umbraco.png',
  //   name: 'Umbraco',
  //   type: SponsorType.Silver,
  //   url: 'https://umbraco.com/',
  //   logoSize: '60',
  // },
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
