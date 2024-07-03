'use client';
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";

export default function FooterDiv() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
            <div className="flex items-center gap-[10px] relative">
                <Image
                    src="/assets/try.svg"
                    width={33}
                    height={33}
                    quality={100}
                    alt="Logo icon"
                    className="rounded-[3px] absolute"
                />
                <h3 className="text-[#622D25] font-bold text-[16px] leading-5 pl-[44px]">Luminous Life Foundation</h3>
            </div>
            <div className={styles.socials}>
              <Link href="https://www.instagram.com/luminous_life_foundation?igsh=MzBpaWVrODV4Nmxs">
                <Image src="" alt="Instagram" width={30} height={30}></Image>
              </Link>
              <Link href="https://x.com/luminous_life_f?s=11">
                <Image src="" alt="Twitter" width={30} height={30}></Image>
              </Link>
              <Link href="https://www.linkedin.com/company/luminous-life-foundation/">
                <Image src="" alt="Linkedin" width={30} height={30}></Image>
              </Link>
              <Link href="https://youtube.com/@luminouslife_foundation?si=IMNqUNZDf1ZckxgO">
                <Image src="" alt="Youtube" width={30} height={30}></Image>
              </Link>
              <a href="mailto:luminouslifefoundation@gmail.com?subject=MESSAGE%20TO%20LUMINOUS%20LIFE&body=Hello%20Luminous%20Life!">
                <Image src="" alt="Email" width={30} height={30} />
              </a>
            </div>
        </div>
        <div className={styles.newsletter}>
          <form className={styles.input}>
            <input type="email" placeholder="Enter your email"></input>
            <button className={styles.subscribe}>Subscribe</button>
          </form>
          <p>&copy;2024 Luminous Life Foundation. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
