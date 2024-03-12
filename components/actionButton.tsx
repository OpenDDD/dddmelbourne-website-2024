import React from 'react'
import { Action } from 'config/types'
import { ButtonAnchor } from 'components/global/Button/Button'

interface ActionButtonProps {
  action: Action
}

export const ActionButton = ({ action }: ActionButtonProps) => (
  <ButtonAnchor kind="primary" href={action.Url}>
    {action.Title}
  </ButtonAnchor>
)
ActionButton.displayName = 'ActionButton'
