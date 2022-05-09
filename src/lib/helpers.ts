import type { Web3Provider } from '@ethersproject/providers'
import { Contract } from 'ethers'
import { BET_CONTRACT_CONFIG, TOKEN_CONTRACT_CONFIG } from '../config'

export function getGameContract(library: Web3Provider) {
  const signer = library.getSigner()
  const game = new Contract(BET_CONTRACT_CONFIG.address, BET_CONTRACT_CONFIG.abi, library).connect(signer)
  return game
}

export function getTokenContract(library: Web3Provider) {
  const signer = library.getSigner()
  const token = new Contract(TOKEN_CONTRACT_CONFIG.address, TOKEN_CONTRACT_CONFIG.abi, library).connect(signer)
  return token
}
