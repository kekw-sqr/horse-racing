import React from 'react'
import { PageLayout } from '../../layouts/PageLayout/PageLayout'

import './Landing.css'
import { PlayButton } from './PlayButton/PlayButton'

export const Landing = () => {
  return (
    <PageLayout>
      <div className="root">
        <div className="title">Blockchain RND Game</div>

        <PlayButton />
      </div>
    </PageLayout>
  )
}
