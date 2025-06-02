import React, { type JSX } from 'react'
import { ButtonAnchor } from 'components/global/Button/Button'
import { StyledActionBarContainer } from './ActionBar.styled'
import getConferenceActions from 'config/actions'
import { useConfig } from 'Context/Config'

export const ActionBar = (): JSX.Element => {
  const { conference, dates } = useConfig()
  const [primaryAction, secondaryAction] = getConferenceActions(conference, dates)

  return (
    <StyledActionBarContainer>
      <p>{conference.TagLine}</p>
      <ul>
        {primaryAction && (
          <li>
            <ButtonAnchor kind="primary" size="lg" href={primaryAction.Url}>
              {primaryAction.Title}
            </ButtonAnchor>
          </li>
        )}
        {secondaryAction && (
          <li>
            <ButtonAnchor kind="secondary" size="lg" href={secondaryAction.Url}>
              {secondaryAction.Title}
            </ButtonAnchor>
          </li>
        )}
      </ul>
    </StyledActionBarContainer>
  )
}
