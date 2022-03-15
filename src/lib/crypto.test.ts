import { mergeUint8Arrays, betCommitment } from './crypto'

describe('Crypto utils test', () => {
  it('merges two uint8 arrays', () => {
    const a1 = Uint8Array.from([1, 2, 3])
    const a2 = Uint8Array.from([4, 5])
    const merged = mergeUint8Arrays(a1, a2)
    expect(merged).toEqual(Uint8Array.from([1, 2, 3, 4, 5]))
  })

  it('calculates bet commitment', () => {
    const commit = betCommitment('5')
    expect(commit.slice(0, 2)).toEqual('0x')
    expect(commit).toHaveLength(66)
  })
})