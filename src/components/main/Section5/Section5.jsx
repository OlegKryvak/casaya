import styles from './Section5.module.css';
import photo from '../../../../src/images/Section5/Photo.png';
import image1 from '../../../../src/images/Section5/Image1.png';
import image2 from '../../../../src/images/Section5/Image2.png';
import image3 from '../../../../src/images/Section5/Image3.png';
import image4 from '../../../../src/images/Section5/Image4.png';
import image5 from '../../../../src/images/Section5/Image5.png';


const Section5 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textBlock}>
                <div className={styles.headline}>Onze producten</div>
                <div className={styles.text}>Onze missie bij Aveda is te zorgen voor de wereld waarin we leven,
                    van de producten die we maken tot de wijze waarop we iets teruggeven aan onze samenleving.
                    Bij Aveda streven we ernaar een voorbeeld te stellen voor milieuleiderschap en verantwoordelijkheid,
                    niet alleen in de wereld van de schoonheid, maar overal ter wereld.</div>
                <div className={styles.images}>
                    <img src={image5} alt="image5"/>
                    <img src={image3} alt="image3"/>
                    <img src={image1} alt="image1"/>
                    <img src={image4} alt="image4"/>
                    <img src={image2} alt="image2"/>
                </div>
            </div>
            <img src={photo} alt="photo1"/>
        </div>
    );
}

export default Section5;