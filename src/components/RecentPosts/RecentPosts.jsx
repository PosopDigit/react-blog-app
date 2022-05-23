import { Link } from 'react-router-dom';
import LastBlogItem from '../LastBlogItem/LastBlogItem';
import styles from './RecentPosts.module.scss';

const RecentPosts = () => {
  return (
    <div className={styles.RecentPosts}>
      <div className="container">
        <div className={styles.sec__header}>
          <h3>Recent posts</h3>
          <Link to="/blog">View all</Link>
        </div>
        <div className={styles.sec__list}>
          <LastBlogItem
            key={1}
            title="UI Interactions of the week"
            date="12 feb 2020"
            type="Express, Handlebars"
            descrip="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
          <LastBlogItem
            key={2}
            title="UI Interactions of the week"
            date="12 feb 2020"
            type="Express, Handlebars"
            descrip="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          />
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
