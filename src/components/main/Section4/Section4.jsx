import styles from './Section4.module.css';
import photo1 from '../../../../src/images/Section4/1.png';
import photo2 from '../../../../src/images/Section4/2.png';
import photo3 from '../../../../src/images/Section4/3.png';
import photo4 from '../../../../src/images/Section4/4.png';
import photo41 from '../../../../src/images/Section4/4-1.png';
import photo5 from '../../../../src/images/Section4/5.png';
import photo6 from '../../../../src/images/Section4/6.png';
import photo7 from '../../../../src/images/Section4/7.png';
import photo8 from '../../../../src/images/Section4/8.png';
import photo9 from '../../../../src/images/Section4/9.png';
import photo10 from '../../../../src/images/Section4/10.png';
import photo11 from '../../../../src/images/Section4/11.png';
import photo12 from '../../../../src/images/Section4/12.png';



const Section4 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.headline}>Onze diensten</div>
            <div className={styles.smallHeadline}>
                Gun jezelf de gelegeheid om te ervaren wat onze passie en behandelingen voor je kunnen betekenen.
            </div>
            <div className={styles.photos}>
                <img src={photo1} alt="photo1"/>
                <img src={photo2} alt="photo2"/>
                <span className={styles.block3}>
                    <img src={photo3} alt="photo3"/>
                    <span className={styles.text3}>SPA ARRANGEMETEN</span>
                </span>
                <span className={styles.block4}>
                    <img src={photo4} alt="photo4"/>
                    <span className={styles.text4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lacus neque hendrerit feugiat nulla volutpat non sed platea...
                    </span>
                    <span className={styles.text44}>LOREM IPSUM</span>
                    <img src={photo41} className={styles.arrow} alt="photo41"/>
                </span>
                <span className={styles.block5}>
                    <img src={photo5} alt="photo5"/>
                    <span className={styles.text5}>PEDICURE</span>
                </span>
                <span className={styles.block6}>
                    <img src={photo6} alt="photo6"/>
                    <span className={styles.text6}>MANICURE</span>
                </span>
                <span className={styles.block7}>
                    <img src={photo7} alt="photo7"/>
                    <span className={styles.text7}>SUIKER EPILATIE</span>
                </span>
                <span className={styles.block8}>
                    <img src={photo8} alt="photo8"/>
                    <span className={styles.text8}>E-FIT / PERSONAL COACHING</span>
                </span>

                <img src={photo9} alt="photo9"/>
                <img src={photo10} alt="photo10"/>
                <span className={styles.block11}>
                    <img src={photo11} alt="photo11"/>
                    <span className={styles.text11}>ZWEMLESSEN</span>
                </span>
                <span className={styles.block12}>
                    <img src={photo12} alt="photo12"/>
                    <span className={styles.text12}>WORKSHOPS / AQUA PARTY'S</span>
                </span>
            </div>
        </div>
    );
}

export default Section4;