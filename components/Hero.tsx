import styles from './Hero.module.css';
import Image from 'next/image';
import Button from './Button';

const Hero = () => {
  return (
    <section className={`${styles.heroContainer} ${styles.heroContainerMd} ${styles.heroContainerLg} ${styles.heroContainerXl}`}>
      <div className={`${styles.heroContent} ${styles.heroContentXl}`}>
      <Image 
          src="/nayara.png" 
          alt="Nayara Energy" 
          width={150} // Adjust the width as needed
          height={100} // Adjust the height as needed
          className={styles.nayaraImage} // Optionally, add a class for further styling
        />


        <div className={styles.titlebox}>
          <h1 className={`${styles.heroTitle} ${styles.heroTitleLg}`}>Pulikkal fuels</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
