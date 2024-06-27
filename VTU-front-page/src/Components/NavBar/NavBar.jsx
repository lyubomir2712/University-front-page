import Logo from './../../assets/LogoEdited.png'
import styles from './NavBar.module.css'

function NavBar(){
    return (
        <nav>
            <ul>
                <li><a href={"#"}>
                    <img className={styles.logo} alt="logo image" src={Logo}/></a></li>

                <li><a href={"#"} className={styles.link}>ВТУ</a></li>
                <li><a href={"#"} className={styles.link}>Центрове</a></li>
                <li><a href={"#"} className={styles.link}>Прием</a></li>
                <li><a href={"#"} className={styles.link}>Студенти</a></li>
                <li><a href={"#"} className={styles.link}>Научна дейност</a></li>
                <li><a href={"#"} className={styles.link}>Международна дейност</a></li>
                <li><a href={"#"} className={styles.link}>Кариери и завършили</a></li>
                <li><a href={"#"} className={styles.link}>Контакти</a></li>
                <li><a href={"#"} className={styles.link}>En</a></li>

            </ul>
        </nav>
    )
}

export default NavBar