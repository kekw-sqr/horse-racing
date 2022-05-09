import React, { useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { BigNumber } from 'ethers'
import { Web3Provider } from '@ethersproject/providers'
import { History } from '../../../components/History/History'
import { Button } from '../../../components/Button/Button'
import { getGameContract } from '../../../lib/helpers'
import { TokenInput } from '../../../components/TokenInput/TokenInput'

export const MakeBet = () => {
  const [outcome, setOutcome] = useState<BigNumber | null>(null)
  const { library } = useWeb3React<Web3Provider>()

  const makeBet = async () => {
    if (outcome === null || library === undefined) return undefined

    const game = getGameContract(library)
    const res = await game.placeBet(outcome, 1)
    console.log(res)
  }

  return (
    <div className="makeBet">
      <div className="inputWrapper">
        <TokenInput onChange={(v) => setOutcome(BigNumber.from(v))} value={outcome?.toString()} />
      </div>
      <Button onClick={() => makeBet()}>Make bet</Button>

      {/* <History /> */}
    </div>
  )
}
