import React, { useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { ethers, Contract } from 'ethers'
import { Web3Provider } from '@ethersproject/providers'
import { History } from '../../../components/History/History'
import { Button } from '../../../components/Button/Button'
import { BET_CONTRACT_CONFIG } from '../../../config'

import './MakeBet.css'

function mergeUint8Arrays(arr1: Uint8Array, arr2: Uint8Array) {
  const mergedArray = new Uint8Array(arr1.length + arr2.length)
  mergedArray.set(arr1)
  mergedArray.set(arr2, arr1.length)
  return mergedArray
}

export const MakeBet = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isHistryOpen, setIsHistoryOpen] = useState(false)
  const [betId, setBetId] = useState<string | null>(null)
  const { library } = useWeb3React<Web3Provider>()

  const makeBet = async () => {
    if (betId === null || library === undefined) return undefined
    const secret = ethers.utils.randomBytes(32)
    const betIdBytes = ethers.utils.toUtf8Bytes(betId)
    const hash = ethers.utils.keccak256(mergeUint8Arrays(betIdBytes, secret))
    const betContract = new Contract(BET_CONTRACT_CONFIG.address, BET_CONTRACT_CONFIG.betAbi, library).connect(
      library.getSigner()
    )
    console.log(betContract)
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
