import styles from './Header.module.scss'

import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.inner}>
                    <NavLink className={styles.inner__btn} to="/">Home</NavLink>
                    <NavLink className={styles.inner__btn} to="/works">Works</NavLink>
                    <NavLink className={styles.inner__btn} to="/blog">Blog</NavLink>
                    <NavLink className={styles.inner__btn} to="/contact">Contact</NavLink>
                </div>
            </div>
        </div>
    );
}
 
export default Header;