import React from 'react'
import './History.css'
import { Row } from './Row/Row'

export const History = () => {
  const rows = [
    {
      address: '0x170502C0AE807CF26E2E55BCBD121E351BF29AC8',
      amount: 50,
      isWin: true,
    },
    {
      address: '0x29877E59E854BF9222C30F4D5202A1000646A7D5',
      amount: 20,
      isWin: false,
    },
    {
      address: '0x7FCAC3E7DDE5923CDA1909992AA3E9389FC05663',
      amount: 30,
      isWin: false,
    },
    {
      address: '0x2E90071B12BCBC8F26E88AE8849334B2415C6FA1',
      amount: 100,
      isWin: true,
    },
    {
      address: '0x20D3C2BA37C85A9E76D0137E8947BBF7AE172420',
      amount: 50,
      isWin: true,
    },
  ]
  return (
    <div className="history">
      {rows.map((row) => (
        <Row {...row} />
      ))}
    </div>
  )
}
