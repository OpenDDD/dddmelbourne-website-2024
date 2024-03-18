import React, { ReactNode } from 'react'
import { Kind } from './Alert.styled'

interface AlertProps {
  kind: Kind
  children: ReactNode
  type?: 'assertive' | 'polite'
}

export const Alert = (props: AlertProps) => {
  return (
    <div>
      Alert HERE
      {props.children}
    </div>
  )
}
