import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

import Styles from './Footer.module.css'

function Footer(){

    return(
       <footer className={Styles.footer}>
            <ul className={Styles.socialList}>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
            </ul>
            <p><span>Jamu</span> &copy; 2k22</p>
       </footer>
    )

}

export default Footer