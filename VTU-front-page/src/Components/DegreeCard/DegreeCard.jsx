import styles from "./DegreeCard.module.css";

function DegreeCard() {
    return (
        <div className={styles.card}>
            <img className={styles.cardImage} src="" alt="profile picture"></img>
            <h2 className={styles.cardTitle}>Бакалавър</h2>
            <p className={styles.cardText}>4 години</p>
        </div>
    )
}

export default DegreeCard;