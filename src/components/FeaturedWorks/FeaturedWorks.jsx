import { useEffect, useState } from 'react';
import FeaturedWorksItem from '../FeaturedWorksItem/FeaturedWorksItem';
import styles from './FeaturedWorks.module.scss';

const FeaturedWorks = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  let features = posts.slice(0, 3)

  return (
    <div className={styles.FeaturedWorks}>
      <div className="container">
        <div className={styles.Inner}>
          <div className={styles.Title}>
            <h3 className={styles.titleN}>Featured works</h3>
          </div>

          <div className={styles.List}>
            {features.map(post => (
              <FeaturedWorksItem id={post.id} title={post.title} descrip={post.body} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWorks;
