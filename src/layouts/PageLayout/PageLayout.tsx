import React, { FC } from 'react'
import { Header } from './Header/Header'
import './PageLayout.css'

interface IPageLayout { }

export const PageLayout: FC<IPageLayout> = (props) => {
  return (
    <div>
      <Header />
      <div className='content'>
        {props.children}
      </div>
    </div>
  )
}