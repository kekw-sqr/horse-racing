import React, { useCallback, useState } from 'react'
import { PageLayout } from '../../layouts/PageLayout/PageLayout'
import { HorsesWidget } from './HorsesWidget/HorsesWidget'
import { MakeBet } from './MakeBet/MakeBet'
import { initialHorses } from './consts'
import { Deposit } from './Deposit/Deposit'
import { Balance } from './Balance/Balance'
import './HorseRacing.css'

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
            <Balance />
            <MakeBet />
            <Deposit />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
