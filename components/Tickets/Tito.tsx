import React, { Fragment } from 'react'
import Script from 'next/script'

interface TitoProps {
  accountId: string
  eventId: string
}

export const Tito = ({ accountId, eventId }: TitoProps) => {
  return (
    <Fragment>
      <Script src="https://js.tito.io/v2" strategy="afterInteractive"></Script>
      {React.createElement('tito-widget', {
        event: `${accountId}/${eventId}`,
      })}
    </Fragment>
  )
}
