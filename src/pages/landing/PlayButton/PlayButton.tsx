import React from 'react'
import { useHistory } from 'react-router-dom'
import { HORSE_RACING } from '../../../routes'

import './PlayButton.css'

export const PlayButton = () => {
  const history = useHistory()

  const handleClick = () => {
    history.push(HORSE_RACING)
  }

  return (
    <div className="playButton" onClick={handleClick}>
      PLAY
    </div>
  )
}
