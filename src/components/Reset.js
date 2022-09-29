import React, { useState } from 'react';
import '../css/Modal.css';

function Reset({ setData, setInput }) {
  const [modal, setModal] = useState(false);

  function clearAll() {
    setData(null);
    setInput({ name: '', number: '', month: '', year: '', cvc: '' });
  }

  return (
    <div className='modal'>
      <h3 className='modal-btn' onClick={() => setModal(!modal)}>
        Clear all
      </h3>
      {modal && (
        <div className='modal-confirm'>
          <h3>Are you sure?</h3>
          <button
            onClick={() => {
              setModal(false);
              clearAll();
            }}
          >
            Yes
          </button>
          <button onClick={() => setModal(false)}>No</button>
        </div>
      )}
    </div>
  );
}

export default Reset;
