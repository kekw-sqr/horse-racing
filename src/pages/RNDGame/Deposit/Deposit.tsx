import React, { useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { BigNumber } from 'ethers'
import { Web3Provider } from '@ethersproject/providers'
import { Button } from '../../../components/Button/Button'
import { getGameContract, getTokenContract } from '../../../lib/helpers'
import { TokenInput } from '../../../components/TokenInput/TokenInput'
import './Deposit.css'

export const Deposit = () => {
  const [depositAmount, setDepositAmount] = useState<BigNumber | null>(null)
  const { library } = useWeb3React<Web3Provider>()

  const makeDeposit = async () => {
    if (depositAmount === null || library === undefined) return undefined

    const token = getTokenContract(library)
    const game = getGameContract(library)
    await token.approve(game.address, depositAmount)
    const res = await game.deposit(depositAmount)
    console.log(res)
  }

  return (
    <div className="deposit">
      <div className="inputWrapper">
        <TokenInput onChange={(v) => setDepositAmount(BigNumber.from(v))} value={depositAmount?.toString()} />
      </div>
      <Button onClick={() => makeDeposit()}>Make deposit</Button>
    </div>
  )
}
