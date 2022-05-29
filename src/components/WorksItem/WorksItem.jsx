import styles from './WorksItem.module.scss';
import { Link } from 'react-router-dom';

const WorksItem = ({ title, date, type, descrip, id }) => {
  const imgs = [{ img: 'https://picsum.photos/246/180?random=1' }];

  return (
    <div className={styles.WorksItem}>
      <div className="container">
        <div className={styles.Inner}>
          <div className={styles.Left}>
            {imgs.map(img => (
              <>
                <img src={img.img} alt="" />
              </>
            ))}
          </div>

          <div className={styles.Right}>
            <div className={styles.Title}>
              <Link key={id} to={`/works/${id}`}>
                <h2>{title}</h2>
              </Link>
            </div>

            <div className={styles.DateNType}>
              <p className={styles.Date}>2020</p>
              <p className={styles.Type}>Type</p>
            </div>
            <div className={styles.Text}>
              <p>{descrip}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksItem;
