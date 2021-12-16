import styles from './Section1.module.css';
import photo from '../images/Section1/photo.png';
import logo from '../images/Section1/CASAYA.png';
import menu from '../images/Section1/Menu.png';

const Section1 = () => {
    return (
        <div className={styles.container}>
            <div>
                <img src={logo} className={styles.logo} alt="logo"/>
                <img src={menu} className={styles.menu} alt="menu"/>
            </div>
            <div className={styles.textBlock}>
                <div className={styles.smallHeadline}>
                    SHOP | PRODUCTEN
                </div>
                <div className={styles.headline}>
                    Onze producten
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