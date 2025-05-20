import React from 'react'
import { NextPage } from 'next'
import Script from 'next/script'

const AgendaPage: NextPage = () => {
  return (
    <Script src="https://sessionize.com/api/v2/i3x5lfmo/view/GridSmart" strategy={'beforeInteractive'} defer={false} />
  )
}

export default AgendaPage
