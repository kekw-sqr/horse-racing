import { InjectedConnector } from '@web3-react/injected-connector'

import metaMaskIcon from '../assets/metamask.svg'

const injected = new InjectedConnector({ supportedChainIds: [1, 77, 100] })

const connectors = {
  injected: {
    name: 'MetaMask',
    icon: metaMaskIcon,
    connector: injected,
  },
}

export default connectors
