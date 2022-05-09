import React, { FC } from 'react'
import './Button.css'

interface IButton {
  onClick?: () => void
  active?: boolean
}

export const Button: FC<IButton> = (props) => {
  return (
    <div className={`generalButton ${props.active ? 'active' : ''}`} onClick={props.onClick}>
      {props.children}
    </div>
  )
}
