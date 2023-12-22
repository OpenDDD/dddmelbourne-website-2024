import Link from 'next/link'
import React, { Fragment } from 'react'
import { Sponsor, SponsorType } from 'config/types'
import { StyledSponsorsContainer, StyledSponsorLink } from './Sponsors.styled'

interface SponsorsProps {
  sponsors: Sponsor[]
  show: boolean
  hideUpsell?: boolean
}

// const imgUrl = (img, width) =>
//   `https://pixboost.com/api/2/img/dddmelbourne${img}/resize?size=${width}&auth=MjMyNzUwMTg3Nw__`
const imgUrl = (img, width) =>
  `http://localhost:8080/img/https://dddmelbourne.com/${img}/resize?size=${width}&trim-border`

export const Sponsors = ({ sponsors, show, hideUpsell }: SponsorsProps) => {
  const showSponsors = show && sponsors.length > 0

  if (!showSponsors) {
    return (
      <StyledSponsorsContainer>
        <h2>Sponsors</h2>
        <p>
          We are currently looking for sponsors! If you'd like to explore sponsorship opportunities, please check out
          our{' '}
          <Link href="/sponsorship">
            <a>sponsorship page</a>
          </Link>{' '}
          for more information.
        </p>
      </StyledSponsorsContainer>
    )
  }

  const diamondSponsors: Sponsor[] = []
  const platinumSponsors: Sponsor[] = []
  const goldSponsors: Sponsor[] = []
  const silverSponsors: Sponsor[] = []
  const coffeeCartSponsors: Sponsor[] = []
  const serviceSponsors: Sponsor[] = []
  const communitySponsors: Sponsor[] = []
  const standardSponsors: Sponsor[] = []

  for (const sponsor of sponsors) {
    switch (sponsor.type) {
      case SponsorType.Diamond:
        diamondSponsors.push(sponsor)
        break
      case SponsorType.Platinum:
        platinumSponsors.push(sponsor)
        break
      case SponsorType.Gold:
        goldSponsors.push(sponsor)
        break
      case SponsorType.Silver:
        silverSponsors.push(sponsor)
        break
      case SponsorType.CoffeeCart:
        coffeeCartSponsors.push(sponsor)
        break
      case SponsorType.Service:
        serviceSponsors.push(sponsor)
        break
      case SponsorType.Community:
        communitySponsors.push(sponsor)
        break
      case SponsorType.Standard:
        standardSponsors.push(sponsor)
        break
      default:
        // we don't have a way to handle this sponsor
        break
    }
  }

  return (
    <Fragment>
      <StyledSponsorsContainer>
        {diamondSponsors.length > 0 && (
          <Fragment>
            <h2>Diamond Sponsors</h2>
            {diamondSponsors.map((sponsor) => (
              <StyledSponsorLink href={sponsor.url} target="_blank" key={sponsor.name} title={sponsor.name}>
                <img src={imgUrl(sponsor.imageUrl, 350)} alt={sponsor.name} loading="lazy" />
              </StyledSponsorLink>
            ))}
          </Fragment>
        )}

        {platinumSponsors.length > 0 && (
          <Fragment>
            <h2>Platinum Sponsors</h2>
            {platinumSponsors.map((sponsor) => (
              <StyledSponsorLink href={sponsor.url} target="_blank" key={sponsor.name} title={sponsor.name}>
                <img src={imgUrl(sponsor.imageUrl, 250)} alt={sponsor.name} loading="lazy" />
              </StyledSponsorLink>
            ))}
          </Fragment>
        )}

        {goldSponsors.length > 0 && (
          <Fragment>
            <h2>Gold Sponsors</h2>
            {goldSponsors.map((sponsor) => (
              <StyledSponsorLink href={sponsor.url} target="_blank" key={sponsor.name} title={sponsor.name}>
                <img src={imgUrl(sponsor.imageUrl, 200)} alt={sponsor.name} loading="lazy" />
              </StyledSponsorLink>
            ))}
          </Fragment>
        )}

        {silverSponsors.length > 0 && (
          <Fragment>
            <h2>Silver Sponsors</h2>
            {silverSponsors.map((sponsor) => (
              <StyledSponsorLink href={sponsor.url} target="_blank" key={sponsor.name} title={sponsor.name}>
                <img src={imgUrl(sponsor.imageUrl, 170)} alt={sponsor.name} loading="lazy" />
              </StyledSponsorLink>
            ))}
          </Fragment>
        )}

        {coffeeCartSponsors.length > 0 && (
          <Fragment>
            <h2>Coffee Cart by:</h2>
            {coffeeCartSponsors.map((sponsor) => (
              <StyledSponsorLink href={sponsor.url} target="_blank" key={sponsor.name} title={sponsor.name}>
                <img src={imgUrl(sponsor.imageUrl, 160)} alt={sponsor.name} loading="lazy" />
              </StyledSponsorLink>
            ))}
          </Fragment>
        )}

        {serviceSponsors.length > 0 && (
          <Fragment>
            {serviceSponsors.map((sponsor) => (
              <Fragment key={sponsor.serviceProvided}>
                <h2>{sponsor.serviceProvided} by:</h2>
                <StyledSponsorLink href={sponsor.url} target="_blank" key={sponsor.name} title={sponsor.name}>
                  <img src={imgUrl(sponsor.imageUrl, 160)} alt={sponsor.name} loading="lazy" />
                </StyledSponsorLink>
              </Fragment>
            ))}
          </Fragment>
        )}

        {communitySponsors.length > 0 && (
          <Fragment>
            <h2>Community Partners</h2>
            {communitySponsors.map((sponsor) => (
              <StyledSponsorLink href={sponsor.url} target="_blank" key={sponsor.name} title={sponsor.name}>
                <img src={imgUrl(sponsor.imageUrl, 160)} alt={sponsor.name} loading="lazy" />
              </StyledSponsorLink>
            ))}
          </Fragment>
        )}
      </StyledSponsorsContainer>

      {!hideUpsell && (
        <p>
          If you'd like to explore sponsorship opportunities, please check out our{' '}
          <Link href="/sponsorship">
            <a>sponsorship page</a>
          </Link>{' '}
          for more information.
        </p>
      )}

      {standardSponsors.length > 0 && (
        <StyledSponsorsContainer>
          <h2>Prize Sponsors</h2>
          {standardSponsors.map((sponsor) => (
            <StyledSponsorLink href={sponsor.url} target="_blank" key={sponsor.name} title={sponsor.name}>
              <img src={imgUrl(sponsor.imageUrl, 160)} alt={sponsor.name} loading="lazy" />
            </StyledSponsorLink>
          ))}
        </StyledSponsorsContainer>
      )}
    </Fragment>
  )
}
