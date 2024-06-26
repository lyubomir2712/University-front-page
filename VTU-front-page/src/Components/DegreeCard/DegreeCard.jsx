import styles from "./DegreeCard.module.css";
import PhDhat from "./../../assets/PhD-hat.png"
import Laptop from "./../../../public/laptopLogo.webp"


function DegreeCard() {
    return (<div className={styles.cardContainer}>
            <div className={styles.card}>
                <img className={styles.cardImage} src={PhDhat} alt="degree picture"></img>
                <hr/>
                <h2 className={styles.cardTitle}>Бакалавърски програми</h2>
                <p className={styles.cardText}>4 години</p>
            </div>

            <div className={styles.card}>
                <img className={styles.cardImage} src={PhDhat} alt="degree picture"></img>
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