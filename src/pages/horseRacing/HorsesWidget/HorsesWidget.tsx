import React, { FC } from 'react'
import { HorseState } from './HorseState/HorseState'
import { IHorse } from './types'

import './HorsesWidget.css'

interface IHorsesWidget {
  horses: IHorse[]
  chooseHorse: (horseIndex: number) => void
}

export const HorsesWidget: FC<IHorsesWidget> = ({ horses, chooseHorse }) => {
  return (
    <div className="horsesWidget">
      {horses.map((horse, i) => (
        <HorseState horse={horse} margin="20px 0 0 0" onClick={() => chooseHorse(i)} key={horse.name} />
      ))}
    </div>
  )
}
