import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { Button } from '../../../components/Button/Button'
import { getGameContract } from '../../../lib/helpers'
import './FinalizeRound.css'

export const FinalizeRound = () => {
  const { library, chainId } = useWeb3React<Web3Provider>()

  const finalizeRound = async () => {
    if (!library || !chainId) return

    const game = getGameContract(library, chainId)
    const res = await game.finalizeRound()
    console.log(res)
    // TODO handle errors
  }

  return (
    <div className="finalize">
      <Button onClick={() => finalizeRound()}>Finalize round</Button>
    </div>
  )
}
