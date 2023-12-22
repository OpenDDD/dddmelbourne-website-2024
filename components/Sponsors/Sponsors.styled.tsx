import styled from '@emotion/styled'
import { calcRem } from 'components/utils/styles/calcRem'
import { SafeLink } from 'components/global/safeLink'

export const StyledSponsorsContainer = styled('section')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  marginBottom: calcRem(theme.metrics.md),

  h2: {
    width: '100%',
    marginTop: calcRem(theme.metrics.xxl),
    textAlign: 'center',
  },
}))
StyledSponsorsContainer.displayName = 'StyledSponsorsContainer'

export const StyledSponsorLink = styled(SafeLink)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: calcRem(theme.metrics.md),
  transition: 'transform 0.3s ease',

  '&:hover, &:focus': {
    transform: 'scale(1.1)',
  },
}))
StyledSponsorLink.displayName = 'StyledSponsorLink'
