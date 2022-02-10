import React, { useCallback, useState } from 'react'
import { Button } from '../../../components/Button/Button'
import ClickAwayListener from 'react-click-away-listener'

import './MakeBet.css'

export const MakeBet = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClickAway = useCallback(() => {
    isOpen && setIsOpen(false)
  }, [isOpen, setIsOpen])

  return (
    <div className='makeBet'>
      <Button onClick={() => setIsOpen(!isOpen)}>Make a bet</Button>
      
      <ClickAwayListener onClickAway={handleClickAway}>
        <>
          {isOpen && <div>open</div>}
        </>
      </ClickAwayListener>
    </div>
  )
}