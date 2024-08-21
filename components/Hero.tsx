import styles from './Hero.module.css';
import Image from 'next/image';
import Button from './Button';

const Hero = () => {
  return (
    <section className={`${styles.heroContainer} ${styles.heroContainerMd} ${styles.heroContainerLg} ${styles.heroContainerXl}`}>
      <div className={`${styles.heroContent} ${styles.heroContentXl}`}>
      <p className={`${styles.heroText} ${styles.heroTextXl}`}>
          Nayara Energy network
        </p>
        <div className={styles.titlebox}>
        <h1 className={`${styles.heroTitle} ${styles.heroTitleLg}`}>Pulikkal fuels</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
