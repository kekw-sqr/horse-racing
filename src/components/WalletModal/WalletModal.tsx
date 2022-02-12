import React, { FC } from 'react'
import styled from 'styled-components'

import { Modal } from '../Modal/Modal'

interface IWalletModal {
  isOpen: boolean
  onClose: any
  connectors: any[]
  connectWallet: any
}

export const WalletModal: FC<IWalletModal> = ({ isOpen, onClose, connectors, connectWallet }) => {
  console.log()
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Connect web3 wallet">
      <Text>
        Select a wallet below:
      </Text>
      {connectors.map(connector =>
        <WalletConnector key={connector.name} onClick={() => connectWallet(connector.connector)}>
          <WalletConnectorName>{connector.name}</WalletConnectorName>
          <WalletConnectorIcon src={connector.icon} />
        </WalletConnector>
      )}
    </Modal>
  );
}

const Text = styled.span`
  font-size: 12px;
  text-align: center;
  line-height: 20px;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
`

const WalletConnector = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.walletConnectorOption.background.default};
  border: 1px solid ${({ theme }) => theme.walletConnectorOption.border.default};
  border-radius: 16px;
  width: 100%;
  height: 60px;
  padding: 0 24px;
  margin-bottom: 16px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.walletConnectorOption.background.hover};
    border: 1px solid ${({ theme }) => theme.walletConnectorOption.border.hover};
  }
`;

const WalletConnectorName = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.text.color.primary};
  font-weight: ${({ theme }) => theme.text.weight.normal};
`;

const WalletConnectorIcon = styled.img`
  width: 32px;
`;
