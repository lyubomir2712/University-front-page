import styles from './News.module.css';

import NewsImage1 from './../../assets/NewsImage1.jpeg'
import NewsImage2 from './../../assets/NewsImage2.jpeg'
import NewsImage3 from './../../assets/NewsImage3.jpeg'
import NewsImage4 from './../../assets/NewsImage4.png'

function News() {
    return (

        <div className={styles.newsSection}>
            <h2>Новини</h2>
            <div className={styles.newsContainer}>
                <a href={"#"}>
                    <div className={styles.new}>
                        <img src={NewsImage1} alt="degree picture"></img>
                        <hr/>
                        <p className={styles.cardTitle}>Китайска делегация посети Великотърновския
                            университет</p>

                    </div>
                </a>

                <a href={"#"}>
                    <div className={styles.new}>
                        <img src={NewsImage2} alt="degree picture"></img>
                        <hr/>
                        <p className={styles.cardTitle}>Международен летен семинар по български език и
                            култура</p>

                    </div>
                </a>

                <a href={"#"}>
                    <div className={styles.new}>
                        <img src={NewsImage3} alt="degree picture"></img>
                        <hr/>
                        <p className={styles.cardTitle}>ПРИЕМ МАГИСТЪР 2024 г.</p>

                    </div>
                </a>

                <a href={"#"}>
                    <div className={styles.new}>
                        <img src={NewsImage4} alt="degree picture"></img>
                        <hr/>
                        <p className={styles.cardTitle}>Придобиване на ПКС във Великотърновския
                            университет</p>

                    </div>
                </a>
            </div>
        </div>
    )
}

export default News;