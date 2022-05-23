import styles from "./HeaderHome.module.scss"
import homeebalo from "../../assets/img/homeeblo.png"

const HeaderHome = () => {
    return ( 
        <div className={styles.HeaderHome}>
            <div className="container">
                <div className={styles.Inner}>
                    <div className={styles.Left}>
                        <h1>
                            Hi, I am John, <br /> Creative Technologist
                        </h1>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                            Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <a href="/">Download Resume</a>
                    </div>

                    <div className={styles.Right}>
                        <img src={homeebalo} alt="" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default HeaderHome;