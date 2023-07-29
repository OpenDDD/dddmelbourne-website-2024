import React from 'react'
import { SafeLink } from 'components/global/safeLink'
import { StyledList, Text } from 'components/global/text'
import { PageWithSidebar } from 'layouts/withSidebar'
import { calcRem } from 'components/utils/styles/calcRem'
import styled from '@emotion/styled'
import { NextPage } from 'next'
import { useConfig } from 'Context/Config'

const StyledLogoWrapper = styled('div')<{ logoMaxWidth?: number }>(({ theme, logoMaxWidth = 250 }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignItems: 'center',
  gap: calcRem(theme.metrics.lg),
  marginBottom: calcRem(theme.metrics.lg),

  img: {
    width: '100%',
    maxWidth: calcRem(logoMaxWidth),
    height: 'auto',
  },
}))

const About: NextPage = () => {
  const { conference } = useConfig()

  return (
    <PageWithSidebar title="About" description="The goal and history of DDD Melbourne and Oz Dev Inc.">
      <h1>About DDD Melbourne</h1>
      <Text>
        DDD Melbourne is an inclusive non-profit conference for the software community. Our goal is to create an
        approachable event that appeals to the whole community, especially people who usually don’t have the opportunity
        to attend, or speak at, conferences. We do this by:
      </Text>
      <StyledList>
        <li>Making the ticket price as low as possible ({conference.TicketPrice})</li>
        <li>Running the event on a Saturday</li>
        <li>Allowing anyone to submit about any software industry related topic</li>
        <li>Having a democratically chosen agenda</li>
        <li>Focussing on creating a safe and inclusive environment where everyone is welcome</li>
        <li>Providing free childcare options for the duration of the main conference</li>
      </StyledList>
      <StyledLogoWrapper>
        <img src="/static/images/logo-dddmelbourne.png" alt="DDD Melbourne logo" loading="lazy" />
        <img src="/hero/hero.svg" alt="DDD Melbourne 2024 logo" loading="lazy" />
      </StyledLogoWrapper>
      <Text>
        Furthermore, {conference.Name} aims to both create opportunities for underrepresented minorities, juniors and
        first-time speakers to present as well as influence the wider software industry to encourage such opportunities
        more broadly.
      </Text>
      <h2>What do we do with the money we raise?</h2>
      <Text>
        DDD Melbourne is run by Oz Dev Inc., a non-profit association. All funds raised as part of running DDD
        Melbourne, selling merchandise on{' '}
        <SafeLink href="https://www.redbubble.com/people/dddmelbourne" target="_blank">
          Red Bubble
        </SafeLink>{' '}
        or any other activities are used for:
      </Text>
      <StyledList>
        <li>Running current, or future, DDD Melbourne or DDD By Night events</li>
        <li>
          Sponsoring events or meetup groups in the VIC software industry that align to the purpose and goals of DDD
          Melbourne
        </li>
        <li>Other activities that contribute to the VIC software industry and align to our purpose and goals</li>
      </StyledList>
      <h2>What does DDD stand for?</h2>
      <Text>
        DDD Melbourne started out its life as part of the Developer! Developer! Developer! series of events and while
        our heritage is as a developer-focussed conference, DDD Melbourne is not just for developers, but for all
        professionals in the software industry. These days we don't expand DDD - it's not an acronym for us anymore, but
        if people insist then we might say Designer, Developer and Data Scientist, or is it DevOps, Data architect,
        distributed tester?
      </Text>
      <Text>The original DDD Melbourne logo was:</Text>
      <StyledLogoWrapper>
        <img src="/static/images/logo-old.png" alt="Original DDD Melbourne logo" loading="lazy" />
      </StyledLogoWrapper>
      <Text>
        Developer! Developer! Developer! started in 2005 in the United Kingdom as a community conference organised by
        software developers for software developers.{' '}
        <a href="https://en.wikipedia.org/wiki/Developer!_Developer!_Developer!">
          {' '}
          It's since spread all over the UK and Australia.
        </a>
      </Text>
      <Text>
        DDD was set up with a number of key elements in mind, which hold true for all DDD conferences held worlwide:
      </Text>
      <StyledList>
        <li>It is free / low cost</li>
        <li>It is on a Saturday</li>
        <li>An open submissions process</li>
        <li>A democratically chosen agenda</li>
      </StyledList>
      <h2>Sister events</h2>
      <Text>We have a number of sister events across Australia:</Text>
      <StyledLogoWrapper logoMaxWidth={200}>
        <SafeLink href="https://dddperth.com/" target="_blank">
          <img src="/static/images/logo.png" alt="DDD Perth logo" loading="lazy" />
        </SafeLink>{' '}
        <SafeLink href="https://www.dddsydney.com.au/" target="_blank">
          <img src="/static/images/logo-dddsydney-2019.png" alt="DDD Sydney logo" loading="lazy" />
        </SafeLink>{' '}
        <SafeLink href="http://dddbrisbane.com/" target="_blank">
          <img src="/static/images/logo-dddbrisbane-2019.jpg" alt="DDD Brisbane logo" loading="lazy" />
        </SafeLink>
      </StyledLogoWrapper>
    </PageWithSidebar>
  )
}

export default About
