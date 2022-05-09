import React, { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { getAddress } from 'ethers/lib/utils'
import { BigNumber } from 'ethers'
import { PageLayout } from '../../layouts/PageLayout/PageLayout'
import { MakeBet } from './MakeBet/MakeBet'
import { Deposit } from './Deposit/Deposit'
import { Balance } from './Balance/Balance'
import { FinalizeRound } from './FinalizeRound/FinalizeRound'
import './RNDGame.css'
import { AnimatedToken } from '../../components/AnimatedToken/AnimatedToken'
import { History } from '../../components/History/History'
import { getGameContract } from '../../lib/helpers'

export const RNDGame = () => {
  const { library, chainId } = useWeb3React<Web3Provider>()
  const [history, setHistory] = useState([])

  useEffect(() => {
    async function updateHistory() {
      if (!library || !chainId || !library.provider || !library.provider.request) return

      const game = getGameContract(library, chainId)

      const filters = [game.filters.Bet(), game.filters.Win(), game.filters.Lose()]

      const req = library.provider.request

      const logs = await Promise.all(
        filters.map((f) =>
          req({
            method: 'eth_getLogs',
            params: [
              {
                ...f,
                fromBlock: 'earliest',
                toBlock: 'latest',
              },
            ],
          })
        )
      )
      const flatLogs = logs.flat().sort((a, b) => b.blockNumber - a.blockNumber)

      const newHistory: any[] = flatLogs.map((l) => {
        let type = 'bet'
        if (l.topics[0] === (filters[1].topics as string[])[0]) {
          type = 'win'
        }
        if (l.topics[0] === (filters[2].topics as string[])[0]) {
          type = 'lose'
        }
        return {
          address: getAddress(`0x${(l.topics[2] as string).slice(26)}`),
          amount: BigNumber.from(l.data).toString(),
          type,
        }
      })

      setHistory(newHistory as any)
    }

    setInterval(updateHistory as () => void, 1000)
  }, [library, chainId])

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

        <History rows={history} />
      </div>
    </PageLayout>
  )
}
