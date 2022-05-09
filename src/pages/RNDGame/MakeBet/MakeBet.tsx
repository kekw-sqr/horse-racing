import React, { useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { BigNumber } from 'ethers'
import { Web3Provider } from '@ethersproject/providers'
import { Button } from '../../../components/Button/Button'
import { getGameContract } from '../../../lib/helpers'
import { TokenInput } from '../../../components/TokenInput/TokenInput'
import './MakeBet.css'

export const MakeBet = () => {
  const [amount, setAmount] = useState<BigNumber | null>(null)
  const [outcome, setOutcome] = useState<number>(0)
  const { library } = useWeb3React<Web3Provider>()

  const makeBet = async () => {
    if (amount === null || library === undefined) return undefined

    const game = getGameContract(library)
    const res = await game.placeBet(outcome, amount)
    console.log(res)
  }

  return (
    <div className="makeBet">
      <div className="inputWrapper">
        <TokenInput onChange={(v) => setAmount(BigNumber.from(v))} value={amount?.toString()} />
      </div>
      <div className="chooseOutcome">
        <Button onClick={() => setOutcome(0)} active={outcome === 0}>
          Outcome 1
        </Button>
        <Button onClick={() => setOutcome(1)} active={outcome === 1}>
          Outcome 2
        </Button>
      </div>

      <Button onClick={() => makeBet()}>Make bet</Button>
    </div>
  )
}
