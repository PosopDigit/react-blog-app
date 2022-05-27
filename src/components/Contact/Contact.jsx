import styles from './Contact.module.scss'

const Contact = () => {
    return ( 
        <div className={styles.Contact}>
            <div className='container'>
                <div className={styles.Title}>
                    <div className={styles.Name}> 
                        <h3>Name: <br />
                            Mail:  <br />
                            Phone number:  
                        </h3>
                    </div>
                    <div className={styles.Text}>
                        <h3>John's Blog <br />
                            blogger_john@gmail.com <br />
                            8-908-898-7002
                        </h3>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;