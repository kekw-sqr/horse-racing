import React, { FC } from 'react'

import styled from 'styled-components'
import ReactModal from 'react-modal'
import { ReactComponent as CrossIconSvg } from '../../assets/cross.svg'

interface IModal {
  isOpen: boolean
  onClose: any
  title: any
  // onBack?: any
}

export const Modal: FC<IModal> = ({ children, isOpen, onClose, title }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0',
      border: '0',
      borderRadius: '24px',
      opacity: '1',
    },
  }
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose} style={customStyles} contentLabel={title} ariaHideApp={false}>
      <ModalContent>
        <Title>{title}</Title>
        {/* {onBack && <BackIcon onClick={onBack} />} */}
        <CrossIcon onClick={onClose} />
        {children}
      </ModalContent>
    </ReactModal>
  )
}

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 26px 32px 32px;
  box-sizing: border-box;
  position: relative;
`

const Title = styled.span`
  font-size: 20px;
  margin-bottom: 24px;
`

const CrossIcon = styled(CrossIconSvg)`
  position: absolute;
  top: 31px;
  right: 21px;
  cursor: pointer;
`
