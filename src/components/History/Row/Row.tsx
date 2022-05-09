import React, { FC } from 'react'
import './Row.css'

interface RowProps {
  address: string
  isWin: boolean
  amount: number
}

export const Row: FC<RowProps> = ({ address, amount, isWin }) => {
  return (
    <div className="row">
      <div className="address">{address}</div>
      {isWin && <div className="winAmount">+{amount}</div>}
      {!isWin && <div className="lostAmount">-{amount}</div>}
    </div>
  )
}
