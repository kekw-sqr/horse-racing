import React, { useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Contract } from 'ethers'
import { Web3Provider } from '@ethersproject/providers'
import { History } from '../../../components/History/History'
import { Button } from '../../../components/Button/Button'
import { BET_CONTRACT_CONFIG } from '../../../config'
import { betCommitment } from '../../../lib/crypto'

import './MakeBet.css'

export const MakeBet = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHistryOpen, setIsHistoryOpen] = useState(false)
  const [betId, setBetId] = useState<string | null>(null)
  const { library } = useWeb3React<Web3Provider>()

  const makeBet = async () => {
    if (betId === null || library === undefined) return undefined
    const betContract = new Contract(BET_CONTRACT_CONFIG.address, BET_CONTRACT_CONFIG.betAbi, library).connect(
      library.getSigner()
    )
    console.log(betContract)
    const hash = betCommitment(betId)
    console.log(hash)
    // TO SEND:
    // betContract.bet(12, hash)
  }

  return (
    <div className="makeBet">
      <Button onClick={() => makeBet()}>Make a bet</Button>
      <input type="text" onChange={(e) => setBetId(e.target.value)} />
      <History />
    </div>
  )
}
