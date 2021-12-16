import styles from './Section8.module.css';
import photo from '../images/Section8/photo.png';
import onder from '../images/Section8/onder.png';
import armen from '../images/Section8/armen.png';

import button from '../images/Section4/button.png';
import heart from '../images/Section6/heart.png';
import Vectorheart from '../images/Section4/VectorHeart.png';


const Section8 = () => {
    return (
        <div className={styles.container}>
            <img src={photo} className={styles.photo} alt="photo1" />
            <h1>Suiker Epilatie</h1>
            <div className={styles.prices}>
                <div>
                    <div className={styles.basic}>
                        <img src={onder} alt="onder" />
                        <h3>Onder-Of bovenbenen</h3>
                        <span>180 minuten</span>
                        <h1>€30</h1>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button}><img src={button} alt="button1" /></button>
                            <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart" /><img src={Vectorheart} className={styles.Vectorheart} alt="vector" /></button>
                        </div>
                    </div>
                    <div className={styles.basic}>
                        <img src={onder} alt="onder" />
                        <h3>Benen</h3>
                        <span>30 minuten</span>
                        <h1>€40</h1>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button}><img src={button} alt="button1" /></button>
                            <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart" /><img src={Vectorheart} className={styles.Vectorheart} alt="vector" /></button>
                        </div>
                    </div>
                    <div className={styles.basic}>
                        <img src={onder} alt="onder" />
                        <h3>Bikinilijn</h3>
                        <span>15 minuten</span>
                        <h1>€25</h1>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button}><img src={button} alt="button1" /></button>
                            <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart" /><img src={Vectorheart} className={styles.Vectorheart} alt="vector" /></button>
                        </div>
                    </div>
                    <div className={styles.basic}>
                        <img src={onder} alt="onder" />
                        <h3>Oksels</h3>
                        <span>15 minuten</span>
                        <h1>€15</h1>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button}><img src={button} alt="button1" /></button>
                            <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart" /><img src={Vectorheart} className={styles.Vectorheart} alt="vector" /></button>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '26px' }}>
                    <div className={styles.basic}>
                        <img src={armen} alt="armen" />
                        <h3>Armen</h3>
                        <span>110 minuten</span>
                        <h1>€15</h1>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button}><img src={button} alt="button1" /></button>
                            <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart" /><img src={Vectorheart} className={styles.Vectorheart} alt="vector" /></button>
                        </div>
                    </div>
                    <div className={styles.basic}>
                        <img src={armen} alt="armen" />
                        <h3>Kin of bovenlip </h3>
                        <span>15 minuten</span>
                        <h1>€10</h1>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button}><img src={button} alt="button1" /></button>
                            <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart" /><img src={Vectorheart} className={styles.Vectorheart} alt="vector" /></button>
                        </div>
                    </div>
                    <div className={styles.basic}>
                        <img src={armen} alt="armen" />
                        <h3>Kin of bovenlip </h3>
                        <span>15 minuten</span>
                        <h1>€12</h1>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button}><img src={button} alt="button1" /></button>
                            <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart" /><img src={Vectorheart} className={styles.Vectorheart} alt="vector" /></button>
                        </div>
                    </div>
                    <div className={styles.basic}>
                        <img src={armen} alt="armen" />
                        <h3>Wenkbrauwen </h3>
                        <span>110 minuten</span>
                        <h1>€10</h1>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button}><img src={button} alt="button1" /></button>
                            <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart" /><img src={Vectorheart} className={styles.Vectorheart} alt="vector" /></button>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '18px' }}>
                    <div className={styles.basic}>
                        <img src={armen} alt="armen" />
                        <h3>Volledig gelaat </h3>
                        <span>15 minuten</span>
                        <h1>€15</h1>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button}><img src={button} alt="button1" /></button>
                            <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart" /><img src={Vectorheart} className={styles.Vectorheart} alt="vector" /></button>
                        </div>
                    </div>
                    <div className={styles.basic}>
                        <img src={armen} alt="armen" />
                        <h3>Rug</h3>
                        <span>110 minuten</span>
                        <h1>€35</h1>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button}><img src={button} alt="button1" /></button>
                            <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart" /><img src={Vectorheart} className={styles.Vectorheart} alt="vector" /></button>
                        </div>
                    </div>
                    <div className={styles.basic}>
                        <img src={armen} alt="armen" />
                        <h3>Borstkas </h3>
                        <span>110 minuten</span>
                        <h1>€35</h1>
                        <div className={styles.buttonContainer}>
                            <button className={styles.button}><img src={button} alt="button1" /></button>
                            <button className={styles.heart}><img src={heart} className={styles.heart} alt="heart" /><img src={Vectorheart} className={styles.Vectorheart} alt="vector" /></button>
                        </div>
                    </div>
                    <div className={styles.basic}>
                        <img src={armen} alt="armen" />
                        <h3>Volledige epilatie</h3>
                        <span>110 minuten</span>
                        <h1>€65</h1>
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

export default Section8;