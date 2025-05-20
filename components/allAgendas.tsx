import Link from 'next/link'
import React from 'react'
import { Fragment } from 'react'
import { Conference, Dates } from 'config/types'

interface AllAgendasProps {
  dates: Dates
  conference: Conference
  conferenceInstance: string
}

const AllAgendas = ({ conference, conferenceInstance, dates }: AllAgendasProps): JSX.Element => (
  <Fragment>
    <h2 className="text-center">All Agendas</h2>
    <div className="text-center">
      {conference.PreviousInstances.map((instance, i) => (
        <Fragment key={instance}>
          {i !== 0 ? ' | ' : null}
          {instance === conferenceInstance ? instance : <Link href={'/agenda/' + instance}>{instance}</Link>}
        </Fragment>
      ))}
      {dates.AgendaPublished && ' | '}
      {dates.AgendaPublished && conferenceInstance !== conference.Instance && (
        <Link href="/agenda">{conference.Instance}</Link>
      )}
      {dates.AgendaPublished && conferenceInstance === conference.Instance && (
        <Fragment>{conference.Instance}</Fragment>
      )}
    </div>
  </Fragment>
)

export default AllAgendas
