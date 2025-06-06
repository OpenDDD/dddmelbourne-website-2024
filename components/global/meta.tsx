import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useConfig } from 'Context/Config'
import { formatInTimeZone } from 'date-fns-tz'

interface MetaArgs {
  pageTitle: string
  pageDescription?: string
  pageImage?: string
}

const getTitle = (title: string, date: Date, name: string, showDate: boolean, timezone: string) =>
  `${title !== 'Home' ? title + ' - ' : ''}${name}${
    showDate ? ` | ${formatInTimeZone(date, timezone, 'do MMMM yyyy')}` : ''
  }`

export const Meta = ({ pageTitle, pageDescription, pageImage }: MetaArgs) => {
  const { conference, appConfig, dates } = useConfig()
  const { pathname } = useRouter()
  const ogImage = pageImage || '/static/images/logo-dddmelbourne.png'

  const title = React.useMemo(
    () =>
      getTitle(
        pageTitle,
        conference.Date,
        conference.Name,
        !conference.HideDate && !dates.IsComplete,
        conference.TimeZone,
      ),
    [pageTitle, dates.IsComplete, conference.HideDate, conference.Name, conference.Date, conference.TimeZone],
  )

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="apple-mobile-web-app-capable" content="yes" />

      <link rel="icon" href="/static/favicon.ico" sizes="any" />
      <link rel="apple-touch-icon" href="/static/apple-touch-icon.png" />

      <meta name="apple-mobile-web-app-title" content={conference.Name} />
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title.substring(0, 70)} />
      <meta name="description" content={pageDescription || conference.SiteDescription} />
      <meta property="og:description" content={pageDescription || conference.SiteDescription} />
      <meta name="twitter:description" content={(pageDescription || conference.SiteDescription).substring(0, 200)} />
      <meta name="author" content={conference.Organiser.Name} />
      <meta property="og:image" content={ogImage} />
      <meta property="twitter:image" content={ogImage} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={conference.Name} />
      <meta name="twitter:creator" content={conference.Organiser.Name} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={conference.Name} />
      <link rel="canonical" href={`${appConfig.baseUrl}${pathname}`} />
      <meta property="og:url" content={`${appConfig.baseUrl}${pathname}`} />
      <link rel="preconnect" href="https://www.google-analytics.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link rel="preconnect" href="https://az416426.vo.msecnd.net"></link>
    </Head>
  )
}
