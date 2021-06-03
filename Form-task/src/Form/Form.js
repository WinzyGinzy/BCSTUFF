import React from "react";
import "./Form.css";

const Form = ({ update, submit }) => {
  return (
    <div onChange={update}>
      <form id="form">
        <div>
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="First name"
            required
          />
        </div>
        <div>
          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Last name"
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone number</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone Number"
            required
          />
        </div>
        <div>
          <label htmlFor="role">Role</label>
          <select name="role" id="role">
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="4"
            placeholder="Text message"
            required
          />
        </div>
      </form>
      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default Form;
