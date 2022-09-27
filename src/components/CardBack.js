import React from 'react';

function CardBack({ data }) {
  return (
    <div className='card-back'>
      <h3 className='cvc'>{data && data.cvc ? data.cvc : '000'}</h3>
      <img src='/imgs/bg-card-back.png' alt='card front' />
    </div>
  );
}

export default CardBack;
