import Link from 'next/link';
import styles from './project.module.css';
import Image from 'next/image';
import Blackout from '@/assets/blackout.jpg';
import Teach from '@/assets/teach.jpg';
import Pretty from '@/assets/pretty.jpg';

interface ProjectProps {
    communityProjectId: number;
    educationProjectId: number;
}

export default function Project({ communityProjectId, educationProjectId }: ProjectProps) {
    return (
        <div className={styles.main_container}>
            <div className={styles.line}></div>
            <div className={styles.text_div}>
                <h2>Our Projects</h2>
                <p className='text-center text-[#25161b] text-[17px]'>See the steps we are taking towards lighting up the dark places!</p>
                <Link href="/projects" className={styles.view} key="all-projects-link">See all projects</Link>
            </div>
            <div className={styles.card}>
                <div style={{ position: 'relative' }} key="blackout-image-container">
                    <Image
                        src={Blackout}
                        alt="Blackout Project"
                        fill
                        quality={100}
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                        placeholder='blur'
                        key="blackout-image"
                    />
                </div>
                <div className={styles.first_project} key={`community-project-${communityProjectId}`}>
                    <div>
                        <h4>COMMUNITY</h4>
                        <h3>Gebrefu in the Dark: Two Decades Without Electricity</h3>
                        <p>
                            Nestled in the heart of Badagry, the Gebrefu Community has endured an astonishing 24 years without access to electricity. 
                            This prolonged blackout has cast long shadows over the lives of its residents, affecting education, 
                            healthcare, and economic opportunities. Yet, amidst the darkness, there is a growing spark of hope.
                        </p>
                    </div>
                    <Link href={`/projects/article/${communityProjectId}`} className={styles.project} key={`community-link-${communityProjectId}`} suppressHydrationWarning={true}>
                        Read more
                    </Link>
                </div>
            </div>
            <div className={`${styles.card} ${styles.card3}`} key="pretty-image-container">
                <Image
                    src={Pretty}
                    alt="Pretty Project"
                    fill
                    quality={100}
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    placeholder='blur'
                    key="pretty-image"
                />
            </div>
            <div className={`${styles.card} ${styles.card4}`} key={`education-project-${educationProjectId}`}>
                <div style={{ position: 'relative' }} key="teach-image-container">
                    <Image
                        src={Teach}
                        alt="Teach Project"
                        fill
                        quality={100}
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                        placeholder='blur'
                        key="teach-image"
                    />
                </div>
                <div className={styles.second_project} key={`education-content-${educationProjectId}`}>
                    <div>
                        <h4>EDUCATION</h4>
                        <h3>Empowering Young Minds on Solar Energy</h3>
                        <p>
                            This program is dedicated to educating young children and students about the transformative power of solar energy. Through engaging workshops, hands-on activities, and innovative projects, we aim to inspire the next generation to embrace solar energy solutions.
                        </p>
                    </div>
                    <Link href={`/projects/article/${educationProjectId}`} className={styles.project} key={`education-link-${educationProjectId}`} suppressHydrationWarning={true}>
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    );
}
