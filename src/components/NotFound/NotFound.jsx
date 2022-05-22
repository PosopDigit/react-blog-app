import styles from './NotFound.module.scss'

const NotFound = () => {
    return (
        <div className={styles.NotFound}>
            <p className={styles.error}>404</p>
            <p className={styles.descrip}>Page Not Found</p>
        </div>
    );
}
 
export default NotFound;