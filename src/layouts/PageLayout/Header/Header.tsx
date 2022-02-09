import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

import Logo from './Icons/Logo'
import WalletIcon from './Icons/WalletIcon'


export const Header = () => {
  return (
    <div className='header'>
      <Link to={'/'} className='icon' >
        <Logo />
      </Link>

      <div className='icon wallet'>
        <WalletIcon/>
      </div>

    </div>
  )
}