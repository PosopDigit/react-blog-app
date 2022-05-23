import styles from './Footer.module.scss'

import fb from '../../assets/img/fb.svg'
import insta from '../../assets/img/insta.svg'
import link from '../../assets/img/link.svg'
import tw from '../../assets/img/tw.svg'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.social}>
                <a href="/"><img src={fb} alt="facebook" /></a>
                <a href="/"><img src={insta} alt="instagram" /></a>
                <a href="/"><img src={tw} alt="twitter" /></a>
                <a href="/"><img src={link} alt="linkedin" /></a>
            </div>
            <p>Copyright ©2020 All rights reserved </p>
        </div>
    );
}
 
export default Footer;