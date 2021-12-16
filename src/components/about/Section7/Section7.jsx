import photo1 from '../images/Section7/photo1.png';
import photo2 from '../images/Section7/photo2.png';
import photo3 from '../images/Section7/photo3.png';
import photo4 from '../images/Section7/photo4.png';
import photo5 from '../images/Section7/photo5.png';
import photo6 from '../images/Section7/photo6.png';
import styles from './Section7.module.css';

const Section7 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.smallHeadline}>
                Ervaar het zelf
            </div>
            <div className={styles.headline}>
                De sfeer bij Casaya
            </div>
            <div className={styles.text}>
                Rust, beleving, inspiratie & gezondheid
            </div>
            <div className={styles.images}>
                <img src={photo1} className={styles.photo1} alt="photo1"/>
                <div className={styles.two}>
                    <img src={photo2} className={styles.photo2} alt="photo2"/>
                    <img src={photo3} className={styles.photo3} alt="photo3"/>
                </div>
                <img src={photo4} className={styles.photo4} alt="photo4"/>
                <img src={photo5} className={styles.photo5} alt="photo5"/>
                <img src={photo6} className={styles.photo6} alt="photo6"/>
            </div>
        </div>
    );
}

export default Section7;