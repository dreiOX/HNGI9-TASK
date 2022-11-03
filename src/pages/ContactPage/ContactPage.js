import React from 'react';
import Footer from '../../components/Footer';
import './ContactPage.css';

function ContactPage() {
  const clickHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className='container'>
      <div className='header'>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      </div>
      <form>
        <div className='top'>
          <label className='label'>
            First name
            <input
              type='text'
              placeholder='Enter your first name'
              id='first_name'
            />
          </label>
          <label className='label'>
            Last name
            <input
              type='text'
              placeholder='Enter your last name'
              id='last_name'
            />
          </label>
        </div>
        <label className='label'>
          Email:
          <input type='email' placeholder='yourname@email.com' id='email' />
        </label>
        <label className='label'>
          Message
          <textarea
            type='text'
            placeholder="Send me a message and I'll reply you as soon as possible..."
            id='message'
          />
        </label>
        <div className='checkbox'>
          <input type='checkbox' />
          <label>
            You agree to providing your data to dreiOX who may contact you.
          </label>
        </div>
        <div href={clickHandler}>
          <button
            className='contact_button'
            id='btn_submit'
            onclick={clickHandler}
          >
            Send message
          </button>
        </div>
      </form>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ContactPage;
