import React, { FC } from 'react'
import './TokenInput.css'

interface TokenInputProps {
  onChange: (value: string) => void
  value: number | string | undefined
}

export const TokenInput: FC<TokenInputProps> = ({ onChange, value }) => {
  const onChangeWrapper = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value || '0')
  }

  return (
    <div className="tokenInput">
      <input type="text" onChange={onChangeWrapper} placeholder="0.00" />
    </div>
  )
}
