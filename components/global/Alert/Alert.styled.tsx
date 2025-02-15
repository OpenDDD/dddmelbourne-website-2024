import styled from '@emotion/styled'
import { calcRem } from '../../utils/styles/calcRem'

export type Kind = 'info' | 'success' | 'error' | 'warning'

export const StyledAlert = styled('div')({
  position: 'fixed',
  bottom: 0,
  right: 0,
  overflow: 'auto',
  margin: calcRem(15),
  padding: calcRem(15),
  background: `hsla(0, 0%, 0%, 0.33)`,
  color: 'white',
})
StyledAlert.displayName = 'StyledAlert'
