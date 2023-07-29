import styled from '@emotion/styled'
import { calcRem } from 'components/utils/styles/calcRem'
import { SafeLink } from 'components/global/safeLink'
import { srOnly } from 'components/utils/styles/accessibility'
import { breakpoint } from 'components/utils/styles/breakpoints'
import { theme } from 'components/utils/styles/theme'

export const StyledSocialList = styled('ul')(({ theme }) => ({
  display: 'none',
  flexDirection: 'row',
  padding: 0,
  margin: calcRem(0, theme.metrics.md),

  [breakpoint('sm')]: {
    display: 'flex',
  },
}))

const getSocialColorFromDDDMelbColors = () => {
  const randomValue = Math.floor(Math.random() * 3)
  switch (randomValue) {
    case 0: {
      return theme.colors.dddblue
    }
    case 1: {
      return theme.colors.dddpink
    }
    case 2: {
      return theme.colors.dddorange
    }
    default: {
      return theme.colors.dddblue
    }
  }
}

export const StyledSafeLink = styled(SafeLink)(({ theme }) => ({
  display: 'flex',
  margin: calcRem(0, theme.metrics.sm),
  outline: 0,

  svg: {
    display: 'block',
    width: calcRem(theme.metrics.lg),
    height: calcRem(theme.metrics.lg),
    fill: theme.colors.grey800,
    transition: 'fill 0.25s ease',
  },

  span: srOnly,

  '&:hover, &:focus': {
    svg: {
      fill: getSocialColorFromDDDMelbColors(),
    },
  },
}))
