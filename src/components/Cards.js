import React from 'react';

function Cards(props) {
  return (
    <div className='cards'>
      <img
        src='/imgs/bg-card-front.png'
        className='card-front'
        alt='card front'
      />
      <img
        src='/imgs/bg-card-back.png'
        className='card-back'
        alt='card front'
      />
    </div>
  );
}

export default Cards;
