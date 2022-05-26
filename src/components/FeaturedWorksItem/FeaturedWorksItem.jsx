import styles from './FeaturedWorksItem.module.scss'
import WorksImg from "../../assets/img/WorksImg.png"

const FeaturedWorksItem = () => {
    return ( 
        <div className={styles.FeaturedWorksItem}>
            <div className='container'>
                <div className={styles.Inner}>
                    <div className={styles.Left}>
                    <img src={WorksImg} alt="" />
                    </div>

                    <div className={styles.Right}>
                        <div className={styles.Title}>
                            <h3>Designing Dashboards</h3>
                        </div>

                        <div className={styles.DateNType}>
                            <p className={styles.Date}>2020</p>
                            <p className={styles.Type}>Dashboard</p>
                        </div>
                        <div className={styles.Text}>
                        <p> Amet minim mollit non deserunt ullamco
                         est sit aliqua dolor do amet sint.
                          Velit officia consequat duis enim
                           velit mollit. Exercitation veniam
                            consequat sunt nostrud amet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default FeaturedWorksItem;