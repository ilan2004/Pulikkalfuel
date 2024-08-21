import React from 'react'
import styles from './Guide.module.css';
 const Guide = () => {
  return (
    <div className={styles.Container}>
        <div className={styles.data}>
        <h1 className={styles.heading}>
         About Us
        </h1>
        <p className={styles.para}>
        Pulikkal Fuels, located on State Highway 28 at Musliyarangady, has been a trusted destination for fuel since its establishment in 2017. Originally affiliated with Essar, the station transitioned smoothly when the company rebranded itself as Nayara Energy. This change marked a significant milestone, aligning Pulikkal Fuels with Nayara Energy’s broader vision of delivering high-quality fuel and exceptional customer service.
        </p>
        <p className={styles.para}>
        Over the years, Pulikkal Fuels has become synonymous with reliability and efficiency in the region. We have consistently focused on maintaining high standards of quality, ensuring that every drop of fuel meets stringent criteria. Our commitment to customer satisfaction is reflected in the dedicated service provided by our well-trained staff, who are always ready to assist with a smile.
        </p>
        <p className={styles.para}>
        As part of the Nayara Energy network, Pulikkal Fuels continues to innovate and adapt to the evolving needs of our customers. Whether you’re a daily commuter or a long-distance traveler, you can trust Pulikkal Fuels to deliver the fuel you need, when you need it, with the highest level of service and integrity.
        </p>
        </div>
    </div>
  )
}
export default Guide;