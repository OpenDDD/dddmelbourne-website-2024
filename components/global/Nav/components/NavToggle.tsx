import React from 'react'
import { StyledToggle } from './NavToggle.styled'
import { useNavigationState, useNavigationDispatch } from '../Nav.context'

export const NavToggle = () => {
  const { expanded } = useNavigationState()
  const dispatch = useNavigationDispatch()

  return (
    <StyledToggle active={expanded} type="button" onClick={() => dispatch('toggle')} aria-controls="nav-id">
      <div aria-hidden="true" role="img" />
      {expanded ? 'Close' : 'Menu'}
    </StyledToggle>
  )
}
