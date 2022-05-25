import { Outlet } from "react-router-dom";

import Header from "../Header/Header";
import Footer from '../Footer/Footer'

import styles from './Layout.module.scss'

const Layout = () => {
    return (
        <div className={styles.page}>
            <Header />
                <Outlet />
            <Footer />
        </div>
    );
}
 
export default Layout;