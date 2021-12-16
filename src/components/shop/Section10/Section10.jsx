import styles from './Section10.module.css';
import photo from '../images/Section10/photo.png';
import make from '../images/Section10/make.png';
import bruid from '../images/Section10/bruid.png';


import button from '../images/Section4/button.png';
import heart from '../images/Section6/heart.png';
import Vectorheart from '../images/Section4/VectorHeart.png';


const Section10 = () => {
    return (
        <div className={styles.container}>
            <img src={photo} className={styles.photo} alt="photo1" />
            <h1>Make-up design</h1>
            <div className={styles.prices}>
                <div>
                    <div className={styles.basic}>
                        <img src={make} alt="make" />
                        <h3>Make-Up Touch</h3>
                        <span>180 minuten</span>
                        <h1>€180</h1>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button}><img src={button} alt="button1" /></button>
                            <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart" /><img src={Vectorheart} className={styles.Vectorheart} alt="vector" /></button>
                        </div>
                    </div>
                    <div className={styles.basic}>
                        <img src={bruid} alt="bruid" />
                        <h3>Bruidsfeest Make-up</h3>
                        <span>200 minuten</span>
                        <h1>€190</h1>
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

export default Section10;