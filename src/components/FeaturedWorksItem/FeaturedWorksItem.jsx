import styles from './FeaturedWorksItem.module.scss';

import { Link } from 'react-router-dom';

const FeaturedWorksItem = ({ title, date, type, descrip, id }) => {
  const imgs = [{ img: 'https://picsum.photos/300/200?random=1' }];
  return (
    <div className={styles.FeaturedWorksItem}>
      <div className="container">
        <div className={styles.Inner}>
          <div className={styles.Left}>
            {imgs.map(img => (
              <div key={id}>
                <img src={img.img} className={styles.img} alt="" />
              </div>
            ))}
          </div>

          <div className={styles.Right}>
            <div className={styles.Title}>
              <Link key={id} to={`/works/${id}`}><h2>{title}</h2></Link>
            </div>

            <div className={styles.DateNType}>
              <p className={styles.Date}>{date}</p>
              <p className={styles.Type}>{type}</p>
            </div>
            <div className={styles.Text}>
              <p>
                {descrip}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWorksItem;
