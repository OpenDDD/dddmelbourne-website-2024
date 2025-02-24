import styled from '@emotion/styled'
import { Button } from 'components/global/Button/Button'
import { Text } from 'components/global/text'
import { calcRem } from 'components/utils/styles/calcRem'
import { breakpointMax } from '../utils/styles/breakpoints'

export const StyledLandingContainer = styled('div')(() => ({
  inlineSize: '100%',
  maxInlineSize: calcRem(456),
  marginInlineStart: 'auto',
  marginInlineEnd: 'auto',
}))

export const StyledHeader = styled(Text)(({ theme }) => ({
  marginBlockEnd: calcRem(theme.metrics.xxl),
  color: theme.colors.primary,
  fontSize: calcRem(30),
  fontWeight: theme.weights.bold,
  lineHeight: theme.fonts.lineHeight,
  textAlign: 'center',
}))

export const StyledIntro = styled(Text)(({ theme }) => ({
  fontSize: calcRem(theme.fonts.sizeLg),
  fontWeight: theme.weights.bold,
  lineHeight: theme.fonts.lineHeight,
}))

export const StyledButton = styled(Button)({
  display: 'block',
  marginInlineStart: 'auto',
  marginInlineEnd: 'auto',
  marginTop: calcRem(20),
})

export const StyledOverlayButtons = styled('div')(() => ({
  padding: calcRem(20),
  '*:first-of-type': {
    marginRight: calcRem(20),
  },
}))

export const StyledForm = styled('form')(() => ({
  padding: `${calcRem(20)} 0`,
  label: {
    display: 'inline-block',
    width: 100,
  },
  input: '100%',
}))

export const StyledFormRow = styled('div')({
  marginBottom: calcRem(30),
})

export const StyledDialogContent = styled('div')({
  [breakpointMax('sm')]: {
    width: '100%',
  },
})
