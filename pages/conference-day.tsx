import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { format } from 'date-fns'
import { useConfig } from 'Context/Config'
import { Session } from 'config/types'
import { Main } from 'layouts/main'
import { getCommonServerSideProps } from 'components/utils/getCommonServerSideProps'
import { fetchSessions } from 'components/utils/useSessions'
import { useSessionGroups } from 'components/utils/useSessionGroups'
import { Text } from 'components/global/text'
import { roomLocations } from 'components/venueMapData'
import { Image } from 'pixboost-react'
import styled from '@emotion/styled'
import { SafeLink } from '../components/global/safeLink'

interface ConferencePageProps {
  sessions?: Session[]
  sessionId?: string
}

const pixboostConfig = {
  apiKey: 'MjMyNzUwMTg3Nw__',
  domain: 'pixboost.com',
  breakpoints: {
    lg: { media: '(min-width: 1024px)' },
    sm: {},
  },
}

const StyledImage = styled(Image)(() => ({
  textAlign: 'center',
  maxWidth: '100%',
  height: 'auto',
}))

const ConferenceDayPage: NextPage<ConferencePageProps> = ({ sessions }) => {
  const { conference, dates } = useConfig()
  if (dates.IsInProgress) {
    // dummy
  }

  const { currentSessionGroup } = useSessionGroups(sessions)

  if (currentSessionGroup && currentSessionGroup.sessions.length > 0) {
    // NB: This is quite brittle, as it assumes that the list of current sessions is returned in exactly the same order as the definition of rooms
    currentSessionGroup.sessions.map(function (session: Session | Session[], i) {
      const presenters = []

      session[0].Presenters.map((p) => {
        presenters.push(p.Name)
      })
      if (!roomLocations.features[i]) return
      roomLocations.features[i].properties.currentEvent = {
        eventId: session[0].Id,
        eventName: session[0].Title,
        eventPresenters: presenters.join(', '),
      }
    })
  }

  return (
    <Main title="Conference Day" description="Conference day information">
      <h1>
        {conference.Name} {format(conference.Date, 'y')} Conference Day Information
      </h1>

      <h2>Getting here</h2>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <SafeLink href="https://maps.app.goo.gl/JkTzY9dNDGmeAWDD6" target="_blank">
          <StyledImage
            src="dddmelbourne/static/images/map/melbourne-town-hall-map.png"
            alt={'Melbourne Town Hall Map'}
            config={pixboostConfig}
            op={'optimise'}
            lazy={false}
          />
        </SafeLink>
      </div>

      <Text>
        Melbourne Town Hall is on the corner of Collins and Swanston Street in the CBD. The address is 90/130 Swanston
        Street, Melbourne VIC 3000.
      </Text>

      <Text>
        The closest train station to the Town Hall is Flinders Street Station. The closest tram stop is Town
        Hall/Collins Street which is serviced by trams 109, 48, 12, 11 and 6.
      </Text>

      <Text>
        The nearest car park is Wilsons Parking on 172-192 Flinders Lane. Please note that Swanston Street is closed to
        cars and only vehicles with a special permit can enter Swanston Street. For that reason, we highly recommend
        public transport as the main mode of transport for attendees. There are drop-off zones on Collins Street that
        are a short walking distance from the Town Hall Main Entrance.
      </Text>

      <h2>Accessibility</h2>

      <Text>
        Melbourne Town Hall is wheelchair accessible. Enter the venue via the copper doors which are situated on the
        left-hand side when facing the main entrance and take the lift to Level 1. All Melbourne Town hall rooms are
        fully accessible.
      </Text>

      <Text>Melbourne Townhall has accessible restrooms located on the Ground and Third Floor.</Text>

      <h2>Registration and security</h2>
      {/*TODO: Image*/}

      <Text>
        Town Hall has security personnel stationed at the main entrance on Swanston Street. Please note that it is a
        venue requirement and condition of entry that all bags are searched by Security.
      </Text>

      <Text>
        There will be a registration desk located in the Level 1 Foyer, directly up the stairs from the main entrance.
        You can pick up your badge and lanyard here. Please note that you are required to keep your lanyard on at all
        times during the conference.
      </Text>

      <h2>Photo policy</h2>

      <Text>
        We will have a videographer and photographer roaming on the day. If you are not comfortable with being filmed or
        photographed, please let one of our organisers or volunteers know at registration time and they will provide you
        with a colour-coded lanyard to indicate this.
      </Text>

      <h2>Prize draw</h2>

      <Text>
        This image is a collage featuring promotional materials for an event. On the left, there are various
        gaming-related prizes, including an Xbox console with 'Diablo' artwork, a Nintendo Switch with 'Zelda' imagery,
        a LEGO 'Raiders Lost Tomb' set, Webjet gift cards, and Bose headphones. On the right, there's a photo of a
        crowded event hall with attendees, the logo of DDD Melbourne, and a call to action to use the hashtag '#DDDMelb'
        on Twitter, alongside the official Twitter handle '@DDDMelb' and a snapshot of the account profile
      </Text>

      <Text>
        At registration time, you can pick up your sponsor bingo card, which allows you to collect a stamp from each
        vendor booth you visit. You can submit your completed card in a raffle on the day for your chance to win amazing
        prizes!
      </Text>

      <h2>Sharing your experience</h2>

      <Text>We’ll be live-posting from the DDD Melbourne X channel on the day, so don’t forget to follow us here.</Text>

      <Text>
        We’d also love for you to share your conference experience on social media! Whether you’re taking selfies,
        sharing your key takeaways from the sessions, or taking Instagram-worthy shots of the after party, don't forget
        to tag our channels and use our official conference hashtag #DDDMelb when posting.
      </Text>

      <h2>Coffee cart</h2>

      <Text>
        The image is split into two scenes. On the left, an espresso machine pours fresh coffee into two white cups,
        capturing a moment in a bustling coffee shop with the barista's hand in motion. On the right, an assortment of
        gourmet canapés is presented on wooden boards, featuring a variety of toppings like smoked salmon, cream cheese,
        sun-dried tomatoes, and cured meats on toasted bread, suggesting a catering setup for an event.
      </Text>

      <Text>We will have complimentary barista coffee available on the day from two locations.</Text>

      <ul>
        <li>Foyer: Coffee and hot drinks will be available all day.</li>
        <li>
          Main hall: Coffee and hot drinks will only be available during mealtimes to avoid disrupting talks that are in
          session.
        </li>
      </ul>

      <Text>Thank you to our coffee sponsors Kodez and justdigitalpeople!</Text>

      <h2>After party</h2>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <SafeLink href="https://maps.app.goo.gl/v6XsYvwGmUsVNpiG7" target="_blank">
          <StyledImage
            src="dddmelbourne/static/images/map/beer-deluxe-map.png"
            alt={'Melbourne Town Hall Map'}
            config={pixboostConfig}
            op={'optimise'}
          />
        </SafeLink>
      </div>

      <Text>
        The DDD Melbourne after party takes place at 6pm at Beer DeLuxe, Federation Square, only a short walk from the
        town hall. Drinks and light canapes will be provided. Free entry to the after party is included with every
        ticket purchase.
      </Text>

      <h2>Code of conduct</h2>

      <Text>
        DDD Melbourne is dedicated to providing a harassment-free conference experience for everyone, regardless of but
        not limited to: gender, gender identity and expression, sexual orientation, disability, physical appearance,
        body size, race, age or religion. We do not tolerate harassment of conference participants in any form. Sexual
        language and imagery is not appropriate anywhere. This applies to conference talks also.
      </Text>

      <Text>
        Conference participants or anyone interacting with the event violating these rules may be sanctioned or expelled
        from the conference without a refund at the discretion of the conference organisers. Click here to view the full
        Code of Conduct.
      </Text>

      <Text>
        Please don't hesitate to reach out to any DDD Melbourne organisers and volunteers on the day if you need any
        assistance.
      </Text>

      <Text>We look forward to welcoming you this Saturday for an incredible conference experience!</Text>
    </Main>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { dates } = getCommonServerSideProps(context)

  if (!dates.WeekBefore) {
    return { redirect: { destination: '/', permanent: false } }
  }

  const sessions = await fetchSessions(process.env.NEXT_PUBLIC_GET_AGENDA_URL)
  const sessionId = context.query.sessionId

  return {
    props: {
      ...(sessions ? { sessions } : {}),
      ...(sessionId ? { sessionId } : {}),
    },
  }
}

export default ConferenceDayPage
