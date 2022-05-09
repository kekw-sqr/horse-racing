import React, { FC } from 'react'
import './History.css'
import { Row } from './Row/Row'

interface HistoryProps {
  rows: any[]
}

export const History: FC<HistoryProps> = ({ rows }: HistoryProps) => {
  return (
    <div className="history">
      {rows.map((row, i) => (
        <Row key={i} {...row} />
      ))}
    </div>
  )
}
