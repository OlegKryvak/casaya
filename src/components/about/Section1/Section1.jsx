import photo from '../images/Section1/photo.png';
import menuIcon from '../images/Section1/menuIcon.png';
import logo from '../images/CASAYA.png';
import styles from './Section1.module.css';

const Section1 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.inv}>
                <img src={logo} className={styles.logo} alt="logo"/>
                <img src={menuIcon} className={styles.menuIcon} alt="menuIcon"/>
            </div>
            <div className={styles.textBlock}>
                <div className={styles.smallHeadline}>
                    OVER ONS
                </div>
                <div className={styles.headline}>
                    Wie zijn we?
                </div>
                <div className={styles.text}>
                    Ontdek onze oase van rust
                </div>
            </div>
            <img src={photo} className={styles.photo} alt="photo1"/>
        </div>
    );
}

export default Section1;