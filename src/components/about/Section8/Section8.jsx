import styles from './Section8.module.css';
import photo from '../../../../src/images/Section8/Photo.png';
import button from '../../../../src/images/Section8/Button.png';




const Section8 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textBlock}>
                <div className={styles.smallHeadline}>
                    Het ideale cadeau!
                </div>
                <div className={styles.headline}>
                    Geef een geschenk dat een verschil maakt
                </div>
                <div className={styles.text}>
                    De Casaya cadeaubon is een uniek geschenk voor iedere levensgenieter.
                </div>
                <button className={styles.button}><img src={button} alt="button1"/></button>
            </div>
            <img src={photo} alt="photo1"/>
        </div>
    );
}

export default Section8;