import React, { useState } from 'react';
import Modal from 'react-modal';

const Popup = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  
  return (
    <div>
      <div className='items-center justify-center flex mt-3'>
      <button className='bg-red-300' onClick={openModal}>Search</button>

      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div className='flex justify-center items-center  text-sm font-bold'>Hello Maich
        We found Your Id
        </div>
      </Modal>
    </div>
  );
};

export default Popup;
