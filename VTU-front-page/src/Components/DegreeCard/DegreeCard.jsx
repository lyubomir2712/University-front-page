import styles from "./DegreeCard.module.css";
import PhDhat from "../../assets/PhD-yellow-hat.png"
import MastersHat from './../../assets/Masters-purple-hat.png'
import BachelorHat from './../../assets/Bachelor-hat-blue.png'
import Laptop from "../../assets/Laptop-logo.png"


function DegreeCard() {
    return (<div className={styles.cardContainer}>
            <div className={styles.card}>
                <img className={styles.cardImage} src={BachelorHat} alt="degree picture"></img>
                <hr/>
                <h2 className={styles.cardTitle}>Бакалавърски програми</h2>
                <p className={styles.cardText}>4 години</p>
            </div>

            <div className={styles.card}>
                <img className={styles.cardImage} src={MastersHat} alt="degree picture"></img>
                <hr/>
                <h2 className={styles.cardTitle}>Магистърски програми</h2>
                <p className={styles.cardText}>1.5 години</p>
            </div>

            <div className={styles.card}>
                <img className={styles.cardImage} src={PhDhat} alt="degree picture"></img>
                <hr/>
                <h2 className={styles.cardTitle}>Докторски програми</h2>
                <p className={styles.cardText}>3 години</p>
            </div>

            <div className={styles.card}>
                <img className={styles.cardImage} src={Laptop} alt="degree picture"></img>
                <hr/>
                <h2 className={styles.cardTitle}>Дистанционно обучение</h2>
                <p className={styles.cardText}>4 години</p>
            </div>
        </div>
    )
}

export default DegreeCard;