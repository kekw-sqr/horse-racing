import React, { FC } from 'react'
import './Button.css'

interface IButton {
  id: string
  onClick?: () => void
  active?: boolean
}

export const Button: FC<IButton> = (props) => {
  return (
    <div id={props.id} className={`generalButton ${props.active ? 'active' : ''}`} onClick={props.onClick}>
      {props.children}
    </div>
  )
}
