import FeaturedWorksItem from '../FeaturedWorksItem/FeaturedWorksItem';
import styles from './FeaturedWorks.module.scss'


const FeaturedWorks = () => {
    return ( 
        <div className={styles.FeaturedWorks}>
            <div className='container'>
                <div className={styles.Inner}>
                    <div className={styles.Title}>
                    <h3 className={styles.titleN}>Featured works</h3> 
                    </div>
                
                <div className={styles.List}>
                    <FeaturedWorksItem/>
                    <FeaturedWorksItem/>
                    <FeaturedWorksItem/>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default FeaturedWorks;