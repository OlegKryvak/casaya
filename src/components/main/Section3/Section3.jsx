import styles from './Section3.module.css';
import photo from '../../../../src/images/Section3/Photo.png';
import button from '../../../../src/images/Section3/Button.png';


const Section3 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textBlock}>
                <div className={styles.headline}>
                    Klaar om volledig tot rust te komen in onze oase?
                </div>
                <div className={styles.text}>
                    Bekijk ons aanbod en reserveer online!
                </div>
                <img className={styles.button} src={button} alt="button1"/>
            </div>
            <img src={photo} alt="photo1"/>
        </div>
    );
}

export default Section3;