import React, { FC } from 'react'
import './Row.css'

interface RowProps {
  address: string
  type: string
  amount: number
}

export const Row: FC<RowProps> = ({ address, amount, type }) => {
  return (
    <div className="row">
      <div className="address">{address}</div>
      {type === 'win' && <div className="winAmount">+{amount}</div>}
      {type === 'lose' && <div className="lostAmount">-{amount}</div>}
      {type === 'bet' && <div className="betAmount">{amount}</div>}
    </div>
  )
}
