import styles from './Section5.module.css';
import photo from '../images/Section5/photo.png';
import african from '../images/Section5/african.png';
import amazon from '../images/Section5/amazon.png';
import azian from '../images/Section5/azian.png';
import infinity from '../images/Section5/Infinity.png';
import arrow from '../images/Section5/Arrow.png';
import mountains from '../images/Section5/Mountains.png';
import water from '../images/Section5/Water.png';
import fire from '../images/Section5/Fire.png';
import button from '../images/Section4/button.png';
import heart from '../images/Section6/heart.png';
import Vectorheart from '../images/Section4/VectorHeart.png';


const Section5 = () => {
    return (
        <div className={styles.container}>
            <img src={photo} className={styles.photo} alt="photo1" />
            <h1>Spa Arrangementen</h1>
            <div className={styles.prices}>
                <div>
                    <div className={styles.basic}>
                        <img src={african} alt="african" />
                        <h3>African Magic</h3>
                        <div className={styles.images}>
                            <img src={infinity} alt="infinity" />
                            <img src={arrow} alt="arrow" />
                        </div>
                        <span>180 minuten</span>
                        <h1>€180</h1>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button}><img src={button} alt="button1" /></button>
                            <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart" /><img src={Vectorheart} className={styles.Vectorheart} alt="vector" /></button>
                        </div>
                    </div>
                    <div className={styles.basic}>
                        <img src={amazon} alt="amazon" />
                        <h3>Amazon Magic</h3>
                        <div className={styles.images}>
                            <img src={mountains} alt="mountains" />
                        </div>
                        <span>200 minuten</span>
                        <h1>€190</h1>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button}><img src={button} alt="button1" /></button>
                            <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart" /><img src={Vectorheart} className={styles.Vectorheart} alt="vector" /></button>
                        </div>
                    </div>
                    <div className={styles.basic}>
                        <img src={azian} alt="azian" />
                        <h3>Azian Magic</h3>
                        <div className={styles.images}>
                            <img src={fire} alt="fire" />
                            <img src={water} alt="water" />
                        </div>
                        <span>150 minuten</span>
                        <h1>€150</h1>
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

export default Section5;