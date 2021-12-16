import styles from './Section7.module.css';
import photo from '../images/Section7/photo.png';
import medi from '../images/Section7/medi.png';
import kleur from '../images/Section7/kleur.png';
import french from '../images/Section7/french.png';
import pedicure from '../images/Section7/pedicure.png';
import ver from '../images/Section7/ver.png';
import mp from '../images/Section7/mp.png';
import button from '../images/Section4/button.png';
import heart from '../images/Section6/heart.png';
import Vectorheart from '../images/Section4/VectorHeart.png';


const Section7 = () => {
    return (
        <div className={styles.container}>
            <img src={photo} className={styles.photo} alt="photo1" />
            <h1>Pedicure Ritual</h1>
            <div className={styles.prices}>
                <div>
                    <div className={styles.basic}>
                        <img src={medi} alt="medi" />
                        <h3>Medische Pedicure</h3>
                        <span>40 minuten</span>
                        <h1>€45</h1>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button}><img src={button} alt="button1" /></button>
                            <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart" /><img src={Vectorheart} className={styles.Vectorheart} alt="vector" /></button>
                        </div>
                    </div>
                    <div className={styles.basic}>
                        <img src={kleur} alt="kleur" />
                        <h3>Pedicure Gelish kleur</h3>
                        <span>60 minuten</span>
                        <h1>€65</h1>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button}><img src={button} alt="button1" /></button>
                            <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart" /><img src={Vectorheart} className={styles.Vectorheart} alt="vector" /></button>
                        </div>
                    </div>
                    <div className={styles.basic}>
                        <img src={french} alt="french" />
                        <h3>Pedicure Gelish French</h3>
                        <span>70 minuten</span>
                        <h1>€70</h1>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button}><img src={button} alt="button1" /></button>
                            <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart" /><img src={Vectorheart} className={styles.Vectorheart} alt="vector" /></button>
                        </div>
                    </div>
                    <div className={styles.basic}>
                        <img src={pedicure} alt="pedicure" />
                        <h3>Manicure + Pedicure Gelish </h3>
                        <span>100 minuten</span>
                        <h1>€90</h1>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button}><img src={button} alt="button1" /></button>
                            <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart" /><img src={Vectorheart} className={styles.Vectorheart} alt="vector" /></button>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '28px' }}>
                    <div className={styles.basic}>
                        <img src={ver} alt="ver" />
                        <h3>Verwijderen Gelish</h3>
                        <span>15 minuten</span>
                        <h1>€10</h1>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button}><img src={button} alt="button1" /></button>
                            <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart" /><img src={Vectorheart} className={styles.Vectorheart} alt="vector" /></button>
                        </div>
                    </div>
                    <div className={styles.basic}>
                        <img src={mp} alt="mp" />
                        <h3>Manicure + Pedicure </h3>
                        <span>70 minuten</span>
                        <h1>€70</h1>
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

export default Section7;