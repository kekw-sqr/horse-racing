import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

import Logo from './Icons/Logo'
import { WalletModalContainer } from '../../../containers/WalletModal/WalletModal'

export const Header = () => {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false)
  return (
    <div className="header">
      <div className="headerWrapper">
        <Link to="/" className="icon">
          <Logo />
        </Link>
        <div className="wallet" onClick={() => setIsWalletModalOpen(true)}>
          Connect wallet
        </div>
        <WalletModalContainer isOpen={isWalletModalOpen} onClose={() => setIsWalletModalOpen(false)} />
      </div>
    </div>
  )
}
