import type { Web3Provider } from '@ethersproject/providers'
import { Contract } from 'ethers'
import { BET_CONTRACT_CONFIG, TOKEN_CONTRACT_CONFIG } from '../config'

export function getGameContract(library: Web3Provider, chainId: number) {
  const signer = library.getSigner()
  return new Contract(BET_CONTRACT_CONFIG.addresses[chainId], BET_CONTRACT_CONFIG.abi, library).connect(signer)
}

export function getTokenContract(library: Web3Provider, chainId: number) {
  const signer = library.getSigner()
  return new Contract(TOKEN_CONTRACT_CONFIG.addresses[chainId], TOKEN_CONTRACT_CONFIG.abi, library).connect(signer)
}
