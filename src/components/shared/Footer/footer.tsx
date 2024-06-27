import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

export default function FooterDiv() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.topDiv}>
        <Image src="/assets/footer-img.svg" alt="Sun" width={100} height={100}></Image>
        <div className={styles.wrapper}>
          <div className={styles.links}>
            <p>Home</p>
            <p>About</p>
            <p>Team</p>
            <p>Contact</p>
          </div>
          <div className={styles.socials}>
            <div className={styles.message}>
              <Image src="/assets/Message.svg" alt="Message icon" height={100} width={100}></Image>
              <p>SEND US A</p>
              <h3>MESSAGE</h3>
            </div>
            <div className={styles.instagram}>
              <Image src="/assets/Instagram.svg" alt="Message icon" height={100} width={100}></Image>
              <p>FOLLOW US ON</p>
              <h3>INSTAGRAM</h3>
            </div>
            <div className={styles.linkedin}>
              <Image src="/assets/Instagram.svg" alt="Message icon" height={100} width={100}></Image>
              <p>FIND US ON</p>
              <h3>LINKEDIN</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomDiv}>
        <div className={styles.slide_info}>
          <Image src="/assets/star.svg" alt="Star icon" width={23} height={23} />
          <p>Empowering Communities, Illuminating Futures</p>
          <Image src="/assets/star.svg" alt="Star icon" width={23} height={23} />
          <p>Empowering Communities, Illuminating Futures</p>
          <Image src="/assets/star.svg" alt="Star icon" width={23} height={23} />
          <p>Empowering Communities, Illuminating Futures</p>
          <Image src="/assets/star.svg" alt="Star icon" width={23} height={23} />
          <p>Empowering Communities, Illuminating Futures</p>
          <Image src="/assets/star.svg" alt="Star icon" width={23} height={23} />
          <p>Empowering Communities, Illuminating Futures</p>
        </div>
        <p className={styles.rights}>&copy; Luminous Life Foundation. All Rights Reserved.</p>
      </div>
    </div>
  );
}
