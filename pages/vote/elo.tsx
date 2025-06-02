import { GetServerSideProps } from 'next'
import { v4 as uuid } from 'uuid'
import { EloVote } from 'components/Voting/Elo'
import { EloSession } from 'config/types'
import { useConfig } from 'Context/Config'
import { Main } from 'layouts/main'
import { useEffect, useReducer, useState, type JSX } from 'react'
import { getSessionId } from 'components/global/analytics'
import { getCommonServerSideProps } from 'components/utils/getCommonServerSideProps'
import {
  LayoutVariant,
  StyledEloButtonContainer,
  StyledEloVoteFooter,
  StyledLayoutLabel,
  StyledVoteButton,
} from 'components/Voting/EloVote.styled'
import { PRIVACY_ACCEPTED, ELO_VOTING_SESSION_ID } from 'components/Voting//VoteConst'
import Cookies from 'js-cookie'

const LAYOUT_COOKIE = 'ddd-vote-layout'

type SessionPair = {
  SubmissionA: EloSession
  SubmissionB: EloSession
}

type EloProps = {
  sessions: SessionPair
  userDefinedLayout?: LayoutVariant
  votingSessionId: string
}

async function fetchPair(sessionId: string, sessionIdHeaderName = 'X-DDDPerth-VotingSessionId') {
  const resp = await fetch(process.env.NEXT_PUBLIC_ELO_PAIR, {
    headers: {
      [sessionIdHeaderName]: sessionId,
    },
  })
  const data = await resp.json()

  return data
}

async function postPair(winningSessionId: string, losingSessionId: string, isDraw: boolean) {
  const headers = {
    'Content-Type': 'application/json',
  }

  const body = {
    WinnerSessionId: winningSessionId,
    LoserSessionId: losingSessionId,
    IsDraw: isDraw,
    VoterSessionId: getSessionId(),
    VoterTicket: Cookies.get('vote-ticket'),
    VoterLastname: Cookies.get('vote-lastname'),
  }

  try {
    fetch(`${process.env.NEXT_PUBLIC_ELO_VOTE}`, {
      method: 'POST',
      redirect: 'follow',
      headers,
      body: JSON.stringify(body),
    })
  } catch (e) {
    //TODO:
  }
}

