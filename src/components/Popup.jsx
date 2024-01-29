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
      <div className='w-full items-center justify-center flex mt-3'>
      <button className='bg-blue-500 text-white p-2 text-sm rounded-md' onClick={openModal}>Give us your details</button>

      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div className='flex w-full h-full justify-center items-center bg-blue-400'>Hello Maich</div>
      </Modal>
    </div>
  );
};

export default Popup;
