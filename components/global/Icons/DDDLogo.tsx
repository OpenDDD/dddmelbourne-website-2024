import React from 'react'

import { useConfig } from 'Context/Config'
import styled from '@emotion/styled'

const StyledImage = styled('img')(() => ({
  height: 25,
  width: 'auto',
}))

export const DDDLogo = () => {
  const { conference } = useConfig()

  return (
    <StyledImage
      width="296"
      height="35"
      alt={`${conference.Name} logo`}
      src="/static/images/logo-dddmelbourne-2024.png"
    />
  )
}
