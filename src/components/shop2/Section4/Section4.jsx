import styles from './Section4.module.css';
import photo from '../images/Section4/photo.png';
import basic from '../images/Section3/basic.png';
import furtere from '../images/Section3/furterer.png';
import sublime from '../images/Section3/sublime.png';
import revolution from '../images/Section3/revolution.png';
import nature from '../images/Section3/nature.png';
import paris from '../images/Section3/paris.png';
import renewal from '../images/Section3/renewal.png';
import skin from '../images/Section3/skin.png';
import button from '../images/Section3/button.png';
import heart from '../images/Section3/heart.png';
import Vectorheart from '../images/Section3/VectorHeart.png';


const Section4 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <img src={photo} className={styles.photo} alt="photo1"/>
                <div className={styles.prices}>
                    <div className={styles.mobile}>
                        <div className={styles.mobile2}>
                            <div>
                                <div className={styles.basic}>
                                    <img src={basic} alt="basic"/>
                                    <span>Basic Nature Facial Cream 250ml</span>
                                    <h1>€25.50</h1>
                                    <div className={styles.buttonContainer}>
                                        <button className={styles.button}><img src={button} alt="button1"/></button>
                                        <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart"/><img src={Vectorheart} className={styles.Vectorheart} alt="vector"/></button>
                                    </div>
                                </div>
                                <div className={styles.basic}>
                                    <img src={furtere} className={styles.furtere} alt="furterer"/>
                                    <span>Furterer PARIS - Absolue Keratine 50ml</span>
                                    <h1>€9.50</h1>
                                    <div className={styles.buttonContainer}>
                                        <button className={styles.button}><img src={button} alt="button1"/></button>
                                        <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart"/><img src={Vectorheart} className={styles.Vectorheart} alt="vector"/></button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={styles.basic}>
                                    <img src={sublime} alt="sublime"/>
                                    <span>Sublime renewal leave-in cream 50ml</span>
                                    <h1>€110</h1>
                                    <div className={styles.buttonContainer}>
                                        <button className={styles.button}><img src={button} alt="button1"/></button>
                                        <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart"/><img src={Vectorheart} className={styles.Vectorheart} alt="vector"/></button>
                                    </div>
                                </div>
                                <div className={styles.basic}>
                                    <img src={revolution} alt="revolution"/>
                                    <span>Revolution skin-care Hydration boost night cream</span>
                                    <h1>€13.00</h1>
                                    <div className={styles.buttonContainer}>
                                        <button className={styles.button}><img src={button} alt="button1"/></button>
                                        <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart"/><img src={Vectorheart} className={styles.Vectorheart} alt="vector"/></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={`${styles.basic} ${styles.mobile1}`}>
                                <img src={nature} alt="nature"/>
                                <span>Basic Nature Facial Cream 250ml</span>
                                <h1>€25.50</h1>
                                <div className={styles.buttonContainer}>
                                    <button className={styles.button}><img src={button} alt="button1"/></button>
                                    <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart"/><img src={Vectorheart} className={styles.Vectorheart} alt="vector"/></button>
                                </div>
                            </div>
                            <div className={`${styles.basic} ${styles.mobile1}`}>
                                <img src={paris} alt="paris"/>
                                <span>Furterer PARIS - Absolue Keratine 50ml</span>
                                <h1>€9.50</h1>
                                <div className={styles.buttonContainer}>
                                    <button className={styles.button}><img src={button} alt="button1"/></button>
                                    <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart"/><img src={Vectorheart} className={styles.Vectorheart} alt="vector"/></button>
                                </div>
                            </div>
                            <div className={`${styles.basic} ${styles.mobile1}`}>
                                <img src={renewal} alt="renewal"/>
                                <span>Sublime renewal leave-in cream 50ml</span>
                                <h1>€110</h1>
                                <div className={styles.buttonContainer}>
                                    <button className={styles.button}><img src={button} alt="button1"/></button>
                                    <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart"/><img src={Vectorheart} className={styles.Vectorheart} alt="vector"/></button>
                                </div>
                            </div>
                            <div className={`${styles.basic} ${styles.mobile1}`}>
                                <img src={skin} alt="skin"/>
                                <span>Revolution skin-care Hydration boost night cream</span>
                                <h1>€13.00</h1>
                                <div className={styles.buttonContainer}>
                                    <button className={styles.button}><img src={button} alt="button1"/></button>
                                    <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart"/><img src={Vectorheart} className={styles.Vectorheart} alt="vector"/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section4;