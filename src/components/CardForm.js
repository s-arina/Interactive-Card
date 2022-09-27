import React from 'react';
import '../css/CardForm.css';

function CardForm(props) {
  return (
    <div className='card-form'>
      <form id='card-info'>
        <label htmlFor='cardholder-name'>CARDHOLDER NAME</label>
        <input
          type='text'
          id='cardholder-name'
          placeholder='e.g. Jane Appleseed'
          required
        />
        <label htmlFor='card-number'>CARD NUMBER</label>
        <input
          type='text'
          id='card-number'
          placeholder='e.g. 1234 5678 9123 0000'
          required
        />
        <div className='date-cvc'>
          <div className='exp-date'>
            <label htmlFor='date'>EXP. DATE (MM/YY)</label>
            <div className='date'>
              <input type='number' id='month' placeholder='MM' required />
              <input type='number' id='year' placeholder='YY' required />
            </div>
          </div>
          <div className='cvc'>
            <label htmlFor='cvc'>CVC</label>
            <input type='number' id='cvc' placeholder='e.g. 123' required />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CardForm;
