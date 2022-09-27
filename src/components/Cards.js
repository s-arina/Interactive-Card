import React from 'react';
import '../css/Cards.css';
import CardBack from './CardBack';
import CardFront from './CardFront';

function Cards({ data }) {
  return (
    <div className='cards'>
      <CardFront data={data} />
      <CardBack data={data} />
    </div>
  );
}

export default Cards;
