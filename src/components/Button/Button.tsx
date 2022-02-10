import React, { FC } from 'react'
import './Button.css'

interface IButton {
  onClick?: () => void
}

export const Button: FC<IButton> = (props) => {
  return (
    <div className='generalButton' onClick={props.onClick}>
      {props.children}
    </div>
  )
}