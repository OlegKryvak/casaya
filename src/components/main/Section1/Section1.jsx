import styles from './Section1.module.css';
import face from '../../../../src/images/Face.png';
import human from '../../../../src/images/Human.png';
import cursor from '../../../../src/images/CursorPointer.png';
import arrow from '../../../../src/images/ArrowLeft.png';
import ellipse from '../../../../src/images/Ellipse2.png';
import ellipseBlack from '../../../../src/images/EllipseBlack.png';
import ellipseBorder from '../../../../src/images/EllipseBorder.png';


const Section1 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.smallHeadline}>
                Ontdekkingstocht
            </div>
            <div className={styles.headline}>
                <span className={styles.headlineNumber}>01</span>
                Ben je op zoek naar een facial of body care ?
            </div>
            <div className={styles.rectangles}>
                <div className={styles.rectangle1}>
                    <div className={styles.face}>
                        <img src={face} alt="face"/>
                        Face
                    </div>
                    <img src={cursor} className={styles.cursor} alt="cursor"/>
                </div>
                <div className={styles.rectangle2}>
                    <div className={styles.body}>
                        <img src={human} alt="human"/>
                        Body
                    </div>
                </div>
            </div>
            <div className={styles.nav}>
                <div className={styles.terug}>
                    <img src={arrow} alt="arrow"/>
                    TERUG
                </div>
                <div className={styles.navigation}>
                    <div className={styles.bordered}>
                        <img src={ellipseBorder} className={styles.ellipseBorder} alt="border"/>
                        <img src={ellipseBlack} className={styles.ellipseBlack} alt="black"/>
                    </div>
                    <img src={ellipse} className={styles.ellipse} alt="ellipse"/>
                    <img src={ellipse} className={styles.ellipse} alt="ellipse"/>
                    <img src={ellipse} className={styles.ellipse} alt="ellipse"/>
                    <img src={ellipse} className={styles.ellipse} alt="ellipse"/>
                </div>
            </div>
        </div>
    );
}

export default Section1;