'use client'
import Image from "next/image";
import styles from "./donate.module.css";
import React, { FormEvent, useState } from 'react';
import Child from '@/assets/child.jpg'

export default function Donate() {
  const [message, setMessage] = useState("");

  async function Submit(e: FormEvent) {
    e.preventDefault();
    const formEle = e.target as HTMLFormElement;

    try {
      const formdata = new FormData(formEle);

      // Reset the form fields immediately
      formEle.reset();

      const response = await fetch('https://script.google.com/macros/s/AKfycbwUIZ99Eg_zB5GDEG9z46YRB_SCmBaDLLQBbu7HmFgssJkpZ9y3owyrnsb5nvLtmepENA/exec', {
        method: 'POST',
        body: formdata
      });

      const data = await response.text();
      console.log('Response text:', data);

      // Set success message
      setMessage("Thanks for your donation! We'll be in touch with you shortly.");

    } catch (err) {
      console.log('Fetch error:', err);
      // Optionally, set an error message here
      setMessage("An error occurred. Please try again.");
    }
  }

  // Function to clear the message
  function clearMessage() {
    setMessage("");
  }

  return (
      <div className="w-full mt-[100px]">
        <h2 className={styles.donate_text}>Donation</h2>
        <div className={styles.main_container}>
            <div className={styles.picture}>
                <Image src={Child} alt="Test" fill quality={85} style={{objectFit: 'cover', objectPosition: 'center'}} placeholder="blur"></Image>
            </div>
            <div className={styles.div2}>
                <p>Empower Change Today!</p>
                <h3>Your Support Lights Up and Enriches Lives</h3>
                <form onSubmit={(e)=>Submit(e)}>
                    <h3>DONATE NOW</h3>
                    <div className={styles.input_fields}>
                        <input type="text" placeholder="First Name" className={styles.input} required name="firstName" ></input>
                        <input type="email" placeholder="Email" className={styles.input} required name="email" ></input>
                        <input type="text" placeholder="Country" className={styles.input} required name="country" ></input>
                        <input type="text" placeholder="Last Name" className={styles.input} required name="lastName" ></input>
                        <input type="tel" id="phone" name="phoneNumber" placeholder="123-456-7890" className={styles.input} required ></input>
                        <input type="text" placeholder="Amount" className={styles.input} required name="amount" ></input>
                    </div>
                    <button className={styles.btn}>Submit</button>
                </form>
            </div>
        </div>
      </div>
  );
}
