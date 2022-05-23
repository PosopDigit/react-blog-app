import { Link } from 'react-router-dom';

import styles from './BlogItem.module.scss'

const BlogItem = ({ title, date, type, descrip, id }) => {
    return (
        <div className={styles.BlogItem}>
            <div className={styles.item__title}>
                <Link to={`/blog/${id}`}><h2>{title}</h2></Link>
            </div>
            <div className={styles.item__type}>
                <p className={styles.type__date}>{date}</p>
                <div className={styles.type__line}></div>
                <p className={styles.type__type}>{type}</p>
            </div>
            <div className={styles.descrip}>
                <p className={styles.descrip__text}>{descrip}</p>
            </div>
        </div>
    );
}

export default BlogItem;