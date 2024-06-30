'use client'
import styles from "./donate.module.css";

export default function Donate() {
  return (
      <div className="w-full mt-[100px]">
        <h2 className={styles.donate_text}>Donation</h2>
        <div className={styles.main_container}>
            <div className={styles.picture}>

            </div>
            <div className={styles.div2}>
                <p>Empower Change Today!</p>
                <h3>Your Support Lights Up and Enriches Lives</h3>
                <form>
                    <h3>DONATE NOW</h3>
                    <div className={styles.input_fields}>
                        <input type="text" placeholder="First Name" className={styles.input} required></input>
                        <input type="email" placeholder="Email" className={styles.input} required></input>
                        <input type="text" placeholder="Country" className={styles.input} required></input>
                        <input type="text" placeholder="Last Name" className={styles.input} required></input>
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" className={styles.input} required></input>
                        <input type="number" placeholder="Amount(N)" className={styles.input} required></input>
                    </div>
                    <button className={styles.btn}>Submit</button>
                </form>
            </div>
        </div>
      </div>
  );
}
