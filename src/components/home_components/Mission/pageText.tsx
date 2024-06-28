'use client'
import styles from "./mission.module.css"; // Import CSS module
import Typewriter from 'typewriter-effect';

const PageText: React.FC = () => {

    return (
        <h2 className={styles.text}>

        <Typewriter
            options={{
                strings: ['Join the Solar Revolution!!!'],
                autoStart: true,
                loop: true,
            }}
            />
        </h2>
      
    );
}

export default PageText;
