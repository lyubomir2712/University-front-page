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
                    <li><img src={FacebookLogo} alt={"Facebook logo"}></img> Facebook</li>
                    <li><img src={XLogo} alt={"X logo"}></img> X</li>
                    <li><img src={InstagramLogo} alt={"Facebook logo"}></img> Instagram</li>
                    <li><img src={LinkedIn} alt={"Facebook logo"}></img> LinkedIn</li>
                    <li><img src={YoutubeLogo} alt={"Facebook logo"}></img> Youtube</li>
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
                <p>© 2024 Великотърновски университет &quot;Св. св. Кирил и Методий&quot; Всички права запазени Поверителност
                    и &quot;Бисквитки&quot; Карта
                    на
                    сайта.</p>
            </div>

        </div>
    )
}

export default Footer