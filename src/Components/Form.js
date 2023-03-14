import React from 'react';
import '../Form.css';

export const Form = () => {
  return (
    <form>
      <label htmlFor="name">
        <span>CARDHOLDER NAME</span>
        <input id="name" type="text" placeholder='e.g. Jane Appleseed'/>
      </label>
      <label htmlFor="number">
        <span>CARD NUMBER</span>
        <input id="number" type="number" placeholder="e.g. 1234 5678 9123 0000" />
      </label>
      <div className="bottom-form-container">
        <div className="exp-date-container">
          <label htmlFor="exp-date">
            <span>EXP. DATE (MM/YY)</span>
            <div className="test-container">
              <input id="exp-date" type="number" placeholder="MM" className='month-date'/>
              <input id="exp-date" type="number" placeholder="YY" className='year-date'/>
            </div>
          </label>
        </div>
        <div className="cvc-container">
          <label htmlFor="cvc">
            <span>CVC</span>
            <input id="cvc" type="number" placeholder="e.g. 123" />
          </label>
        </div>
      </div>
      <button>Confirm</button>
    </form>
  )
}
