import styles from './Section7.module.css';
import photo1 from '../../../../src/images/Section7/Photo1.png';
import photo2 from '../../../../src/images/Section7/Photo2.png';
import photo3 from '../../../../src/images/Section7/Photo3.png';
import photo4 from '../../../../src/images/Section7/Photo4.png';
import button1 from '../../../../src/images/Section7/Button1.png';
import button2 from '../../../../src/images/Section7/Button2.png';
import screen from '../../../../src/images/Section7/Screen.png';



const Section7 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.smallHeadline}>Blijf op de hoogte</div>
            <div className={styles.headline}>Volg ons via onze sociale kanalen</div>
            <div className={styles.text}>
                Krijg je graag al eens een voorsmaakje van hoe het er bij ons aan toe gaat?
                Volg ons op Facebook en Instagram en laat zeker iets van je horen!
            </div>
            <div className={styles.photos}>
                <div className={styles.images}>
                    <img src={photo1} alt="photo1"/>
                    <img src={photo2} alt="photo2"/>
                    <img src={photo3} alt="photo3"/>
                    <img src={photo4} alt="photo4"/>
                    <button className={styles.button1}><img src={button1} className={styles.button11} alt="button11"/></button>
                </div>
                <div className={styles.screenContainer}>
                    <img src={screen} alt="screen"/>
                    <button className={styles.button2}><img src={button2} alt="button2"/></button>
                </div>
            </div>
        </div>
    );
}

export default Section7;