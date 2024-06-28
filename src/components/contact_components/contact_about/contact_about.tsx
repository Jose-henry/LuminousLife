import Link from 'next/link';
import styles from './contact_about.module.css';

const Final: React.FC = () => { 
  return (
    <div className={styles.container}>
        <p>Ready to make a difference? Learn more <Link href="/about" className='text-[#38598b] underline hover:no-underline'>about us!</Link></p>
    </div>
  );
}

export default Final;
