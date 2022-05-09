import React from 'react'
import { PageLayout } from '../../layouts/PageLayout/PageLayout'
import { MakeBet } from './MakeBet/MakeBet'
import { Deposit } from './Deposit/Deposit'
import { Balance } from './Balance/Balance'
import { FinalizeRound } from './FinalizeRound/FinalizeRound'
import './RNDGame.css'
import { AnimatedToken } from '../../components/AnimatedToken/AnimatedToken'
import { History } from '../../components/History/History'

export const RNDGame = () => {
  return (
    <PageLayout>
      <div className="rndGame">
        <div className="leftBlock">
          <Balance />
          <div className="token">
            <AnimatedToken />
          </div>
          <div className="controls">
            <MakeBet />
            <Deposit />
          </div>
          <FinalizeRound />
        </div>

        <History />
      </div>
    </PageLayout>
  )
}
