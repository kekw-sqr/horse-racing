import { InjectedConnector } from '@web3-react/injected-connector'

import metaMaskIcon from '../assets/metamask.svg'

const injected = new InjectedConnector({ supportedChainIds: [77, 31337] })

const connectors = {
  injected: {
    name: 'MetaMask',
    icon: metaMaskIcon,
    connector: injected,
  },
}

export default connectors
