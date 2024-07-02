'use client'
import Image from "next/image";
import styles from "./donate.module.css";
import React, { useState, ChangeEvent, FormEvent } from 'react';

export default function Donate() {

  
    async function Submit(e: any) {
        const formEle = document.querySelector('form');
        if (formEle) {
            e.preventDefault();   
            console.log('thank you for your donation');
            const formdata = new FormData(formEle);
            await fetch('https://script.google.com/macros/s/AKfycbwUIZ99Eg_zB5GDEG9z46YRB_SCmBaDLLQBbu7HmFgssJkpZ9y3owyrnsb5nvLtmepENA/exec', {
                method: 'POST',
                body: formdata
            }).then((res) => res.json()).then((data) => {
                console.log(data);
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
                        <input type="text" placeholder="First Name" className={styles.input} required name="firstName" ></input>
                        <input type="email" placeholder="Email" className={styles.input} required name="email" ></input>
                        <input type="text" placeholder="Country" className={styles.input} required name="country"></input>
                        <input type="text" placeholder="Last Name" className={styles.input} required name="lastName"></input>
                        <input type="tel" id="phone" name="phoneNumber" placeholder="123-456-7890" className={styles.input} required></input>
                        <input type="text" placeholder="Amount" className={styles.input} required name="amount" ></input>
                    </div>
                    <button className={styles.btn}>Submit</button>
                </form>
            </div>
        </div>
      </div>
  );
}
