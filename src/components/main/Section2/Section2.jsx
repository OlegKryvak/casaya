import styles from './Section2.module.css';
import arrowLeft from '../../../../src/images/CircleArrowLeft.png';
import arrowRight from '../../../../src/images/CircleArrowRight.png';
import ruimte from '../../../../src/images/Ruimte.png';
import carouselImage from '../../../../src/images/CarouselImage.png';
import count from '../../../../src/images/Count.png';

const Section2 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.headline}>De elementenleer</div>
            <div className={styles.headlineSmall}>Wat is jouw natuurelement?</div>
            <div className={styles.carousel}>
                <img src={arrowLeft} className={styles.arrowLeft} alt="left"/>

                <div className={styles.carouselBlock}>
                    <div className={styles.carouselBlockText}>
                        <img src={ruimte} alt="ruimte"/>
                        <div className={styles.carouselBlockTextHeadline}>Wijsheid, scherpte en meditatie</div>
                        <div className={styles.carouselBlockTextPar}>
                            Grenzeloosheid is verbondenheid met het metafyische, zuivere wijsheid en universele energie,
                            het hoogste levensniveau.  In balans prikkelt het onze zintuigen met een vibrerende energie
                            voor evenwicht. Uit balans kan iemand teruggetrokken en introspectief overkomen.
                            In het lichaam stelt grenzeloosheid alle holten van het lichaam voor waaronder de holten
                            in de mond, neus, luchtwegen, weefsels en aderen.
                        </div>
                        <div className={styles.carouselBlockLine}></div>
                        <div className={styles.carouselBlockTextHeadline2}>Aanbevolen behandelingen: Ontwakend, Verfrissend </div>
                        <img src={count} className={styles.count} alt="count"/>
                    </div>
                    <img src={carouselImage} className={styles.carouselImage} alt="carousel"/>
                </div>
                <img src={arrowRight} className={styles.arrowRight} alt="right"/>
            </div>
        </div>
    );
}

export default Section2;