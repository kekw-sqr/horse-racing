import React, { FC, useMemo } from 'react'
import { IHorse } from '../types'
import './HorseState.css'

interface IHorseState {
  [key: string]: any
  horse: IHorse
  margin?: string | number
}

export const HorseState: FC<IHorseState> = ({ horse, margin, style }) => {

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
    <div className='horseState' style={st}>
      <div style={{ color: horse.color, width: horse.position }} className='horseName'>{horse.name}</div>
      <div style={{ backgroundColor: horse.color, width: horse.position }}  className={'line'} />
    </div>
  )
}