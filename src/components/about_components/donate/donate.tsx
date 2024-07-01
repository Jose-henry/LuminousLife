'use client'
import Image from "next/image";
import styles from "./donate.module.css";
import React, { useState, ChangeEvent, FormEvent } from 'react';

export default function Donate() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [amount, setAmount] = useState('');
    const [country, setCountry] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [status, setStatus] = useState('');

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
      };

    const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
      };

    const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value);
      };

    const handleCountryChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCountry(e.target.value);
      };

    const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
      };
    
      const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
      };

    async function Submit(e: any) {
        const formEle = document.querySelector('form');
        if (formEle) {
            e.preventDefault();
            setStatus('');
            console.log('thank you for your donation');
            const formdata = new FormData(formEle);
            await fetch('https://script.google.com/macros/s/AKfycbze96G3dNAqjAB6deiSPVSW49d2s19hmj9Tsg0lAv7XSwXj29iiCv552E0hFUchE3Eh/exec', {
                method: 'POST',
                body: formdata
            }).then((res) => res.json()).then((data) => {
                console.log(data);
                setStatus('Successfully Donate!');
                setFirstName('');
                setLastName('');
                setAmount('');
                setCountry('');
                setEmail('');
                setPhoneNumber('');
                formEle.reset();
            }).catch((err) => {
                console.log(err);
            });
        }
    }
  return (
      <div className="w-full mt-[100px]">
        <h2 className={styles.donate_text}>Donation</h2>
        <div className={styles.main_container}>
            <div className={styles.picture}>
                <Image src="/assets/child.jpg" alt="Test" fill quality={85} style={{objectFit: 'cover', objectPosition: 'center'}}></Image>
            </div>
            <div className={styles.div2}>
                <p>Empower Change Today!</p>
                <h3>Your Support Lights Up and Enriches Lives</h3>
                <form onSubmit={(e)=>Submit(e)}>
                    <h3>DONATE NOW</h3>
                    <div className={styles.input_fields}>
                        <input type="text" placeholder="First Name" className={styles.input} required name="firstName" onChange={handleNameChange}></input>
                        <input type="email" placeholder="Email" className={styles.input} required name="email" onChange={handleEmailChange}></input>
                        <input type="text" placeholder="Country" className={styles.input} required name="country" onChange={handleCountryChange}></input>
                        <input type="text" placeholder="Last Name" className={styles.input} required name="lastName" onChange={handleLastNameChange}></input>
                        <input type="tel" id="phone" name="phoneNumber" placeholder="123-456-7890" className={styles.input} required onChange={handlePhoneNumberChange}></input>
                        <input type="text" placeholder="Amount" className={styles.input} required name="amount" onChange={handleAmountChange}></input>
                    </div>
                    <button className={styles.btn}>Submit</button>
                </form>
            </div>
        </div>
      </div>
  );
}
