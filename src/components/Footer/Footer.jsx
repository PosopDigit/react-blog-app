import styles from './Footer.module.scss'

import fb from '../../assets/img/fb.svg'
import insta from '../../assets/img/insta.svg'
import link from '../../assets/img/link.svg'
import tw from '../../assets/img/tw.svg'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.social}>
                <img src={fb} alt="facebook" />
                <img src={insta} alt="instagram" />
                <img src={tw} alt="twitter" />
                <img src={link} alt="linkedin" />
            </div>
            <p>Copyright ©2020 All rights reserved </p>
        </div>
    );
}
 
export default Footer;