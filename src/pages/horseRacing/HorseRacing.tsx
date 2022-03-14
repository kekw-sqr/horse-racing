import React, { useCallback, useState } from 'react'
import { PageLayout } from '../../layouts/PageLayout/PageLayout'
import { HorsesWidget } from './HorsesWidget/HorsesWidget'
import './HorseRacing.css'
import { MakeBet } from './MakeBet/MakeBet'
import { initialHorses } from './consts'

export const HorseRacing = () => {
  const [horses, setHorses] = useState(initialHorses)

  const chooseHorse = useCallback(
    (index: number) => {
      const newHorses = horses.slice()
      const chosenHorse = horses[index]
      chosenHorse.isBetOn = !chosenHorse.isBetOn
      newHorses[index] = chosenHorse
      setHorses(newHorses)
    },
    [horses, setHorses]
  )

  return (
    <PageLayout>
      <div className="horseRacing">
        <div className="horsesStateWidget">
          <div className="widget">
            <div className="raceStateTitle">Race state</div>

            <HorsesWidget horses={horses} chooseHorse={chooseHorse} />
            <MakeBet />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
