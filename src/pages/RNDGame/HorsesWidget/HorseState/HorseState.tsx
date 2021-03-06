import React, { FC, useMemo } from 'react'
import { IHorse } from '../types'
import './HorseState.css'
import MoneyIcon from './MoneyIcon'

interface IHorseState {
  [key: string]: any
  horse: IHorse
  margin?: string | number
  onClick: () => void
}

export const HorseState: FC<IHorseState> = ({ horse, margin, style, onClick }) => {
  const st = useMemo(
    () =>
      !margin && !style
        ? undefined
        : {
            margin,
            ...style,
          },
    [margin, style]
  )

  return (
    <div style={st} onClick={onClick} className="horseState">
      {horse.isBetOn && <MoneyIcon className="betIcon" />}
      <div>
        <div style={{ color: horse.color, width: horse.position }} className="horseName">
          {horse.name}
        </div>
        <div style={{ backgroundColor: horse.color, width: horse.position }} className="line" />
      </div>
    </div>
  )
}
