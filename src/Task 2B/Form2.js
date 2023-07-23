import React, { useState } from 'react';
import "./Form2.css";

const Form2 = () => {
  const [contactType, setContactType] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleContactTypeChange = (event) => {
    setContactType(event.target.value);
  };

  return (
    <div className="contact-form">
      <div className="form-container">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label><br></br>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div className="form-group1">
            <label htmlFor="lastName">Last Name</label><br></br>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contactType">How should we contact you?</label><br></br>
            <label>
              <input
                type="radio"
                name="contactType"
                value="phone"
                checked={contactType === 'phone'}
                onChange={handleContactTypeChange}
              />
              Phone
            </label>
            <label>
              <input
                type="radio"
                name="contactType"
                value="email"
                checked={contactType === 'email'}
                onChange={handleContactTypeChange}
              />
              Email
            </label>
          </div>
          {contactType === 'phone' && (
            <div className="form-group1">
              <label htmlFor="phone">Phone Number</label><br></br>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
          )}
          {contactType === 'email' && (
            <div className="form-group1">
              <label htmlFor="email">Email Address</label><br></br>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form2;