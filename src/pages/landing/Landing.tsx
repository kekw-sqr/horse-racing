import React from 'react'
import { Link } from 'react-router-dom'
import { PageLayout } from '../../layouts/PageLayout/PageLayout'

import './Landing.css'
import { PlayButton } from './PlayButton/PlayButton'

export const Landing = () => {
  return (
    <PageLayout>
      <div className='root'>
        <div className='title'>
          Blockchain Horse Racing
        </div>

        <PlayButton/>
      </div>
    </PageLayout>
  )
}