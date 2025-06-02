import React, { type JSX } from 'react'
import { StyledSocialList, StyledSafeLink } from './HeaderSocials.styled'
import { FacebookIcon } from 'components/global/Icons/Facebook'
import { InstagramIcon } from 'components/global/Icons/Instagram'
import { BlueskyIcon } from 'components/global/Icons/Bluesky'
import { LinkedinIcon } from 'components/global/Icons/Linkedin'
import { RedBubbleIcon } from 'components/global/Icons/RedBubble'
import { useConfig } from 'Context/Config'

export const HeaderSocials = (): JSX.Element => {
  const {
    conference: { Socials: socials },
  } = useConfig()

  return (
    <StyledSocialList>
      {socials.Facebook && (
        <li>
          <StyledSafeLink href={`https://facebook.com/${socials.Facebook}`} target="_blank" rel="noopener nofollow">
            <FacebookIcon />
            <span>Facebook, opens in new window</span>
          </StyledSafeLink>
        </li>
      )}
      {socials.Bluesky?.Name && (
        <li>
          <StyledSafeLink
            href={`https://bsky.app/profile/${socials.Bluesky.Name}`}
            target="_blank"
            rel="noopener nofollow"
          >
            <BlueskyIcon />
            <span>Bluesky, opens in new window</span>
          </StyledSafeLink>
        </li>
      )}
      {socials.Linkedin && (
        <li>
          <StyledSafeLink
            href={`https://www.linkedin.com/company/${socials.Linkedin}`}
            target="_blank"
            rel="noopener nofollow"
          >
            <LinkedinIcon />
            <span>LinkedIn, opens in new window</span>
          </StyledSafeLink>
        </li>
      )}
      {socials.Instagram && (
        <li>
          <StyledSafeLink
            href={`https://www.instagram.com/${socials.Instagram}`}
            target="_blank"
            rel="noopener nofollow"
          >
            <InstagramIcon />
            <span>Instagram, opens in new window</span>
          </StyledSafeLink>
        </li>
      )}
      {socials.RedBubble && (
        <li>
          <StyledSafeLink href={`${socials.RedBubble}`} target="_blank" rel="noopener nofollow">
            <RedBubbleIcon />
            <span>RedBubble, opens in new window</span>
          </StyledSafeLink>
        </li>
      )}
    </StyledSocialList>
  )
}
