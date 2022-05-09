import React from 'react'
import { useHistory } from 'react-router-dom'
import { RND_GAME } from '../../../routes'

import './PlayButton.css'

export const PlayButton = () => {
  const history = useHistory()

  const handleClick = () => {
    history.push(RND_GAME)
  }

  return (
    <div className="playButton" onClick={handleClick}>
      PLAY
    </div>
  )
}
