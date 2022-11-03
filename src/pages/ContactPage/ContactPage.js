import React, { useState } from 'react';
import Footer from '../../components/Footer';
import './ContactPage.css';

const name = 'Andrew';

function ContactPage() {
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(inputs));
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = 'Please enter your first name';
    }
    if (!values.lastName) {
      errors.lastName = 'Please enter your last name';
    }
    if (!values.message) {
      errors.message = 'Please enter a message';
    }

    if (!values.email) {
      errors.email = 'Please enter your email';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email';
    }
    return errors;
  };

  return (
    <div className='container'>
      <div className='header'>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='top'>
          <label className='label'>
            First name
            <input
              type='text'
              name='firstName'
              value={inputs.firstName}
              onChange={handleChange}
              placeholder='Enter your first name'
              id='first_name'
            />
            <p className='error_handler'>{formErrors.firstName}</p>
          </label>
          <label className='label'>
            Last name
            <input
              type='text'
              name='lastName'
              value={inputs.lastName}
              onChange={handleChange}
              placeholder='Enter your last name'
              id='last_name'
            />
            <p className='error_handler'>{formErrors.lastName}</p>
          </label>
        </div>
        <label className='label'>
          Email
          <input
            type='email'
            name='email'
            value={inputs.email}
            onChange={handleChange}
            placeholder='yourname@email.com'
            id='email'
          />
          <p className='error_handler'>{formErrors.email}</p>
        </label>
        <label className='label'>
          Message
          <textarea
            type='text'
            name='message'
            value={inputs.message}
            onChange={handleChange}
            placeholder="Send me a message and I'll reply you as soon as possible..."
            id='message'
          />
          <p className='error_handler'>{formErrors.message}</p>
        </label>
        <div className='checkbox'>
          <input type='checkbox' />
          <label>
            You agree to providing your data to {name} who may contact you.
          </label>
        </div>

        <button className='contact_button' id='btn__submit' type='submit'>
          Send message
        </button>
      </form>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ContactPage;
