import styled from '@emotion/styled'
import { breakpoint, breakpointMax } from 'components/utils/styles/breakpoints'
import { calcRem } from 'components/utils/styles/calcRem'

export const StyledHero = styled('section')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-end',
  padding: calcRem(80, theme.metrics.md),
  marginBottom: theme.metrics.md,
  backgroundImage: `url(/hero/hero_w640.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',

  [breakpoint('sm')]: {
    backgroundImage: `url(/hero/hero_w768.jpg)`,
  },

  [breakpoint('md')]: {
    backgroundImage: `url(/hero/hero_w1024.jpg)`,
  },

  [breakpoint('lg')]: {
    backgroundImage: `url(/hero/hero_w1280.jpg)`,
  },

  [breakpoint('xl')]: {
    backgroundImage: `url(/hero/hero_w1920.jpg)`,
  },
}))
StyledHero.displayName = 'StyledHero'

export const HeroWrapper = styled('div')(() => ({
  position: 'relative',
}))

export const HeroContentWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  '::before': {
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.dddblue,
    position: 'absolute',
    opacity: 0.8,
    content: '""',
  },
}))

export const StyledConferenceDetails = styled('p')(({ theme }) => ({
  width: '100%',
  display: 'block',
  maxWidth: calcRem(1000),
  color: theme.colors.white,
  fontSize: '7vmin',
  fontWeight: theme.weights.bold,
  lineHeight: 1,
  textAlign: 'right',
  zIndex: 1,
  padding: calcRem(theme.metrics.md),

  time: {
    display: 'block',
  },

  span: {
    display: 'inline-block',
    width: '70%',
  },

  [breakpointMax('sm')]: {
    fontSize: '12vmin',
  },
}))
StyledConferenceDetails.displayName = 'StyledConferenceDetails'

export const StyledCredit = styled('p')(({ theme }) => ({
  position: 'absolute',
  right: calcRem(20),
  bottom: calcRem(20),
  color: theme.colors.white,
  fontWeight: 400,
  fontSize: calcRem(10),

  a: {
    color: theme.colors.white,
  },
}))
StyledCredit.displayName = 'StyledCredit'
