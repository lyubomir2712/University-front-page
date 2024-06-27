import Logo from './../../assets/LogoEdited.png'
import styles from './NavBar.module.css'
import LanguageIcon from './../../../public/LanguageIcon.svg'
import SearchIcon from './../../../public/SearchIcon.svg'


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
                <li><a href={"#"} ><img src={LanguageIcon} alt={"Search icon"}/></a></li>
                <li><a href={"#"} ><img src={SearchIcon} alt={"Search icon"}/></a></li>

            </ul>
        </nav>
    )
}

export default NavBar