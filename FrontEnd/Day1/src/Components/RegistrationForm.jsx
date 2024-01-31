// RegistrationForm.jsx

import React, { useState } from 'react';
import './RegistrationForm.css';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fathersName: '',
    mothersName: '',
    email: '',
    age: '',
    phoneNumber: '',
    gender: 'male',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
        <div>
        <header className='navv2'><Nav/></header>
    <div className="lp">
      <div className="registration-form-container">
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </label>

          <label>
            Last Name:
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
          </label>

          <label>
            Father's Name:
            <input type="text" name="fathersName" value={formData.fathersName} onChange={handleChange} required />
          </label>

          <label>
            Mother's Name:
            <input type="text" name="mothersName" value={formData.mothersName} onChange={handleChange} required />
          </label>

          <label>
            Email ID:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>

          <label>
            Age:
            <input type="number" name="age" value={formData.age} onChange={handleChange} required />
          </label>

          <label>
            Phone Number:
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </label>

          <label>
            Gender:
            <select type="p" name="gender" value={formData.gender} onChange={handleChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>

          <label>
            Address:
            <textarea name="address" value={formData.address} onChange={handleChange} required />
          </label>

          <button type="submiti">
            <Link to="/">Enroll</Link>
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default RegistrationForm;
