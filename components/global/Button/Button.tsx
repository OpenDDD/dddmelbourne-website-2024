import React from 'react'
import { StyledButton, StyledLinkButton, StyledButtonAnchor } from './Button.styled'

export type ButtonKinds = 'primary' | 'secondary' | 'tertiary' | 'inverse' | 'link'
export type Size = 'small' | 'normal' | 'lg'

export interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  kind: ButtonKinds
  size?: Size
}

export const Button = (props: ButtonProps) => {
  const Component = props.kind !== 'link' ? StyledButton : StyledLinkButton
  return (
    // @ts-ignore
    <Component type="button" kind={props.kind} {...props}>
      {props.children}
    </Component>
  )
}

interface ButtonAnchorProps
  extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  kind: ButtonKinds
  size?: Size
}

export const ButtonAnchor = ({ children, kind = 'secondary', size = 'normal', href, ...props }: ButtonAnchorProps) => (
  <StyledButtonAnchor kind={kind} size={size} href={href} {...props}>
    {children}
  </StyledButtonAnchor>
)
