import React, { FC } from 'react'
import './TokenInput.css'

interface TokenInputProps {
  onChange: (value: string) => void
  value: number | string | undefined
  id: string
}

export const TokenInput: FC<TokenInputProps> = ({ onChange, value, id }) => {
  const onChangeWrapper = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value || '0')
  }

  return (
    <div className="tokenInput">
      <input id={id} type="text" onChange={onChangeWrapper} placeholder="0.00" />
    </div>
  )
}
