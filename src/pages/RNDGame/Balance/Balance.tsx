import React, { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { BigNumber } from 'ethers'
import { Web3Provider } from '@ethersproject/providers'
import { Button } from '../../../components/Button/Button'
import { getGameContract, getTokenContract } from '../../../lib/helpers'
import './Balance.css'

export const Balance = () => {
  const { library, chainId } = useWeb3React<Web3Provider>()
  const [gameBalance, setGameBalance] = useState(0)
  const [tokenBalance, setTokenBalance] = useState(0)
  // const [mintAmount, setMintAmount] = useState<BigNumber | null>(null)

  useEffect(() => {
    const getBalances = async () => {
      if (!library || !chainId) return

      const game = getGameContract(library, chainId)
      const signer = library.getSigner()
      const address = await signer.getAddress()
      const gameBalanceRes = await game.balanceOf(address)
      setGameBalance(gameBalanceRes)

      const token = getTokenContract(library, chainId)
      const tokenBalanceRes = await token.balanceOf(address)
      setTokenBalance(tokenBalanceRes)
    }

    const f: () => any = () => getBalances().then(() => setTimeout(f, 1000))
    f()
  }, [library, chainId])

  const mint = async () => {
    if (!library || !chainId) return

    const token = getTokenContract(library, chainId)
    const signer = library.getSigner()
    await token.mint(await signer.getAddress(), BigNumber.from(100))
  }

  return (
    <div className="balance">
      <div className="values">
        <div className="tokenBalance">Token Balance: {tokenBalance.toString()}</div>
        <div className="gameBalance">Game Balance: {gameBalance.toString()}</div>
      </div>

      <div className="mint">
        <Button onClick={() => mint()}>Mint</Button>
      </div>
    </div>
  )
}
