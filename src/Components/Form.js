import React from 'react';
import '../Form.css';

export const Form = () => {
  return (
    <form>
      <label htmlFor="">Cardholder Name</label>
      <input type="text" placeholder='e.g. Jane Appleseed'/>
      <label htmlFor="">Cardholder Number</label>
      <input type="text" />
      <label htmlFor="">Exp. Date</label>
      <input type="text" />
      <label htmlFor="">(MM/YY)</label>
      <input type="text" />
      <label htmlFor="">CVC</label>
      <input type="text" />
    </form>
  )
}
