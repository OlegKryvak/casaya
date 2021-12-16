import styles from './Section4.module.css';
import photo from '../images/Section4/photo.png';
import stress from '../images/Section4/stress.png';
import chakra from '../images/Section4/chakra.png';
import hydro from '../images/Section4/hydro.png';
import loofah from '../images/Section4/loofah.png';
import mountains from '../images/Section4/Mountains.png';
import infinity from '../images/Section4/Infinity.png';
import water from '../images/Section4/Water.png';
import fire from '../images/Section4/Fire.png';
import arrow from '../images/Section4/Arrow.png';
import button from '../images/Section4/button.png';
import heart from '../images/Section4/heart.png';
import Vectorheart from '../images/Section4/VectorHeart.png';


const Section4 = () => {
    return (
        <div className={styles.container}>
            <img src={photo} className={styles.photo} alt="photo1" />
            <div className={styles.prices}>
                <div className={styles.mobile}>
                    <div>
                        <div className={styles.basic}>
                            <img src={stress} alt="stress" />
                            <h3>Stress Fix Massage</h3>
                            <div className={styles.images}>
                                <img src={arrow} alt="arrow" />
                                <img src={water} alt="water" />
                            </div>
                            <span>110 minuten</span>
                            <h1>€25.50</h1>
                            <div className={styles.buttonContainer}>
                                <button className={styles.button}><img src={button} alt="button1" /></button>
                                <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart" /><img src={Vectorheart} className={styles.Vectorheart} alt="vector" /></button>
                            </div>
                        </div>
                        <div className={styles.basic}>
                            <img src={chakra} alt="chakra" />
                            <h3>Chakra Massage</h3>
                            <div className={styles.images}>
                                <img src={infinity} alt="infinity" />
                                <img src={fire} alt="fire" />
                                <img src={arrow} alt="arrow" />
                            </div>
                            <span>110 minuten</span>
                            <h1>€9.50</h1>
                            <div className={styles.buttonContainer}>
                                <button className={styles.button}><img src={button} alt="button1" /></button>
                                <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart" /><img src={Vectorheart} className={styles.Vectorheart} alt="vector" /></button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.basic}>
                            <img src={hydro} alt="hydro" />
                            <h3>Hydrotherm massage</h3>
                            <div className={styles.images}>
                                <img src={mountains} alt="mountains" />
                                <img src={water} alt="water" />
                                <img src={fire} alt="fire" />
                            </div>
                            <span>110 minuten</span>
                            <h1>€11.00</h1>
                            <div className={styles.buttonContainer}>
                                <button className={styles.button}><img src={button} alt="button1" /></button>
                                <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart" /><img src={Vectorheart} className={styles.Vectorheart} alt="vector" /></button>
                            </div>
                        </div>
                        <div className={styles.basic}>
                            <img src={loofah} alt="loofah" />
                            <h3>Loofah massage</h3>
                            <div className={styles.images}>
                                <img src={fire} alt="fire" />
                                <img src={water} alt="water" />
                            </div>
                            <span>110 minuten</span>
                            <h1>€13.00</h1>
                            <div className={styles.buttonContainer}>
                                <button className={styles.button}><img src={button} alt="button1" /></button>
                                <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart" /><img src={Vectorheart} className={styles.Vectorheart} alt="vector" /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '28px' }}>
                    <div className={`${styles.basic} ${styles.hidden}`}>
                        <img src={stress} alt="stress" />
                        <h3>E-fit actief & Loofah</h3>
                        <div className={styles.images}>
                            <img src={water} alt="water" />
                            <img src={fire} alt="fire" />
                            <img src={infinity} alt="infinity" />
                        </div>
                        <span>110 minuten</span>
                        <h1>€25.50</h1>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button}><img src={button} alt="button" /></button>
                            <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart" /><img src={Vectorheart} className={styles.Vectorheart} alt="vector" /></button>
                        </div>
                    </div>
                    <div className={`${styles.basic} ${styles.hidden}`}>
                        <img src={chakra} alt="chakra" />
                        <h3>Inspiritu massage</h3>
                        <div className={styles.images}>
                            <img src={infinity} alt="infinity" />
                            <img src={arrow} alt="arrow" />
                            <img src={mountains} alt="mountains" />
                        </div>
                        <span>110 minuten</span>
                        <h1>€9.50</h1>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button}><img src={button} alt="button1" /></button>
                            <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart" /><img src={Vectorheart} className={styles.Vectorheart} alt="vector" /></button>
                        </div>
                    </div>
                    <div className={`${styles.basic} ${styles.hidden}`}>
                        <img src={hydro} alt="hydro" />
                        <h3>Voetreflexologie</h3>
                        <div className={styles.images}>
                            <img src={infinity} alt="infinity" />
                            <img src={arrow} alt="arrow" />
                            <img src={fire} alt="fire" />
                            <img src={water} alt="water" />
                        </div>
                        <span>110 minuten</span>
                        <h1>€11.00</h1>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button}><img src={button} alt="button1" /></button>
                            <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart" /><img src={Vectorheart} className={styles.Vectorheart} alt="vector" /></button>
                        </div>
                    </div>
                    <div className={`${styles.basic} ${styles.hidden}`}>
                        <img src={loofah} alt="loofah" />
                        <h3>Scrub ritual</h3>
                        <div className={styles.images}>
                            <img src={arrow} alt="arrow" />
                            <img src={water} alt="water" />
                        </div>
                        <span>110 minuten</span>
                        <h1>€13.00</h1>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button}><img src={button} alt="button1" /></button>
                            <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart" /><img src={Vectorheart} className={styles.Vectorheart} alt="vector" /></button>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '28px' }}>
                    <div className={`${styles.basic} ${styles.hidden}`}>
                        <img src={hydro} alt="hydro" />
                        <h3>Aroma magic</h3>
                        <div className={styles.images}>
                            <img src={fire} alt="fire" />
                            <img src={water} alt="water" />
                            <img src={mountains} alt="mountains" />
                        </div>
                        <span>110 minuten</span>
                        <h1>€11.00</h1>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button}><img src={button} alt="button1" /></button>
                            <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart" /><img src={Vectorheart} className={styles.Vectorheart} alt="vector" /></button>
                        </div>
                    </div>
                    <div className={`${styles.basic} ${styles.hidden}`}>
                        <img src={loofah} alt="loofah" />
                        <h3>Scrub renew ritual</h3>
                        <div className={styles.images}>
                            <img src={infinity} alt="infinity" />
                            <img src={arrow} alt="arrow" />
                            <img src={fire} alt="fire" />
                            <img src={water} alt="water" />
                            <img src={mountains} alt="mountains" />
                        </div>
                        <span>110 minuten</span>
                        <h1>€13.00</h1>
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

export default Section4;