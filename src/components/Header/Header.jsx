import styles from './Header.module.scss'

import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link to='/'><h1>John's Blog</h1></Link>
                </div>
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