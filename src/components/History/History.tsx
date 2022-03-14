import React, { FC } from 'react'

interface IButton {
  onClick?: () => void
}

export const History: FC<IButton> = (props) => {
  return (
    <div className="generalButton" onClick={props.onClick}>
      {props.children}
    </div>
  )
}
