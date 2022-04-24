import React from "react";
import "./Form.css";

function Form() {
  return (
    <form>
      <div className="billing-details">
        <p>Customer Information</p>
        <div className="form-left">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className="form-right">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <label htmlFor="address">Address</label>
        <input type="text" name="address" id="address" required />
        <label htmlFor="country">Country</label>
        <select name="country" id="country">
          <option>United Kingdom</option>
          <option>United States</option>
          <option>Germany</option>
        </select>
        <input type="submit" defaultValue="Proceed Order" className="button" />
      </div>
    </form>
  );
}

export default Form;