export default function Elo({ sessions, votingSessionId, userDefinedLayout = 'expanded' }: EloProps): JSX.Element {
  const { conference } = useConfig()
  const [sessionPair, setSessionPair] = useState<SessionPair>(sessions)
  const [nextPair, setNextPair] = useState<SessionPair | undefined>(undefined)
  const [layoutVariant, setLayoutVariant] = useState<LayoutVariant>(userDefinedLayout)
  const [loading, setLoading] = useState(false)

  const spinner =
    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgb(255, 255, 255); display: block; shape-rendering: auto;" width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">\n' +
    '                <g>\n' +
    '                  <g transform="translate(50 50)">\n' +
    '                    <g transform="scale(0.8)">\n' +
    '                      <g transform="translate(-50 -58)">\n' +
    '                        <path fill="#4450a2" d="M27.1,79.4c-1.1,0.6-2.4,1-3.7,1c-2.6,0-5.1-1.4-6.4-3.7c-2-3.5-0.8-8,2.7-10.1c1.1-0.6,2.4-1,3.7-1c2.6,0,5.1,1.4,6.4,3.7 C31.8,72.9,30.6,77.4,27.1,79.4z"></path>\n' +
    '                        <path fill="#c66aa9" d="M72.9,79.4c1.1,0.6,2.4,1,3.7,1c2.6,0,5.1-1.4,6.4-3.7c2-3.5,0.8-8-2.7-10.1c-1.1-0.6-2.4-1-3.7-1c-2.6,0-5.1,1.4-6.4,3.7 C68.2,72.9,69.4,77.4,72.9,79.4z"></path>\n' +
    '                        <circle fill="#f8a23b" cx="50" cy="27" r="7.4"></circle>\n' +
    '                        <path fill="#4450a2" d="M86.5,57.5c-3.1-1.9-6.4-2.8-9.8-2.8c-0.5,0-0.9,0-1.4,0c-0.4,0-0.8,0-1.1,0c-2.1,0-4.2-0.4-6.2-1.2 c-0.8-3.6-2.8-6.9-5.4-9.3c0.4-2.5,1.3-4.8,2.7-6.9c2-2.9,3.2-6.5,3.2-10.4c0-10.2-8.2-18.4-18.4-18.4c-0.3,0-0.6,0-0.9,0 C39.7,9,32,16.8,31.6,26.2c-0.2,4.1,1,7.9,3.2,11c1.4,2.1,2.3,4.5,2.7,6.9c-2.6,2.5-4.6,5.7-5.4,9.3c-1.9,0.7-4,1.1-6.1,1.1 c-0.4,0-0.8,0-1.2,0c-0.5,0-0.9-0.1-1.4-0.1c-3.1,0-6.3,0.8-9.2,2.5c-9.1,5.2-12,17-6.3,25.9c3.5,5.4,9.5,8.4,15.6,8.4 c2.9,0,5.8-0.7,8.5-2.1c3.6-1.9,6.3-4.9,8-8.3c1.1-2.3,2.7-4.2,4.6-5.8c1.7,0.5,3.5,0.8,5.4,0.8c1.9,0,3.7-0.3,5.4-0.8 c1.9,1.6,3.5,3.5,4.6,5.7c1.5,3.2,4,6,7.4,8c2.9,1.7,6.1,2.5,9.2,2.5c6.6,0,13.1-3.6,16.4-10C97.3,73.1,94.4,62.5,86.5,57.5z M29.6,83.7c-1.9,1.1-4,1.6-6.1,1.6c-4.2,0-8.4-2.2-10.6-6.1c-3.4-5.9-1.4-13.4,4.5-16.8c1.9-1.1,4-1.6,6.1-1.6 c4.2,0,8.4,2.2,10.6,6.1C37.5,72.8,35.4,80.3,29.6,83.7z M50,39.3c-6.8,0-12.3-5.5-12.3-12.3S43.2,14.7,50,14.7 c6.8,0,12.3,5.5,12.3,12.3S56.8,39.3,50,39.3z M87.2,79.2c-2.3,3.9-6.4,6.1-10.6,6.1c-2.1,0-4.2-0.5-6.1-1.6 c-5.9-3.4-7.9-10.9-4.5-16.8c2.3-3.9,6.4-6.1,10.6-6.1c2.1,0,4.2,0.5,6.1,1.6C88.6,65.8,90.6,73.3,87.2,79.2z"></path>\n' +
    '                      </g>\n' +
    '                    </g>\n' +
    '                  </g>\n' +
    '                  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="3.571428571428571s" keyTimes="0;1" values="0 50 50;360 50 50"></animateTransform>\n' +
    '                </g>\n' +
    '              </svg>\n'

  useEffect(() => {
    // the cookie is used for reloads, it is read in `getServerSideProps`
    Cookies.set(ELO_VOTING_SESSION_ID, votingSessionId, { expires: 1 /* 1 day */ })
  }, [votingSessionId])

  // this is effectively a "force update" to fetch another pair
  const [next, getNext] = useReducer((x) => x + 1, 0)

  useEffect(() => {
    Cookies.set(LAYOUT_COOKIE, layoutVariant, { expires: conference.VotingOpenUntil })
  }, [layoutVariant, conference.VotingOpenUntil])

  useEffect(() => {
    async function getPair() {
      setLoading(true)
      const data = await fetchPair(votingSessionId)
      setNextPair(data)
      setLoading(false)
    }

    if (typeof nextPair === 'undefined') {
      getPair()
    }
  }, [next, nextPair, votingSessionId])

  async function sessionChoiceHandler(winningSession: EloSession, losingSession: EloSession, isDraw = false) {
    setLoading(true)
    await postPair(winningSession.Id, losingSession.Id, isDraw)

    if (typeof nextPair !== 'undefined') {
      setSessionPair(nextPair)
      setNextPair(undefined)
    } else {
      // nextPair was undefined (e.g. because it failed to fetch)
      // so force it to fetch another
      getNext()
    }
  }

  return (
    <Main title="Vote" description={`${conference.Name} voting page.`} showActionBar={false}>
      <EloVote
        key={sessionPair.SubmissionA.Id + sessionPair.SubmissionB.Id}
        sessionA={sessionPair.SubmissionA}
        sessionB={sessionPair.SubmissionB}
        onSessionChoice={sessionChoiceHandler}
        layout={layoutVariant}
      />
      <StyledEloVoteFooter>
        <StyledEloButtonContainer>
          <StyledVoteButton
            kind="primary"
            position="left"
            onClick={(e) => {
              e.currentTarget.blur()
              window.scrollTo(0, 0)
              sessionChoiceHandler(sessionPair.SubmissionA, sessionPair.SubmissionB, false)
            }}
            disabled={loading}
          >
            Option 1
          </StyledVoteButton>
          <StyledVoteButton
            kind="tertiary"
            position="centre"
            onClick={(e) => {
              e.currentTarget.blur()
              window.scrollTo(0, 0)
              sessionChoiceHandler(sessionPair.SubmissionA, sessionPair.SubmissionB, true)
            }}
            disabled={loading}
          >
            It's a Draw!
          </StyledVoteButton>
          <StyledVoteButton
            kind="secondary"
            position="right"
            onClick={(e) => {
              e.currentTarget.blur()
              window.scrollTo(0, 0)
              sessionChoiceHandler(sessionPair.SubmissionB, sessionPair.SubmissionA, false)
            }}
            disabled={loading}
          >
            Option 2
          </StyledVoteButton>
        </StyledEloButtonContainer>
        <StyledLayoutLabel>
          <input
            type="checkbox"
            onChange={() => {
              setLayoutVariant((value) => (value === 'expanded' ? 'stacked' : 'expanded'))
            }}
          />
          Change layout? <span>{layoutVariant === 'stacked' ? 'Expand abstracts' : 'Stack talks'}</span>
        </StyledLayoutLabel>
        <div style={{ minHeight: 50 }}>{loading && <span dangerouslySetInnerHTML={{ __html: spinner }} />}</div>
        <small>
          Keep voting for as many talks as you like. You can leave and come back any time until the closing date and
          your votes will be saved.
        </small>
      </StyledEloVoteFooter>
    </Main>
  )
}

export const getServerSideProps: GetServerSideProps<EloProps> = async (context) => {
  const { dates } = getCommonServerSideProps(context)
  const isPrivacyAccepted = Boolean(context.req.cookies[PRIVACY_ACCEPTED])
  const layoutCookie = context.req.cookies[LAYOUT_COOKIE]

  // if we don't have the cookie, initialise the value and it'll be passed to the frontend
  const votingSessionId = context.req.cookies[ELO_VOTING_SESSION_ID] ?? uuid()

  const validLayouts: LayoutVariant[] = ['expanded', 'stacked']
  const userDefinedLayout: LayoutVariant = [...(validLayouts as string[])].includes(layoutCookie)
    ? (layoutCookie as LayoutVariant)
    : 'expanded'

  if (!dates.VotingOpen) {
    return { notFound: true }
  }

  if (!isPrivacyAccepted) {
    return {
      redirect: {
        destination: '/vote',
        permanent: false,
      },
    }
  }

  const data = await fetchPair(votingSessionId)

  return {
    props: {
      sessions: data,
      userDefinedLayout,
      votingSessionId,
    },
  }
}
