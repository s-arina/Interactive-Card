import React, { useState } from 'react';

function Reset({ setData, setInput }) {
  const [modal, setModal] = useState(false);

  function clearAll() {
    setData(null);
    setInput({ name: '', number: '', month: '', year: '', cvc: '' });
  }

  return (
    <div className='modal'>
      <button onClick={() => setModal(true)}>Clear all</button>
    </div>
  );
}

export default Reset;
