import React from 'react'
import { Action, Conference } from 'config/types'
import { ActionButton } from 'components/actionButton'
import { ImportantDatesList } from 'components/ImportantDatesList/importantDatesList'
import { CurrentDate } from 'components/utils/dateTimeProvider'
import { calcRem } from 'components/utils/styles/calcRem'
import { theme } from 'components/utils/styles/theme'
import { workshops } from 'config/workshops'
import { SafeLink } from './global/safeLink'
import styled from '@emotion/styled'

const ActionsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  a: {
    marginRight: calcRem(theme.metrics.md),
  },
}))

export interface ImportantDatesProps {
  conference: Conference
  actions: Action[]
  currentDate: CurrentDate
}

const ImportantDates = ({ conference, actions, currentDate }: ImportantDatesProps): JSX.Element => (
  <React.Fragment>
    <h2>Important Dates</h2>

    <ImportantDatesList conference={conference} currentDate={currentDate} />

    {workshops.dates && workshops.dates.length > 0 && (
      <div style={{ marginTop: calcRem(theme.metrics.lg) }}>
        <h2>Workshops!</h2>
        <p>
          DDD runs a bunch of workshops to help you come up with some amazing talks to submit to our CFP and a great Bio
          to go with it.
        </p>
        <p>
          For more info or to book in click{' '}
          <SafeLink target="_blank" href={workshops.bookingLink}>
            here
          </SafeLink>
        </p>
        <ImportantDatesList conference={conference} currentDate={currentDate} importantDates={workshops.dates} />
      </div>
    )}

    {actions && actions.length > 0 && (
      <div style={{ marginTop: calcRem(theme.metrics.lg) }}>
        <h2>What now?</h2>
        <ActionsContainer>
          {actions.map((a) => (
            <ActionButton action={a} key={a.Title} />
          ))}
        </ActionsContainer>
      </div>
    )}
  </React.Fragment>
)

export default ImportantDates
