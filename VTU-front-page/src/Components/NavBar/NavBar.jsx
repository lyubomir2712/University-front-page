import Logo from './../../assets/Logo.png'
import styles from './NavBar.module.css'

function NavBar(){
    return (
        <nav>
            <ul>
                <li><a href={"#"} className={styles.logo}>...</a></li>
                <li><a href={"#"} className={styles.link}>Home</a></li>
                <li><a href={"#"} className={styles.link}>About</a></li>
            </ul>
        </nav>
    )
}

export default NavBar