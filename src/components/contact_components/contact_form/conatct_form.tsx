"use client";
import { sendEmail } from '@/lib/actions/email.action';
import styles from './contact_form.module.css';
import Image from 'next/image';
import React, { useState, ChangeEvent, FormEvent } from 'react';

const Form: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('');
        try {
            await sendEmail({ name, email, message });
            setStatus('Successfully sent!');
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            setStatus('Failed to send email.');
        }
    }
   

  return (
    <div className={styles.main_container}>
      <div className={styles.text_container}>
        <h2>Get In Touch With Us!</h2>
        <p>We’d love to hear from you! Whether you have questions, feedback, or want to get involved, feel free to reach out.</p>
      </div>
      <div className={styles.form_container}>
        <form  onSubmit={handleSubmit} className={styles.form}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={handleNameChange}
              required
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              placeholder="Type your message here"
              required
            />
          </div>
          <button type="submit">Send Message</button>
          {status && <p className={styles.status}>
            <span className='font-bold'>Message status: </span>
            {status}</p>}
        </form>

        <div className={styles.cont_img}>

        </div>
      </div>
    </div>
  );
}

export default Form;
