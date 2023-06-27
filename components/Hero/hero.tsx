import React from 'react'
import { StyledHero, StyledConferenceDetails } from './Hero.styled'
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
      sm: { media: '(min-width: 768px)' },
    },
  }

  return (
    <React.Fragment>
      <HiDpiPicture
        config={pixboostConfig}
        alt="DDD Melbourne"
        breakpoints={{
          lg: { op: 'fit?size={WIDTH}x{HEIGHT}', height: 400 },
          sm: { op: 'fit?size={WIDTH}x{HEIGHT}', height: 400 },
        }}
        minWidth={300}
        maxWidth={1500}
        src="http://www.midday.coffee/dddmelb-hero.jpg"
        sizes={{
          lg: '100vw',
          sm: '100vw',
        }}
      />

      <StyledHero>
        {(venue || date) && (
          <StyledConferenceDetails>
            {date && <time dateTime={formatISO(conference.Date)}>{date}</time>}
            {venue && <span>{venue}</span>}
          </StyledConferenceDetails>
        )}
        {/* <StyledCredit>
          Photo by{' '}
          <SafeLink href="https://unsplash.com/@drone_nr" target="_blank">
            Josh Spires
          </SafeLink>{' '}
          - dronenr on Unsplash
        </StyledCredit> */}
      </StyledHero>
    </React.Fragment>
  )
}
