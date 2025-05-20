import React, { type JSX } from 'react'
import { StyledHeader, StyledAnchor } from './Header.styled'
import { DDDLogo } from 'components/global/Icons/DDDLogo'
import { HeaderSocials } from './components/HeaderSocials'
import { NavToggle } from 'components/global/Nav/components/NavToggle'
import { useConfig } from 'Context/Config'

export const Header = (): JSX.Element => {
  const { conference } = useConfig()

  return (
    <StyledHeader>
      <NavToggle />
      <StyledAnchor aria-label={conference.Name} passHref={true} href="/">
        <DDDLogo />
      </StyledAnchor>
      <HeaderSocials />
    </StyledHeader>
  )
}
