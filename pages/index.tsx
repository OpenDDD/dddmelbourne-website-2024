import React from 'react'
import { Main } from 'layouts/main'
import { NextPage } from 'next'
import { Text } from 'components/global/text'
import { format } from 'date-fns'
import { useConfig } from 'Context/Config'

export const Index: NextPage = () => {
  const { conference } = useConfig()

  return (
    <Main title="Home" showHero={true}>
      <section>
        <h2>
          {conference.Name} {format(conference.Date, 'y')}
        </h2>
        <Text>
          {conference.Name} is an inclusive non-profit conference for the software community. Our goal is to create an
          approachable event that appeals to the whole community, especially people who usually don’t have the
          opportunity to attend, or speak at, conferences.
        </Text>

        <h2>Important Dates</h2>
        <Text>Coming soon!</Text>

        <h2>Sponsors</h2>
        <Text>
          We are currently looking for sponsors! If you'd like to explore sponsorship opportunities, please check out
          our sponsorship page for more information.
        </Text>
      </section>
    </Main>
  )
}

export default Index
