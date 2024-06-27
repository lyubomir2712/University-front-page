import styles from './Footer.module.css'
import FacebookLogo from './../../../public/FacebookLogo.svg'
import InstagramLogo from './../../../public/InstagramLogo.svg'
import XLogo from './../../../public/XLogo.svg'
import YoutubeLogo from './../../../public/YoutubeLogo.svg'
import LinkedIn from './../../../public/LinkedInLogo.svg'



import BankLogo from './../../../public/BankLogo.svg'
import TelephoneLogo from './../../../public/TelephoneLogo.svg'
import EmailLogo from './../../../public/EmailLogo.svg'
import MapLogo from './../../../public/MapLogo.svg'


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

                <ul className={styles.Contacts}>
                    <li><img src={BankLogo} alt={"Bank logo"}/></li>
                    <li><img src={TelephoneLogo} alt={"Telephone logo"}/></li>
                    <li><img src={EmailLogo} alt={"Email logo"}/></li>
                    <li><img src={MapLogo} alt={"Map logo"}/></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer