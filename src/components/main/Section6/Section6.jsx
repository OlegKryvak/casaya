import styles from './Section6.module.css';
import photo from '../../../../src/images/Section6/Photo.png';
import button from '../../../../src/images/Section6/Button.png';



const Section6 = () => {
    return (
        <div className={styles.container}>
            <img src={photo} alt="photo1"/>
            <div className={styles.textBlock}>
                <div className={styles.headline}>
                    Heb je graag een helpende hand tijdens de zoektocht naar jouw ideale behandeling?
                </div>
                <button className={styles.button}><img src={button} alt="button1"/></button>
            </div>
        </div>
    );
}

export default Section6;