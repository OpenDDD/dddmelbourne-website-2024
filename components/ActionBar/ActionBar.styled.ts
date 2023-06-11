import styled from '@emotion/styled'
import { breakpoint, breakpointMax } from 'components/utils/styles/breakpoints'
import { calcRem } from 'components/utils/styles/calcRem'

export const StyledActionBarContainer = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  alignItems: 'center',
  backgroundColor: theme.colors.grey100,
  borderBottom: `1px solid ${theme.colors.grey300}`,
  padding: '1rem',

  p: {
    display: 'none',
    gridColumn: 1,
    gridRow: 1,
    marginLeft: calcRem(theme.metrics.xl),

    [breakpoint('lg')]: {
      display: 'block',
    },

    [breakpoint('xl')]: {
      marginLeft: 0,
      textAlign: 'center',
    },
  },

  ul: {
    display: 'flex',
    gridColumn: 1,
    gridRow: 1,
    justifyContent: 'flex-end',
    padding: 0,
    margin: 0,
    listStyle: 'none',

    li: {
      [breakpointMax('lg')]: {
        flexGrow: 1,
      },
    },
  },

  a: {
    display: 'block',
    textAlign: 'center',
  },
}))
