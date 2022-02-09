import React, { FC } from 'react'
import './Button.css'

interface IButton {

}

export const Button: FC<IButton> = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}