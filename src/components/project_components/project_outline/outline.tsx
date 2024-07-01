import Image from 'next/image';
import styles from './outline.module.css';


export default function Outline() {
  return (
      <div className="w-full pt-[50px] bg-[#f6eedf] pb-[80px]">
        <div className={styles.main_container}>
            <div className={styles.text}>
                <h2>Project Outline</h2>
                <p>Discover how Luminous Life Foundation is illuminating communities with sustainable solar solutions. </p>
            </div>
            <div className={styles.the_projects}>
                <div className={styles.project}>
                    <div>

                    </div>
                    <div>
                        <Image src="/assets/education.jpg" alt="Test" layout='fill' objectFit='cover' objectPosition='center'></Image>
                    </div>
                    <div>
                        <Image src="/assets/education.jpg" alt="Test" layout='fill' objectFit='cover' objectPosition='center'></Image>
                    </div>
                </div>

                <div className={styles.project}>
                    <div>

                    </div>
                    <div>
                        <Image src="/assets/education.jpg" alt="Test" layout='fill' objectFit='cover' objectPosition='center'></Image>
                    </div>
                    <div>
                        <Image src="/assets/education.jpg" alt="Test" layout='fill' objectFit='cover' objectPosition='center'></Image>
                    </div>
                </div>
            </div>
        </div>
      </div>
  );
}
