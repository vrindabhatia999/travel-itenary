import React, { useState } from 'react';
import './UserModal.css';
export type ModalProps = {
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  onClose: () => void;
};

function UserModal(props: ModalProps) {
  const [name, setName] = useState<string>('');

  const inputHandler = (e: any) => {
    setName(e.target.value);
  };

  const submitHandler = () => {
    props.setUserName(name);
    props.onClose();
  };

  const closeModal = () => {
    props.onClose();
  };

  return (
    <div className='modal'>
      <div className='modal-content'>
        {/* <div className='close-div' onClick={closeModal}>
          X
        </div> */}
        <input
          className='user-input'
          type='text'
          onChange={(e) => inputHandler(e)}
          placeholder='Enter your name'
        />
        <button className='submit-btn' onClick={submitHandler}>
          Go!
        </button>
      </div>
    </div>
  );
}

export default UserModal;
