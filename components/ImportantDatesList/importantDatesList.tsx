import React, { Fragment } from 'react'
import { Conference, ImportantDate } from 'config/types'
import { CurrentDate } from 'components/utils/dateTimeProvider'
import { StyledImportantDateFooter, StyledImportantDateList } from './ImportantDate.styled'
import { ImportantDateTile, ImportantDateTileTBA } from './ImportantDateTile'
import { ImportantDateTileInline, ImportantDateTileInlineTBA } from './ImportantDateTileInline'
import { Text } from 'components/global/text'
import { isAfter, isBefore } from 'date-fns'
import { getTimezoneOffset } from 'date-fns-tz'
import Link from 'next/link'

export type ImportantDateListLayouts = 'inline' | 'calendar'

export interface ImportantDatesListProps {
  conference: Conference
  currentDate: CurrentDate

  importantDates?: ImportantDate[]

  layout?: ImportantDateListLayouts
}

export const ImportantDatesList = ({
  conference,
  currentDate,
  importantDates = conference.ImportantDates,
  layout = 'calendar',
}: ImportantDatesListProps) => {
  const hasConferenceFinished = isAfter(currentDate.Value, conference.EndDate)

  return (
    <Fragment>
      {-(getTimezoneOffset(conference.TimeZone) / 60000) !== currentDate.Value.getTimezoneOffset() && (
        <Text>
          <em>Note: All dates in {conference.TimeZone} time.</em>
        </Text>
      )}

      <StyledImportantDateList layout={layout}>
        {/* Upcoming dates */}
        {importantDates
          .filter(
            (importantDate) =>
              isAfter(importantDate.Date, currentDate.Value) ||
              (importantDate.Type === 'conference' && !hasConferenceFinished),
          )
          .map((importantDate) => {
            const Component = layout === 'calendar' ? ImportantDateTile : ImportantDateTileInline
            return <Component key={importantDate.Description} importantDate={importantDate} tz={conference.TimeZone} />
          })}
        {conference.HideDate &&
          (layout === 'calendar' ? (
            <ImportantDateTileTBA description="Conference day" type="conference" />
          ) : (
            <ImportantDateTileInlineTBA description="Conference day" type="conference" />
          ))}
        {/* Past dates */}
        {importantDates
          .filter(
            (importantDate) =>
              isBefore(importantDate.Date, currentDate.Value) &&
              (importantDate.Type !== 'conference' || hasConferenceFinished),
          )
          .map((importantDate) => {
            const Component = layout === 'calendar' ? ImportantDateTile : ImportantDateTileInline
            return (
              <Component
                key={importantDate.Description}
                importantDate={importantDate}
                isFinished={true}
                tz={conference.TimeZone}
              />
            )
          })}
      </StyledImportantDateList>
      <StyledImportantDateFooter>
        Can't wait? Then join our regular{' '}
        <Link href="https://www.meetup.com/ddd-melbourne-by-night/">DDD By Night meetup</Link> to get the vibe
        or checkout past <Link href="/agenda/2024">2024</Link> or <Link href="/agenda/2025">2025</Link> agendas!
      </StyledImportantDateFooter>
    </Fragment>
  )
}
