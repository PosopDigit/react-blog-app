import styles from './Contact.module.scss'

const Contact = () => {
    return ( 
        <div className={styles.Contact}>
            <div className='container'>
                <div className={styles.Title}>
                    <div className={styles.item}>
                        <h3>Name:</h3>
                        <p>John's Blog</p>
                    </div>
                    <div className={styles.item}>
                        <h3>Mail:</h3>
                        <p>blogger_john@gmail.com</p>
                    </div>
                    <div className={styles.item}>
                        <h3>Phone Number:</h3>
                        <p>8-908-898-70-02</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;