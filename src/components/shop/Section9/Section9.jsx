import styles from './Section9.module.css';
import photo from '../images/Section9/photo.png';
import henna from '../images/Section9/henna.png';
import werven from '../images/Section9/werven.png';


import button from '../images/Section4/button.png';
import heart from '../images/Section6/heart.png';
import Vectorheart from '../images/Section4/VectorHeart.png';


const Section9 = () => {
    return (
        <div className={styles.container}>
            <img src={photo} className={styles.photo} alt="photo1" />
            <h1>Wenkbrauwen</h1>
            <div className={styles.prices}>
                <div>
                    <div className={styles.basic}>
                        <img src={henna} alt="henna" />
                        <h3>Henna Brows</h3>
                        <span>180 minuten</span>
                        <h1>€180</h1>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button}><img src={button} alt="button1" /></button>
                            <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart" /><img src={Vectorheart} className={styles.Vectorheart} alt="vector" /></button>
                        </div>
                    </div>
                    <div className={styles.basic}>
                        <img src={werven} alt="werven" />
                        <h3 style={{ width: '171px' }}> Werven van de wenkbr-auwen & wimpers</h3>
                        <span style={{ marginTop: '22px' }}>30 minuten</span>
                        <h1>€40</h1>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button}><img src={button} alt="button1" /></button>
                            <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart" /><img src={Vectorheart} className={styles.Vectorheart} alt="vector" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section9;