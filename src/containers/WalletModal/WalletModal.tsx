import { useCallback, useEffect, FC } from 'react'
import { useWeb3React } from '@web3-react/core'

import { WalletModal } from '../../components/WalletModal/WalletModal'

import connectors from '../../connectors/index'

interface IWalletModal {
  isOpen: boolean
  onClose: any
}

export const WalletModalContainer: FC<IWalletModal> = ({ isOpen, onClose }) => {
  const { activate } = useWeb3React()

  const connectWallet = useCallback(
    async (connector) => {
      try {
        await activate(connector, undefined, true)
        onClose()
      } catch (err) {
        console.log(err)
      }
    },
    [activate, onClose]
  )

  useEffect(() => {
    async function connect() {
      const isAuthorized = await connectors.injected.connector.isAuthorized()
      if (isAuthorized) {
        await activate(connectors.injected.connector, undefined, true)
      }
    }
    connect()
  }, [activate])

  return (
    <WalletModal
      isOpen={isOpen}
      onClose={onClose}
      connectors={Object.values(connectors)}
      connectWallet={connectWallet}
    />
  )
}
