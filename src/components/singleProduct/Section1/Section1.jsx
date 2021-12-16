import styles from './Section1.module.css';
import big from '../images/Section1/big.jpg';
import small from '../images/Section1/small.png';
import riumte from '../images/Section1/ruimte.png';
import aarde from '../images/Section1/aarde.png';
import button from '../images/Section1/button.png';
import heart from '../images/Section1/heart.png';
import video from '../images/Section1/video.png';
import play from '../images/Section1/play.png';
import logo from '../images/Section1/CASAYA.png';
import menu from '../images/Section1/Menu.png';
import arrowLeft from '../images/Section1/arrowLeft.png';
import arrowRight from '../images/Section1/arrowRight.png';

const Section1 = () => {
    return (
        <div>
            <div className={styles.home}>
                Home    {'>'}    Facial design    {'>'}    Creams    {'>'}    Furterer PARIS - Absolue Keratine 50ml
            </div>
            <div className={styles.container}>
                <img src={arrowLeft} className={styles.arrowLeft} alt="left" />
                <img src={arrowRight} className={styles.arrowRight} alt="right" />
                <div className={styles.hidden}>
                    <img src={logo} className={styles.logo} alt="logo" />
                    <img src={menu} className={styles.menu} alt="menu" />
                </div>
                <div className={styles.images}>
                    <div className={styles.big}>

                        <img src={big} className={styles.bigImg} alt="bigImg" />
                    </div>
                    <div className={styles.small}>
                        <div>
                            <img src={small} alt="smallImg" />
                        </div>
                        <div>
                            <img src={small} style={{ transform: 'rotate(30deg)', zIndex: '5', borderRadius: '25px' }} alt="smallImg" />
                        </div>
                        <div>
                            <img src={small} style={{ transform: 'rotate(-60deg)', zIndex: '55', borderRadius: '25px' }} alt="smallImg" />
                        </div>
                    </div>
                    <div className={styles.imagesText}>
                        * Deze foto's dienen alleen ter indicatie en kunnen afwijken van het product...
                    </div>
                </div>

                <div className={styles.textBlock}>
                    <div className={styles.headline}>Furterer PARIS - Absolue Keratine 50ml</div>
                    <div className={styles.text}>
                        Ervaar de hele dag optimale hydratatie en laat de huid direct stralen met onze lichte, snel absorberende
                        bodylotion. Verrijkt door de natuur, kersenbloesemextract en zoete hydraterende amandelolie waardoor de
                        huid zacht en soepel wordt. Voor alle huidtypen. <br /><br />Met het zoete, sappige, bloemige pure-fume™-aroma
                        van Aveda met 38 bloemen- en plantenextracten zoals tonkaboon, gecertificeerde biologische sinaasappel
                        en ylang ylang.
                    </div>
                    <div className={styles.element}>
                        <h1>Element(en)</h1>
                        <div>
                            <img src={riumte} alt="ruimte" />
                            <img src={aarde} alt="aarde" />
                        </div>
                    </div>
                    <div className={styles.price}>
                        Prijs: € 9.50
                    </div>
                    <div className={styles.smalltext}>
                        <span style={{ color: '#F22121' }}>Aandacht:</span>  De Aarde is de basis waarop al het menselijk, dierlijk en plantaarlig
                    </div>
                    <div className={styles.buttons}>
                        <div>-</div>
                        <div style={{ width: '74px' }}>1</div>
                        <div>+</div>
                    </div>
                    <div className={styles.buttons2}>
                        <button><img src={button} className={styles.button1} alt="button1" /></button>
                        <button><img src={heart} className={styles.heart} alt="heart" /></button>
                    </div>
                </div>
            </div>
            <div style={{ position: 'relative', marginTop: '49px' }}>
                <img src={video} className={styles.video} alt="video" />
                <img src={play} className={styles.play} alt="play" />
            </div>

        </div>
    );
}

export default Section1;