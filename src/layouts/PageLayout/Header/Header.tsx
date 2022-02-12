import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

import Logo from './Icons/Logo'
import { WalletModalContainer } from '../../../containers/WalletModal/index'

export const Header = () => {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  return (
    <div className='header'>
      <Link to={'/'} className='icon' >
        <Logo />
      </Link>

      <div onClick={() => setIsWalletModalOpen(true)}>Connect wallet</div>
      <WalletModalContainer
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
      >
      </WalletModalContainer>

    </div>
  )
}