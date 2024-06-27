import styles from './Footer.module.css'


function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.upperFooter}>
                <ul className={styles.upperFooterList}>
                    <li>Facebook</li>
                    <li>X</li>
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                    <li>Youtube</li>
                </ul>
            </div>
            <div className={styles.lowerFooter}>

            </div>
        </div>
    )
}

export default Footer