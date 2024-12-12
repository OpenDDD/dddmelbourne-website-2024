import { breakpoint, breakpointMax } from 'components/utils/styles/breakpoints'
import { calcRem } from 'components/utils/styles/calcRem'
import styled from '@emotion/styled'
import ReactModal from 'react-modal'

export const StyledDialogOverlay = styled(ReactModal)({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  overflow: 'auto',
  background: `hsla(0, 0%, 0%, 0.33)`,
})
StyledDialogOverlay.displayName = 'StyledDialogOverlay'

export const StyledDialogContent = styled('div')({
  position: 'relative',
  width: '90vw',
  padding: calcRem(15),
  margin: '9vh auto',
  backgroundColor: '#fff',
  outline: 'none',

  [breakpoint('md')]: {
    width: '50vw',
    padding: calcRem(20),
    margin: '10vh auto',
  },
})
StyledDialogContent.displayName = 'StyledDialogContent'

export const StyledCloseButton = styled('button')(({ theme }) => ({
  position: 'absolute',
  right: calcRem(20),
  top: calcRem(10),
  padding: 0,
  background: 'none',
  border: 'none',
  color: '#CCC',
  fontSize: calcRem(30),
  fontWeight: theme.weights.bold,
  lineHeight: 1,

  '&:focus, &:hover': {
    color: '#808080',
  },
}))
StyledCloseButton.displayName = 'StyledCloseButton'

export const StyledSessionTitle = styled('h2')({
  // leaving space for the close button
  width: 'calc(100% - 30px)',
  margin: 0,
  marginBottom: calcRem(25),
})
StyledSessionTitle.displayName = 'StyledSessionTitle'

export const StyledBioFigure = styled('figure')({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  marginBottom: calcRem(15),
})
StyledBioFigure.displayName = 'StyledBioFigure'

export const StyledBioProfile = styled('img')({
  width: calcRem(50),
  height: calcRem(50),
  marginRight: calcRem(10),
  borderRadius: '50%',
})
StyledBioProfile.displayName = 'StyledBioProfile'

export const StyledBioName = styled('figcaption')({
  fontStyle: 'italic',
})
StyledBioName.displayName = 'StyledBioName'

export const StyledLinkList = styled('ul')({
  margin: 0,
  lineHeight: 1,
  listStyle: 'none',

  [breakpointMax('xs')]: {
    marginTop: calcRem(10),
  },

  [breakpoint('xs')]: {
    display: 'inline-flex',
    flexWrap: 'wrap',
    marginLeft: calcRem(10),
    fontSize: '85%',

    '&::before': {
      content: '"("',
    },

    '&::after': {
      content: '")"',
    },
  },

  li: {
    '&::before': {
      content: 'none',
    },

    [breakpointMax('xs')]: {
      marginBottom: calcRem(10),
    },

    [breakpoint('xs')]: {
      '&:not(:last-child)::after': {
        margin: calcRem(0, 4),
        content: '"|"',
      },
    },
  },
})
StyledLinkList.displayName = 'StyledLinkList'

export const StyledSpeakerBioHeader = styled('h3')(({ theme }) => ({
  margin: 0,
  fontSize: calcRem(16),
  fontWeight: theme.weights.bold,
}))
StyledSpeakerBioHeader.displayName = 'StyledSpeakerBioHeader'

export const StyledPreWrappedParagraph = styled('p')({
  margin: calcRem(0, 0, 10),
  lineHeight: 1.8,
  whiteSpace: 'pre-wrap',
})
StyledPreWrappedParagraph.displayName = 'StyledPreWrappedParagraph'

export const StyledTagList = styled('ul')({
  display: 'inline-flex',
  flexWrap: 'wrap',
  margin: 0,
  marginBottom: calcRem(5),
  lineHeight: 1,
  listStyle: 'none',

  li: {
    marginBottom: calcRem(10),

    '&:not(:last-child)': {
      marginRight: calcRem(4),
    },

    '&::before': {
      content: 'none',
    },
  },
})
StyledTagList.displayName = 'StyledTagList'

export const StyledLivestreamLink = styled('div')(({ theme }) => ({
  marginBottom: calcRem(15),
  svg: {
    width: calcRem(theme.metrics.xl),
    marginRight: calcRem(theme.metrics.sm),
    fill: 'red',
    position: 'relative',
    top: calcRem(5),
  },
}))
