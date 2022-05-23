import styles from './LastBlogItem.module.scss'
import { Link } from 'react-router-dom';

const LastBlogItem = ({ title, date, type, descrip, id }) => {
    return (
        <div className={styles.LastBlogItem}>
            <div className={styles.item__title}>
                <Link to={`/blog/${id}`}><h2>{title}</h2></Link>
            </div>
            <div className={styles.item__type}>
                <p className={styles.type__date}>20 Feb 2020</p>
                <div className={styles.type__line}></div>
                <p className={styles.type__type}>Design, Pattern</p>
            </div>
            <div className={styles.descrip}>
                <p className={styles.descrip__text}>{descrip}</p>
            </div>
        </div>
    );
}
 
export default LastBlogItem;