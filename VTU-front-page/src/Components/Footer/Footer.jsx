import styles from './Footer.module.css'
import FacebookLogo from '../../../public/FacebookIcon.svg'
import InstagramLogo from '../../../public/InstagramIcon.svg'
import XLogo from '../../../public/XIcon.svg'
import YoutubeLogo from '../../../public/YoutubeIcon.svg'
import LinkedIn from '../../../public/LinkedInIcon.svg'



import BankLogo from '../../../public/BankIcon.svg'
import TelephoneLogo from '../../../public/TelephoneIcon.svg'
import EmailLogo from '../../../public/EmailIcon.svg'
import MapLogo from '../../../public/MapIcon.svg'


function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.upperFooter}>
                <ul className={styles.upperFooterList}>
                    <li><a href={"#"}><img src={FacebookLogo} alt={"Facebook logo"}></img> Facebook</a></li>
                    <li><a href={"#"}><img src={XLogo} alt={"X logo"}></img> X</a></li>
                    <li><a href={"#"}><img src={InstagramLogo} alt={"Facebook logo"}></img> Instagram</a></li>
                    <li><a href={"#"}><img src={LinkedIn} alt={"Facebook logo"}></img> LinkedIn</a></li>
                    <li><a href={"#"}><img src={YoutubeLogo} alt={"Facebook logo"}></img> Youtube</a></li>
                </ul>
            </div>


            <div className={styles.lowerFooter}>
                <table className={styles.Contacts}>
                    <tr>
                        <td><img src={BankLogo} alt={"Bank logo"}/> Ул. „Теодосий Търновски“ №2, Велико Търново 5003
                        </td>
                    </tr>
                    <tr>
                        <td><img src={TelephoneLogo} alt={"Telephone logo"}/> О62 / 618 206</td>
                    </tr>
                    <tr>
                        <td><img src={EmailLogo} alt={"Email logo"}/> rector@live.uni-vt.bg</td>
                    </tr>
                    <tr>
                        <td><img src={MapLogo} alt={"Map logo"}/> Карта</td>
                    </tr>
                </table>
                <p className={styles.AdditionsText}>© 2024 Великотърновски университет &quot;Св. св. Кирил и Методий&quot; | &nbsp; <a href={"#"}> Всички права запазени Поверителност
                    и &quot;Бисквитки&quot;</a> &nbsp; | &nbsp; <a href={"#"}> Карта на
                    сайта.</a></p>
            </div>

        </div>
    )
}

export default Footer