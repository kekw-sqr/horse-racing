import { ethers } from 'ethers'

export function mergeUint8Arrays(arr1: Uint8Array, arr2: Uint8Array) {
  const mergedArray = new Uint8Array(arr1.length + arr2.length)
  mergedArray.set(arr1)
  mergedArray.set(arr2, arr1.length)
  return mergedArray
}

export function betCommitment(betId: string) {
  const secret = ethers.utils.randomBytes(32)
  const betIdBytes = ethers.utils.toUtf8Bytes(betId)
  const hash = ethers.utils.keccak256(mergeUint8Arrays(betIdBytes, secret))
  return hash
}
