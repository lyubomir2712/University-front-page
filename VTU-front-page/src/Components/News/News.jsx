import styles from './News.module.css';


function News() {
    return (<><h2>Събития</h2>
            <div className={styles.newsContainer}>
                <ul className={styles.newsList}>
                    <span className={styles.dateSpan}>1</span>
                    <span className={styles.dateSpan}>2</span>
                    <span className={styles.dateSpan}>3</span>
                </ul>


                <ul className={styles.newsList}>
                    <li>item 1</li>

                    <li>item 2</li>

                    <li>item 3</li>
                </ul>

                <ul className={styles.newsList}>
                    <span className={styles.dateSpan}>1</span>
                    <span className={styles.dateSpan}>2</span>
                    <span className={styles.dateSpan}>3</span>
                </ul>
                
                <ul className={styles.newsList}>
                    <span className={styles.dateSpan}>4</span>
                    <li>item 4</li>
                    <span className={styles.dateSpan}>5</span>
                    <li>item 5</li>
                    <span className={styles.dateSpan}>6</span>
                    <li>item 6</li>
                </ul>
            </div>
        </>
    )
}

export default News;