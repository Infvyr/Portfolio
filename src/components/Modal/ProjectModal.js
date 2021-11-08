import React from 'react';
import Modal from 'react-modal';
import {
  customStyles,
  StyledModalBody,
  StyledModalCloseButton,
  StyledModalHeader,
  StyledModalTitle
} from './ModalStyles'
import {AiOutlineClose} from "react-icons/ai";
import Gallery from '../Gallery/Gallery';

Modal.setAppElement('#modal-root')

export default function ProjectModal({isOpen, toggleModal, title = '', images}) {
  return <Modal
    isOpen={isOpen}
    onRequestClose={toggleModal}
    style={customStyles}
  >
    <StyledModalHeader>
      <StyledModalTitle>{title} Gallery</StyledModalTitle>
      <StyledModalCloseButton
        aria-label="Exit the gallery"
        onClick={toggleModal}>
        <AiOutlineClose />
      </StyledModalCloseButton>
    </StyledModalHeader>
    <StyledModalBody>
      {images ? <Gallery media={images} /> : 'Sorry, no images in this gallery.'}
    </StyledModalBody>
  </Modal>
}