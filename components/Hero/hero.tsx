import React from 'react'
import { StyledConferenceDetails, HeroContentWrapper, HeroWrapper } from './Hero.styled'
import { formatISO } from 'date-fns'
import { useConfig } from 'Context/Config'
import { HiDpiPicture } from 'pixboost-react'

export const Hero = (): JSX.Element => {
  const { conference, dates } = useConfig()
  const venue = !conference.HideVenue ? conference.Venue.Name : false
  const date = !conference.HideDate && !dates.IsComplete ? dates.DisplayFormatted('do MMMM yyyy') : false

  const pixboostConfig = {
    apiKey: 'MjMyNzUwMTg3Nw__',
    domain: 'pixboost.com',
    breakpoints: {
      lg: { media: '(min-width: 1024px)' },
      sm: {},
    },
  }

  return (
    <React.Fragment>
      <HeroWrapper>
        {(venue || date) && (
          <HeroContentWrapper>
            <StyledConferenceDetails>
              {date && <time dateTime={formatISO(conference.Date)}>{date}</time>}
              {venue && <span>{venue}</span>}
            </StyledConferenceDetails>
          </HeroContentWrapper>
        )}
        <HiDpiPicture
          config={pixboostConfig}
          alt="People listening to the talk from previous DDD Melbourne"
          breakpoints={{
            lg: { op: 'resize?size={WIDTH}' },
            sm: { op: 'resize?size={WIDTH}' },
          }}
          minWidth={300}
          maxWidth={3000}
          src="https://dddmelbourne.com/hero/dddmelb-hero.jpg"
          sizes={{
            lg: '100vw',
            sm: '100vw',
          }}
          imgProps={{ fetchpriority: 'high', width: 4898, height: 2067 }}
        />
      </HeroWrapper>
    </React.Fragment>
  )
}
