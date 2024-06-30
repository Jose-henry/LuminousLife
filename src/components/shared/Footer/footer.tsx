import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

export default function FooterDiv() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.topDiv}>
        <div className={styles.extra}>
          <Image src="/assets/footer-img.svg" alt="Sun" width={100} height={100} className={styles.sun}></Image>
          <Image src="/assets/apply-img.svg" alt="Light" width={100} height={100} className={styles.light}></Image>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.links}>
            <Link href="/" className={styles.a}>Home</Link>
            <Link href="/about" className={styles.a}>About</Link>
            <Link href="/team" className={styles.a}>Team</Link>
            <Link href="/contact" className={styles.a}>Contact</Link>
          </div>
          <div className={styles.socials}>
            <div className={styles.message}>
              <Link href="/message">
                <Image src="/assets/mail.svg" alt="Message icon" height={50} width={50} className={styles.message_icon}></Image>
              </Link>
              <div>
                <p>SEND US A</p>
                <h3>MESSAGE</h3>
              </div>
            </div>
            <div className={styles.instagram}>
              <Link href="https://www.instagram.com/luminous_life_foundation?igsh=MzBpaWVrODV4Nmxs">
                <Image src="/assets/Instagram.svg" alt="Message icon" height={50} width={50} className={styles.instagram_icon}></Image>
              </Link>
              <div>
                <p>FOLLOW US ON</p>
                <h3>INSTAGRAM</h3>
              </div>
            </div>
            <div className={styles.linkedin}>
              <Link href="https://www.linkedin.com/company/luminous-life-foundation/">
                <Image src="/assets/Linkedin.svg" alt="Message icon" height={50} width={50} className={styles.linkedin_icon}></Image>
              </Link>
              <div>
                <p>FIND US ON</p>
                <h3>LINKEDIN</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomDiv}>
        <div className={styles.slide_info}>
          <div className={styles.slide_content}>
            <Image src="/assets/star.svg" alt="Star icon" width={20} height={20} className={styles.small} />
            <p>Empowering Communities, Illuminating Futures</p>
            <Image src="/assets/star.svg" alt="Star icon" width={20} height={20} className={styles.small} />
            <p>Empowering Communities, Illuminating Futures</p>
            <Image src="/assets/star.svg" alt="Star icon" width={20} height={20} className={styles.small} />
            <p>Empowering Communities, Illuminating Futures</p>
            <Image src="/assets/star.svg" alt="Star icon" width={20} height={20} className={styles.small} />
            <p>Empowering Communities, Illuminating Futures</p>
            <Image src="/assets/star.svg" alt="Star icon" width={20} height={20} className={styles.small} />
            <p>Empowering Communities, Illuminating Futures</p>
          </div>
        </div>
        <p className={styles.rights}>&copy; Luminous Life Foundation. All Rights Reserved.</p>
      </div>
    </div>
  );
}
