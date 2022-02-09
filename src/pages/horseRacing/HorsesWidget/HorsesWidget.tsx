import React, { FC } from 'react'
import { HorseState } from './HorseState/HorseState'
import { IHorse } from './types'

import './HorsesWidget.css'

interface IHorsesWidget {
  horses: IHorse[]
}

export const HorsesWidget: FC<IHorsesWidget> = ({horses}) => {
  return (
    <div className='horsesWidget'>
      {horses.map((horse) => <HorseState horse={horse} margin={'20px 0 0 0'}/>)}
    </div>
  )
}