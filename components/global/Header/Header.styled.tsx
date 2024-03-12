import styled from '@emotion/styled'
import { calcRem } from 'components/utils/styles/calcRem'
import { breakpoint } from 'components/utils/styles/breakpoints'
import { zIndex } from 'components/utils/styles/zindex'
import Link from 'next/link'

export const StyledHeader = styled('header')(({ theme }) => ({
  position: 'sticky',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  top: 0,
  backgroundColor: theme.colors.white,
  border: 0,
  borderBottom: `1px solid ${theme.colors.lightGrey}`,
  zIndex: zIndex.stickyHeader,
}))

export const StyledAnchor = styled(Link)({
  display: 'flex',
  margin: 0,
  marginRight: 'auto',
  marginLeft: 'auto',
  cursor: 'pointer',
  transition: 'transform 0.25s ease',
  outline: 0,

  svg: {
    width: calcRem(144),
    height: calcRem(28),
  },

  '&:hover, &:focus': {
    transform: `scale(1.1) rotate(5deg)`,
  },

  [breakpoint('sm')]: {
    svg: {
      width: calcRem(176),
      height: calcRem(35),
    },
  },
})
