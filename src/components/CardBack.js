import React from 'react';

function CardBack({ data }) {
  return (
    <div className='card-back'>
      <h3 className='cvc'>{data && data.cvc ? data.cvc : '000'}</h3>
      <img src='/imgs/bg-card-back.png' className='back' alt='card back' />
    </div>
  );
}

export default CardBack;
