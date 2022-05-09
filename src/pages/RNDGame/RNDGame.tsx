import React from 'react'
import { PageLayout } from '../../layouts/PageLayout/PageLayout'
import { MakeBet } from './MakeBet/MakeBet'
import { Deposit } from './Deposit/Deposit'
import { Balance } from './Balance/Balance'
import { FinalizeRound } from './FinalizeRound/FinalizeRound'
import './RNDGame.css'

export const RNDGame = () => {
  return (
    <PageLayout>
      <div className="rndGame">
        <Balance />
        <div className="controls">
          <MakeBet />
          <Deposit />
        </div>
        <FinalizeRound />
      </div>
    </PageLayout>
  )
}
