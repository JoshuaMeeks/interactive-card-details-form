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
        <span>CARDHOLDER NUMBER</span>
        <input id="number" type="number" placeholder="e.g. 1234 5678 9123 0000" />
      </label>
      <label htmlFor="exp-date">
        <span>EXP. DATE (MM/YY)</span>
        <input id="exp-date" type="number" placeholder="MM" />
        <input id="exp-date" type="number" placeholder="YY" />
      </label>
      <label htmlFor="">
        <span>CVC</span>
        <input id="cvc" type="number" placeholder="e.g. 123" />
      </label>
      <button>Confirm</button>
    </form>
  )
}
