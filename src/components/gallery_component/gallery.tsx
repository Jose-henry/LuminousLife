import React from 'react';
import styles from './gallery.module.css';
import Image from 'next/image';

const GalleryPage = () => {
  const galleryItems = [
    {
      title: 'Lamp Distribution',
      description: 'Distributing the solar lamp to the children of the community to help in their studying',
      date: 'August 31st, 2024',
      imgSrc: '/assets/real6.JPG'
    },
    {
      title: 'Solar Lamps in Action',
      description: 'Explaining to a member of the community on the working principles of the lamp.',
      date: 'August 31st, 2024',
      imgSrc: '/assets/1 (10).JPG'
    },
    {
      title: 'Abandoned School',
      description: 'A picture of an abandoned school building in the community. Children still learn here because it is all they have.',
      date: 'July 10th, 2024',
      imgSrc: '/assets/1 (17).JPG'
    },
    {
      title: 'The Founder',
      description: 'A picture of the founder and a child in the community.',
      date: 'August 31st, 2024',
      imgSrc: '/assets/empower.JPG'
    },
    {
      title: 'Communty Leader',
      description: 'Here, we took a picture with one of the community leaders.',
      date: 'July 10th, 2024',
      imgSrc: '/assets/gberefu13.jpeg'
    },
    {
      title: 'Fisherman',
      description: 'Apicture of a community member making a fishing net.',
      date: 'July 10th, 2024',
      imgSrc: '/assets/gberefu14.JPG'
    },
    {
      title: 'Ojoti Nepa',
      description: "This locally made lamps is the community's source of light.",
      date: 'July 10th, 2024',
      imgSrc: '/assets/gberefu15.jpg'
    },
    {
      title: 'Thatched House',
      description: 'This is the kind of house the communty members reside.',
      date: 'July 10th, 2024',
      imgSrc: '/assets/gallery1.JPG'
    },
    {
      title: 'Children',
      description: 'A picture of some of the children in the community and their pet cat.',
      date: 'August 31st, 2024',
      imgSrc: '/assets/gallery2.JPG'
    },
    {
      title: 'Children Empowerment',
      description: 'A picture with some of the children we empower with technical knowledge as well as solar energy.',
      date: 'June 5th, 2024',
      imgSrc: '/assets/teach2.jpg'
    },
    {
      title: 'By the Riverside',
      description: 'Thatched houses by the riverside.',
      date: 'July 10th, 2024',
      imgSrc: '/assets/gberefu10.jpg'
    },
    {
      title: 'Welcome Post',
      description: 'A post with a message welcoming visitors to the community',
      date: 'July 10th, 2024',
      imgSrc: '/assets/gberefu2.jpg'
    }
  ];

  return (
    <div className={styles.galleryContainer}>
      <div className='grid grid-cols-2 items-center relative mb-5 gap-[2%]'>
        <h1 className={styles.pageTitle}>
          <span className={styles.highlight}>Explore</span> Our Moments of <span className={styles.highlight}>Impact! <span><Image src="/assets/bulb3.png" alt="Bulb" width={50} height={50} className='inline'></Image></span></span>
        </h1>
        <p className='text-[15px] leading-relaxed'>Experience moments from our recent outreach, where we delivered solar lamps to communities in need. Each picture reflects the joy, hope, and impact that sustainable energy brings to everyday life. Together, we're creating a brighter future for all.</p>
      </div>
      <div className={styles.galleryGrid}>
        {galleryItems.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={item.imgSrc} alt={item.title} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{item.title}</h2>
              <p className={styles.cardDescription}>{item.description}</p>
              <p className={styles.cardDate}>{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
