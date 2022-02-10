import React from 'react'
import { PageLayout } from '../../layouts/PageLayout/PageLayout'
import { HorsesWidget } from './HorsesWidget/HorsesWidget'
import './HorseRacing.css'


export const HorseRacing = () => {
  const horses = [
    {
      name: 'Zhopa',
      color: '#fdfffcff',
      position: '80%',
    },
    {
      name: 'Piska',
      color: '#41ead4ff',
      position: '60%',
    },
    {
      name: 'Kal',
      color: '#ff0022ff',
      position: '30%',
    }
  ]

  return (
    <PageLayout>
      <div className='horseRacing'>

        <div className='horsesStateWidget'>
          <div className='widget'>
            <div className='raceStateTitle'>
              Race state
            </div>

            <HorsesWidget horses={horses} />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}