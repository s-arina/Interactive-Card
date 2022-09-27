import React from 'react';
import '../css/Cards.css';

function Cards({ data }) {
  return (
    <div className='cards'>
      <div className='front'>
        <img src='/imgs/card-logo.svg' className='card-logo' alt='card logo' />
        <div className='info'>
          <h3>{data ? data.number : '0000 0000 0000 0000'}</h3>
          <div className='name-date'>
            <h3>{data ? data.name : 'JANE APPLESEED'}</h3>
            <h3>
              {data ? data.month : '00'}/{data ? data.year : '00'}
            </h3>
          </div>
        </div>
        <img
          src='/imgs/bg-card-front.png'
          className='card-front'
          alt='card front'
        />
      </div>
      <div className='card-back'>
        <img src='/imgs/bg-card-back.png' alt='card front' />
      </div>
    </div>
  );
}

export default Cards;
