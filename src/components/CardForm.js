import React from 'react';
import '../css/CardForm.css';

function CardForm({ data, setData, input, setInput }) {
  function onChange(e) {
    e.preventDefault();
    let val = e.target.value;

    if (e.target.name === 'number') {
      setInput({
        ...input,
        number: val
          .replace(/\W/gi, '')
          .replace(/(.{4})/g, '$1 ')
          .trim(),
      });
    } else if (e.target.name === 'name') {
      setInput({ ...input, name: val.toUpperCase() });
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
          maxLength={29}
          pattern='[a-zA-Z]+'
          onChange={(e) => onChange(e)}
          required
        />
        <label htmlFor='number'>CARD NUMBER</label>
        <input
          type='text'
          id='number'
          name='number'
          placeholder='e.g. 1234 5678 9123 0000'
          maxLength={19}
          value={input.number}
          onChange={(e) => onChange(e)}
          pattern='[0-9 ]+{19}'
          required
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
                pattern='0[1-9]|1[0-2]'
                required
              />
              <input
                type='text'
                id='year'
                name='year'
                placeholder='YY'
                maxLength={2}
                onChange={(e) => onChange(e)}
                pattern='[0-9]{2}'
                required
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
              pattern='[0-9]{3}'
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
