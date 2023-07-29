import styled from '@emotion/styled'
import { breakpointMax } from 'components/utils/styles/breakpoints'
import { calcRem } from 'components/utils/styles/calcRem'

export const HeroWrapper = styled('div')(() => ({
  position: 'relative',
  height: '400px',
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
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

  [breakpointMax('sm')]: {
    fontSize: '12vmin',
  },
}))
StyledConferenceDetails.displayName = 'StyledConferenceDetails'
