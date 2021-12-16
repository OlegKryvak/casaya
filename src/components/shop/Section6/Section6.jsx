import styles from './Section6.module.css';
import photo from '../images/Section6/photo.png';
import manicure from '../images/Section6/manicure.png';
import gelish from '../images/Section6/gelish.png';
import french from '../images/Section6/french.png';
import pedicure from '../images/Section6/pedicure.png';
import ver from '../images/Section6/ver.png';
import mp from '../images/Section6/mp.png';
import button from '../images/Section4/button.png';
import heart from '../images/Section6/heart.png';
import Vectorheart from '../images/Section4/VectorHeart.png';


const Section6 = () => {
    return (
        <div className={styles.container}>
            <img src={photo} className={styles.photo} alt="photo1" />
            <h1>Manicure Ritual</h1>
            <div className={styles.prices}>
                <div>
                    <div className={styles.basic}>
                        <img src={manicure} alt="manicure" />
                        <h3>Manicure</h3>
                        <span>30 minuten</span>
                        <h1>€35</h1>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button}><img src={button} alt="button1" /></button>
                            <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart" /><img src={Vectorheart} className={styles.Vectorheart} alt="vector" /></button>
                        </div>
                    </div>
                    <div className={styles.basic}>
                        <img src={gelish} alt="gelish" />
                        <h3>Manicure Gelish kleur</h3>
                        <span>40 minuten</span>
                        <h1>€45</h1>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button}><img src={button} alt="button1" /></button>
                            <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart" /><img src={Vectorheart} className={styles.Vectorheart} alt="vector" /></button>
                        </div>
                    </div>
                    <div className={styles.basic}>
                        <img src={french} alt="french" />
                        <h3>Manicure Gelish French</h3>
                        <span>50 minuten</span>
                        <h1>€55</h1>
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

export default Section6;