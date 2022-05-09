import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

import Logo from './Icons/Logo'
import { WalletModalContainer } from '../../../containers/WalletModal/WalletModal'

export const Header = () => {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false)
  const [userAddress, setUserAddress] = useState('')
  return (
    <div className="header">
      <div className="headerWrapper">
        <Link to="/" className="icon">
          <Logo />
        </Link>
        <div className="wallet" onClick={() => setIsWalletModalOpen(true)}>
          {userAddress || 'Connect wallet'}
        </div>
        <WalletModalContainer
          isOpen={isWalletModalOpen}
          setUserAddress={setUserAddress}
          onClose={() => setIsWalletModalOpen(false)}
        />
      </div>
    </div>
  )
}
