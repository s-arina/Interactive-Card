import React from 'react';

function CardFront({ data }) {
  return (
    <div className='card-front'>
      <img src='/imgs/card-logo.svg' className='card-logo' alt='card logo' />
      <div className='info'>
        <h3>{data && data.number ? data.number : '0000 0000 0000 0000'}</h3>
        <div className='name-date'>
          <h3>{data && data.name ? data.name : 'JANE APPLESEED'}</h3>
          <h3>
            {data && data.month ? data.month : '00'}/
            {data && data.year ? data.year : '00'}
          </h3>
        </div>
      </div>
      <img src='/imgs/bg-card-front.png' className='front' alt='card front' />
    </div>
  );
}

export default CardFront;
