import React from 'react';
import '../css/CardForm.css';

function CardForm({ data, setData, input, setInput }) {
  function onChange(e) {
    let val = e.target.value;

    if (e.target.name === 'number') {
      setInput({
        ...input,
        number: val.replace(/\W/gi, '').replace(/(.{4})/g, '$1 '),
      });
    } else {
      setInput({ ...input, [e.target.name]: e.target.value });
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    setData(input);
  }

  return (
    <div className='card-form'>
      <form id='card-info' onSubmit={(e) => onSubmit(e)}>
        <label htmlFor='name'>CARDHOLDER NAME</label>
        <input
          type='text'
          id='name'
          name='name'
          placeholder='e.g. Jane Appleseed'
          onChange={(e) => onChange(e)}
          // required
        />
        <label htmlFor='number'>CARD NUMBER</label>
        <input
          type='text'
          id='number'
          name='number'
          placeholder='e.g. 1234 5678 9123 0000'
          onChange={(e) => onChange(e)}
          maxLength={16}
          value={input.number}
          // required
        />
        <div className='date-cvc'>
          <div className='exp-date'>
            <label htmlFor='date'>EXP. DATE (MM/YY)</label>
            <div className='date'>
              <input
                type='text'
                id='month'
                name='month'
                placeholder='MM'
                maxLength={2}
                onChange={(e) => onChange(e)}
                // required
              />
              <input
                type='text'
                id='year'
                name='year'
                placeholder='YY'
                maxLength={2}
                onChange={(e) => onChange(e)}
                // required
              />
            </div>
          </div>
          <div className='cvc'>
            <label htmlFor='cvc'>CVC</label>
            <input
              type='text'
              id='cvc'
              name='cvc'
              placeholder='e.g. 123'
              maxLength={3}
              onChange={(e) => onChange(e)}
              // required
            />
          </div>
        </div>
        <button>Confirm</button>
      </form>
    </div>
  );
}

export default CardForm;
