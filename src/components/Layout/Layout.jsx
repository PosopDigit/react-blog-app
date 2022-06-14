import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from '../Footer/Footer'

import styles from './Layout.module.scss'
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Layout = () => {
    return (
        <div className={styles.page}>
            <BurgerMenu />
            <Header />
                <Outlet />
            <Footer />
        </div>
    );
}
 
export default Layout;