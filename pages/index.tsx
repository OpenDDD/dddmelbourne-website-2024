import React from 'react'
import { Main } from 'layouts/main'
import { NextPage } from 'next'
import { Text } from 'components/global/text'
import { format } from 'date-fns'
import { useConfig } from 'Context/Config'
import getConferenceActions from '../config/actions'
import ImportantDates from '../components/importantDates'
import Link from 'next/link'
import { Sponsors } from '../components/Sponsors/sponsors'

export const Index: NextPage = () => {
  const { conference, dates, currentDate } = useConfig()
  const actions = getConferenceActions(conference, dates)

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

        <ImportantDates conference={conference} actions={actions} currentDate={currentDate} />
        <p>&nbsp;</p>

        <h2>Sponsors</h2>
        <Text>
          We are currently looking for sponsors! If you'd like to explore sponsorship opportunities, please{' '}
          <Link href="/sponsorship">check out our sponsorship page</Link> for more information.
        </Text>
        <Sponsors
          show={!conference.HideSponsors}
          sponsors={conference.Sponsors}
          hideUpsell={conference.HideSponsorshipUpsell}
        />
      </section>
    </Main>
  )
}

export default Index
