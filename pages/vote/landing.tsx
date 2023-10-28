import { useConfig } from 'Context/Config'
import { Main } from 'layouts/main'
import { GetServerSideProps } from 'next'
import { getCommonServerSideProps } from 'components/utils/getCommonServerSideProps'
import { Text } from 'components/global/text'
// import { useRouter } from 'next/router'
import { PRIVACY_ACCEPTED } from '../../components/Voting/VoteConst'
import Cookies from 'js-cookie'
import {
  StyledButton,
  StyledDialogContent,
  StyledForm,
  StyledFormRow,
  StyledHeader,
  StyledIntro,
  StyledLandingContainer,
  StyledOverlayButtons,
} from '../../components/Voting/landing.styled'
import { formatInTimeZone } from 'date-fns-tz'
import React, { FormEvent, Fragment } from 'react'
import { DialogOverlay } from '@reach/dialog'
import { Button } from '../../components/global/Button/Button'
import '@reach/dialog/styles.css'
import Link from 'next/link'

type VoteLandingProps = {
  instance: string
  votingFinished: string
}

const BUTTON_LABEL = 'Start Voting!'

// export default function VoteLanding({ instance, votingFinished }: VoteLandingProps): JSX.Element {
export default function VoteLanding({ instance }: VoteLandingProps): JSX.Element {
  const { conference } = useConfig()
  //const router = useRouter()

  function onSubmitForm(e: FormEvent) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)

    // Cookies.set(PRIVACY_ACCEPTED, 'true', { expires: 90 });
    Cookies.set('vote-ticket', formData.get('ticket'), { expires: 90 })
    Cookies.set('vote-lastname', formData.get('lastname'), { expires: 90 })
    // router.push(`/vote/voting`);
  }

  const [showDialog, setShowDialog] = React.useState(true)
  const [showBuyTicket, setShowBuyTicket] = React.useState(false)
  const [showBoughtTicket, setShowBoughtTicket] = React.useState(false)
  const close = () => setShowDialog(false)

  return (
    <Fragment>
      <DialogOverlay isOpen={showDialog} onDismiss={close}>
        <StyledDialogContent style={{ textAlign: 'center' }}>
          {!showBuyTicket && !showBoughtTicket && (
            <Fragment>
              <p>Have you bought your ticket to DDD Melbourne?</p>

              <StyledOverlayButtons>
                <Button kind="primary" onClick={() => setShowBoughtTicket(true)}>
                  Yes
                </Button>
                <Button kind="secondary" onClick={() => setShowBuyTicket(true)}>
                  No
                </Button>
              </StyledOverlayButtons>
            </Fragment>
          )}
          {showBuyTicket && (
            <Text>
              Did you know that ticket holder votes count more? You can buy your ticket{' '}
              <Link href="/tickets">here</Link> for only {conference.TicketPrice}.
            </Text>
          )}
          {showBoughtTicket && <Text>Wonderful! Enjoy voting! :)</Text>}
          {(showBoughtTicket || showBuyTicket) && (
            <Button kind="primary" onClick={() => close()}>
              Close
            </Button>
          )}
        </StyledDialogContent>
      </DialogOverlay>
      <Main title="Vote" description={`${conference.Name} voting page.`}>
        <StyledLandingContainer>
          <StyledHeader tag="h1">{`${instance} Conference Voting`}</StyledHeader>
          <StyledIntro>Here's how voting works:</StyledIntro>
          <ol>
            <li>Enter your {conference.Name} ticket number and last name, then press ‘Start voting!’. </li>
            <li>No ticket? Just press ‘Start voting!’ to begin. (Buying a ticket helps your vote count more!)</li>
            <li>
              You’ll see two talks next. Read the session information and pick your favourite of the two. If you can’t
              decide, choose, “It’s a draw!”{' '}
            </li>
            <li>Once you’ve made your selection, you’ll get two new talks to pick from. </li>
            <li>
              Keep voting for as many talks as you like. You can leave and come back any time until the closing date and
              your votes will be saved.
            </li>
          </ol>
          Voting closes at {formatInTimeZone(conference.VotingOpenUntil, conference.TimeZone, 'MMMM d hh:mma')}
          <StyledForm onSubmit={onSubmitForm}>
            <StyledFormRow>
              <label htmlFor="ticket">Ticket: </label>
              <input type="text" id="ticket" name="ticket" />
            </StyledFormRow>
            <StyledFormRow>
              <label htmlFor="lastname">Last Name: </label>
              <input type="text" id="lastname" name="lastname" />
            </StyledFormRow>
            <StyledButton kind="primary" type="submit">
              {BUTTON_LABEL}
            </StyledButton>
          </StyledForm>
        </StyledLandingContainer>
      </Main>
    </Fragment>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { dates, conference } = getCommonServerSideProps(context)
  const isPrivacyAccepted = context.req.cookies[PRIVACY_ACCEPTED] === 'true'

  if (!dates.VotingOpen) {
    return { notFound: true }
  }

  if (isPrivacyAccepted) {
    return {
      redirect: {
        destination: '/vote/voting',
        permanent: false,
      },
    }
  }

  return {
    props: {
      instance: conference.Instance,
      votingFinished: formatInTimeZone(conference.VotingOpenUntil, conference.TimeZone, dates.DateDisplayFormat),
    },
  }
}
