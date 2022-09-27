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
          maxLength={16}
          required
        />
        <div className='date-cvc'>
          <div className='exp-date'>
            <label htmlFor='date'>EXP. DATE (MM/YY)</label>
            <div className='date'>
              <input
                type='text'
                id='month'
                placeholder='MM'
                maxLength={2}
                required
              />
              <input
                type='text'
                id='year'
                placeholder='YY'
                maxLength={2}
                required
              />
            </div>
          </div>
          <div className='cvc'>
            <label htmlFor='cvc'>CVC</label>
            <input
              type='text'
              id='cvc'
              placeholder='e.g. 123'
              maxLength={3}
              required
            />
          </div>
        </div>
        <button>Confirm</button>
      </form>
    </div>
  );
}

export default CardForm;
